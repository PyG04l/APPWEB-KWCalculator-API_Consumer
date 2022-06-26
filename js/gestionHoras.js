"use strict";
//import { recogerHora } from "./mostrarListaPersonalizada";

export function getHora(){
  const selectElement = document.querySelector("#horario");

  /*let form = document.createElement("form");
  form.action = */
  selectElement.addEventListener("change", (evento) => {
    const op = evento.target.value;

    if (op >= 0 && op <= 24) {
      return op;
    } else if (op == 25) {
      return new Date().getHours();
    }
    /*
    switch (op) {
      case "25":
        recogerHora(-1);
        break;
      case "0":
        return op;
        break;
      case "1":
        recogerHora(op);
        break;
      case "2":
        recogerHora(op);
        break;
      case "3":
        recogerHora(op);
        break;
      case "4":
        recogerHora(op);
        break;
      case "5":
        recogerHora(op);
        break;
      case "6":
        console.log(op);
        break;
      case "7":
        console.log(op);
        break;
      case "8":
        console.log(op);
        break;
      case "9":
        console.log(op);
        break;
      case "10":
        console.log(op);
        break;
      case "11":
        console.log(op);
        break;
      case "12":
        console.log(op);
        break;
      case "13":
        console.log(op);
        break;
      case "14":
        console.log(op);
        break;
      case "15":
        console.log(op);
        break;
      case "16":
        console.log(op);
        break;
      case "17":
        console.log(op);
        break;
      case "18":
        console.log(op);
        break;
      case "19":
        console.log(op);
        break;
      case "20":
        console.log(op);
        break;
      case "21":
        console.log(op);
        break;
      case "22":
        console.log(op);
        break;
      case "23":
        console.log(op);
        break;
    }*/
  });
}