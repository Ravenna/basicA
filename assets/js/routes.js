app.config(function($routeProvider){
	$routeProvider
		.when('/',{
		    templateUrl: 'partials/_home.html'
		})
		.when('/about',{
		    templateUrl: 'partials/_about.html'
		});
});