/* one day we will have colour types and life will be good */
let strokes = ['hsla(273, 36%, 64%, 0.7)', 'hsla(346, 63%, 64%, 0.7)', 'hsla(5, 74%, 67%, 0.7)', 'hsla(38, 86%, 72%, 0.7)', 'hsla(131, 30%, 63%, 0.7)', 'hsla(179, 38%, 58%, 0.7)'];
let fills = ['hsla(273, 36%, 64%, 0.5)', 'hsla(346, 63%, 64%, 0.5)', 'hsla(5, 74%, 67%, 0.5)', 'hsla(38, 86%, 72%, 0.5)', 'hsla(131, 30%, 63%, 0.5)', 'hsla(179, 38%, 58%, 0.5)'];
let bigShapes = [];
let smallShapes = [];
/* these work for big areas */
let GAP = 39;
let LINEWIDTH = 7;

registerPaint('largeBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		// TODO make custom args
		// needs min & max size for shapes
		const bigShapeCount = 1;
		const smallShapeCount = 2;
		// needs bounds for position
		const bigShapeBound = {x: size.width/1.2, y: size.height/1.2};
		const smallShapeBound = {x: size.width/1.1, y: size.height/1.1};

		for (let i=0; i<bigShapeCount; i++) {
			const colourOne = randomInt(0,5);
			const PARAMS = {
				shape: randomInt(0,5),
				fillOne: fills[colourOne],
				stroke: strokes[colourOne],
				fillTwo: fills[randomInt(0,5)],
				x: Math.random()*bigShapeBound.x,
				y: Math.random()*bigShapeBound.y,
				width: (Math.random()+0.3)*bigShapeBound.x,
				height: (Math.random()+0.3)*bigShapeBound.y
			}
			drawBigShape(PARAMS, ctx)
		}
		
		GAP = 20;
		for (let i=0; i<smallShapeCount; i++) {
			const colourOne = randomInt(0,5);
			const PARAMS = {
				shape: randomInt(0,4),
				fillOne: fills[colourOne],
				stroke: strokes[colourOne],
				fillTwo: fills[randomInt(0,5)],
				x: (Math.random()*smallShapeBound.x)+(Math.random()*smallShapeBound.x/3),
				y: (Math.random()*smallShapeBound.y),
				width: (Math.random()/1.2)*smallShapeBound.x,
				height: (Math.random()/1.2)*smallShapeBound.y
			}
			drawSmallShape(PARAMS, ctx)
		}
	
  }
});

registerPaint('smallBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		// TODO make custom args
		// needs min & max size for shapes
		const bigShapeCount = 1;
		const smallShapeCount = 1;
		// needs bounds for position
		const bigShapeBound = {x: size.width/1.2, y: size.height/1.2};
		const smallShapeBound = {x: size.width/1.1, y: size.height/1.1};

		for (let i=0; i<bigShapeCount; i++) {
			const colourOne = randomInt(0,5);
			const PARAMS = {
				shape: randomInt(0,5),
				fillOne: fills[colourOne],
				stroke: strokes[colourOne],
				fillTwo: fills[randomInt(0,5)],
				x: Math.random()*bigShapeBound.x,
				y: Math.random()*bigShapeBound.y,
				width: (Math.random()+0.3)*bigShapeBound.x,
				height: (Math.random()+0.3)*bigShapeBound.y
			}
			drawBigShape(PARAMS, ctx)
		}
		
		GAP = 20;
		for (let i=0; i<smallShapeCount; i++) {
			const colourOne = randomInt(0,5);
			const PARAMS = {
				shape: randomInt(0,4),
				fillOne: fills[colourOne],
				stroke: strokes[colourOne],
				fillTwo: fills[randomInt(0,5)],
				x: (Math.random()*smallShapeBound.x)+(Math.random()*smallShapeBound.x/3),
				y: (Math.random()*smallShapeBound.y),
				width: (Math.random()/1.2)*smallShapeBound.x,
				height: (Math.random()/1.2)*smallShapeBound.y
			}
			drawSmallShape(PARAMS, ctx)
		}
	
  }
});

registerPaint('headerBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		const colourOne = randomInt(0,5);
		const params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.width/2,
			y: size.height/2,
			width: size.width*0.7,
			height: size.height*0.6
		}
		highlight(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.fillTwo, params.stroke);
  }
});

registerPaint('headerBackgroundTwo', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		const colourOne = randomInt(0,5);
		const params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.width/2,
			y: size.height/2,
			width: size.width*0.7,
			height: size.height*0.6
		}
		highlight(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.fillTwo, params.stroke);
  }
});

registerPaint('calloutBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		let colourOne = randomInt(0,5);
		let params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: 10,
			y: size.height/2,
			width: size.width/2,
			height: size.height*0.6
		}
		dots(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
		colourOne = randomInt(0,5);
		params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.width,
			y: 10,
			width: size.width*0.5,
			height: size.height*0.6
		}
		rectangle(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
		colourOne = randomInt(0,5);
		params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.width+20,
			y: size.height*0.5,
			width: size.width*0.3,
			height: size.height*0.8
		}
		diamonds(ctx, params.x, params.y, params.height, params.fillOne);
  }
});

