// Select color input
let color = document.querySelector('input[type="color"]');
// Select size input
const button = document.querySelector('input[type="submit"]');
// When size is submitted by the user, call makeGrid()
let table = document.querySelector('#pixelCanvas');

let selectedTD;

function paintColor(td){
	// debugger;
	if(selectedTD){
		selectedTD.style.color=color.value;
	} else {
		selectedTD.style.color="#FFFFFF";
	}
}

function makeGrid() {
	// debugger;
  	let height = parseInt(document.querySelector("#inputHeight").value);
  	let width = parseInt(document.querySelector("#inputWidth").value);
  	const tempGrid = document.createDocumentFragment();
  	const tempCol = document.createDocumentFragment();
  // Your code goes here!
  	// debugger;
  	for(let row=0;row<height;row++){
  		const newRow = document.createElement('tr');
  		for(let col=0;col<width;col++) {
  			const newCol = document.createElement('td');
  			tempCol.appendChild(newCol);
  		}
  		newRow.appendChild(tempCol);
  		// tempGrid.insertAdjacentHTML('afterend',newRow);
  		tempGrid.appendChild(newRow);
  	}
  	table.appendChild(tempGrid);
  	// debugger;
  	table.addEventListener('click', function (evt){
		let target = evt.target;
		if(target.tagName != 'td') return;
		paintColor(target);
	});
}

button.addEventListener('click',function(){
	makeGrid();
	debugger;
});
