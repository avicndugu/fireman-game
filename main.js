var level=1;
var l1x=1;
var l1y=550;

var	l2x=1;
var	l2y=550;

var	l3x=1;
var	l3y=150;
// var speed=20;
// var length=3800;

function setup() {
	createCanvas(1000, 600);
}

function draw() {
	clear();

	// fill(255);
/////////LEVEL 1 ///////////////////////////
if (level===1) {
	// lx=lx+speed;
	background(220);
	rect(l1x,l1y,4000,40);
///////DOOR///////////////
	rect(l1x+3800,l1y-200,150,200);

/////prevents going out of canvas////////////////////
  if (keyIsDown(LEFT_ARROW) && l1x<1) {
	l1x=l1x + 10;
    console.log(l1x);
  }
  if (keyIsDown(RIGHT_ARROW) && (l1x>=-2990)) {
    l1x=l1x - 10;
    console.log(l1x);
  }
}
/////// end of prevents going out of canvas/////////////
	

////////////LEVEL 2 ////////////////////////
if (level===2) {
	background(220);
	rect(l2x,l2y,400,40);
	rect(l2x+400,l2y-50,200,90);
	rect(l2x+450,l2y-100,200,140);
	rect(l2x+500,l2y-150,200,190);
	rect(l2x+550,l2y-200,200,240);
	rect(l2x+850,l2y-200,400,240);
	rect(l2x+1350,l2y-200,200,240);
	rect(l2x+1650,l2y-200,1500,240);
	rect(l2x+3000,l2y-500,50,50);
	rect(l2x+3015,l2y-490,20,30);
	rect(l2x+3250,l2y-200,200,240);
	rect(l2x+3400,l2y-250,340,50);
	rect(l2x+3700,l2y-200,300,240);
///////////DOOR///////////////
	rect(l2x+3800,l2y-400,150,200);

/////prevents going out of canvas////////////////////
  if (keyIsDown(LEFT_ARROW) && l2x<1) {
	l2x=l2x + 10;
    console.log(l2x);
  }
  if (keyIsDown(RIGHT_ARROW) && (l2x>=-2990)) {
    l2x=l2x - 10;
    console.log(l2x);
  }
 /////// end of prevents going out of canvas/////////////
}
/////////LEVEL 3 ///////////////////////////
if (level===3) {
		background(220);
		rect(l3x,l3y,500,50);
		rect(l3x+600,l3y,500,50);
		rect(l3x+650,l3y+50,50,450);
		rect(l3x+1200,l3y,500,50);
		rect(l3x+1250,l3y+50,50,450);
		rect(l3x+1800,l3y,500,50);
		rect(l3x+1850,l3y+50,50,450);
		rect(l3x+2400,l3y,500,50);
		rect(l3x+2450,l3y+50,50,450);
		rect(l3x+3000,l3y,500,50);
		rect(l3x+3050,l3y+50,50,450);
		rect(l3x+3600,l3y,500,50);
//////// DOOR //////////////////////////////
		// rect(x+3800,y-400,150,200);
/////prevents going out of canvas////////////////////
  if (keyIsDown(LEFT_ARROW) && l3x<1) {
	l3x=l3x + 10;
    console.log(l3x);
  }
  if (keyIsDown(RIGHT_ARROW) && (l3x>=-3095)) {
    l3x=l3x - 10;
    console.log(l3x);
	}
/////// end of prevents going out of canvas/////////////
}
/////////LEVEL 4 ///////////////////////////

}

