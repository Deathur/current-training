let listeMot = document.querySelector('.listeMot');
fetch("https://trouve-mot.fr/api/random/10")
    .then((response) => response.json())
    .then((words) => test(words))

function test(test) {    
    let mot;
    for (i = 0; i < test.length; i++) {
        const li = document.createElement('li');
        mot = test[i].name;
        li.appendChild(document.createTextNode(mot));
        listeMot.appendChild(li);
    }
}