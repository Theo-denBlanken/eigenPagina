// stop de linkjes van de naviagtie in een array

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
