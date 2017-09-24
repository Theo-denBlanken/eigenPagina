let headerSVG = document.getElementById('ringen');
const AANTALRINGEN = 38;
const MIDDEN = headerSVG.clientWidth/2;
let muisPositie = MIDDEN*3/2;
const AMPLITUDE = 80;
const GOLFLENGTE = MIDDEN/6;
let alleRingen = [];
class Ring {
  constructor(cx,cy,r, vertraging, opaciteit) {
    this.opaciteit = opaciteit;
    this.ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.ring.setAttribute('cx', cx);
    this.ring.setAttribute('cy', cy);
    this.ring.setAttribute('r', r);
    this.ring.setAttribute('class', 'ring');
    this.ring.style.opacity = Math.max(opaciteit, 0.01);
    this.cx = cx;
    this.cy = cy;
    this.vertraging = vertraging;
    headerSVG.appendChild(this.ring);
  }
  // de beweging
  verplaats(doelX) {
    this.vertraging = Math.max(this.vertraging, 0.001);
    this.cx += (doelX-this.cx)/this.vertraging;
    this.cy = 80 + AMPLITUDE * Math.cos(this.cx/GOLFLENGTE);
    this.ring.setAttribute('cx', this.cx+MIDDEN);
    this.ring.setAttribute('cy', this.cy);
  }
}

// maak de ringen en zet ze in de array
for (let i = 0; i<AANTALRINGEN; i++) {
  let r = new Ring(MIDDEN,50,(8*i), 5-(.1*i), 1-(i*0.03));  // cx, cy, r, vertraging, transparantie
  alleRingen.push(r);
}
// pas de variabele muispositie aan als de muis beweegt
document.addEventListener('mousemove', function(e) {
  muisPositie = e.clientX/2;
});

// continue bewegen
(function bewegen() {
  alleRingen[0].verplaats(muisPositie);
  for( let i=1; i<AANTALRINGEN; i++) {
    alleRingen[i].verplaats(alleRingen[i-1].cx);
  }
  requestAnimationFrame(bewegen);
})();


console.log(alleRingen);
