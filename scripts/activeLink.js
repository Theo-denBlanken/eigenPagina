// stop de linkjes van de navigatie in een array

var linkjes = document.getElementsByClassName('nav__item');
console.log('het menu: ' + linkjes[0]);

const zetActiveOm = (el) => {
  // alle active classes weghalen
  for(let i=0; i<linkjes.length; i++) {
    linkjes[i].classList.remove('nav__item--active');
  }
  el.classList.add('nav__item--active');
}

for (let i=0; i<linkjes.length; i++) {
  linkjes[i].addEventListener('click', function() {
    zetActiveOm(this);
  })
}

// positie van de navigatieBalk
// de navigatieBalk pakken
const navigatieBalk = document.getElementById('nav');

// de verschuiving van de navigatiebalk bepalen
let navPositie = navigatieBalk.offsetTop;
let voormaligeScrollWaarde = 0; //de laatste scrollPosiite van het venster

// ga na of de naviagtie moet bewegen
const kleefNav = () => {
  if(window.scrollY >= navPositie) {
    schuifNav();
  } else {
    // alle eventueel toegevoegde klasnamen verwijderen
    navigatieBalk.classList.remove('kleven');
    navigatieBalk.classList.remove('verbergen');
  }
  voormaligeScrollWaarde = window.scrollY;
}
const schuifNav = () => {
  console.log('de balk moet schuiven');
  if ( window.scrollY < voormaligeScrollWaarde ) {
    // boven in venster schuiven
    navigatieBalk.classList.remove('verbergen');
    navigatieBalk.classList.add('kleven');
  } else {
    // uit het venster schuiven
    navigatieBalk.classList.remove('kleven');
    navigatieBalk.classList.add('verbergen');
  }
}
window.addEventListener('scroll', kleefNav, false);
