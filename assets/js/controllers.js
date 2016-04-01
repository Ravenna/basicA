
basicA.controller('navController',function($scope){

    /*      
    Here you can handle controller for specific route as well.
    */
});


/*
This should be used to get pages.  

*/
basicA.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
basicA.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});