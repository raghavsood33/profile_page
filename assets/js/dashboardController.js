var mainApp = angular.module('DashboardApp', [ 'DashboardApp._share', 'DashboardApp.aboutme', 'DashboardApp.education', 'DashboardApp.workex', 'DashboardApp.publications', 'DashboardApp.projects', 'DashboardApp.startups', 'DashboardApp.workstation', 'DashboardApp.catchme', 'DashboardApp.getsource', 'ngMdIcons', 'ui.router', 'ui.router.components' ]);


mainApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //$stateProvider.state({ name: 'default1', url: '', redirectTo: 'aboutme' });
    //$stateProvider.state({ name: 'default2', url: '/', redirectTo: 'aboutme' });

    $stateProvider.state({ name: 'aboutme', url: '/aboutme', component: 'aboutme' });
    $stateProvider.state({ name: 'education', url: '/education', component: 'education' });
    $stateProvider.state({ name: 'workex', url: '/workex', component: 'workex' });
    $stateProvider.state({ name: 'publications',  url: '/publications',  component: 'publications' });
    $stateProvider.state({ name: 'projects',  url: '/projects',  component: 'projects' });
    $stateProvider.state({ name: 'startups',  url: '/startups',  component: 'startups' });
    $stateProvider.state({ name: 'workstation',  url: '/workstation',  component: 'workstation' });
    $stateProvider.state({ name: 'catchme',  url: '/catchme',  component: 'catchme' });
    $stateProvider.state({ name: 'getsource',  url: '/getsource',  component: 'getsource' });
    
}]);

mainApp.component('aboutme', {
	  templateUrl: 'assets/components/aboutme.html',
	  controller: 'AboutmeController as aboutme',
	});
mainApp.component('education', {
	  templateUrl: 'assets/components/education.html',
	  controller: 'EducationController as education',
	});
mainApp.component('workex', {
	  templateUrl: 'assets/components/workex.html',
	  controller: 'WorkexController as workex',
	});
mainApp.component('publications', {
	  templateUrl: 'assets/components/publications.html',
	  controller: 'PublicationsController as publications',
	});
mainApp.component('projects', {
	  templateUrl: 'assets/components/projects.html',
	  controller: 'ProjectsController as projects',
	});
mainApp.component('startups', {
	  templateUrl: 'assets/components/startups.html',
	  controller: 'StartupsController as startups',
	});
mainApp.component('workstation', {
	  templateUrl: 'assets/components/workstation.html',
	  controller: 'WorkstationController as workstation',
	});
mainApp.component('catchme', {
	  templateUrl: 'assets/components/catchme.html',
	  controller: 'CatchmeController as catchme',
	});
mainApp.component('getsource', {
	  templateUrl: 'assets/components/getsource.html',
	  controller: 'GetsourceController as getsource',
	});


mainApp.controller('DashboardController', function ( dashboardService, shareFactory, $mdSidenav, $log ) {
	
    //'Controller as' syntax- an alternative to using $scope
    var dc = this;
    
    //Initializing the data members needed by this controller
    
    shareFactory.registerSideMenuSelectionCallback(function(){
    	dc.festSideMenuSelTitle = shareFactory.getSideMenuSelection();
    });
        
	dc.user = {name: 'Loading..', pic: 'assets/images/me.jpg'};
	
	//$("#content").load("assets/components/aboutme.html");
	
	//Fetching from async server call
    dashboardService.loadAllData()
	    .then( function( data ) {
	    	dc.user = data.user;
	    	dc.festSideMenu = data.festSideMenu;
	    	dc.festSubSideMenu = data.festSubSideMenu;
	    });
    
    // *********************************
    // Internal methods
    // *********************************

    dc.toggleSidenav = function () {
    	$mdSidenav('left').toggle();
    }

    dc.announceAlert = function ( message ) {
    	alert(message);
    }
    
    // *********************************
    // External methods
    // *********************************
});

/* ******************************
 * Share Controller 
 * ****************************** */
angular.module('DashboardApp._share', []);


/* ******************************
 * Aboutme Controller 
 * ****************************** */
angular.module('DashboardApp.aboutme', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('AboutmeController', function ( aboutmeService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var aboutme = this;
	
	shareFactory.updateSideMenuSelection('About Me');
	
});


/* ******************************
 * Education Controller 
 * ****************************** */
angular.module('DashboardApp.education', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('EducationController', function ( educationService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var education = this;
	
	shareFactory.updateSideMenuSelection('Education');
	
});


/* ******************************
 * Workex Controller 
 * ****************************** */
angular.module('DashboardApp.workex', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('WorkexController', function ( workexService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var workex = this;
	
	shareFactory.updateSideMenuSelection('Work Ex');
	
});


/* ******************************
 * Publications Controller 
 * ****************************** */
angular.module('DashboardApp.publications', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('PublicationsController', function ( publicationsService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var publications = this;
	
	shareFactory.updateSideMenuSelection('Publications');
	
});


/* ******************************
 * Projects Controller 
 * ****************************** */
angular.module('DashboardApp.projects', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('ProjectsController', function ( projectsService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var projects = this;
	
	shareFactory.updateSideMenuSelection('Projects');
	
});


/* ******************************
 * Startups Controller 
 * ****************************** */
angular.module('DashboardApp.startups', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('StartupsController', function ( startupsService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var startups = this;
	
	shareFactory.updateSideMenuSelection('Startups');
	
});


/* ******************************
 * Workstation Controller 
 * ****************************** */
angular.module('DashboardApp.workstation', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('WorkstationController', function (workstationService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var workstation = this;
	
	shareFactory.updateSideMenuSelection('Workstation');
	
});


/* ******************************
 * Catchme Controller 
 * ****************************** */
angular.module('DashboardApp.catchme', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('CatchmeController', function ( catchmeService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var catchme = this;
	
	shareFactory.updateSideMenuSelection('Catch Me');
	
});


/* ******************************
 * Getsource Controller 
 * ****************************** */
angular.module('DashboardApp.getsource', [ 'DashboardApp._share', 'ngMaterial', 'ngSanitize' ])
.controller('GetsourceController', function ( getsourceService, shareFactory, $log ) {
	
	//'Controller as' syntax- an alternative to using $scope
	var getsource = this;
	
	shareFactory.updateSideMenuSelection('Get Source');
	
});

