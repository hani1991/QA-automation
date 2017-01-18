var config = require("../config/config.json");
casper.options.viewportSize = config.app.viewportSize;
casper.options.verbose = config.app.verbose;
casper.options.logLevel = config.app.logLevel;
casper.options.waitTimeout = config.app.waitTimeout;
var jsErrorCount = 0;

var feature = casper.cli.get('feature');
if(feature){
	casper.echo("Started testing for the feature: " + feature +"\n",'INFO');
}else{
	casper.echo("It seems, you have not given any option.");
}

switch (feature) {
    	
    	case "login":
		casper.test.begin('Verify login functionality from home page with all valid and invalid scenarios ', function(test) {
			var forumLogin = require("./testsuite/main/login.js");
			
			forumLogin.featureTest(casper, casper.test);
			casper.run(function(){
				if(forumLogin.errors.length) {
					casper.echo(forumLogin.errors.length+' javaScript errors found', 'ERROR');
					jsErrorCount = jsErrorCount + forumLogin.errors.length;
				}else {
					casper.echo(forumLogin.errors.length+' javascript errors found', 'INFO');
				}
				test.done();
			});
		});
		
	break;
		
    	case "forgotPassword":
		casper.test.begin('Verify forgot password functionality from home page with all valid and invalid scenarios ', function(test) {
			var forgotPassword = require("./testsuite/main/forgotPassword.js");
			forgotPassword.featureTest(casper, casper.test);
			casper.run(function(){
				if(forgotPassword.errors.length) {
					casper.echo(forgotPassword.errors.length+' errors found', 'ERROR');
					jsErrorCount = jsErrorCount + forgotPassword.errors.length;
				}else {
					casper.echo(forgotPassword.errors.length+' javascript errors found', 'INFO');
				}
				test.done();
			});
		});
	break;
    		
	case "backEndRegistration":
		casper.test.begin('BACK END REGISTRATION TEST', function(test) {
			var backEndRegister = require("./testsuite/main/backEndRegistration.js");
			backEndRegister.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
				test.assert(true);
			});
		});
	break;
    		
	case "register":
		casper.test.begin('REGISTRATION TEST', function(test) {
			var forumRegister = require("./testsuite/main/register.js");
			forumRegister.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
				test.assert(true);
			});
		});
	break;
	
	case "inContextLogin":
		casper.test.begin('Verify inContext Login functionlity',function(test){
			var inContextLogin=require("./testsuite/main/inContextLogin.js");
			inContextLogin.featureTest(casper,casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
	
	case "thumpsUpDown":
		casper.test.begin('Verify thumps up and down functionality from home page with all valid and invalid scenarios ', function(test) {
			var thumpsUpDown = require("./testsuite/main/thumpsUpDown.js");
			thumpsUpDown.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
     
	case "postEventMemberApproval":
		casper.test.begin('Verify post, Event and Member Approval functionality from home page with all valid and invalid scenarios ', function(test) {
			var postEventMemberApproval = require("./testsuite/main/postEventMemberApproval.js");
			postEventMemberApproval.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
	
	case "privateMessage":
		casper.test.begin('Verify privateMessage functionality from home page with all valid and invalid scenarios ', function(test) {
			var privateMessage = require("./testsuite/main/privateMessage.js");
			privateMessage.featureTest(casper, casper.test);
			casper.run(function(){
				if(privateMessage.errors.length) {
					casper.echo(privateMessage.errors.length+' errors found', 'ERROR');
					jsErrorCount = jsErrorCount + privateMessage.errors.length;
				}else {
					casper.echo(privateMessage.errors.length+' javascript errors found', 'INFO');
				}
				test.done();
			});
			
		});
	break;
	
	default:
		casper.echo("Please select any feature from options given below. For ex: casperjs automation.js <option>.\n"); 
        	casper.echo("Options:");
        	casper.echo("login");
        	casper.echo("forgotPassword");
        	casper.echo("backEndRegistration");
		casper.echo("register");
		casper.echo("inContextLogin");
        	casper.echo("thumpsUpDown");
        	casper.echo("privateMessage");
        	casper.echo("postEventMemberApproval");
		casper.exit();
};



