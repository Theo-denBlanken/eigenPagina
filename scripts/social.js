// de kop en tagline uit de paginatitel halen
let titel = document.title.split(' | ');
titel = titel[1].split(': ');
document.getElementById('paginaKop').innerHTML = titel[0];
document.getElementById('tagline').innerHTML = titel[1];
let twitTekst = '//twitter.com/intent/tweet/?url=' + document.location + '&amp;via=theodenblanken&amp;text=Lessen Frontend | ' + paginaKop + ' | ' + tagline;
twitTekst = twitTekst.split(" ").join("&20");
document.title = 'Lessen Frontend | ' + paginaKop + ', ' + tagline;

// stop de URL van de pagina in een constante
let url = document.URL;
url = url.split(':').join('%3A');
// en voeg ze aan de soclial links toe....
document.getElementById('fb_link').href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
document.getElementById('gl_link').href = 'https://plus.google.com/share?url=' + url;
document.getElementById('twt_link').href = 'https://twitter.com/home?status=' + url;


// script google-analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45793530-1', 'xs4all.nl');
ga('send', 'pageview');
