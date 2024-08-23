
let menuActive = document.querySelectorAll('.menu_link');

let arrayMenu = Array.from(menuActive)

let listPages = [ 'index', 'imagenes', 'videos', 'audios', 'tablas', 'formularios']

let namePage = window.location.pathname
                            .split('.')[0]
                            .split('/')[1]


if ( listPages.includes(namePage) ) {

    switch( namePage ){
      case 'index':
        arrayMenu[0].classList.add('active')
      break;
      case 'imagenes':
        arrayMenu[1].classList.add('active')
      break;
      case 'videos':
        arrayMenu[2].classList.add('active')
      break;
      case 'audios':
        arrayMenu[3].classList.add('active')
      break;
      case 'tablas':
        arrayMenu[4].classList.add('active')
      break;
      case 'formularios':
        arrayMenu[5].classList.add('active')
      break;
      default: 'no hay mas opciones'
    }
  
}



