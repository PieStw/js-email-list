const emailList = [];


function getEmail(){
  for(let i = 0; i < 10; i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        emailList.push(data.response);
        document.getElementById("email-container").innerHTML += `<p>${data.response}</p>`;
      });
  }
}



getEmail()
