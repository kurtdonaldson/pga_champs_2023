const tableCellsC = document.getElementById("ciaran").querySelectorAll("td");
const tableCellsJ = document.getElementById("joel").querySelectorAll("td");
const tableCellsD = document.getElementById("dinesh").querySelectorAll("td");
const tableCellsK = document.getElementById("kurt").querySelectorAll("td");
const ciaranTotalCell = document.querySelector(".totalScoreCiaran");
const joelTotalCell = document.querySelector(".totalScoreJoel");
const dineshTotalCell = document.querySelector(".totalScoreDinesh");
const kurtTotalCell = document.querySelector(".totalScoreKurt");


let ciaranTotal = 0;

for(i = 0; i < tableCellsC.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        ciaranTotal += parseInt(tableCellsC[i].innerText);
        console.log(tableCellsC[i].innerText);
        console.log(i);
    }
}

ciaranTotalCell.innerText = ciaranTotal;

//Joel

let joelTotal = 0;

for(i = 0; i < tableCellsJ.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        joelTotal += parseInt(tableCellsJ[i].innerText);
        console.log(tableCellsJ[i].innerText);
        console.log(i);
    }
}

joelTotalCell.innerText = joelTotal;

let dineshTotal = 0;

for(i = 0; i < tableCellsD.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        dineshTotal += parseInt(tableCellsD[i].innerText);
        console.log(tableCellsD[i].innerText);
        console.log(i);
    }
}

dineshTotalCell.innerText = dineshTotal;

let kurtTotal = 0;

for(i = 0; i < tableCellsK.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        kurtTotal += parseInt(tableCellsK[i].innerText);
        console.log(tableCellsK[i].innerText);
        console.log(i);
    }
}

kurtTotalCell.innerText = kurtTotal;

