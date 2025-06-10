let choixPlat = parseInt(prompt("Choisissez le jour de la semaine entre 1 et 7"))

switch (choixPlat) {
    case 1:
        console.log("Plat du jour: Spaghetti Bolognaise");
        break;
    case 2:
        console.log("Plat du jour: Poulet rôti");
        break;
    case 3:
        console.log("Plat du jour: Poisson pané");
        break;
    case 4:
        console.log("Plat du jour: Salade composée");
        break;
    case 5:
        console.log("Plat du jour: Pizza Margherita");
        break;
    default:
        console.log("C'est le W-E donc pas de plat")
        break;
}