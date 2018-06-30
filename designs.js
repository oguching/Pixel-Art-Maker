// Select color input
// Select size input

let gridHeight;
let gridWidth;
var color;

$('#sizePicker').on('submit', function (evt) {
  evt.preventDefault();
  gridHeight = $('#inputHeight').val()
  gridWidth = $('#inputWidth').val()
  makeGrid()
  
})

function makeGrid() {
  var table = $("#pixelCanvas")

  table.children().remove()
  
  for (var i = 0; i < gridHeight; i++) {
  	$("#pixelCanvas").append('<tr></tr>')
  	for (var j = 0; j < gridWidth; j++) {
  		$('#pixelCanvas').children().last().append('<td></td>')
  	}
  }
}

$("#pixelCanvas").on('click', 'td', function() {
	color = $('#colorPicker').val()
	$(this).css("background", color)
  //console.log($(this))
})