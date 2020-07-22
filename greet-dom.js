const greetElem = document.querySelector(".greet");
const displayGreet = document.querySelector(".displayGreet");
const displayGreets = document.querySelector(".displayGreets");
const addGreetingsbtn = document.querySelector(".addGreetings");
const massage = document.querySelector(".massage");

var greetName = Greetings();
var greet = [];

addGreetingsbtn.addEventListener("click", function () {
    var checkGreetings = document.querySelector("input[name='language']:checked");
      var name = greetElem.value;
      var languages = checkGreetings.value;

      
     displayGreet.innerHTML = greetName.code(languages,name);
      

})