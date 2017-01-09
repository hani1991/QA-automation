/****This script is dedicated for composeTopic Setting ****/
'use strict';

var config = require('../../../config/config.json');
var composeTopicTest = require('../cases/composeTopic.js');
var composeTopic = module.exports = {};


composeTopic.featureTest = function(casper, test) {

	casper.start(config.backEndUrl, function() {

		this.echo('Title Of The Page :' +this.getTitle(), 'INFO');

		   
		/************************   1.Add New Topic   ****************************/
        /*		
		//1.Test case for Add New Topic with selecting category and verify message
		composeTopicTest.addNewTopicSelectingCategory();

		//2.test case for Add New Topic with hindi text and verify message
		composeTopicTest.addNewTopicHindiText();

		//3.test case for Verify Post preview with entered message
		composeTopicTest.postPreviewEnteredMessage();

		//4.test case for Verify Post preview with image of entered message
		composeTopicTest.postPreviewImage();
		
		//5.test case for Verify Error message after entering message more than 65000 charecters while adding new Topic
		composeTopicTest.errorMessageMoreCharecters();
	    */	
		/************************   2.Compost Topic (Make sure 'Post approval' is disabled)    ****************************/
		/*
		//1.Test case for Verify Compost Topic on Category Listing Page(For Guest/Registered User/Admin)
		composeTopicTest.compostTopicCategoryListingPage();

		//2.test case for Verify Compost Topic on Topic Listing Page(For Guest/Registered User/Admin)
		composeTopicTest.compostTopicListingPage();

		//3.test case for Verify Compost Topic on Latest Topic Page(For Guest/Registered User/Admin)
		composeTopicTest.compostTopicLatestTopicPage();

		//4.test case for Verify Compose Topic when there is no topic available(For Guest/Registered User/Admin)
		composeTopicTest.composeTopicNoTopicAvailable();
	
		//5.test case for Verify Preview Post of Compose Topic(For Guest/Registered User/Admin-preview)
		composeTopicTest.previewPostComposeTopic();
	
	    //6.Verify Preview Post of Compose Topic(For Guest/Registered User/Admin-Message generate)
		composeTopicTest.previewPostComposeTopicMessage();
		
		//7.Verify Compose Topic without selecting any category(For Guest/Registered User/Admin)
		composeTopicTest.composeTopicWithoutSelectingAnyCategory();
        */
	    /******************************  3.Compose Topic Options   ******************************************/
			
		//1.Test case for Verify Compose Post Options(For Guest/Registered User/Admin)
		//composeTopicTest.composePostOptions();
        
		/**************  4.Compose Topic Permission(Make sure 'Post approval' is disabled)  ******************/
		
		//1.Verify Compose Topic on Category/topic Listing Page(if start new topic permission is disabled)(For Guest User)
		//omposeTopicTest.startNewTopicPermissionDisabled();
      
		//2.Verify Compose Topic on topic listing page(if start new topic permission is disabled of one cateogry)(For Guest User)
		//composeTopicTest.listingPageDisabledOneCateogry();

		//3.Verify Dropdown of Compose Topic on Category/Latest topic page(if start new topic permission is disabled of one cateogry)(For Guest User)
	//	composeTopicTest.dropdownDisabledOneCateogry();

		//4.Verify Compose Topic on Category/topic/Latest topic Page(if start new topic permission is disabled)(For Register User)
		composeTopicTest.composePostRegisterUser();//Mouse Hover on Start New Topic
/*	
		//5.Verify Compose Topic on topic listing page(if start new topic permission is disabled of one cateogry)(For Register User)
		composeTopicTest.previewPostComposeTopic();//Mouse Hover on Start New Topic
	   
	    //6.Verify Dropdown of Compose Topic on Category/Latest topic page(if start new topic permission is disabled of one cateogry)(For Register User)
		composeTopicTest.previewPostDropdownTopicMessage();
	*/	
	   /**************  5.Compose Topic With Attach, Insert and Follow Option  ******************/
	  /* 
	   //1.Verify Compose Topic with un-follow option(For Register user/Admin)
		composeTopicTest.composeTopicUnFollowOption();
		
	   //2.Verify Compose Topic with follow option(For Register user/Admin)
		composeTopicTest.composeTopicFollowOption();

		//3.Verify Compost Topic with attach file on Category/topic/Latest topic Page (Registered User/Admin)
		composeTopicTest.compostTopicAttachFile();//Error in attach file

		//4.Verify Compost Topic with Insert photos on Category/topic/Latest topic Page (Registered User/Admin)
		composeTopicTest.compostTopicInsert();//Error in insert photo error
	
		//5.Verify Compose Topic with Pin option(Admin)
		composeTopicTest.composeTopicPinOption();
	   
	    //6.Verify Compose Topic with Lock option(Admin)
		composeTopicTest.composeTopicLockOption();
	*/
	});

};

