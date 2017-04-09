
//on load, prevent default
$(document).ready(function(){
//set options

var cities  = ['Select a city...','New York City','San Francisco','Los Angeles','Austin','Sydney']
for(index=0; index < cities.length; ++index){
  var option = new Option(cities[index], index)
  $('select').append($(option));
  }
});

//check for change
$('select').on('change', function(event){
   event.preventDefault();
   var city
   var img
   var src

//get selected city
    city = $('select option:selected').val()

    console.log(city)
//determine image to display based on input
    if (city === '0'){
      //do nothing
    } else if (city === '1') {
      img = 'nyc'

      setImage(img)

    } else if (city === '2') {
      img = 'sf'
      setImage(img)
    }
    else if (city === '3') {
      img = 'la'
      setImage(img)
    }
    else if (city === '4') {
      img = 'austin'
      setImage(img)
    }
    else if (city === '5') {
      img = 'sydney'
      setImage(img)
    }
  });


function setImage(img){
  //set background image
  src = '../homework-citipix/images/' + img + '.jpg'


  $("body").css("background", "url("+src+") no-repeat");
  $("body").css("background-size", "100%");

}
