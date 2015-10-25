angular.module('teste',[]);

angular.module('teste')
.directive('main.navbar', function () {
        return {
            restrict: 'AE',
            replace: false,
            templateUrl: "/app/view/main-navbar.html"
        };
    });

angular.module('teste')
.directive('main.navbar.message', function () {
        return {
            restrict: 'AE',
            replace: false,
            templateUrl: "/app/view/main-navbav-messager.html"
        };
    });


// da net e necas
angular.module('teste')
.directive('view', ['$compile', function (compile) {

    return {
        restrict: 'A',
        scope: {
            view: '@'
        },
        replace: true,   
        template: '<div class="view"></div>',

        controller: ['$scope', function (scope) {
            scope.$watch('view', function (value) {
                scope.buildView(value);
            });
        }],

        link: function (scope, elm, attrs) {

            scope.buildView = function (viewName) {
                var view = compile('<div ' + viewName + '></div>')(scope);
                elm.append(view);
            }
        }
    }
}]);




// achei esse post, mas não consegui fazer funcionar 
//http://stackoverflow.com/questions/16479162/render-a-directive-inside-another-directive-within-repeater-template

