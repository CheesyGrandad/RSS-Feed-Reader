let API = "https://api.rss2json.com/v1/api.json?rss_url="
var userFeedURLs = JSON.parse(urls)

userFeedURLs.forEach(userUrl => {
  $.ajax({
    type: 'GET',
    url: API + userUrl.url,
    dataType: 'jsonp',
    success: function (data) {
      console.log(data);
      data.items.forEach(item => {
        var content = document.getElementById('content');

        content.innerHTML += "<iframe><h2>" + item.title + "</h2>";
        if (item.author != "")
          content.innerHTML += "<h4> By " + item.author + "</h4>";

        content.innerHTML += item.description + "</iframe>";
      });
    }
  });
});
