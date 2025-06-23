let grille = document.querySelector('.main-grid');
let elementData = {};
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
            pathName = "DestructionSmall";
            break;
            case "Rogue":
            pathName = "HuntSmall";
            break;
            case "Mage":
            pathName = "EruditionSmall";
            break;
            case "Shaman":
            pathName = "HarmonySmall";
            break;
            case "Warlock":
            pathName = "NihilitySmall";
            break;
            case "Knight":
            pathName = "PreservationSmall";
            break;
            case "Priest":
            pathName = "AbundanceSmall";
            break;
            case "Memory":
            pathName = "RemembranceSmall";
            break;
            default:
              break;
          }
          path.src = `https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/icon/path/${pathName}.png`;
          div.appendChild(document.createTextNode(name));
          div.appendChild(div2)
          div2.appendChild(element);
          div2.appendChild(path)
          div.appendChild(img);
          grille.appendChild(div);
        }
      }
    })
  });