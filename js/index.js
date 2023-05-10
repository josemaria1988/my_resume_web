const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    closeMenu.style.display = 'block';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'none';
    }
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeMenu.style.display = 'none';
    if (window.innerWidth <= 1024) {
        hamburger.style.display = 'block';
    }
});

// TWITTER
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

  twttr.ready(function (twttr) {
    twttr.widgets.createTimeline(
      {
        sourceType: "profile",
        screenName: "HolbertonUru"
      },
      document.getElementById("twitter-container"),
      { height: 600 }
    ).then(function () {
      var loader = document.querySelector('.loader');
      loader.style.display = 'none';
    });
  });