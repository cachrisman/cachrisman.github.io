var sendText = function () {
  var auth_id = $('#auth_id').val();
  var auth_token = $('#auth_token').val();
  var auth = "Basic " + btoa(auth_id + ":" + auth_token);
  var src = $('#src').val();
  var dst = $('#dst').val();
  var text = $('#text').val();
  var url = "https://api.plivo.com/v1/Account/" + auth_id + "/Message/";
  console.log(auth, src, dst, text);
  $.ajax({
    beforeSend: function (request) {
        request.setRequestHeader("Authorization", auth);
        request.setRequestHeader("Content-Type", "application/json");
    },
    url: url,
    type: "POST",
    data: {
      'src': src,
      'dst': dst,
      'text': text
    },
    success: function(msg) {
      console.log("sendText success: ", msg);
      $('#console').text(msg);
    }
  });
};