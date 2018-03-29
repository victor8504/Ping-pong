//back-end
function pingpong(i){
  var numbers
if (i%3===0 && i%5===0){
  return "pingpong"
  }
else if(i%3===0){
  return "ping"
  }
else if(i%5===0){
  return "pong"
  }
else{
  return i
  }
}

//front-end
$(document).ready(function(){
$("form#ping-form").submit(function(event){

  event.preventDefault();

  $("ul.ping_list").empty();
  var num=parseInt($("input#num").val());
  for(var i=1; i<=num; i+=1){
    $("ul.ping_list").append("<li>"+pingpong(i)+"</li>");
  }
});
});
 
