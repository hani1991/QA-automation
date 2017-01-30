/***These are the function which has been called in postEventMemberApproval.js and also will be used in other js file as per requirement**********/

'use strict';
var json = require('../../testdata/combinationOfSubCategoryAndGroupPermissions.json');
var config = require('../../../config/config.json');
var combinationOfSubCategoryAndGroupPermissionsMethod = require('../methods/combinationOfSubCategoryAndGroupPermissions.js');
var registerMethod = require('../methods/register.js');
var forumLoginMethod = require('../methods/login.js');
var privateMessageMethod = require('../methods/privateMessage.js');
var backEndForumRegisterMethod = require('../methods/backEndRegistration.js');
var wait = require('../wait.js');
var combinationOfSubCategoryAndGroupPermissionsTestcases = module.exports = {};

// method to test all backend setting
combinationOfSubCategoryAndGroupPermissionsTestcases.toTestmethods = function() {
	casper.thenOpen(config.backEndUrl, function() {
		combinationOfSubCategoryAndGroupPermissionsMethod.goToSubCategoryPermission(casper, function(err) {
			if(!err) {
				casper.echo('Disable Approve New Event functionality method called ','INFO');
			}
		});
	});
};

// method to verify with category cat1
combinationOfSubCategoryAndGroupPermissionsTestcases.verifyWithCategory = function() {
	casper.thenOpen(config.url, function() {
		//login with registerd user
		casper.echo('Title of the page :' +casper.getTitle(), 'INFO');
		forumLoginMethod.loginToApp(json["RegisteredUserLogin"].username, json["RegisteredUserLogin"].password, casper, function(err) {
			if(!err) {
				wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
					if(isExists) {
						casper.echo('User has been successfuly login to application with admin user', 'INFO');
						wait.waitForElement('ul.nav.nav-tabs li:nth-child(2) a', casper,function(err, isExists) {
							if(isExists) {
								casper.test.assertExists('ul.nav.nav-tabs li:nth-child(2) a','Category link found');
								casper.click('ul.nav.nav-tabs li:nth-child(2) a');
								wait.waitForElement('li[id^="forum_"]', casper,function(err, isExists) {
									if(isExists) {
										casper.test.assertExists('li#forum_199641 a' ,'cat1 visible on category listing page','INFO');
									}else{
										casper.echo('cat1 not visible on category listing page','ERROR');
									}
								});        
							}else{
								casper.echo('Categories not Found','ERROR');
							}
						});
					} else {
						casper.echo('User not logged in','ERROR');	
					}
				});
			}else {
				casper.echo('Admin user not logged in', 'ERROR');
			}
		});
	});
};

// method to verify with sub-category cat1a
combinationOfSubCategoryAndGroupPermissionsTestcases.verifyWithSubCategory = function() {
	casper.thenOpen(config.url, function() {
		//login with registerd user
		casper.echo('Title of the page :' +casper.getTitle(), 'INFO');
		forumLoginMethod.loginToApp(json["RegisteredUserLogin"].username, json["RegisteredUserLogin"].password, casper, function(err) {
			if(!err) {
				wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
					if(isExists) {
						casper.echo('User has been successfuly login to application with admin user', 'INFO');
						wait.waitForElement('ul.nav.nav-tabs li:nth-child(2) a', casper,function(err, isExists) {
							if(isExists) {
								casper.test.assertExists('ul.nav.nav-tabs li:nth-child(2) a','Category link found');
								casper.click('ul.nav.nav-tabs li:nth-child(2) a');
								wait.waitForElement('li[id^="forum_"]', casper,function(err, isExists) {
									if(isExists) {
										casper.test.assertExists('li#forum_199641 a' ,'cat1 visible on category listing page','INFO');
										casper.click('li#forum_199641 a');
										wait.waitForElement('div#category_list', casper,function(err, isExists) {
											if(isExists) {
												casper.test.assertExists('li#forum_199642 a' ,'cat1a visible','INFO');
											}else{
												casper.echo('cat1a not visible','ERROR');
											}
										}); 
									}else{
										casper.echo('cat1 not visible on category listing page','ERROR');
									}
								});        
							}else{
								casper.echo('Categories not Found','ERROR');
							}
						});
					} else {
						casper.echo('User not logged in','ERROR');	
					}
				});
			}else {
				casper.echo('Admin user not logged in', 'ERROR');
			}
		});
	});
};

