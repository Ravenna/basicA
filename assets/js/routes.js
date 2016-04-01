basicA.config(function($routeProvider){
	$routeProvider
		.when('/',{
		    templateUrl: 'partials/_home.html',
		    controller: 'homeController'
		})
		.when('/about',{
		    templateUrl: 'partials/_about.html',
		    controller: 'aboutController'
		});
});