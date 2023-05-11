// FACEBOOK SHARE PRE-CODED

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//TWITTER SHARE CODE

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tweet-btn").addEventListener("click", (event) => {
      event.preventDefault();

      const url = window.location.href;
  
      const tweetText = "Look at this amazing website!";
  
      const tweetUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(tweetText);
  
      window.open(tweetUrl, "_blank");
    });
  });