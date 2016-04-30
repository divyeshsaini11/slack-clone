'use strict';

angular.module('angularfireSlackApp')
	.factory('Users', function ($firebaseArray, $firebaseObject, FirebaseUrl) {
		var usersRef = $firebaseObject(FirebaseUrl + 'users');

		var users = $firebaseArray(usersRef);

		var Users = {
			getProfile : function(uid) {
				return $functionObject(usersRef.child(uid));
			},
			getDisplayName: function(uid) {
				return users.$getRecord(uid).displayName;
			},
			getGravatar : function(uid) {
				return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
			}, 
			all: users
		}

		

		return Users;
	});