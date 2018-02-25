// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//declaring global variables
var table = document.getElementById('pixelCanvas');
var tableRow = document.getElementById('inputHeight');
var tableColumn = document.getElementById('inputWeight');
var color = document.getElementById('colorPicker');

/*function that changes the color 
of the selected grid with the picked color */
function colorMe(e) {
    e.target.style.background = color.value;
}

/*function to dynamically create table
of user defined height and width */
function makeGrid() {
    var rows = tableRow.value;
    var cols = tableColumn.value;
    if ((rows < 1) || (cols < 1) || (rows > 30) || (cols > 30)) {
        alert('You need to enter values larger than 0 and lesser than 30');
    } else {
        table.innerHTML = '';
        for (var i = 0; i < rows; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < cols; j++) {
                var column = document.createElement('td');
                column.addEventListener('click', colorMe);
                row.append(column);
            }
            table.append(row);
        }
    }
    return false;
}