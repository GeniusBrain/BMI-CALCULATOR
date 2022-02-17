let showRS = document.getElementById("showResult")


function calculate() {
  let wtValue = document.getElementById("weight").value;
  let htValue = document.getElementById("height").value;
  let result= wtValue / (htValue*htValue)
  showRS.innerText += result + " " + "Kg/m^2";
  
} 

