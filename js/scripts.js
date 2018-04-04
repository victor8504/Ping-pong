//back-end
function pingpong(num) {
  var funNumber = [];
  for (var x = 1; x <= num; x++) {

    if ((x % 5 === 0) && (x % 3 === 0)) {
      funNumber.push('ping-pong');

    } else if (x % 3 === 0) {
      funNumber.push('ping');

    } else if (x % 5 === 0) {
      funNumber.push('pong');

    }  else {
      funNumber.push(x);

    }

  };
  return funNumber;
};

//front-end
$(document).ready(function() {
  $("form#blank").submit(function(event) {

    event.preventDefault();
    $('#output').empty();

    var result = parseInt($("input#no").val());
    var funNumber = pingpong(result);
    // console.log(funNumber);

    funNumber.forEach(function(i) {
      $("#output").append($("<li>").html(i));
    });
  });
}); 
