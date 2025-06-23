let grille = document.querySelector('.main-grid');

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
          let name = data[i].name;
          img.src = `https://raw.githubusercontent.com/Mar-7th/StarRailRes/refs/heads/master/${data[i].preview}`;
          div.appendChild(document.createTextNode(name));
          div.appendChild(img);
          grille.appendChild(div);
        }
      }
    })
  });