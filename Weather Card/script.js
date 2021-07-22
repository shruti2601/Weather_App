const weatherApp = angular.module("weatherApp",[]);

weatherApp.run(function($rootScope,$http){
    $http.get("http://api.openweathermap.org/data/2.5/find?lat=21.9025&lon=70.0338&cnt=10&appid=12f3f1e3fecacf5c95dfbb41eac20099")
    .then(
        function(responce){
            $rootScope.weathers = responce.data.list;
        },
        function(responce){
            $rootScope.message = $responce.status + "  " + $responce.ststusText;
        }
    );

});

weatherApp.controller("weatherAppController", function($scope,$http){

    $scope.filterText="";

});

weatherApp.filter("searchFilter",function(){
    console.log();
    return function(weathers,filterText){
        if(!filterText){
            return weathers;
        }
        return weathers.filter(function(weather){
            var keyword = new RegExp(filterText,'i');           
            return keyword.test(weather.name);
        });
    };
});