angular.module('app').controller('profileController', function ($resource, $scope, $http, $rootScope, securityService) {

    var temp3 = securityService.currentUser();
    var userNameParameter = temp3.username;

    $scope.currentUserLoggedIn =  userNameParameter;

    $http({
        method: 'GET',
        url: '/account/' + userNameParameter
    }).then(function successCallback(response) {
        var temp=response.data;
        $scope.nameForUser = temp.name;
        $scope.emailAddressForUser = temp.email;
        $scope.followersForUser = temp.followers;
        $scope.followingForUser = temp.following;

        console.log(response);
        temp = response.data;
        for (var i = 0; i < temp.length; i++) {
            var tempArr = [];

        }
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});

