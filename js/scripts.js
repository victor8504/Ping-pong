//back-end
function pingpong(num) {
  var number = [];
  for (var x = 1; x <= num; x++) {

    if (x % 3 === 0) {
      number.push('ping');

    } else if (x % 5 === 0) {
      number.push('pong');

    } else if ((x % 5 === 0) && (x % 3 === 0)) {
      number.push('pingpong');

    } else {
      number.push(x);

    }

  };
  return number;
};

//front-end
// $(document).ready(function() {
//   $("form#blank").submit(function(event) {
//
//     event.preventDefault();
//     $('#output').empty();
//
//     var result = parseInt($("input#no").val());
//     var number = pingpong(result);
//     // console.log(number);
//
//     number.forEach(function(e) {
//       $("#output").append($("<li>").html(e));
//     });
//   });
// }); 
