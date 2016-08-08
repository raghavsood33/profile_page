angular.module('DashboardApp').service('dashboardService', ['$q', 
function ( $q ){

	//TODO: Replace with async server call
	var user = { name: 'Satyendra Dubey', pic: 'assets/images/me.jpg'};
	
	var festSideMenu = [
            {title: 'About Me', icon: 'portrait', link : '#aboutme'},
            {title: 'Education', icon: 'school', link : '#education'},
            {title: 'Work Ex', icon: 'location_city', link : '#workex'},
            {title: 'Publications', icon: 'folder_open', link : '#publications'},
            {title: 'Projects', icon: 'style', link : '#projects'},
            {title: 'Startups', icon: 'monetization_on', link : '#startups'},
            {title: 'Workstation', icon: 'laptop_windows', link : '#workstation'},
            {title: 'Catch Me', icon: 'call', link : '#catchme'}
        ];
	var festSubSideMenu = [
            {title: 'Get Source', icon: 'code', link : '#getsource'}
        ];
	
	var data = { user: user, festSideMenu: festSideMenu, festSubSideMenu: festSubSideMenu};

    // Promise-based API
    return {
		loadAllData : function() {
			// Simulate async nature of real remote calls
			return $q.when(data);
		}
    };
}]);



/* ******************************
 * Share Factory. Meant to share data across controllers 
 * To avoid busy waiting of $watch and $rootscope.apply(), I followed good old observer pattern
 * http://stackoverflow.com/a/17558885/2202712 
 * ****************************** */
angular.module('DashboardApp._share').factory('shareFactory', ['$q', 
function ( $q ){

    var sideMenuSelTitle = '';		//default value
    var observerCallbacks = {sideMenuSelTitle: []};

    //call this when you know 'foo' has been changed
    var notifyObservers = function(){
        angular.forEach(observerCallbacks.sideMenuSelTitle, function(callback){
            callback();
        });
    };

	return {
		updateSideMenuSelection : function (title) {
			if(sideMenuSelTitle != title) {
			    sideMenuSelTitle = title;
			    notifyObservers();
		    }
	    },
	    
	    getSideMenuSelection : function () {
            return sideMenuSelTitle;
        },
        
        //register an observer
        registerSideMenuSelectionCallback : function(callback){
            observerCallbacks.sideMenuSelTitle.push(callback);
        }
	};
}]);


/* ******************************
 * Aboutme Service 
 * ****************************** */
angular.module('DashboardApp.aboutme').service('aboutmeService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Education Service 
 * ****************************** */
angular.module('DashboardApp.education').service('educationService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Workex Service 
 * ****************************** */
angular.module('DashboardApp.workex').service('workexService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Publications Service 
 * ****************************** */
angular.module('DashboardApp.publications').service('publicationsService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Projects Service 
 * ****************************** */
angular.module('DashboardApp.projects').service('projectsService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Startups Service 
 * ****************************** */
angular.module('DashboardApp.startups').service('startupsService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Workstation Service 
 * ****************************** */
angular.module('DashboardApp.workstation').service('workstationService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Catchme Service 
 * ****************************** */
angular.module('DashboardApp.catchme').service('catchmeService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);


/* ******************************
 * Getsource Service 
 * ****************************** */
angular.module('DashboardApp.getsource').service('getsourceService', ['$q', '$http',
function ( $q, $http ){

	var data = {
		  
		};

    // Promise-based API
    return {
    	loadAllData : function(entityType, entityId, callback) {
    		callback(data);
    	}
    };
}]);

