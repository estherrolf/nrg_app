var app = angular.module('starter.controllers', ['starter.services']);

 app.factory('FormFactory', 
  function FormFactory ($location) {
  FormFactory.projectName = '';

  //FormFactory.update1 = function (projectName, date, customerName, email, phone, address) {
  FormFactory.update1 = function (data) {
    FormFactory.projectName = data.projectName;
    FormFactory.date = data.date;
    FormFactory.customerName = data.customerName;
    FormFactory.email = data.email;
    FormFactory.phone = data.phone;
    FormFactory.address = data.address;
    console.log("FormFactory date: "+FormFactory.date);
  }
 
  return FormFactory;
 });

app.controller('AppCtrl', function ($scope, $ionicModal, $timeout, FormFactory) {
  // think of the instance of the controller as a view-model
  var vm = this;

  vm.data = {};
  
  //vm.projectName = FormFactory.projectName;

  vm.updateFactory = function () {
    //FormFactory.update1(this.projectName, this.date, this.customerName, this.email, this.phone, this.address);
    FormFactory.update1(this.data);
   // FormFactory.changeDate(this.date);
    console.log("we're here");
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

});









// for use later when having global tables 
//starter.constant();





