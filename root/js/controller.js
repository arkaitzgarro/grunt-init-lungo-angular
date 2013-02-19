function AppCtrl($scope, $location) {
  AppRouter.instance = AppRouter(Lungo, $location, $scope);
}

function DynamicCtrl($scope) {
    $scope.message = "Hello world!";
}

function DeeplinkCtrl($scope, $routeParams) {
    $scope.paramMsg = $routeParams.msg;
}