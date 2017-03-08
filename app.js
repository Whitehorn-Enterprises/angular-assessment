angular.module('assessment', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'aboutCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'blogCtrl'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'shopCtrl'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: './views/product-details.html',
        controller: 'productCtrl'
      })
    $urlRouterProvider.otherwise('/home')
  })
