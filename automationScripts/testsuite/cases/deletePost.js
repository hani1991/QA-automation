//----- This js file covers all the upload functionality on forum Frontend---------//
var config = require('../../../config/config.json');
var json = require('../../testdata/inContextLogin.json');
var inContextLoginMethod = require('../methods/inContextLogin.js');
var loginPrivacyOptionMethod = require('../methods/loginByPrivacyOption.js');
var deletePostMethod = require('../methods/deletePost.js');

var wait=require('../wait.js');
var utils=require('../utils.js');
deletePostTests = module.exports = {};

//Verify by delete one topic -selecting by check box 
deletePostTests.deletePostDeleteTopic=function(){
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 1               ' ,'INFO');	
		casper.echo('***********Verify by delete one topic -selecting by check box ************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]')	
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists) {

												casper.click('input[name="id"]');
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
													casper.click('i.glyphicon.glyphicon-trash');
													casper.then(function() {
														inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
														});
													});	
												});
											}
										});
									}

								});
								
							}


						});
					}
				});
			}
		});
	});
};

//Verify by delete all topic-selecting by check box 
deletePostTests.deletePostAllTopic=function(){
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 3             ' ,'INFO');	
		casper.echo('***********Verify by delete all topic-selecting by check box  ************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]')	
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists) {

												casper.click('input[name="allbox"]');
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
													casper.click('i.glyphicon.glyphicon-trash');
													casper.wait(4000 , function(){
														casper.capture('2.png');
														casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
															});
														});	

													});
												});
											}
										});
									}

								});
								
							}


						});
					}
				});
			}
		});
	});	
};

//Verify by delete multiple topic-selecting by check box 
deletePostTests.deletePostMultiple=function(){
	//create topic method
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 2             ' ,'INFO');	
		casper.echo('***********Verify by delete multiple topic-selecting by check box************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]')	
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists) {

												casper.click('input[name="id"]');
												casper.click('ul li:nth-child(2) span:nth-child(2) span:nth-child(1) input');
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
													casper.click('i.glyphicon.glyphicon-trash');
													casper.wait(4000 , function(){
														casper.capture('2.png');
														casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
															});
														});	

													});
												});
											}
										});
									}

								});
								
							}


						});
					}
				});
			}
		});
	});	
};

//verify with delete topic-by drop down of the topic
deletePostTests.deleteTopicDropDown=function(){
	//create topic method
	casper.thenOpen(config.url , function(){
		casper.echo('-----------New topic created Method called-------------' , 'INFO');
			
		inContextLoginMethod.loginToApp(json['validInfos'].username, json['validInfos'].password, casper, function(err) {
			if (err) {
				casper.echo("Error occurred in callback user not logged-in", "ERROR");	
			}else {
				casper.echo('Processing to Login on forum.....','INFO');
				casper.waitForSelector('form[name="posts"] a.topic-title' , function success(){
					casper.test.assertExists('form[name="posts"] a.topic-title','Topic found');
					casper.click('span.topic-content a');
					wait.waitForElement('a.pull-right.btn.btn-uppercase.btn-primary' , casper , function(err , isExists){
						if(isExists) {
							casper.click('a.pull-right.btn.btn-uppercase.btn-primary');
						}
					});						
				},function fail() {
					casper.echo('Failed block called','INFO');
					wait.waitForElement('li.pull-right.user-panel', casper,function(err, isExists) {
						if(isExists) {
							//method to create a new topic
							uploadMethods.startTopic(json['newTopic'], casper, function(err) {
								if(!err) {
									casper.echo('new topic created', 'INFO');
								}else {
									casper.echo('Topic not created', 'INFO');
								}
							});
						} else {
							casper.echo('User icon not found','ERROR');	
						}
					});
				});
				casper.then(function() {
					inContextLoginMethod.logoutFromApp(casper, function(err){
						if (!err)
							casper.echo('Successfully logout from application', 'INFO');
					});
				});	
			}
		});
     	});




	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 4             ' ,'INFO');	
		casper.echo('***********Verify by delete multiple topic-selecting by check box************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('form[name="posts"] a.topic-title');
								wait.waitForElement('a.pull-right.btn.btn-uppercase.btn-primary' , casper , function(err , isExists) {
									if(isExists) {	
										casper.click('i.glyphicon.glyphicon-chevron-down');
										casper.click('div[id^="post_list_"]:nth-child(1) div:nth-child(1) div ul li:nth-child(3) a');
										
										wait.waitForTime(1000 , casper , function(err) {
											casper.capture('1.png');
												casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
													if (!err)
														casper.echo('Successfully logout from application', 'INFO');
													});
												});	

											//});
										});
									}
								});
							}
						});
					}
				});
			}
		});
	});	
};

//verify with delete post-selecting by drop down of the post
deletePostTests.deletePostDropDown=function(){
	 /*casper.then(function(){
		casper.echo('-----------------------------New post created---------------------------------------------------' ,'INFO');
     		deletePostMethod.profilePost(casper , function(err) {
			if(!err)
				casper.echo('post have been created' ,'INFO');
    		});
    	});*/
	
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 4             ' ,'INFO');	
		casper.echo('***********Verify by delete multiple topic-selecting by check box************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('form[name="posts"] a.topic-title');
								wait.waitForElement('a.pull-right.btn.btn-uppercase.btn-primary' , casper , function(err , isExists) {
									if(isExists) {	
										casper.click('i.glyphicon.glyphicon-chevron-down');
										var post= casper.evaluate(function(){
   												var aa=document.querySelectorAll('a#delete_post_request');
     													var a= aa.length;
    													 //for(var i=1;i<=1;i++){
      														var hh=aa[0].getAttribute('href');
     													// }
														return hh;
											});
											casper.echo("message :" +post,'INFO');
											casper.click('a[href="'+post+'"]');
											wait.waitForTime(1000 , casper , function(err) {
												casper.capture('1.png');
													casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
														if (!err)
															casper.echo('Successfully logout from application', 'INFO');
														});
												});	

											//});
										});
									}
								});
							}
						});
					}
				});
			}
		});
	});	
};

