// Select color input
let color = document.querySelector('input[type="color"]');
// Select size input
const button = document.querySelector('input[type="submit"]');
// When size is submitted by the user, call makeGrid()
let table = document.querySelector('#pixelCanvas');

let selectedTD;

function paintColor(td){
	if(selectedTD){
		selectedTD.style.color=color.value;
	} else {
		selectedTD.style.color="#FFFFFF";
	}
}

function makeGrid() {
  	let height = parseInt(document.querySelector("#inputHeight").value);
  	let width = parseInt(document.querySelector("#inputWidth").value);
  	/*make document fragment to add the col and row first,
  	 to reduce the number of redraw of the page*/
  	const tempGrid = document.createDocumentFragment();
  	const tempCol = document.createDocumentFragment();
    // Your code goes here!
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
  	//add click listener to the table and monitor this childrens events
  	table.addEventListener('click', function (evt){
		let target = evt.target;
		if(target.tagName != 'td') return;
		paintColor(target);
	});
}


button.addEventListener('click', function(event){
	//Clear up the tables children elements before drawing Grids
	while(table.hasChildNodes()){
		table.removeChild(table.firstChild);
	}
	//Drawing Grids to the table
	makeGrid();
	//Prevent the submit button from refreshing the page
	event.preventDefault();
});
