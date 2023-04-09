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
        if(tableCellsC[i].innerText == "E"){
            continue;
        }else{
            ciaranTotal += parseInt(tableCellsC[i].innerText);
        }
        
    }
}

ciaranTotalCell.innerText = ciaranTotal;
console.log(ciaranTotal);

//Joel

let joelTotal = 0;

for(i = 0; i < tableCellsJ.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        if(tableCellsJ[i].innerText == "E"){
            continue;
        }else{
            joelTotal += parseInt(tableCellsJ[i].innerText);
        }
        
    }
}

joelTotalCell.innerText = joelTotal;

let dineshTotal = 0;

for(i = 0; i < tableCellsD.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        if(tableCellsD[i].innerText == "E"){
            continue;
        }else{
            dineshTotal += parseInt(tableCellsD[i].innerText);
        }
        
    }
}


dineshTotalCell.innerText = dineshTotal;

let kurtTotal = 0;

for(i = 0; i < tableCellsK.length; i++){
    if(i > 0 && i < 19 && i % 6 == 0){
        if(tableCellsK[i].innerText == "E"){
            continue;
        }else{
            kurtTotal += parseInt(tableCellsK[i].innerText);
        }
        
    }
}

kurtTotalCell.innerText = kurtTotal;

//Order tables

const ciaranDiv = document.getElementById('ciaran');
const parent = ciaranDiv.parentNode;

const joelDiv = document.getElementById('joel');
const dineshDiv = document.getElementById('dinesh');
const kurtDiv = document.getElementById('kurt');

const kurtTotalScore = parseInt(document.querySelector("#kurt > table > tbody > tr.last-row > td:nth-of-type(6)").innerText);
const joelTotalScore = parseInt(document.querySelector("#joel > table > tbody > tr.last-row > td:nth-of-type(6)").innerText);
const ciaranTotalScore = parseInt(document.querySelector("#ciaran > table > tbody > tr.last-row > td:nth-of-type(6)").innerText);
const dineshTotalScore = parseInt(document.querySelector("#dinesh > table > tbody > tr.last-row > td:nth-of-type(6)").innerText);

let scoreArr = [kurtTotalScore, joelTotalScore, ciaranTotalScore, dineshTotalScore];
scoreArr.sort((a, b) => a - b);

console.log(scoreArr);


kurtDiv.style.order = scoreArr.indexOf(kurtTotalScore);
joelDiv.style.order = scoreArr.indexOf(joelTotalScore);
ciaranDiv.style.order = scoreArr.indexOf(ciaranTotalScore);
dineshDiv.style.order = scoreArr.indexOf(dineshTotalScore);

