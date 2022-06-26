"use strict";

//import { getHora } from "./gestionHoras.js";

const mainElement = document.querySelector("#main");
let cont = 0;
let listaElectrodomesticos = [];
const hora = new Date().getHours();
const formElement = document.forms.mother;
const storedListaElectrodomesticos = window.localStorage.getItem(
  "listaElectrodomesticos"
);

function clearInputs() {
  document.getElementById("img").src = "./img/electrodomestico.png";
  document.getElementById("selBox").selectedIndex = 0;
  document.getElementById("nombre").value = "";
  document.getElementById("wats").value = "";
}

function addItem() {
  const arrData = [];
  arrData.push(document.getElementById("selBox").value);
  arrData.push(
    document
      .getElementById("selBox")
      .options[
        document.getElementById("selBox").selectedIndex
      ].text.toUpperCase()
  );
  arrData.push(document.getElementById("nombre").value);
  arrData.push(document.getElementById("wats").value);
  return arrData;
}

function allInLS(event) {
  event.preventDefault();
  const arr = addItem();
  listaElectrodomesticos.push(arr);
  window.localStorage.setItem(
    "listaElectrodomesticos",
    JSON.stringify(listaElectrodomesticos)
  );
  //console.log(listaElectrodomesticos[listaElectrodomesticos.length - 1][0]);
  const fE = draw1Item(arr);
  mainElement.append(fE);
  if (!document.getElementById("total")) {
    pintarTotal(calcularTotal());
  } else {
    document.getElementById("total").remove();
    pintarTotal(calcularTotal());
  }
}

function draw1Item(arr) {
  const fragmentElement = document.createDocumentFragment();
  const sectionElement = document.createElement("section");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const pName = document.createElement("p");
  const pDesc = document.createElement("p");
  const pPotencia = document.createElement("p");
  const pPrecio = document.createElement("p");
  const quit = document.createElement("a");
  const img2 = document.createElement("img");
  const preciosLuz = JSON.parse(localStorage.getItem("Precios"));

  sectionElement.setAttribute("id", cont++);
  img.setAttribute("src", `./img/${arr[0]}.png`);
  img2.setAttribute("src", `./img/trash.png`);

  pName.textContent = `${arr[1]}`;
  pDesc.textContent = `${arr[2]}`;
  pPotencia.textContent = `${arr[3]}Kw`;
  pPrecio.textContent = `${((preciosLuz[hora] * arr[3]) / 1000).toFixed(2)}€/h`; //AQUI SE CALCULA EL PRECIO

  fragmentElement.append(sectionElement);
  sectionElement.append(img);
  sectionElement.append(div);
  sectionElement.append(quit);
  div.append(pName);
  div.append(pDesc);
  div.append(pPotencia);
  div.append(pPrecio);
  quit.append(img2);

  clearInputs();
  return fragmentElement;
}

function drawAllItem() {
  let fE = [];
  for (const element of listaElectrodomesticos) {
    fE = draw1Item(element);
    mainElement.append(fE);
  }
}

function calcularTotal() {
  let precio = [];
  let suma = 0;
  const preciosList = [...listaElectrodomesticos];
  if (preciosList) {
    for (let i = 0; i < preciosList.length; i++) {
      precio = document.getElementById(`${i}`).textContent.split("w");
      precio = precio[1].split("€");
      suma += +precio[0];
    }
  }
  suma = suma.toFixed(2);
  return suma;
}

function pintarTotal(suma) {
  const fragmentElement = document.createDocumentFragment();
  const sectionElement = document.createElement("section");
  const pSuma = document.createElement("p");

  sectionElement.setAttribute("id", "total");

  pSuma.textContent = `Precio TOTAL en este momento: ${suma} €/h`;

  sectionElement.append(pSuma);
  fragmentElement.append(sectionElement);
  mainElement.append(fragmentElement);

  if (!document.getElementById("hora")) {
    createSel();
  } else {
    setTimeout("location.reload(true);", 1);
  }
}

