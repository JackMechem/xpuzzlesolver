

$(document).ready(function(){



  $("button").click(function(){ //if you click on th button it does what ever you tell it to do bellow
    var numbOneTemp = $("#firNum").val(); //makes numbOne the first input
    var numbTwoTemp = $("#secNum").val();
    var firstNumber = parseInt(numbOneTemp);
    var secondNumber = parseInt(numbTwoTemp);
    var firstMaxFactor = firstNumber + 5;
    var secondMaxFactor = secondNumber + 5;
    var listOfNumbers = [];
    var factorsOfFirstNumber = [];
    var factorsOfSecondNumber = [];
    var factorsOfThirdNumber = [];
    var outCome = [];
    var listCountOne = 0;
    var listCounttwo = 0;
 
    

    for (i = -100; i <= -1; i++) {
      if (secondNumber % i == 0) {
        factorsOfFirstNumber.push(i);
        factorsOfThirdNumber.push(parseInt(secondNumber)/parseInt(i));
      }
    }
    for (x = 1; x <= secondMaxFactor; x++) {
      if (secondNumber % x == 0) {
        factorsOfFirstNumber.push(x);
        factorsOfThirdNumber.push(parseInt(secondNumber)/parseInt(x));


      }
    }
    console.log(factorsOfThirdNumber);
    console.log(factorsOfFirstNumber);
    for (var p = 0; p < factorsOfFirstNumber.length; p++) {
      
      if (factorsOfFirstNumber[p] * factorsOfThirdNumber[p] == secondNumber && factorsOfFirstNumber[p] + factorsOfThirdNumber[p] == firstNumber) {
        outCome.push(factorsOfFirstNumber[p]);
        outCome.push(factorsOfThirdNumber[p]);
        console.log(factorsOfThirdNumber[p]);
      }
    }


    function removeDups(data) {
      return data.filter((value, index) => data.indexOf(value) === index);

    }



    var outComeNoDup = removeDups(outCome);

    $("#outCome7").text(outCome);

  






    
  });

  

  




















});
