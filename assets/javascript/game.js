var gemCounter = 0;
var winCounter = 0;
var loseCounter = 0;

$(document).ready(function () {
    //Create new numbers for the target and the gems
    $(".btn").on("click", function () {
        var targetNumber = function getRandomInt(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $("#tNumber").text(targetNumber);

        var goldNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(12);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $(".gem1").attr("data-gemData", goldNumber);
        console.log(".gem1");

        var clearNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(12);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $(".gem2").attr("data-gemData", clearNumber);

        var pinkNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(12);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $(".gem3").attr("data-gemData", pinkNumber);
        console.log($(".gem3").data("gemdata"))

        var greenNumber = function getRandomInt(min, max) {
            min = Math.ceil(1);
            max = Math.floor(12);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $(".gem4").attr("data-gemData", greenNumber);

    });

    $(".gem1").on("click", function () {
        var gemValue = ($(this).attr("data-gemdata"));
        gemValue = parseInt(gemValue);
        gemCounter += gemValue;
        $("#totalScore").text("Total Score: " + gemCounter);
        
    })

    $(".gem2").on("click", function () {
        var gemValue = ($(this).attr("data-gemdata"));
        gemValue = parseInt(gemValue);
        gemCounter += gemValue;
        $("#totalScore").text("Total Score: " + gemCounter);
    })

    $(".gem3").on("click", function () {
        var gemValue = ($(this).attr("data-gemdata"));
        gemValue = parseInt(gemValue);
        gemCounter += gemValue;
        $("#totalScore").text("Total Score: " + gemCounter);
    })

    $(".gem4").on("click", function () {
        var gemValue = ($(this).attr("data-gemdata"));
        gemValue = parseInt(gemValue);
        gemCounter += gemValue;
        $("#totalScore").text("Total Score: " + gemCounter);
    })




    //Where do I store the numbers created until they are clicked?
    //On click to store number in gemCounter





});