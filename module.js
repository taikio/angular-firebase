(function(){
    'use strict';

    angular
        .module("fire", ['firebase']);


    angular
        .module("fire")
        .run(function (){
            var config = {
                apiKey: "AIzaSyDxHV_CQ0vefCsbc492-RVL03XErI0DD-U",
                authDomain: "elegantnotes-1cb67.firebaseapp.com",
                databaseURL: "https://elegantnotes-1cb67.firebaseio.com",
                projectId: "elegantnotes-1cb67",
                storageBucket: "elegantnotes-1cb67.appspot.com",
                messagingSenderId: "1070364322207"
              };
              firebase.initializeApp(config);            
        });
})();