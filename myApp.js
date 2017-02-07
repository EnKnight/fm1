var myApp = angular.module('myApp',['rzModule', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap', 'ui.select', 'uiSlider', 'ng-fusioncharts']);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

myApp.controller('MyCtrl',['$scope', '$filter','$http', function ($scope, $filter,$http) {
    $scope.minRangeSlider = {
        minValue: 0,
        maxValue: 5000000,
        options: {
            floor: 0,
            ceil: 5000000,
            step: 100000,
          translate: function(value){
              return $filter('currency')(value, "$", 0);
            }
        }
    };

  $scope.filterrange = function(item) {
    /*
    console.log('item.min_price: ' + item.min_price);
    console.log('$scope.lower_price_bound: ' + $scope.lower_price_bound); */
    return (item.rangoprecio >= $scope.minRangeSlider.minValue && item.rangoprecio <= $scope.minRangeSlider.maxValue);
  };

  $scope.priceRange = function(item) {
    /*
    console.log('item.min_price: ' + item.min_price);
    console.log('$scope.lower_price_bound: ' + $scope.lower_price_bound); */
    return (item.rangoprecio >= $scope.lower_price_bound && item.rangoprecio <= $scope.upper_price_bound);
  };
    $scope.test = "Yes";
    $scope.proyectos = [
      {
        "locacion" : "Querétaro, México.",
        "cantidad" : "20 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 1475500.00,
        "img" : "/2.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "120 apartamentos",
        "tipopropiedad" : "Uso mixto",
        "rangoprecio" : 4175000.00,
        "img" : "/2-1.jpg"
      },
      {
        "locacion" : "Guanajuato, México.",
        "cantidad" : "15 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 2495500.00,
        "img" : "/2-2.jpg"
      },
      {
        "locacion" : "Aguascalientes, México.",
        "cantidad" : "70 viviendas",
        "tipopropiedad" : "Residencial",
        "rangoprecio" : 1175000.00,
        "img" : "/3.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "140 apartamentos",
        "tipopropiedad" : "Uso mixto",
        "rangoprecio" : 4095500.00,
        "img" : "/4.jpg"
      },
      {
        "locacion" : "Ciudad de México, México.",
        "cantidad" : "80 apartamentos",
        "tipopropiedad" : "Apartamentos",
        "rangoprecio" : 2895500.00,
        "img" : "/47.jpg"
      }
    ];
    $scope.people = [
      {
        "name": "Carlos Minvielle Lagos",
        "img": "eugeniozam.jpg",
        "puesto": "Miembro Ejecutivo",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Juan Pablo Morfín Yáñez",
        "img": "eugeniozam.jpg",
        "puesto": "Miembro Ejecutivo",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Isaac Memun Elías",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Salvador Cofiño Dávila",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      },
      {
        "name": "Armando Gómez Flores",
        "img": "eugeniozam.jpg",
        "puesto": "Consejero",
        "inforol" : "Presidente",
        "infopro": "45 años",
        "infosec": "45 años"
      }
    ];
    /*#ags, #bcn, #bcs, #cam, #chp, #chh, #coa, #col, #df, #dur, #gua, #gro, #hid, #jal, #mex, #mic, #mor,
    #nay, #nl, #oax, #pue, #que, #qro, #slp, #sin, #son, #tab, #tam, #tla, #ver, #yuc, #zac
    $http.get("http://192.168.1.83/Ondecode/fm1/consultarestados.php")
   .then(function (response) {$scope.estados = response.data.estados;});*/
    $scope.estados = [
      {
        "id": "ags",
        "img": "casa1.png",
        "nom": "Aguascalientes",
        "proyectos": 4,
        "desc": "Viviendas",
        "totaldesc": 597
      },
      {
        "id": "bcn",
        "img": "casa1.png",
        "nom": "Baja California",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 720
      },
      
      {
        "id": "df",
        "img": "casa1.png",
        "nom": "Ciudad de México",
        "proyectos": 19,
        "desc": "Viviendas",
        "totaldesc": 2279
      },
      
      {
        "id": "gua",
        "img": "casa1.png",
        "nom": "Guanajuato",
        "proyectos": 1,
        "desc": "Viviendas",
        "totaldesc": 880
      },
      {
        "id": "gro",
        "img": "casa1.png",
        "nom": "Guerrero",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 22
      },      
      {
        "id": "jal",
        "img": "casa1.png",
        "nom": "Jalisco",
        "proyectos": 6,
        "desc": "Viviendas",
        "totaldesc": 804
      },
      {
        "id": "mex",
        "img": "casa1.png",
        "nom": "Estado de México",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc":13192
      },
      
      {
        "id": "mor",
        "img": "casa1.png",
        "nom": "Morelos",
        "proyectos": 1,
        "desc": "Oficinas",
        "totaldesc": 192
      },
      
      {
        "id": "pue",
        "img": "casa1.png",
        "nom": "Puebla",
        "proyectos": 2,
        "desc": "Viviendas",
        "totaldesc": 334
      },
      {
        "id": "que",
        "img": "casa1.png",
        "nom": "Querétaro",
        "proyectos": 3,
        "desc": "Viviendas",
        "totaldesc": 360
      }
      
    ];
}]);


//filter Multiple...
myApp.filter('filterMultiple',['$filter',function ($filter) {
  return function (items, keyObj) {
    var filterObj = {
              data:items,
              filteredData:[],
              applyFilter : function(obj,key){
                var fData = [];
                if(this.filteredData.length == 0)
                  this.filteredData = this.data;
                if(obj){
                  var fObj = {};
                  if(angular.isString(obj)){
                    fObj[key] = obj;
                    fData = fData.concat($filter('filter')(this.filteredData,fObj));
                  }else if(angular.isArray(obj)){
                    if(obj.length > 0){ 
                      for(var i=0;i<obj.length;i++){
                        if(angular.isString(obj[i])){
                          fObj[key] = obj[i];
                          fData = fData.concat($filter('filter')(this.filteredData,fObj));  
                        }
                      }
                      
                    }                   
                  }                 
                  if(fData.length > 0){
                    this.filteredData = fData;
                  }
                }
              }
        };

    if(keyObj){
      angular.forEach(keyObj,function(obj,key){
        filterObj.applyFilter(obj,key);
      });     
    }
    
    return filterObj.filteredData;
  }
}]);

myApp.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

myApp.directive('mapa', function($http){
  return {
    restrict: 'E',
    scope: {
      name: '@',
      id: '@'
    },
    template: '<div id="{{scope.id}}"></div>',
  };
});
