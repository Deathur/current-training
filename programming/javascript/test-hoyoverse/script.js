let grille = document.querySelector('.main-grid');
let elementData = {};
let pathData;
let pathName;
const data = fetch(
    `https://api.mihomo.me/sr_info_parsed/700731421?lang=fr&is_force_update=true`,
    {
      headers: {
        "User-Agent": "https://review-hsr.vercel.app",
        Host: "api.mihomo.me",
      }
    }
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    fetch("https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/index_new/fr/characters.json")
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      for (i = 0; i <= 9999; i++) {
        if (data[i] !== undefined) {
          const div = document.createElement("div");
          let img = document.createElement("img");
          let element = document.createElement("img");
          let path = document.createElement("img");
          let name = data[i].name;
          let elementName = data[i].element;
          const div2 = document.createElement("div");
          div2.className = "div-icon";
          img.src = `https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/${data[i].preview}`;
          element.src = `https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/icon/element/${elementName}.png`
          element.className = "icon";
          path.className = "icon";
          let pathData = data[i].path;
          switch(pathData){
            case "Warrior":
            pathData = "DestructionSmall";
            pathName = "Voie de la Destruction"
            break;
            case "Rogue":
            pathData = "HuntSmall";
            pathName = "Voie de la Chasse"
            break;
            case "Mage":
            pathData = "EruditionSmall";
            pathName = "Voie de l'Erudition"
            break;
            case "Shaman":
            pathData = "HarmonySmall";
            pathName = "Voie de l'Harmonie"
            break;
            case "Warlock":
            pathData = "NihilitySmall";
            pathName = "Voie de la Nihilité"
            break;
            case "Knight":
            pathData = "PreservationSmall";
            pathName = "Voie de la Préservation"
            break;
            case "Priest":
            pathData = "AbundanceSmall";
            pathName = "Voie de l'Abondance"
            break;
            case "Memory":
            pathData = "RemembranceSmall";
            pathName = "Voie du Souvenir"
            break;
            default:
              break;
          }
          path.src = `https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/icon/path/${pathData}.png`;
          div.appendChild(document.createTextNode(name));
          div.appendChild(div2)
          div2.appendChild(element);
          div2.appendChild(path)
          div.appendChild(document.createTextNode(pathName));
          div.appendChild(img);
          grille.appendChild(div);
        }
      }
    })
  });