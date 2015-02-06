/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('getTradeRecord', ['$http',function($http){

    var service = {
      data: '',
      getData: '',
      getNewData: ''
    }

    service.getData = function(option, fn) {
      if(service.data) {
        fn(service.data);
        return true;
      }
      $http.get('/getTradeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }

    service.getNewData = function(data, fn) {
      $http.get('/getTradeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }


    return service;
  }])
})