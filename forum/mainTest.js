var config = require("./config/config.json");

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
        casper.test.begin('Verify login functionality from home page with all valid and invalid scenarios ',6, function(test) {
		var forumLogin = require("./testsuite/forum_login.js");
		forumLogin.featureTest(casper, casper.test);
		casper.run(function(){
			test.done();
		});
	});
        break;
    case "register":
    	casper.test.begin('REGISTRATION TEST', function(test) {
		var forumRegister = require("./testsuite/register.js");
		forumRegister.featureTest(casper, test);
		casper.run(function(){
			test.done();
			test.assert(true);
		});
	});
        break;
    case "newtopic":
        
        break;
    case "postreply":
        
        break;
	case "forgotpassword":
        casper.test.begin('Verify forgot your password functionality from home page ', function(test) {
		var forumLogin = require("./testsuite/forgotPassword.js");
		forumLogin.featureTest(casper, casper.test);
		casper.run(function(){
			test.done();
		});
	});
        break;
	case "calander" :
		 casper.test.begin('Verify calander functionlity ', function(test) {
		 var calander = require("./testsuite/calender.js");
		 calander.featureTest(casper, casper.test);
		 casper.run(function(){
			test.done();
		 });
	});
        break;	
    default:
	casper.echo("Please select any feature from options given below. For ex: casperjs main.js <option>.\n"); 
        casper.echo("Options:");
	casper.echo("	register");
	casper.echo("	login");
	casper.echo("	newtopic");
	casper.echo("	postreply\n");
	casper.echo("Relevant test data has to be fed in JSON format in files placed for each feature in '<current directory>/testData/'.");
	casper.exit();
};