// method to verify with the private sub-category cat1a
combinationOfSubCategoryAndGroupPermissionsTestcases.verifyWithPrivateSubCategory = function() {
	casper.thenOpen(config.url, function() {
		//login with registerd user
		casper.echo('Title of the page :' +casper.getTitle(), 'INFO');
		forumLoginMethod.loginToApp(json["RegisteredUserLogin"].username, json["RegisteredUserLogin"].password, casper, function(err) {
			if(!err) {
				wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
					if(isExists) {
						casper.echo('User has been successfuly login to application with admin user', 'INFO');
						wait.waitForElement('ul.nav.nav-tabs li:nth-child(2) a', casper,function(err, isExists) {
							if(isExists) {
								casper.test.assertExists('ul.nav.nav-tabs li:nth-child(2) a','Category link found');
								casper.click('ul.nav.nav-tabs li:nth-child(2) a');
								wait.waitForElement('li[id^="forum_"]', casper,function(err, isExists) {
									if(isExists) {
										casper.test.assertExists('li#forum_199641 a' ,'cat1 visible on category listing page','INFO');
										casper.click('li#forum_199641 a');
										wait.waitForElement('div#category_list', casper,function(err, isExists) {
											if(isExists) {
												casper.test.assertExists('li#forum_199642 a' ,'cat1a visible','INFO');
												casper.click('li#forum_199642 a');
											}else{
												casper.echo('cat1a not visible','ERROR');
											}
										}); 
									}else{
										casper.echo('cat1 not visible on category listing page','ERROR');
									}
								});        
							}else{
								casper.echo('Categories not Found','ERROR');
							}
						});
					} else {
						casper.echo('User not logged in','ERROR');	
					}
				});
			}else {
				casper.echo('Admin user not logged in', 'ERROR');
			}
		});
	});
};

// method to verify with the parent category cat1
combinationOfSubCategoryAndGroupPermissionsTestcases.verifyWithParentCategory = function() {
	casper.thenOpen(config.url, function() {
		//login with registerd user
		casper.echo('Title of the page :' +casper.getTitle(), 'INFO');
		forumLoginMethod.loginToApp(json["RegisteredUserLogin"].username, json["RegisteredUserLogin"].password, casper, function(err) {
			if(!err) {
				wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
					if(isExists) {
						casper.echo('User has been successfuly login to application with admin user', 'INFO');
						wait.waitForElement('ul.nav.nav-tabs li:nth-child(2) a', casper,function(err, isExists) {
							if(isExists) {
								casper.test.assertExists('ul.nav.nav-tabs li:nth-child(2) a','Category link found');
								casper.click('ul.nav.nav-tabs li:nth-child(2) a');
								wait.waitForElement('li[id^="forum_"]', casper,function(err, isExists) {
									if(isExists) {
										casper.test.assertExists('li#forum_199641 a' ,'cat1 visible on category listing page','INFO');
									}else{
										casper.echo('cat1 not visible on category listing page','ERROR');
									}
								});        
							}else{
								casper.echo('Categories not Found','ERROR');
							}
						});
					} else {
						casper.echo('User not logged in','ERROR');	
					}
				});
			}else {
				casper.echo('Admin user not logged in', 'ERROR');
			}
		});
	});
};

// method to verify start new topic button with the sub-category cat1a
combinationOfSubCategoryAndGroupPermissionsTestcases.verifyWithNewTopicButtonForSubCategory = function() {
	casper.thenOpen(config.url, function() {
		//login with registerd user
		casper.echo('Title of the page :' +casper.getTitle(), 'INFO');
		forumLoginMethod.loginToApp(json["RegisteredUserLogin"].username, json["RegisteredUserLogin"].password, casper, function(err) {
			if(!err) {
				wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
					if(isExists) {
						casper.echo('User has been successfuly login to application with admin user', 'INFO');
						wait.waitForElement('ul.nav.nav-tabs li:nth-child(2) a', casper,function(err, isExists) {
							if(isExists) {
								casper.test.assertExists('ul.nav.nav-tabs li:nth-child(2) a','Category link found');
								casper.click('ul.nav.nav-tabs li:nth-child(2) a');
								wait.waitForElement('li[id^="forum_"]', casper,function(err, isExists) {
									if(isExists) {
										casper.test.assertExists('li#forum_199641 a' ,'cat1 visible on category listing page','INFO');
									}else{
										casper.echo('cat1 not visible on category listing page','ERROR');
									}
								});        
							}else{
								casper.echo('Categories not Found','ERROR');
							}
						});
					} else {
						casper.echo('User not logged in','ERROR');	
					}
				});
			}else {
				casper.echo('Admin user not logged in', 'ERROR');
			}
		});
	});
};
