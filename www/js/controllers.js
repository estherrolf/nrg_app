var app = angular.module('starter.controllers', ['starter.services']);

 app.factory('FormFactory', 
  function FormFactory ($location) {
  FormFactory.projectName = '';
  FormFactory.cost = "0.2";
  // update the factory from the first page of form
  FormFactory.update1 = function (data) {
    // General Data
    FormFactory.projectName = data.projectName;
    FormFactory.date = data.date;
    FormFactory.customerName = data.customerName;
    FormFactory.email = data.email;
    FormFactory.phone = data.phone;
    FormFactory.address = data.address;
  }

  // second page of form
  FormFactory.update2 = function (data) {
    // Site data
    FormFactory.address = data.address;
    FormFactory.city = data.city;
    FormFactory.altitude = data.altitude;
    FormFactory.temperature = data.temperature;
    FormFactory.roofs = data.roofs;
    FormFactory.commentSite = data.commentSite;

     for (i = 0; i < FormFactory.roofs.length; i++) {
      console.log("factory panelType" + i +  "name: "+FormFactory.roofs[i].panelType);
    }
  }


  FormFactory.update3 = function (data) {
    // Client data
    FormFactory.system = data.system;
    FormFactory.buildingType = data.buildingType;
    FormFactory.grid = data.grid;
    FormFactory.monthlyBill = data.monthlyBill;
    FormFactory.cost = data.cost;
    FormFactory.distanceToGrid = data.distanceToGrid;
    FormFactory.solarSystem = data.solarSystem;
    FormFactory.solarArray = data.solarArray;
    FormFactory.batteryBank = data.batteryBank;
    FormFactory.dieselGenerator = data.dieselGenerator;
    FormFactory.consumption = data.consumption;
    FormFactory.power = data.power;
    FormFactory.reasonForSolar = data.reason;
    FormFactory.commentClient = data.commentClient;

    // Bill consumption  = Monthly Bill / Cost per kW.h
    FormFactory.billConsumption = parseFloat(data.monthlyBill) / parseFloat(data.cost);
    console.log("MonthlyBill: "+data.monthlyBill);
    console.log("cost: "+data.cost);
    console.log("float MonthlyBill: "+ parseFloat(data.monthlyBill));
    console.log("float cost: "+parseFloat(data.cost));
    console.log("bill consumption: "+FormFactory.billConsumption);

    console.log("update 3 done");
  }
 
  return FormFactory;
 });

app.controller('AppCtrl', function ($scope, $ionicModal, $timeout, FormFactory) {
  // think of the instance of the controller as a view-model
  var vm = this;

  vm.data = {};
  vm.data.roofs = [{id: 'roof1'}];
  vm.data.cost = FormFactory.cost;


  vm.updateFactory1 = function () {
    FormFactory.update1(this.data);
    console.log("update 1 in controller");
  };

  vm.updateFactory2 = function () {
    console.log("update 2 in controller");
    FormFactory.update2(vm.data);
  };

  vm.updateFactory3 = function () {
    console.log("update 3 in controller");
    FormFactory.update3(vm.data);
  };

  // for inputing multiple roofs
  vm.addNewRoof = function() {
    var newItemNo = vm.data.roofs.length+1;
    vm.data.roofs.push({'id':'roof'+newItemNo});

    for (i = 0; i < vm.data.roofs.length; i++) {
      console.log("controller panelType" + i +  "surface: "+vm.data.roofs[i].panelType);
    }

  };

  vm.showAddRoof = function(roof) {
    return roof.id === vm.data.roofs[vm.data.roofs.length-1].id;
  };

  // For Testing - we won't actually need all of these in the future
  vm.getProjectName = function () {
    return FormFactory.projectName;
  };
  vm.getDate = function () {
    return FormFactory.date;
  };
  vm.getEmail = function () {
    return FormFactory.email;
  };
  vm.getAddress = function () {
    return FormFactory.address;
  };
  vm.getCustomerName = function () {
    return FormFactory.customerName;
  };
  vm.getPhone = function () {
    return FormFactory.phone;
  };
  vm.getCity = function () {
    return FormFactory.city;
  };

  vm.getRoofSlope = function () {
    return FormFactory.roofs[0].slope;
  };

  vm.getRoofPanelType = function () {
    return FormFactory.roofs[0].panelType;
  };

  vm.getBillConsumption = function () {
    return FormFactory.billConsumption;
    console.log("bill consumption: "+FormFactory.billConsumption)
  };

});

app.directive('format', ['$filter', function ($filter) {
    return {
        require: 'ngModel',
  
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue);
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+]/g, '');
                elem.val($filter('number')(plainNumber/100,2));
                return plainNumber/100;
            });
        }
    };
}]);







// for use later when having global tables 
//starter.constant();





