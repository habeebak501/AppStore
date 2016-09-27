angular.module('myApp', ['ui.router','angular-carousel-3d','simplePagination'])
.config(function($stateProvider, $urlRouterProvider) {
  console.log("hi");
        $urlRouterProvider.otherwise('/category');
        $stateProvider
            .state('category', {
                url: '/category',
                templateUrl: 'templates/category.html',
                controller: 'mainController'
            })
            .state('content',{
              url:'/?pid?cid',
              templateUrl:'templates/content.html',
              controller:'contentController'
            })
          });
