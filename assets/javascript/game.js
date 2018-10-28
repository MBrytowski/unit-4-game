$(document).ready(function () {
    var gemCounter = 0;
    $("#totalScore").text("Total Score: " + gemCounter);
    var winCounter = 0;
    $("#wins").text("Wins: " + winCounter);
    var lossCounter = 0;
    $("#losses").text("Losses: " + lossCounter);
    //Create new numbers for the target and the gems
    $(".btn").on("click", function () {
        var gemCounter = 0;
        $("#totalScore").text("Total Score: " + gemCounter);
        var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#tNumber").text(targetNumber);

        var goldNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $(".gem1").attr("data-gemData", goldNumber);

        var clearNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $(".gem2").attr("data-gemData", clearNumber);

        var pinkNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $(".gem3").attr("data-gemData", pinkNumber);
        // console.log($(".gem3").data("gemdata"))

        var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $(".gem4").attr("data-gemData", greenNumber);

        function game() {
            if (gemCounter === targetNumber) {
                alert("Have a dance party! You won!");
                alert("Press Start! to play again.");
                winCounter++;
                $("#wins").text("Wins: " + winCounter);
                gemCounter = 0;
                $("#totalScore").text("Total Score: " + gemCounter);
            } else if (gemCounter >= targetNumber) {
                alert("Sorry, you lost! Try again!");
                alert("Press Start! to play again.");
                lossCounter++;
                $("#losses").text("Losses: " + lossCounter);
                gemCounter = 0;
                $("#totalScore").text("Total Score: " + gemCounter);
            };
        };

        $(".gem1").on("click", function () {
            var gemValue1 = ($(this).attr("data-gemdata"));
            gemValue1 = parseInt(gemValue1);
            gemCounter += gemValue1;
            $("#totalScore").text("Total Score: " + gemCounter);
            game();
        });
    
        $(".gem2").on("click", function () {
            var gemValue2 = ($(this).attr("data-gemdata"));
            gemValue2 = parseInt(gemValue2);
            gemCounter += gemValue2;
            $("#totalScore").text("Total Score: " + gemCounter);
            game();
        });
    
        $(".gem3").on("click", function () {
            var gemValue3 = ($(this).attr("data-gemdata"));
            gemValue3 = parseInt(gemValue3);
            gemCounter += gemValue3;
            $("#totalScore").text("Total Score: " + gemCounter);
            game();
        });
    
        $(".gem4").on("click", function () {
            var gemValue4 = ($(this).attr("data-gemdata"));
            gemValue4 = parseInt(gemValue4);
            gemCounter += gemValue4;
            $("#totalScore").text("Total Score: " + gemCounter);
            game();
        });
    });
})