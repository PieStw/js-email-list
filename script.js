const emailList = [];


function getEmail(){
  document.getElementById("email-container").innerHTML = ``;
  for(let i = 0; i < 10; i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        emailList.push(data.response);
        document.getElementById("email-container").innerHTML += `<div>${data.response}</div>`;
      });
  }
}

getEmail()
document.getElementById("generate").addEventListener("click", getEmail);