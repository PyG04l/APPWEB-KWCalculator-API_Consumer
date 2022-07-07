"use strict";

function mostraDatos(){
  
  let resul = 0;

  const els = [0.624, 0.099, 1.5, 1.95, 1.44, 2];


  let fechaHoy = new Date();
  const horaActual = fechaHoy.getHours();
  fechaHoy = String(fechaHoy.toLocaleDateString());

  const preciosLuz = JSON.parse(localStorage.getItem("Precios"));
  const maximoValor = JSON.parse(localStorage.getItem("maximoValor"));
  const minimoValor = JSON.parse(localStorage.getItem("minimoValor"));

  const tituloFecha = document.querySelector("body h1");
  const fechaPintar = document.createElement("p");
  fechaPintar.textContent = `Hoy es ${fechaHoy}`;
  tituloFecha.append(fechaPintar);

  const ulArticle = document.querySelector("article>ul");
  for (let i = 0; i < preciosLuz.length; i++) {
    if (i < 9) {
      const newLi = document.createElement("li");
      newLi.textContent = `[0${i}h-0${i + 1}h]: ${preciosLuz[i]} €/h `;
      ulArticle.append(newLi);
    } else {
      if (i === 9) {
        const newLi = document.createElement("li");
        newLi.textContent = `[0${i}h-${i + 1}h]: ${preciosLuz[i]} €/h`;
        ulArticle.append(newLi);
      } else {
        const newLi = document.createElement("li");
        newLi.textContent = `[${i}h-${i + 1}h]: ${preciosLuz[i]} €/h`;
        ulArticle.append(newLi);
      }
    }
  }

  const pMax = document.querySelector("#pMax");
  const parrafoMax = document.createElement("p");
  parrafoMax.textContent = `Máximo: ${maximoValor[1]}h > ${maximoValor[0]}€/Mw`;
  pMax.append(parrafoMax);

  const pMin = document.querySelector("#pMin");
  const parrafoMin = document.createElement("p");
  parrafoMin.textContent = `Mínimo: ${minimoValor[1]}h > ${minimoValor[0]}€/Mw  `;
  pMin.append(parrafoMin);

  const precioActual = document.querySelector("#pAct");
  const parrafoPrecioActual = document.createElement("p");
  parrafoPrecioActual.textContent = `Actual: ${horaActual}h > ${preciosLuz[horaActual]}€/Mw`;
  precioActual.append(parrafoPrecioActual);

  for (let i = 1; i < 7; i++) {
    let elect = document.querySelector(`#elec li:nth-child(${i})`);
    let p = document.createElement("p");
    resul = ((els[i] * preciosLuz[horaActual]) / 1000).toFixed(2);
    p.textContent = `${resul}€/h`;
    elect.append(p);
  }

}

export {mostraDatos};
