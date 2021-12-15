var size = 1600;
var height = 896;
var width = 414;
var index = 0;
var white = true;
var choice = 0;
var offset = 0;

var numDay = 0;
var numMonth = 0;
var numYear = 0;

// iphone 11 - 896 by 414


function setup(){
	createCanvas(414,896);
	noStroke();
	noLoop();

}


function draw(){

	var colorOptions = [
		[color(241, 68, 44), color(255)],
		[color(225, 225, 0), color(255)],
		[color(31, 180, 0), color(255)],
		[color(0, 31, 180), color(255)],
		[color(255, 117, 0), color(255)],
		[color(145, 13, 255), color(255)],

	];


	setDate();

	var sourceData =
		[
			["beacon \nof light", "Landon"],
			["sunshine", "Natalia"],
			["kind-\nhearted", "Capucine"],
			["devoted", "Morgan"],
			["valorous", "Morgan"],
			["sees me", "Neda"],
			["pétillante", "Anne-Francoise"],
			["caring", "Suvir"],
			["so joyful", "Gilles"],
			["exhuberant &\nloving", "Priya"],
			["home", "Leila"],
			["unapolegetically\njubilant", "Ethan"],
			["universally\nloved", "Chloe"],
			["totally \nselfless", "Chloe"],
			["baddie", "Gabe"],
			["compassionate", "Gabe"]

		];
	numDay += offset;
	var index = (numDay + numMonth + numYear) % sourceData.length;
	var dateString = String(numMonth) + " / " + String(numDay) + " / " + String(numYear)

	textData = [sourceData[index][0], sourceData[index][1], dateString, (numDay + numMonth + numYear)];


	var word = textData[0];
	var name = textData[1];
	var date = textData[2];
	index = textData[3];

	var mathShit = int(numDay + name.length);
	console.log(mathShit);
	var colorChoice =  mathShit % colorOptions.length;
	var back = colorOptions[colorChoice][0];
	var front = colorOptions[colorChoice][1];

	stroke(front)
	background(back);

	writeText(front, word, name, date);


	drawPattern(word);

}

function drawPattern(word){
	var patternChoice = int(numDay + word.length) % 4;
	console.log(patternChoice);
	
	if(patternChoice == 0){
		drawWave(600, numDay * 2, 5 * word.length, word.length * 500);
		drawWithinSquare(200, (width - 200)/2, (height - 200)/2, 5000)
		drawWave(250, numDay % 5 * 10, 25, 10000);
	} else if (patternChoice == 1) {
		drawWithinSquare(350, (width - 350)/2, (height - 350)/2, 8000)
		drawWithinSquare(225, (width - 225)/2, (height - 225)/2, 4000)
		drawWithinSquare(100, (width - 100)/2, (height - 100)/2, 2000)
	} else if (patternChoice == 2) {
		
		drawWithinSquare(200, 50, 250, 3000)
		drawWithinSquare(200, 100, 350, 8000)
		drawWithinSquare(200, 150, 450, 3000)
	} else if (patternChoice == 3){
		drawWave(250, 150, word.length * 5, 3000 * word.length);
	}
}



function writeText(textColor, word, name, date){
	fill(textColor)
	textFont('Georgia');

	textSize(45);
	text("\"" + word + "\"", 30, 50, 350, 250);

	textSize(40);
	text("- " + name, 50, 750);

	textSize(18);
	text(date, 50, 800);
}

function setDate(){
	numDay = day();
	numMonth = month();
	numYear = year();
}


function drawWave(waveStart, waveSize, offset, limit){
	limit = (limit == 0) ? (20000) : limit;
	for(var i = 0; i < limit; i++){
		x = i % size;
		max = waveStart + (waveSize * 2) + waveSize * (Math.cos(x/(waveSize))) //+ (waveSize*10) * noise(i);
		min = waveStart + waveSize * (Math.cos(x/(waveSize)+offset)); //create cool fade with inner switch (+ 50 in cos)
		y = getRand(max,min, i);
		if(i%10000==0) console.log(y)
		circle(x,y, 1);
	}
}

function drawThreeSquares(){
	drawWithinSquare(350, (width - 350)/2, (height - 350)/2,10000)
	drawWithinSquare(200, (width - 200)/2, (height - 200)/2, 5000)
	drawWithinSquare(100, (width - 100)/2, (height - 100)/2, 2000)
}

function drawWithinSquare(squareSize, startX, startY, limit){
	limit = (limit == 0) ? (limit = Math.pow(squareSize,0.8)*50) : limit;
	for(var i = 0; i < limit; i++){
		y = (random(1) * (squareSize)) + startY + (0*noise(i));
		//while(y < (startY + 200)) 	{y = random(1) * (squareSize) + startY + (300*noise(i))} //solid upper boundary
		
		x = random(1) * (squareSize) + startX;
		circle(x,y, 1);
	}
}

function getRand(max, min, seed){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(noise(seed) * (max - min + 1) + min);
}

function keyPressed(){
	if(key == 'r' || key == 'R'){
		setup();
		redraw();
	}
	if(key = 'u'){
		offset++;
		redraw();
	}
}