
//on load, prevent default
$(document).ready(function(){

});
//check for submit

$(".container").on("submit",function(event){

  event.preventDefault();

  var city
  var img
  var src
//get input value
    city =  $("#city-type").val()
//determine image to display based on input
    if (city === "New York" || city === "New York City" || city === "NYC"){
      img = 'nyc'

      setImage(img)

    } else if (city === "San Francisco" || city === "SF" || city === "Bay Area" ) {
      img = 'sf'
      setImage(img)
    }
    else if (city === "Los Angeles" || city === "LA" || city === "LAX" ) {
      img = 'la'
      setImage(img)
    }
    else if (city === "Austin" || city === "ATX") {
      img = 'austin'
      setImage(img)
    }
    else if (city === "Syndey" || city === "SYD") {
      img = 'sydney'
      setImage(img)
    }
});

function setImage(img){
  //set background image
  src = '../starter_code/images/' + img + '.jpg'


  $("body").css("background", "url("+src+") no-repeat");
  $("body").css("background-size", "100%");
  //reset input form
  $("#city-type").val('');
}
