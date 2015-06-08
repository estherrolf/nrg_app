// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.browse', {
    url: "/browse",
    views: {
     'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  
    .state('app.sessions', {
  url: "/sessions",
  views: {
      'menuContent': {
          templateUrl: "templates/sessions.html",
          controller: 'SessionsCtrl'
      }
  }
})

  .state('app.session', {
    url: "/sessions/:sessionId",
    views: {
        'menuContent': {
          templateUrl: "templates/session.html",
          controller: 'SessionCtrl'
      }
    }
})


  .state('app.general', {
    url: "/general",
    views: {
        'menuContent': {
          templateUrl: "templates/general.html",
          controller: "DataCtrl",
      }
    }
})

.state('app.site', {
    url: "/site",
    views: {
        'menuContent': {
          templateUrl: "templates/site.html",
      }
    }
})

.state('app.client', {
    url: "/client",
    views: {
        'menuContent': {
          templateUrl: "templates/client.html",
      }
    }
})

.state('app.consumption', {
    url: "/consumption",
    views: {
        'menuContent': {
          templateUrl: "templates/consumption.html",
      }
    }
})

.state('app.factors', {
    url: "/factors",
    views: {
        'menuContent': {
          templateUrl: "templates/factors.html",
      }
    }
})

.state('app.addings', {
    url: "/addings",
    views: {
        'menuContent': {
          templateUrl: "templates/addings.html",
      }
    }
})

.state('app.output', {
    url: "/output",
    views: {
        'menuContent': {
          templateUrl: "templates/output.html",
          controller: "DataCtrl",
      }
    }
});

starter.factory('fruits', function(){
  var fruits = {};
  fruits.apples = 1;
  fruits.oranges = 5;

  fruits.update = function(a, o){
    fruits.apples = a;
    fruits.oranges = o;
  };

});

starter.controller('FormCtrl', function (fruits){
  var self = this;

  self.apples = fruits.apples;
  self.oranges = fruits.oranges;
});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/general');
});
