/**
 * Created by psalunke on 1/23/2017.
 */
eventsApp.factory('eventData', function () {
   return {
        event: {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30AM',
            location: {
                address: 'Google HQ',
                city: 'Mountain View',
                state: 'CA'
            },
            imgUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Paresh Salunke',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Lorem Ipsum text generated',
                    upVoteCount: 0
                },

                {
                    name: 'Scope for fun and profit',
                    creatorName: 'Andrew Carnegie',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Lorem Ipsum text generated',
                    upVoteCount: 0
                },

                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Rob Smith',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'Lorem Ipsum text generated',
                    upVoteCount: 0
                },

                {
                    name: 'Custom Directives',
                    creatorName: 'Rob Smith',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Lorem Ipsum text generated',
                    upVoteCount: 0
                }
            ]

        }
   };
});