//This script is responsible for executing any external script/process. 
'use strict';
var fs = require('fs');
var mailServices = require('./mailServices.js');
var execSync = require('child_process').execSync;
var executorServices = module.exports = {};

//Execute the script in synchronous way and returns stdout as the output
executorServices.execute = function(script){
	var scriptOutput = execSync(script);
	console.log('scriptOutput : ' + scriptOutput);
	return scriptOutput;
};

//It executes job. Take job details as argument, executed the job and initiates mail sending.
executorServices.executeJob = function(commitDetails, callback){
	//Executing gitdeploy.sh to update Forum's code for given branch name
//if(commitDetails.branchName == "automation"){
	console.log("Executing gitdeploy.sh");
	var gitDeployResult = executorServices.execute("sudo bash -c '/home/monika/gitdeploy.sh "+commitDetails.branchName+ "'");
	//Executing automation test script
	var testResult = executorServices.execute("sudo bash -c '/home/monika/project/git/QA-automation/forumAutomation/bin/automation.sh'");
	//Adding test result with commit details
	commitDetails['testResult'] = testResult;
	//Addling log files as attachments
	commitDetails['attachments'] = [
                {   
            		path: '/home/monika/project/git/QA-automation/forumAutomation/log/automation.log'
        	},
		{   
            		path: '/home/monika/project/git/QA-automation/forumAutomation/log/fail.log'
        	}
	];
	//initiating mail sending to committer
	mailServices.sendMail(commitDetails, function(err){
		if(err)
			console.error("error occurred while sending email: "+err);
		else
			console.log("Mail sent successfully.");
		//Deleting commit specific log files
		fs.unlinkSync('/home/monika/project/git/QA-automation/forumAutomation/log/automation.log');
		fs.unlinkSync('/home/monika/project/git/QA-automation/forumAutomation/log/fail.log');
		console.log("Commit specific log files deleted.");
		return callback();
	});
/*}else{
	return callback();
}*/
};
