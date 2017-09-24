// verschillende social media scripts
// script facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

  // script google-analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45793530-1', 'xs4all.nl');
  ga('send', 'pageview');

  // script twitterknop
  // de inhoud  in het twitterbericht plaatsen
  const paginaKop = document.getElementById('paginaKop').innerHTML;
  const tagline = document.getElementById('tagline').innerHTML;
  let twitTekst = '//twitter.com/intent/tweet/?url=' + document.location + '&amp;via=theodenblanken&amp;text=Lessen Frontend | ' + paginaKop + ' | ' + tagline;
  twitTekst = twitTekst.split(" ").join("&20");
  document.title = 'Lessen Frontend | ' + paginaKop + ', ' + tagline;
  document.getElementById('socials__twitter').setAttribute('href', '//twitter.com/intent/tweet/?url=' + document.location + '&amp;via=theodenblanken&amp;text=Een%20muisvolger%20maken%20met%20JS');

  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
