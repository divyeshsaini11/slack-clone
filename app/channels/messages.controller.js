'use strict';

angular.module('angularfireSlackApp')
	.controller('MessagesCtrl', function(profile, channelName, messages) {
		var messagesCtrl = this;

		messagesCtrl.messages = messages;
		messagesCtrl.channelName = channelName;

		messagesCtrl.message = '';

		messageCtrl.sendMessage = function() {
			if(messagesCtrl.message.length > 0) {
				messagesCtrl.message.$add({
					ui: profile.$id,
					body: messageCtrl.message,
					timestamp: Firebase.ServerValue.TIMESTAMP
				}).then(function() {
					messageCtrl.message = '';
				});
			}
		};
	});	