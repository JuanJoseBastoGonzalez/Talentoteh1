let mylist: number[] = new Array(10);
let i: number = 0;
let n: number = 10;
let j: number = 0;
let promedio: number = 0;

const itarains = document.getElementById("iteraction") as HTMLSpanElement;
const rangeSlider = document.getElementById("rs-range-line") as HTMLInputElement;
const rangeBullet = document.getElementById("rs-bullet") as HTMLSpanElement;
const saveButton = document.getElementById("saveButton") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;
const showResult = document.getElementById("results") as HTMLDivElement;
const restart = document.getElementById("reset") as HTMLButtonElement;

function clerdata(): void {
    alert("Reiniciando variables...")
    location.reload();
}

// const bod = document.getElementById("boddy") as HTMLBodyElement;
// bod.innerHTML= `
//     <span > lleva <span class="iteraction">0 </span> numeros </span>
//    <div class="container">
//         <div class="range-slider">
//           <span id="rs-bullet" class="rs-label">0</span>
//           <input id="rs-range-line" class="rs-range" type="range" value="0" min="0" max="2000">
//         </div>
//         <div class="box-minmax">
//           <span>0</span><span>2000</span>
//         </div>
//         <button id="saveButton">SAVE</button>
//         <div id="output"></div>
//     </div>
//       <div id="results"></div>
// `
// Obtener los elementos del DOM

// Función para actualizar el valor del slider
function showSliderValue(): void {
    if (rangeSlider && rangeBullet) {
        rangeBullet.innerHTML = rangeSlider.value;
        const bulletPosition = (parseInt(rangeSlider.value) / parseInt(rangeSlider.max || "1"));
        rangeBullet.style.left = (bulletPosition * 578) + "px"; // Ajusta la posición
    }
}

// Función para mostrar el valor seleccionado al hacer clic en el botón
function displaySelectedValue(): void {
    if (i != n) {
        if (output) {
            if (i < n) {
                mylist[i] = Number(rangeSlider.value);
                i++;
                output.innerHTML = `Selected Value: ${rangeSlider.value} `;
                console.log(mylist);
                itarains.innerHTML = String(i);
            } else {
                alert(`Solo se permiten ${n} números`);
            }

            let resultContent = '';
            // Mostrar los valores una vez que se haya alcanzado el límite
            if (i === n) {
                // Variable para almacenar todos los valores
                for (j = 0; j < n; j++) {
                    promedio += Number(mylist[j]);
                    let numero: number = mylist[j];
                }
                resultContent += `El promedio es ${promedio / 10}<br>`;
                showResult.innerHTML = resultContent;
            }
            let newlist = mylist.sort();
        }
    } else {
        alert("numero maximo alcanzado solo se pueden 10 numeros")
    }
}

// Añadir los event listeners
rangeSlider.addEventListener("input", showSliderValue, false);
saveButton.addEventListener("click", displaySelectedValue, false);
restart.addEventListener("click", clerdata, false);

