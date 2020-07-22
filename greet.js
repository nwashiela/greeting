function Greetings(){
function code(languages,name){
    if (languages == "English"){
        return displayGreet.innerHTML = "Hi, " + name;
    }
    else if(languages == "Afrikaans"){
      return displayGreet.innerHTML = "More," + name;
  }
  else if(languages == "Isixhosa"){
      return displayGreet.innerHTML = "Molo, " + name;
  }

}
return{
    code,
}
}