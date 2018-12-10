var index = window.location.href.indexOf("?");
var query = window.location.href.slice(index + 3);

var params = {
  part: "snippet",
  maxResults: 1,
  q: query,
  type: "video",
  key: "AIzaSyC9ta_5TtJcU3M6m0a5vtytSnpzESFbXRs",
  videoCategoryId: "10"
};

var url = "https://www.googleapis.com/youtube/v3/search?" + $.param(params);

$.getJSON(url, function(data) {
  var video = data.items[0].id.videoId;
  theurl = "https://www.youtube.com/watch?v=" + video;
  window.location.href = theurl;
});
