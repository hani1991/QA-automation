//This script is responsible for executing any external script/process. 
'use strict';
require('shelljs/global');

var fs = require('fs');
var mailServices = require('./mailServices.js');
var createStatus = require('./createStatus.js');
var executorServices = module.exports = {};

//It executes job. Take job details as argument, executed the job and initiates mail sending.
executorServices.executeJob = function(commitDetails, callback){
	//Executing gitdeploy.sh to update Forum's code for given branch name
//if(commitDetails.branchName == "automation"){
	console.log("Starting execution for commitDetails : "+commitDetails);
	if(commitDetails.branchName){
		console.log("Executing gitdeploy.sh for "+commitDetails.branchName);
		if (exec("/home/automation/gitdeploy.sh -p ssh "+commitDetails.branchName).code !== 0) {
			console.log('Error: gitdeploy.sh failed');
			return callback();
		}
		
		//Executing automation test script
		console.log("Executing Automation script");
		exec("/etc/automation/bin/automation.sh", function(code, stdout, stderr) {
			console.log('Exit code:', code);
			console.log('Program output:', stdout);
			console.log('Program stderr:', stderr);
			var testResult = stdout;
			var failTestResult = stderr;
			var automationLogFile = '/etc/automation/log/automation.txt';
			var failLogFile = '/etc/automation/log/fail.txt';
			fs.stat(failLogFile, function(err, fileStat) {
				if (err) {
					if (err.code == 'ENOENT') {
						console.log('fail.log does not exist.');
					}
					return callback();
				} else {
					if (fileStat) {
						var fileSize = fileStat.size;
						console.log("fail.txt size: "+fileSize);
						console.log("beta value : "+commitDetails.beta);
						if(commitDetails.beta == 0 && commitDetails.branchName == 'automation') {
							if(fileSize != 0) {
								var descriptionRes = 0;
								console.log('stderr : '+stderr);
								failTestResult = stderr.split(' ');
								console.log('in is condition');
								for(var i=0; i<failTestResult.length;i++) {
									console.log('in for loop');
									if(failTestResult[i+1]=='tests') {
										console.log('no of failed test case : '+failTestResult[i]);
										descriptionRes = parseInt(descriptionRes)+parseInt(failTestResult[i]);
									}
									var result = descriptionRes;
								}
								createStatus.failure(commitDetails, result, function(status) {
									console.log('in createStatus');
									console.log('state of failure : '+status);
								});
								//Adding test result with commit details
								commitDetails['testResult'] = testResult;
								//Addling log files as attachments
								commitDetails['attachments'] = [
									{   
								    		path: automationLogFile
									},
									{   
								    		path: failLogFile
									}
								];
								//initiating mail sending to committer
								mailServices.sendMail(commitDetails, function(err){
									if(err)
										console.error("error occurred while sending email: "+err);
									else
										console.log("Mail sent successfully.");
									//Deleting commit specific log files
									fs.unlinkSync(automationLogFile);
									fs.unlinkSync(failLogFile);
									console.log("Commit specific log files deleted.");
									return callback();
								});
							}else{	
								createStatus.success(commitDetails, function(status) {
									console.log('state of success : '+status);
								});
								//Deleting commit specific log files
								fs.unlinkSync(automationLogFile);
								fs.unlinkSync(failLogFile);
								return callback();
							}
						} else {
							console.log('you are not allowed to set the status of the branch.');
						}
					}else{
						return callback();
					}
				}
			});
		});
	}else{
		return callback();
	}

/*}else{
	return callback();
}*/
};
