/**
 * Created by psalunke on 1/23/2017.
 */

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event) {
            window.alert('event ' + event.name + ' saved!');
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        };
    }
);