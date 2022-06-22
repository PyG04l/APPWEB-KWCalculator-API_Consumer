"use strict";
let electrodomesticos = [];
const selectElement = document.querySelector("#selBox");

let form = document.createElement("form");
form.action = selectElement.addEventListener("change", (evento) => {
  switch (evento.target.value) {
    case "":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/electrodomestico.png";
      break;
    case "Nev":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/nevera.png";
      //electrodomesticos.push("Nevera");
      //window.localStorage.setItem(
      //  "electrodomesticos",
      //  JSON.stringify(electrodomesticos)
      //);
      break;
    case "Lav":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/lavadora.png";
      break;
    case "Vit":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/vitroceramica.png";
      break;
    case "Vaj":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/lavavajillas.png";
      break;
    case "Caf":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/cafetera.png";
      break;
    case "TV":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/TV.png";
      break;
    case "PC":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/PC.png";
      break;
    case "SisSon":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/sonido.png";
      break;
    case "Carg":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/cargador.png";
      break;
    case "Asp":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/aspiradora.png";
      break;
    case "Pla":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/plancha.png";
      break;
    case "Otr":
      console.log(evento.target.value);
      document.getElementById("img").src = "./img/electrodomestico2.png";
      break;
  }
});
