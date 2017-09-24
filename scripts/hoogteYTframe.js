// de breedte van het iframe bepalen

let iframes = document.getElementsByClassName('inhoud__iframe');

var stelHoogteIn = () =>  {
  let iFrameBreedte = iframes[0].clientWidth;
  for(let i=0; i<iframes.length; i++) {
    console.log('iframe nummer '+i +' : ' + iframes[i]);
    // de verhouding is 1280 bij 720
    // de hoogte dus met die factor instellen
    iframes[i].style.height = iFrameBreedte * .5625 + 'px';
  }
}
stelHoogteIn();
window.addEventListener('resize', stelHoogteIn);