//verify with delete post-selecting by check box 
deletePostTests.deletePostCheckbox=function(){
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 5            ' ,'INFO');	
		casper.echo('***********Verify by delete multiple topic-selecting by check box************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]');
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {	
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists){
												casper.click('form[name="posts"] a.topic-title');
												wait.waitForElement('a.pull-right.btn.btn-uppercase.btn-primary' , casper , function(err , isExists) {
													if(isExists){
														var post= casper.evaluate(function(){
   															var aa=document.querySelectorAll('input[name="pid"]');
     															var a= aa.length;
    													 		//for(var i=1;i<=1;i++){
      															var hh=aa[1].getAttribute('id');
     															// }
																return hh;
														});
														casper.echo("message :" +post,'INFO');
														casper.click('input[value="'+post+'"]');
														casper.click('input#deleteposts');

													}
												});
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
														casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
															});
														});	
													//});
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});
    	});	
};

//delete post from members profile page
deletePostTests.deletePostProfilePage=function(){
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 6                 ' ,'INFO');	
		casper.echo('***********delete post from members profile page************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....','INFO');
						wait.waitForElement('ul.nav.pull-right span.caret' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('ul.nav.pull-right span.caret');
								casper.click('a#user-nav-panel-profile');
								wait.waitForElement('a#send_message', casper , function(err ,isExists) {
									if(isExists) {
										casper.click('i.glyphicon.glyphicon-chevron-down');
										var post= casper.evaluate(function(){
   											var aa=document.querySelectorAll('a#search_delete_post');
     												var a= aa.length;
    												var hh=aa[0].getAttribute('href');
     											return hh;
										});
										casper.echo("message :" +post,'INFO');
										casper.click('a[href="'+post+'"]');
										//casper.click('input#deleteposts');											
									}
									casper.then(function(){
										inContextLoginMethod.logoutFromApp(casper, function(err){
											if (!err)
												casper.echo('Successfully logout from application', 'INFO');
										});
									});	
										
								});
							}
							
						});
					}
				});
			}
	     	});
	});
};

//Verify by delete multiple post-selecting by check box 
deletePostTests.deleteMultiplePost=function(){
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 7            ' ,'INFO');	
		casper.echo('***********Verify by delete multiple topic-selecting by check box************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfose'].username, json['validInfose'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]');
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {	
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists){
												casper.click('form[name="posts"] a.topic-title');
												wait.waitForElement('a.pull-right.btn.btn-uppercase.btn-primary' , casper , function(err , isExists) {
													if(isExists){
														var post= casper.evaluate(function(){
   															var aa=document.querySelectorAll('input[name="pid"]');
     															var a= aa.length;
    													 	
      															var hh=aa[1].getAttribute('id');
     															
																return hh;
														});
														casper.echo("message :" +post,'INFO');
														casper.click('input[value="'+post+'"]');
														casper.click('input#deleteposts');
														
													}
													deletePostMethod.PostListing(casper , function(err){
														if(!err)
															casper.echo('method called successfully','INFO');

													});


												});
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
														casper.then(function() {
															inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
															});
														});	
													//});
												});
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});
    	});	

};

//*******************************************Delete others topic/post as register user*****************************
//Verify by delete one topic -selecting by check box 
deletePostTests.deletePostRegisteruser=function(){
	casper.then(function(){
		deletePostMethod.disableApproveAllPost(casper , function(err){
			if(!err)
				casper.echo('disableApproveAllPost method called successfully' ,'INFO');
		
		});

	});
	casper.then(function(){
		deletePostMethod.createTopic(casper , function(err){
			if(!err)
				casper.echo('create topic  method called successfully' ,'INFO');
		});
	});	
	casper.thenOpen(config.url , function(){
		casper.echo("Title of the page :"+this.getTitle(), 'INFO');
		casper.echo('                   TestCase 1               ' ,'INFO');	
		casper.echo('***********Verify by delete one topic -selecting by check box ************','INFO');
		wait.waitForElement('a#td_tab_login', casper, function(err, isExists) {
			if(isExists) {
				inContextLoginMethod.loginToApp(json['validInfos'].username, json['validInfos'].password, casper, function(err) {
					if (err) {
						casper.echo("Error occurred in callback user not logged-in", "ERROR");	
					}else {
						casper.echo('Processing to Login on forum.....',
			
 'INFO');
						wait.waitForElement('a[href="/categories"]' , casper , function(err , isExists) {
							if(isExists) {
								casper.click('a[href="/categories"]')	
								wait.waitForElement('span.forum-title' , casper , function(err , isExists) {
									if(isExists) {
										casper.click('span.forum-title');
										wait.waitForElement('form[name="posts"] a.topic-title' , casper , function(err , isExists) {
											if(isExists) {

												casper.click('input[name="id"]');
												wait.waitForTime(1000 , casper , function(err) {
													casper.capture('1.png');
													casper.click('i.glyphicon.glyphicon-trash');
													casper.then(function() {
														inContextLoginMethod.logoutFromApp(casper, function(err){
															if (!err)
																casper.echo('Successfully logout from application', 'INFO');
														});
													});	
												});
											}
										});
									}

								});
								
							}


						});
					}
				});
			}
		});
	});
};

//Verify by delete all topic-selecting by check box 


















