window.onload = reset();

function reset() {
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
}
function etape1fini() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
}
function etape2fini() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
    document.getElementById("step4").style.display = "none";
}
function etape3fini() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "block";
    const mail = document.getElementById("email").value;
    document.getElementById("finmail").innerText = "Un email de confirmation à était envoyé à l'adresse : " + mail;
}