$(document).ready(function() {
    //Create new numbers for the target and the gems
    $(".btn").on("click", function() {
        var targetNumber = function getRandomInt(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (121 - 19)) + 19;
          }
        $("#tNumber").text(targetNumber);

        var goldNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(13);
            return Math.floor(Math.random() * (13 - 1)) + 1;
        }

        var clearNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(13);
            return Math.floor(Math.random() * (13 - 1)) + 1;
        }

        var pinkNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(13);
            return Math.floor(Math.random() * (13 - 1)) + 1;
        }
        var greenNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(13);
            return Math.floor(Math.random() * (13 - 1)) + 1;
        }
    });
    //Where do I store the numbers created until they are clicked?

    
    
})