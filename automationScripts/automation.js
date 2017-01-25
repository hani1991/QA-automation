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
		casper.test.begin('Verify inContext Login functionlity', function(test) {
			var inContextLogin=require("./testsuite/main/inContextLogin.js");
			inContextLogin.featureTest(casper,casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;

	case "loginByPrivacyOption":
		casper.test.begin('Verify Login page on Forum by enabling Privacy Private  option from backend' , function(test) {
			var loginByPrivacyOption=require("../testsuite/main/loginByPrivacyOption.js");
			loginByPrivacyOption.featureTest(casper,casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
	
	case "profilePage":
		casper.test.begin('Verify profile page Message button for own profile page ' , function(test) {
			var profilePage=require("../testsuite/main/profilePage.js");
			profilePage.featureTest(casper,casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;

	case "upload" :
		casper.test.begin('******Verify upload Image**********' , function(test) {
			var upload=require("../testsuite/main/upload.js");
			upload.featureTest(casper,casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;	
		
	case "deletePost" :
		casper.test.begin('******Verify by Delete others topic/post as admin**********' , function(test) {
			var deletePost=require("../testsuite/main/deletePost.js");
			deletePost.featureTest(casper,casper.test);
			casper.run(function(){
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
		casper.echo("loginByPrivacyOption");
		casper.exit();
};



