"use strict";
let mylist = new Array(10);
let i = 0;
let n = 10;
let j = 0;
let promedio = 0;
const bod = document.getElementById("boddy");
bod.innerHTML = `
    <div class="cent"><span class="titulo"> Numeros <span id="iteraction">0</span>/10</span>
    </div>
    <div class="container">
        <div class="range-slider">
            <span id="rs-bullet" class="rs-label">0 </span>
            <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="2000">
        </div>
        <div id="promedio" class="box-minmax">
            <span>0</span><span>2000</span>
            <div class="actualnumber" id="output"> </div>
        </div>
        <button class="savebutton" id="saveButton">SAVE</button>
        <button class="rest" id="reset">reset</button>
    </div>
    <div id="results"></div>
`;
const itarains = document.getElementById("iteraction");
const rangeSlider = document.getElementById("rs-range-line");
const rangeBullet = document.getElementById("rs-bullet");
const saveButton = document.getElementById("saveButton");
const output = document.getElementById("output");
const showResult = document.getElementById("results");
const restart = document.getElementById("reset");
function clerdata() {
    alert("Reiniciando variables...");
    location.reload();
}
// Función para actualizar el valor del slider
function showSliderValue() {
    if (rangeSlider && rangeBullet) {
        rangeBullet.innerHTML = rangeSlider.value;
        const bulletPosition = (parseInt(rangeSlider.value) / parseInt(rangeSlider.max || "1"));
        rangeBullet.style.left = (bulletPosition * 578) + "px"; // Ajusta la posición
    }
}
function displaySelectedValue() {
    if (i != n) {
        if (output) {
            if (i < n) {
                mylist[i] = Number(rangeSlider.value);
                i++;
                output.innerHTML = `Selected Value: ${rangeSlider.value} `;
                console.log(mylist);
                itarains.innerHTML = String(i);
            }
            else {
                alert(`Solo se permiten ${n} números`);
            }
            let resultContent = '';
            if (i === n) {
                for (j = 0; j < n; j++) {
                    promedio += Number(mylist[j]);
                    let numero = mylist[j];
                }
                resultContent += `La suma es ${promedio}<br>`;
                resultContent += `El promedio es ${promedio / 10}<br>`;
                console.log(`La suma es ${promedio}`);
                console.log(`El promedio es ${promedio / 10}`);
                showResult.innerHTML = resultContent;
            }
            let newlist = mylist.sort();
        }
    }
    else {
        alert(`Solo se permiten ${n} números`);
    }
}
// Añadir los event listeners
rangeSlider.addEventListener("input", showSliderValue, false);
saveButton.addEventListener("click", displaySelectedValue, false);
restart.addEventListener("click", clerdata, false);
