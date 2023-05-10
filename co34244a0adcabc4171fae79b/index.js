/* Reuseable variables  */
let maxLength = 1;
let x;
let y;

/* DOM selection variables */
const outPut = document.getElementById("output");
const length = document.querySelector(".text-box");
const volume = document.querySelector(".volume");
const mass = document.querySelector(".mass");

document.getElementById("btn").addEventListener("click", converterBtn);
document.getElementById("refresh").addEventListener("click", refreshPage);

/* Convert button */
function converterBtn() {
  convertLength(outPut.value);
  convertVolume(outPut.value);
  convertMass(outPut.value);
}
/* Length conversion */
const convertLength = (meter) => {
  let feet = 3.2808;
  x = meter * feet;
  y = meter / feet;

  if (outPut.value) {
    for (let i = 0; i < maxLength; i++) {
      let el = document.createElement("span");
      length.innerHTML += `
        <span class="new-element">
             ${outPut.value} meters = ${x.toFixed(3)} feet |
             ${outPut.value} feet = ${y.toFixed(3)} meters 
         </span>`;

      return length.appendChild(el);
    }
  }
};

/* Volume conversion */
const convertVolume = (liters) => {
  let gallons = 0.264;
  x = liters * gallons;
  y = liters / gallons;

  if (outPut.value) {
    for (let i = 0; i < maxLength; i++) {
      let el = document.createElement("span");
      volume.innerHTML += `
        <span class="new-element">
          ${outPut.value} liters = ${x.toFixed(3)} gallons |
          ${outPut.value}  gallons = ${y.toFixed(3)} liters 
         </span>`;

      return volume.appendChild(el);
    }
  }
};

/* Mass conversion */
const convertMass = (kilograms) => {
  let pounds = 2.204;
  x = kilograms * pounds;
  y = kilograms / pounds;

  if (outPut.value) {
    for (let i = 0; i < maxLength; i++) {
      let el = document.createElement("span");
      mass.innerHTML += `
        <span class="new-element">
            ${outPut.value} kilos = ${x.toFixed(3)} pounds |
            ${outPut.value} pounds = ${y.toFixed(3)} kilos
         </span>`;

      return mass.appendChild(el);
    }
  }
};

/* Refresh button */
function refreshPage() {
  window.location.reload();
}
