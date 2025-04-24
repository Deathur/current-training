window.addEventListener("DOMContentLoaded", (event) => {
  /* MENU */
  const LeMenu = document.getElementById("navigation");
  const CmdMenu = document.getElementById("MenuBurger");
  CmdMenu.addEventListener('click',function(){
    LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
  });
  // au chargement de la page
  window.onload = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };
  // au redimensionnement de la fenêtre
  window.onresize = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };
});

let menuItems = document.querySelectorAll('nav ul li');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', function(event) {
    let submenu = this.querySelector('.servicemenu');
    if (submenu) {
        submenu.classList.add('show-menu');
    }
  });
});
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      let submenu = this.querySelector('.servicemenu');
      if (submenu) {
          submenu.classList.remove('show-menu');
      }
    });
  });
  menuItems.forEach(item => {
    item.addEventListener('mouseleave', function(event) {
      let submenu = this.querySelector('.servicemenu');
      if (submenu) {
          submenu.classList.remove('show-menu');
      }
    });
  });
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function(event) {
      let submenu = this.querySelector('.proposmenu');
      if (submenu) {
        submenu.classList.add('show-menu');
      }
    });
  });
  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      let submenu = this.querySelector('.proposmenu');
      if (submenu) {
        submenu.classList.remove('show-menu');
      }
    });
  });
  menuItems.forEach(item => {
    item.addEventListener('mouseleave', function(event) {
      let submenu = this.querySelector('.proposmenu');
      if (submenu) {
          submenu.classList.remove('show-menu');
      }
    });
  });