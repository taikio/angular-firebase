(function() {
    'use strict';

    angular
        .module("fire")
        .controller("MainController", mainController);

        mainController.$inject = ['$scope', '$firebaseArray'];

        function mainController($scope, $firebaseArray) {
            var vm = this;

            var ref = firebase.database().ref().child("notes");
            // download the data into a local object
            vm.firebasedatabase = $firebaseArray(ref);
            
            console.log(vm.firebasedatabase);        


            vm.pessoa = {};

            vm.salvar = function (nome, sobrenome){
                vm.firebasedatabase.$add({
                    nome: nome,
                    sobrenome: sobrenome
                });    
                
                vm.firebasedatabase.$save()
                    .then(function(data){

                    },
                    function(err){

                    });
            }

            vm.editar = function (element){
                var record = vm.firebasedatabase.$getRecord(element.$id);

                record.nome = element.nome;
                record.sobrenome = element.sobrenome;

                vm.firebasedatabase.$save(record)
                    .then(function (){

                    },
                    function (){

                    });
            }
            
        }
})();