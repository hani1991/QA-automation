var config = require("../config/config.json");

casper.options.viewportSize = config.app.viewportSize;
casper.options.verbose = config.app.verbose;
casper.options.logLevel = config.app.logLevel;
casper.options.waitTimeout = config.app.waitTimeout;

var feature = casper.cli.get('feature');
if(feature){
	casper.echo("Started testing for the feature: " + feature +"\n");
}else{
	casper.echo("It seems, you have not given any option.");
}

switch (feature) {
    	
    	case "login":
		casper.test.begin('Verify login functionality from home page with all valid and invalid scenarios ', function(test) {
			var forumLogin = require("./testsuite/main/login.js");
			forumLogin.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
    	
    	case "forgotPassword":
		casper.test.begin('Verify forgot password functionality from home page with all valid and invalid scenarios ', function(test) {
			var forgotPassword = require("./testsuite/main/forgotPassword.js");
			forgotPassword.featureTest(casper, casper.test);
			casper.run(function(){
				test.done();
			});
		});
	break;
	
	default:
		casper.echo("Please select any feature from options given below. For ex: casperjs automation.js <option>.\n"); 
        	casper.echo("Options:");
		casper.echo("	login");
        	casper.echo(" forgotPassword");
		casper.exit();
};



