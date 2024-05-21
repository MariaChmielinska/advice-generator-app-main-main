// ¡Buena suerte!

//1. API: Object in Object. propiedades advice and slip.id
//2. {slip_id} to return of every advice in field advice


const button = document.querySelector(".card__dice");
const adviceId = document.querySelector("#advice-id");
const quote = document.querySelector(".card__quote");

button.addEventListener("click", async function(){

    const response = await fetch("https://api.adviceslip.com/advice");
    console.log("object response check API OBJ", response);

    const data = await response.json();
    console.log("OBJECT DATA", data);

quote.textContent = data.slip.advice;

adviceId.textContent = data.slip.id;


})