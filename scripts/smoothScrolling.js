// de linkjes een event meegeven
// ook de page-up linkjes toevegen!!
const omhoogknopjes = document.getElementsByClassName('naarBoven');
const smoothLinks = document.getElementsByClassName('nav__item');
console.log(smoothLinks);
for (let i = 1; i < smoothLinks.length; i++) {
    smoothLinks[i].addEventListener('click', function(e) {
        let doel = this.hash.slice(1); // de hash erafhalen
        // let doelSectie = document.getElementById(doel);
        let doelSectiePositie = document.getElementById(doel).offsetTop;
        console.log('element: ', doel);
        if (doel.length) { // doel bestaat
            e.preventDefault(); // niet direct naar de link gaan
            console.log('We gaan naar: ' +doelSectiePositie);
            animeerScroll(doelSectiePositie);
        }
    });
}
for (let i=1; i<omhoogknopjes.length; i++) {
  omhoogknopjes[i].addEventListener('click', (e) => {
    let doelSectiePositie = 0;
    animeerScroll(0);
  });
}
// een animatie met RequestAnimateionFrame
const animeerScroll = (waarde) => {
    var tussenstap = window.pageYOffset; // start et huidige scrollwaarde venster
    stapje = () => {
        console.log('waarde: ' + waarde + ' tussenstap: ' + tussenstap);
        tussenstap += (waarde-tussenstap) / 10;
        window.scrollTo(0, tussenstap);
        if (Math.abs(waarde - tussenstap) > 1) {
            window.requestAnimationFrame(stapje);
        }
    }
    stapje();
}
