
//----- This js file covers all the valid and invalid Test scenarios for Thumps Up Down functionality from login window comes from home page---------//

'use strict';
var config = require('../../../config/config.json');
var postEventMemberApprovalTestcases = require('../cases/postEventMemberApproval.js');
var postEventMemberApproval = module.exports = {};

postEventMemberApproval.featureTest = function(casper, test) {
	casper.start(config.url, function() {
		this.echo("Title of the page :"+this.getTitle(),'INFO');
		
		// method to create a topic 
		//postEventMemberApprovalTestcases.createTopic();
		
		// method to Approve a pending post from- Approval queue button 
		//postEventMemberApprovalTestcases.approvalQueueButton();
		
		// method to Approve a pending post -By clicking on topic
		//postEventMemberApprovalTestcases.byClickingOnTopic();
		
		// method to Approve a pending post byselect the pending post by  check box
		//postEventMemberApprovalTestcases.byCheckBox();
		
		// method to Approve a pending post by select all pending post by  check box
		//postEventMemberApprovalTestcases.byCheckBoxAll();
		
		// method to Delete a pending post from- Approval queue button 
		//postEventMemberApprovalTestcases.deleteApprovalQueueButton();
		
		// method to Delete a pending post -By clicking on  post 
		//postEventMemberApprovalTestcases.deleteClickingPost();
		
		// method to Delete a pending post by select the pending post by  check box
		//postEventMemberApprovalTestcases.deleteByCheckBox();
		
		// method to Delete a pending post by select all pending post by  check box
		//postEventMemberApprovalTestcases.deleteByAllCheckBox();
		
		// method to edit a pending post from- Approval queue button 
		//postEventMemberApprovalTestcases.editApprovalQueueButton();
		
		// method to edit a pending post by clicking on it
		//postEventMemberApprovalTestcases.editByClickingPost();

		// method to check the functionality of approve post for guest user
		//postEventMemberApprovalTestcases.unregisterUserApprovePost();
		
		// method to Approve a pending event -Approval queue button
		//postEventMemberApprovalTestcases.eventApprovalByApprovalQueueButton();
	
		// method to Approve a pending event -By clicking on topic
		//postEventMemberApprovalTestcases.eventApprovalByClickingOnEvent();
			
		// method to Approve a pending event byselect the pending post by  check box
		//postEventMemberApprovalTestcases.eventApprovalByCheckBox();
		
		// method to Approve a pending event by select all pending post by  check box
		//postEventMemberApprovalTestcases.eventApprovalByCheckBoxAll();
		
		// method to Delete a pending event from- Approval queue button 
		//postEventMemberApprovalTestcases.eventdeleteByApprovalQueueButton();
		
		// method to Delete a pending event -By clicking on event 
		//postEventMemberApprovalTestcases.eventdeleteByClickingEvent();
		
		// method to Delete a pending event by select the pending post by  check box
		//postEventMemberApprovalTestcases.eventdeleteByCheckBox();
		
		// method to Delete a pending event by select all pending post by  check box
		//postEventMemberApprovalTestcases.eventdeleteByAllCheckBox();
		
		// method to edit a pending event by clicking on it
		//postEventMemberApprovalTestcases.eventEditByClickingOnIt();
		
		// method to Approve a pending user from- Approval queue button 
		//postEventMemberApprovalTestcases.memberApprovalByApprovalQueueButton();
		
		// method to Approve a pending user -By clicking on  user name 
		//postEventMemberApprovalTestcases.memberApprovalByClickingOnUsername();

		// method to Approve a pending user-by  Searching pending User  
		//postEventMemberApprovalTestcases.memberApprovalBySearchingPendingUser();
		
		// method to Approve a single user by selecting a checkbox 
		//postEventMemberApprovalTestcases.memberApprovalBySelectingCheckbox();
		
		// method to Approve All user by selecting the checkbox appearing on the top right corner 
		//postEventMemberApprovalTestcases.memberApprovalBySelectingRightCornerCheckbox();
		
		// method to Approve pending member by searching it from advance search 
		//postEventMemberApprovalTestcases.memberApprovalByAdvanceSearch();
		
		// method to Approve a pending user from- Approval queue button for backend setting two 
		//postEventMemberApprovalTestcases.memberApprovalByApprovalQueueButtonSettingTwo();
		
		// method to Approve pending member by searching it from advance search for backend setting two 
		//postEventMemberApprovalTestcases.memberApprovalByAdvanceSearchSettingTwo();
		
		// method to Approve a pending user from- Approval queue button for backend setting three 
		//postEventMemberApprovalTestcases.memberApprovalByApprovalQueueButtonSettingThree();

		// method to Approve pending member by searching it from advance search for backend setting three 
		//postEventMemberApprovalTestcases.memberApprovalByAdvanceSearchSettingThree();
		
		// method to Approve a pending user from- Approval queue button for backend setting Four 
		//postEventMemberApprovalTestcases.memberApprovalByApprovalQueueButtonSettingFour();
		
		// method to Approve pending member by searching it from advance search for backend setting Four 
		//postEventMemberApprovalTestcases.memberApprovalByAdvanceSearchSettingFour();
		
		// method to Approve a pending user from- From Default User Groups (by check box) 
		//postEventMemberApprovalTestcases.memberApprovalFromDefaultUserGroupsByCheckbox();
		
		// method to Approve a pending user From Default User Groups (by buttons) 
		//postEventMemberApprovalTestcases.memberApprovalFromDefaultUserGroupsByButtons();
		
		// method to Approve a pending user from Change a User's User Group(approve button) 
		//postEventMemberApprovalTestcases.memberApprovalFromChangeUserGroupApproveButton();
		
		// method to Approve a pending user from Change a User's User Group(change group) 
		//postEventMemberApprovalTestcases.memberApprovalFromChangeUserGroupChangeGroup();
		
		// method to Approve a pending user from- From Default User Groups (by check box) for backend setting two
		//postEventMemberApprovalTestcases.memberApprovalFromDefaultUserGroupsByCheckboxSettingTwo();
		
		// method to Approve a pending user from Change a User's User Group(change group) for setting two
		//postEventMemberApprovalTestcases.memberApprovalFromChangeUserGroupChangeGroupSettingTwo();
		
		// method to Approve a pending user from- From Default User Groups (by check box) for backend setting three
		//postEventMemberApprovalTestcases.memberApprovalFromDefaultUserGroupsByCheckboxSettingThree();
		
		// method to Approve a pending user from Change a User's User Group(change group) for setting three
		//postEventMemberApprovalTestcases.memberApprovalFromChangeUserGroupChangeGroupSettingThree();
		
		// method to Approve a pending user from Change a User's User Group(change group) for setting four
		//postEventMemberApprovalTestcases.memberApprovalFromChangeUserGroupChangeGroupSettingFour();
		
		// method to Delete a pending user from- Approval queue button 
		//postEventMemberApprovalTestcases.deleteMemberByApprovalQueueButton();
		
		// method to Delete a pending user -By clicking on  user name 
		//postEventMemberApprovalTestcases.deleteMemberByClickingOnUsername();
		
		// method to Delete a pending user-by  Searching pending User  
		//postEventMemberApprovalTestcases.deleteMemberBySearchingPendingUser();
		
		// method to Delete a single user by selecting a checkbox 
		//postEventMemberApprovalTestcases.deleteMemberBySelectingCheckbox();
		
		// method to Delete All user by selecting the checkbox appearing on the top right corner 
		postEventMemberApprovalTestcases.deleteMemberBySelectingRightCornerCheckbox();		
	});
};