function erase1() {
  if (document.querySelector("main")) {
    const aElement = document.querySelector("main");
    aElement.addEventListener("click", (event) => {
      if (event.target.tagName == "IMG") {
        const imgDir = event.target.parentNode.parentNode;
        if (imgDir.tagName == "SECTION") {
          document.getElementById(imgDir.id).remove();
          listaElectrodomesticos.splice(`${imgDir.id}`, 1);
          window.localStorage.setItem(
            "listaElectrodomesticos",
            JSON.stringify(listaElectrodomesticos)
          );
          setTimeout("location.reload(true);", 1);
          pintarTotal(calcularTotal());
        }
      }
    });
  }
}

function createSel() {
  const mainElement = document.querySelector("#main");
  const fElement = document.createElement("form");
  const otraHora = document.createElement("p");
  /* otraHora.textContent("Elije otra hora para ver el consumo"); */
  const selElement = document.createElement("select");
  const opElement = document.createElement("option");

  fElement.setAttribute("id", "hora");
  selElement.setAttribute("name", "horario");
  selElement.setAttribute("id", "horario");
  opElement.setAttribute("value", 25);

  opElement.text = "Hora actual";

  mainElement.prepend(fElement);
  fElement.prepend(selElement);
  selElement.prepend(opElement);

  for (let i = 0; i < 9; i++) {
    let element = document.createElement("option");
    element.text = `0${i}:00-0${i + 1}:00`;
    element.setAttribute("value", `${i}`);
    selElement.append(element);
  }

  let op1Element = document.createElement("option");
  op1Element.setAttribute("value", 9);
  op1Element.text = "09:00-10:00";
  selElement.append(op1Element);

  for (let i = 10; i < 19; i++) {
    let element = document.createElement("option");
    element.text = `${i}:00-${i + 1}:00`;
    element.setAttribute("value", `${i}`);
    selElement.append(element);
  }

  let op2Element = document.createElement("option");
  op2Element.setAttribute("value", 19);
  op2Element.text = "19:00-20:00";
  selElement.append(op2Element);

  for (let i = 20; i < 24; i++) {
    let element = document.createElement("option");
    if (i == 23) {
      element.text = `${i}:00-00:00`;
      element.setAttribute("value", `${i}`);
      selElement.append(element);
    } else {
      element.text = `${i}:00-${i + 1}:00`;
      element.setAttribute("value", `${i}`);
      selElement.append(element);
    }
  }
}

function createTotal2(total) {
  const dropElement = document.querySelector("#hora");
  const pElement = document.createElement("p");
  pElement.setAttribute("id", "total2");
  pElement.textContent = `TOTAL: ${total}`;
  dropElement.append(pElement);
}

function getHora() {
  const selectElement = document.querySelector("#horario");
  selectElement.addEventListener("change", (evento) => {
    const op = evento.target.value;

    if (op >= 0 && op <= 24) {
      const arrPrices = [...JSON.parse(window.localStorage.getItem("Precios"))];
      const selectedPrice = parseFloat(arrPrices[op]);
      let totalItems = 0;
      for (let i = 0; i < listaElectrodomesticos.length; i++) {
        totalItems += parseFloat(listaElectrodomesticos[i][3]);
      }
      const total = `${((totalItems * selectedPrice) / 1000).toFixed(2)}€/h`;
      console.log(total);

      if (!document.getElementById("total2")) {
        createTotal2(total);
      } else {
        document.getElementById("total2").remove();
        createTotal2(total);
      }
    }
  });
}

if (storedListaElectrodomesticos !== null) {
  listaElectrodomesticos = [...JSON.parse(storedListaElectrodomesticos)];
}

formElement.addEventListener("submit", allInLS);

erase1();
drawAllItem();
pintarTotal(calcularTotal());
getHora();
