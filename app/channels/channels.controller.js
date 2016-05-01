'use strict';

angular.module('angularfireSlackApp')
	.controller('ChannelsCtrl', function($state, Auth, User, profile, channels){
		var channelsCtrl = this;

		channelsCtrl.profile = profile;
		channelsCtrl.channels = channels;

		channelsCtrl.getDisplayName = Users.getDisplayName;
		channelsCtrl.getGravatar = Users.getGravatar;

		channelsCtrl.logout = function() {
			channelsCtrl.profile.online = null;
			channelsCtrl.profile.$save().then(function() {
				Auth.$unauth();
				$state.go('home');
			});
		};

		channelsCtrl.newChannel = {
			name : ''
		};

		channelsCtrl.createChannel = function() {
			channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
				channelsCtrl.newChannel = {
					name : ''
				};
				$state.go('channels.messages', {channelId: ref.key()});
			});
		};

		channelsCtrl.users = Users.all;

		Users.setOnline(profile.$id);
	});