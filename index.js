$(document).ready(function() {
  // jQuery equivalent for toggling class
  $('#toggleProfile').on('click', function () {
    $('.profile').toggleClass('profile--open');
  });

  var izracuni = [];

  // jQuery equivalent for handling the click event
  $("#izracunaj").on("click", izracunaj);

  function izracunaj() {
    $("#poruka").html("");

    var ona = $("#ona");

    if (ona.val().trim().length == 0) {
      $("#poruka").html("Obavezno ime cure");
      return false;
    }

    var on = $("#on");

    if (on.val().trim().length == 0) {
      $("#poruka").html("Obavezno ime dečka");
      return false;
    }

    var rezultati = $("#rezultati");
    var li = $("<li>").text(ona.val() + " ♥  " + on.val() + " = " + ljubav(ona.val(), on.val()) + " %");
    rezultati.append(li);

    izracuni.push({ on: on.val(), ona: ona.val(), postotak: ljubav(ona.val(), on.val()) });

    $("#ona").val("");
    $("#on").val("");

    return false;
  }
});

$(document).ready(function () {
    $('#izracunaj').on('click', function (event) {
      var ona = $("#ona");
      var on = $("#on");
  
      if (ona.val().trim().length === 0 || on.val().trim().length === 0) {
        return false;
      }
  
      
      $('#root').html('<p>ImageAPI Placeholder</p>');
    });
  });