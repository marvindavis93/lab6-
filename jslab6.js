/*********************************************************************/
//Global Area
var linkNumber = 0;
var colors = ['black','white'];
var colorIndex = 0;

/***************** Function definition area *************/
//function that creates link and add it to DOM
function createLink() {
    linkNumber++;
    var p = document.createElement('p');
    p.id = linkNumber;
    var a = document.createElement('a');
    a.href =  'http://www.tri-c.edu';     
    a.innerHTML = "Link "+linkNumber;
    a.id  = linkNumber;
    var parent = document.getElementById("parentLink");
    p.appendChild(a);
    parent.appendChild(p);
}
//function that deletes link from DOM
function removeLink() {
    if(linkNumber>0) {
        var parent = document.getElementById("parentLink");
        var p = document.getElementById(linkNumber);
        parent.removeChild(p);   
        linkNumber--;
    }
}
//function that changes the background color of box
function changeColor() {
    var color = document.getElementById("inputColor").value;
    var d = document.getElementById("box");
    d.style.backgroundColor = color;
    d.innerHTML = color;
}

//set the background color of all the squares with class "square1" to black and 
//background color of all the squares with class "square2" to white.
function changeSquares(){
    
    //I want to get all the divs that have class = "square1"
    var squares = document.getElementsByClassName("square1");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[colorIndex];
    }
    var squares = document.getElementsByClassName("square2");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[1-colorIndex];
    }
    colorIndex = 1 - colorIndex;
}

function changeShape() {
    var radius = document.getElementById("inputRadius").value;
    //I want to get all the divs that have class = "square1"
    var squares = document.getElementsByClassName("square1");//returns more than 1 element
   
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
       squares[i].style.borderRadius = radius;       
    }    
}
