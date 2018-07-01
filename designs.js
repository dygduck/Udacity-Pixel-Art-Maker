// Select color input
let colorPicker = document.querySelector('#colorPicker');
// Select size input
//let sizePicker = document.querySelector('#sizePicker');
let submitButton = document.querySelector('input[type=submit]');
let table = document.querySelector('#pixelCanvas');

let height = document.querySelector('#inputHeight').value;
let width = document.querySelector('#inputWidth').value;
makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;
  table.firstElementChild.remove();
  makeGrid(height, width);
});

function makeGrid (height, width) {
  for (let i = 0; i < height; i++) {
    let rows = table.insertRow(i);
    for (let p = 0; p < width; p++) {
      let cells = rows.insertCell(p);
      cells.addEventListener('click', function(e) {
        cells.style.backgroundColor = colorPicker.value;
      });
    };
  };
};
