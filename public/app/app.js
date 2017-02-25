var app = angular.module("port", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home/home.html',
        controller: 'home'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './app/views/contact/contact.html',
        controller: 'contact'
      })
      .state('illustration', {
        url: '/illustration',
        templateUrl: './app/views/illustration/illustration.html',
        controller: 'illustration'
      })
      .state('logos', {
        url: '/logos',
        templateUrl: './app/views/logos/logos.html',
        controller: 'logos'
      })
      .state('print', {
        url: '/print',
        templateUrl: './app/views/print/print.html',
        controller: 'print'
      })
      .state('apparel', {
        url: '/apparel',
        templateUrl: './app/views/apparel/apparel.html',
        controller: 'apparel'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: './app/views/skills/skills.html',
        controller: 'skills'
      })
      .state('web', {
        url: '/web',
        templateUrl: './app/views/web/web.html',
        controller: 'web'
      })



});