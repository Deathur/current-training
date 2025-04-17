window.onload = calcul();
function calcul() {
    let QuantWeb = document.getElementById("quantweb").value;
    let TotalWeb = QuantWeb * 6500;
    document.getElementById("totalweb").innerText = TotalWeb
    let QuantApi = document.getElementById("quantapi").value;
    let TotalApi= QuantApi * 1200;
    document.getElementById("totalapi").innerText = TotalApi 
    let QuantHebe = document.getElementById("quanthebe").value;
    let TotalHebe = QuantHebe * 150;
    document.getElementById("totalhebe").innerText = TotalHebe
    let QuantForma = document.getElementById("quantforma").value;
    let TotalForma = QuantForma * 120;
    document.getElementById("totalforma").innerText = TotalForma
    let TotalHT = TotalWeb + TotalApi + TotalHebe + TotalForma
    document.getElementById("HT").innerText = TotalHT;
    let TVA = TotalHT * 0.2
    document.getElementById("TVA").innerText = TVA;
    document.getElementById("TTC").innerText = TotalHT + TVA;
}