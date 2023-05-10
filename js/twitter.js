// TWITTER

document.addEventListener("DOMContentLoaded", function (event) {
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
});