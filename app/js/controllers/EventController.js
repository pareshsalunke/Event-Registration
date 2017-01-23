/**
 * Created by mac on 1/20/17.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.snippet = '<span style="text-color:red">Hi there</span>';
        $scope.myStyle = {color:'red'};

        $scope.sortorder = '';
        $scope.event = eventData.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);