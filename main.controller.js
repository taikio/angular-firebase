(function() {
    'use strict';

    angular
        .module("fire")
        .controller("MainController", mainController);

        mainController.$inject = ['$scope', '$firebaseArray'];

        function mainController($scope, $firebaseArray) {
            var vm = this;

            //var ref = new Firebase('https://elegantnotes-1cb67.firebaseio.com');

            var ref = firebase.database().ref().child("notes");
            // download the data into a local object
            vm.firebasedatabase = $firebaseArray(ref);
            
            console.log(vm.firebasedatabase);        


            vm.pessoa = {};

            vm.salvar = function (nome, sobrenome){
                vm.firebasedatabase.$save({
                    nome: nome,
                    sobrenome: sobrenome
                });                
            }
        }
})();