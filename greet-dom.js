const greetElemTextB = document.querySelector(".greet");
const displayGreet = document.querySelector(".displayGreet");
const addGreetingsbtn = document.querySelector(".addGreetings");
const massage = document.querySelector(".massage");
const howManyfield = document.querySelector(".howMany");


var greetName = Greetings();


addGreetingsbtn.addEventListener("click", function () {
    var checkGreetings = document.querySelector("input[name='language']:checked");
      var name = greetElemTextB.value;
      var languages = checkGreetings.value;

    
      
     displayGreet.innerHTML = greetName.code(languages,name);
    
    
})