registerPaint('bulletBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		LINEWIDTH = 4;
		GAP = 20;
		const colourOne = randomInt(0,5);
		const params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.height/2,
			y: size.height/2,
			width: size.height*0.6,
			height: size.height*0.6
		}
		twoCircles(ctx, params.x, params.y, params.width, params.fillOne, params.fillTwo, params.stroke);
  }
});

registerPaint('ctaBackground', class {

  static get contextOptions() { 
		return { alpha: true }; 
  }
	paint(ctx, size) {
		
		LINEWIDTH = 4;
		GAP = 20;
		const colourOne = randomInt(0,5);
		const params = {
			fillOne: fills[colourOne],
			stroke: strokes[colourOne],
			fillTwo: fills[randomInt(0,5)],
			x: size.height/2,
			y: size.height/2,
			width: size.height*0.6,
			height: size.height*0.6
		}
		twoCircles(ctx, params.x, params.y, params.width, params.fillOne, params.fillTwo, params.stroke);
  }
});

// ================ DRAW FUNCTIONS (seperate for now - TODO refactor into a class!!)
function drawBigShape(params, ctx) {
	switch (params.shape) {
		case 0:
			dots(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
			break;
		case 1:
			dotCircle(ctx, params.x, params.y, params.width, params.stroke);
			break;
		case 2:
			triangle(ctx, params.x, params.y, params.width, params.fillOne, params.stroke);
			break;
		case 3:
			triangle(ctx, params.x, params.y, params.width, params.fillOne, params.stroke);
			break;
		case 4:
			rectangle(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
			break;
		case 5:
			rectangle(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
			break;
	}
}

function drawSmallShape(params, ctx) {
	switch (params.shape) {
		case 0:
			lines(ctx, params.x, params.y, params.width, params.height, params.fillOne);
			break;
		case 1:
			rectangle(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.stroke);
			break;
		case 2:
			twoCircles(ctx, params.x, params.y, params.width, params.fillOne, params.fillTwo, params.stroke);
			break;
		case 3:
			diamonds(ctx, params.x, params.y, params.height, params.fillOne);
			break;
		case 4:
			highlight(ctx, params.x, params.y, params.width, params.height, params.fillOne, params.fillTwo, params.stroke);
			break;
	}
}

function dots(context, x, y, width, height, colour, stroke) {
	const FULLCIRCLE = degToRad(360);

	context.translate(x, y);
	context.beginPath();
	context.fillStyle = colour;
	context.strokeStyle = stroke;
	context.lineWidth = 1.0;
	context.setLineDash([]);
	
	// rotate -> degrees to rads
	const ROTATE = randomInt(1, 2) === 1 ? degToRad(45) : 0;
	context.rotate(ROTATE);

	for (let y=GAP; y<height; y+=GAP) {
		for (let x=GAP; x<width; x+=GAP) {
			
			context.moveTo(x, y);
			context.arc(x, y, LINEWIDTH/2, 0, FULLCIRCLE);
			context.fill();
			context.stroke();
			context.closePath();
		}
	}
	
	context.resetTransform();
}

function lines(context, x, y, width, height, colour) {
	context.translate(x, y);
	context.beginPath();
	context.lineWidth = LINEWIDTH;
	context.strokeStyle = colour;
	context.setLineDash([]);
	
	// rotate -> degrees to rads
	const ROTATE = randomInt(1, 2) === 1 ? degToRad(90) : 0;
	context.rotate(ROTATE);
	
	for (let x=GAP; x<width; x+=GAP) {
		context.moveTo(x-(width/2), 0-(height/2));
		context.lineTo(x-(width/2), height-(height/2));
		context.closePath();
	}

	context.stroke();
	context.resetTransform();
}

function randomLines(context, x, y, width, height, colour) {
	context.translate(x, y);
	context.beginPath();
	context.lineWidth = LINEWIDTH;
	context.strokeStyle = colour;
	context.setLineDash([]);
	
	const VERTLINES = randomInt(2, 4);
	const HORLINES = randomInt(2, 4);
	const xMAX = Math.floor(width/GAP);
	const yMAX = Math.floor(height/GAP);
	
	// vertical lines
	const xGAP = Math.floor(width/VERTLINES);
	for (let x=xGAP; x<width; x+=xGAP) {
		const ySTART = randomInt(0, yMAX/3)*GAP;
		const ySTOP = randomInt(yMAX/1.5, yMAX)*GAP;
		context.moveTo(x, ySTART);
		context.lineTo(x, ySTOP);
		context.closePath();
	}
	
	// horizontal lines
	const yGAP = Math.floor(width/HORLINES);
	for (let y=yGAP; y<width; y+=yGAP) {
		const xSTART = randomInt(0, xMAX/3)*GAP;
		const xSTOP = randomInt(xMAX/1.5, xMAX)*GAP;
		context.moveTo(xSTART, y);
		context.lineTo(xSTOP, y);
		context.closePath();
	}

	context.stroke();
	context.resetTransform();
}

function dotCircle(context, x, y, size, colour) {
	const FULLCIRCLE = degToRad(360);
	
	context.translate(x, y);
	
	context.beginPath();
	context.lineWidth = LINEWIDTH*2;
	context.strokeStyle = colour;
	context.setLineDash([LINEWIDTH, GAP/1.5]);
	
	context.arc(0, 0, size/2, 0, FULLCIRCLE);

	context.stroke();
	context.resetTransform();
}

function triangle(context, x, y, size, colour, stroke) {
	
	context.translate(x, y);
	context.beginPath();
	context.fillStyle = colour;
	context.strokeStyle = stroke;
	context.lineWidth = 1.0;
	context.setLineDash([]);
	
	// rotate -> degrees to rads
	const ROTATE = randomInt(1, 2) === 1 ? degToRad(90) : 0;
	context.rotate(ROTATE);
	
	context.moveTo(0, -size/2);
	context.lineTo(size/2, size/2);
	context.lineTo(-size/2, size/2);
	context.lineTo(0, -size/2);
	context.closePath();
	
	context.fill();
	context.stroke();
	context.resetTransform();
}

function rectangle(context, x, y, width, height, colour, stroke) {
	
	context.translate(x, y);
	context.beginPath();
	context.fillStyle = colour;
	context.strokeStyle = stroke;
	context.lineWidth = 1.0;
	context.setLineDash([]);
	
	context.moveTo(-width/2, -height/2);
	context.lineTo(width/2, -height/2);
	context.lineTo(width/2, height/2);
	context.lineTo(-width/2, height/2);
	context.lineTo(-width/2, -height/2);
	context.closePath();
	
	context.fill();
	context.stroke();
	context.resetTransform();
}

function twoCircles(context, x, y, size, colourOne, colourTwo, stroke) {
	const FULLCIRCLE = degToRad(360);
	const OFFSET = size < 201 ? GAP/2 : GAP;
	
	context.translate(x, y);
	context.setLineDash([]);
	
	context.beginPath();
	context.fillStyle = colourOne;
	context.strokeStyle = stroke;
	context.lineWidth = 1.0;
	context.arc(0, 0, size/2, 0, FULLCIRCLE);
	context.closePath();
	context.fill();
	context.stroke();
	
	context.beginPath();
	context.fillStyle = 'transparent';
	context.lineWidth = LINEWIDTH;
	context.strokeStyle = colourTwo;
	context.arc(OFFSET, -OFFSET, size/2, 0, FULLCIRCLE);
	context.closePath();
	context.stroke();
	context.resetTransform();
}

function diamonds(context, x, y, size, colour) {
	const TIMES = randomInt(5, 8);
	let coords = [{x:-GAP/2, y:-GAP/2}];
	
	for (let i=1; i<TIMES+1; i++) {
	
		let val = {};
		
		if (i%2 === 0) {
			val.x = (randomInt(1,4)*GAP)+coords[i-1].x;
			val.y = coords[i-1].y;
		} else {
			val.y = (randomInt(1,4)*GAP)+coords[i-1].y;
			val.x = coords[i-1].x
		}
		
		coords.push(val);
	}
	
	context.translate(x, y);
	// rotate -> degrees to rads
	const ROTATE = randomInt(1, 2) === 1 ? degToRad(45) : 0;
	context.rotate(ROTATE);
	
	context.beginPath();
	context.lineWidth = LINEWIDTH;
	context.strokeStyle = colour;
	context.setLineDash([]);
	// one way
	coords.forEach(function(el, i) {
		context.lineTo(el.x, el.y)
	})
	context.stroke();
	
	// other way
	context.beginPath();
	coords.forEach(function(el, i) {
		context.lineTo(el.y, el.x)
	})
	context.stroke();
	context.resetTransform();
}

function highlight(context, x, y, width, height, colourOne, colourTwo, stroke) {
	
	context.translate(x, y);
	context.setLineDash([]);
	
	// rectangle
	context.beginPath();
	context.fillStyle = colourOne;
	context.strokeStyle = stroke;
	context.lineWidth = 1.0;
	context.moveTo(-width/2, -height/2);
	context.lineTo(width/2, -height/2);
	context.lineTo(width/2, height/2);
	context.lineTo(-width/2, height/2);
	context.lineTo(-width/2, -height/2);
	context.closePath();
	context.fill();
	
	const TOTALLINES = Math.ceil(width/GAP);
	
	// lines
	context.beginPath();
	context.fillStyle = 'transparent';
	context.lineWidth = LINEWIDTH;
	context.strokeStyle = colourTwo;
	
	for (let i=0; i<TOTALLINES; i++) {
		context.moveTo(-width/2+(GAP*(i+1)), height/2-GAP);
		context.lineTo(-width/2+(GAP*(i+2.5)), -height/2-GAP);
	}
	
	context.stroke();
	context.resetTransform();
}

// ================ UTILITY FUNCTIONS
// returns int between and including min & max
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// returns radians from a degree value
function degToRad(degrees) {
	return degrees*(Math.PI/180);
}