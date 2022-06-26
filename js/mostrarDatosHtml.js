"use strict";

function mostraDatos(){
  
  console.log("Dentro de la fun mostraDatos ")
  
  const lav = 2.55,
  tv = 0.099,
  vaj = 2.46,
  caf = 1.95,
  asp = 1.44,
  pla = 2;
  let resul;


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

  const lavadora = document.querySelector("#elec li:first-child");
  const parrafoLav = document.createElement("p");
  resul = ((lav * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoLav.textContent = `${resul}€/h`;
  lavadora.append(parrafoLav);

  const tele = document.querySelector("#elec li:nth-child(2)");
  const parrafoTv = document.createElement("p");
  resul = ((tv * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoTv.textContent = `${resul}€/h`;
  tele.append(parrafoTv);

  const vajilla = document.querySelector("#elec li:nth-child(3)");
  const parrafoVaj = document.createElement("p");
  resul = ((vaj * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoVaj.textContent = `${resul}€/h`;
  vajilla.append(parrafoVaj);

  const cafetera = document.querySelector("#elec li:nth-child(4)");
  const parrafoCaf = document.createElement("p");
  resul = ((caf * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoCaf.textContent = `${resul}€/h`;
  cafetera.append(parrafoCaf);

  const aspiradora = document.querySelector("#elec li:nth-child(5)");
  const parrafoAsp = document.createElement("p");
  resul = ((asp * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoAsp.textContent = `${resul}€/h`;
  aspiradora.append(parrafoAsp);

  const plancha = document.querySelector("#elec li:nth-child(6)");
  const parrafoPla = document.createElement("p");
  resul = ((pla * preciosLuz[horaActual]) / 1000).toFixed(2);
  parrafoPla.textContent = `${resul}€/h`;
  plancha.append(parrafoPla);
  
}

export {mostraDatos};