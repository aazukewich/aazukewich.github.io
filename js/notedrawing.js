/*
var imageNames = [	'bass'0, 'treble'1, 'eigthRest'2, 'quarterRest'3, 'flat'4, 'sharp'5, 'whole'6,
					'sixteenth'7, 'eigth'8, 'quarter'9, 'half'10, 'sixteenth2', 'eigth2', 'quarter2', 'half2', 'eights'15, 'eights2'16];
*/


var songNotes = [	[[1], 	[4, 4],			//each song is series of notes [?, ?] encapsulated with [...],
											//if note type doesnt need a position on staff, leave second
											//thing blank. (eg. clefs).
											//on the first line is the clef and a flat

							[9, -2], [9, 1], [9, 5], [8, 1], [9, 7],
							[9, 1], [9, 5], [8, 1], [9, -1], [5, 1],[9, 1], 
							[9, 5], [8, 1], [9, 7], [5, 1], [9, 1], 
							[9, 5], [8, 1], [9, -1], [9, 1], [9, 5],
							[8, 1], [9, 4], [9, 1], [9, 5], [8, 1],
							[4, -1], [9, -1], [9, 1], [9, 5], [8, 1], [10, 2]],	

							//SECOND SONG
					[[1], 	[4, 4], [4, 6], [4, 2],

							[9, -2], [9, 1], [9, 5], [8, 1], [9, 7],
							[9, 1], [9, 5], [8, 1], [9, -1], [5, 1],[9, 1], 
							[9, 5], [8, 1], [9, 7], [5, 1], [9, 1], 
							[9, 5], [8, 1], [9, -1], [9, 1], [9, 5],
							[8, 1], [9, 4], [9, 1], [9, 5], [8, 1],
							[4, -1], [9, -1], [9, 1], [9, 5], [8, 1], [10, 2]],		

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]],

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]],

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]],

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]],

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]],

					[[0], 	[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3],
							[9, -2], [8, 2], [2], [11, 4, 3],
							[9, -1], [8, 1], [2], [11, 2, -3]]	];

var notes = [[1], 	[4, 4],			//each song is series of notes [?, ?] encapsulated with [...],
											//if note type doesnt need a position on staff, leave second
											//thing blank. (eg. clefs).
											//on the first line is the clef and a flat

							[9, -2], [9, 1], [9, 5], [8, 1], [9, 7],
							[9, 1], [9, 5], [8, 1], [9, -1], [5, 1],[9, 1], 
							[9, 5], [8, 1], [9, 7], [5, 1], [9, 1], 
							[9, 5], [8, 1], [9, -1], [9, 1], [9, 5],
							[8, 1], [9, 4], [9, 1], [9, 5], [8, 1],
							[4, -1], [9, -1], [9, 1], [9, 5], [8, 1], [10, 2]];
var offset = 30;
var space = 15;
var spacing = 90;
var radius = 10;
var ctx;
function redrawSideBar()
{
	clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {

    	for(var i = 0; i < 12; i++)
		{
			$("#Link" + i.toString()).fadeIn(200);
		}
    }, 150));

	var scrolled = $(window).scrollTop();
	var c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.clearRect (0 ,0 , 1000, 1000);
	ctx.strokeStyle="#666666";
	ctx.fillStyle = "#FFFFFF";
	for (var i = 0; i < 5; i++)
	{
		drawLine(offset+(i+1)*2*space, 0, offset+(i+1)*2*space, 1000)
	};
	ctx.strokeStyle="#FFFFFF";
	var startOffset = scrolled/2;
	var count = 0;
	for(var i = 0; i < 12; i++)
	{
		$("#Link" + i.toString()).fadeOut(200);
	}
	var percentH = $(window).height()*0.9/(1000);
	var percentW = $(window).height()*0.9/(1250);
	var position = 80;


	for(var i = 0; i < notes.length; i++)
	{
		type = notes[i][0];
		typeAlt = type;
		var isEigth = type == 11;
		//position += noteSizes[type]/2;
		if(isNote(type))
		{
			if(!isNote(notes[i-1][0]))
			{
				if(i<2 || !isNote(notes[i-2][0]))
				{
					position += 90;
				}
			}
		}
		var y = noteY(position-startOffset);
		position += noteSizes[type];
		var noteLength = noteWeight[type];
		var x = 0;
		if(type > 3) x = noteX(type, notes[i][1])
		if(type > 6 && x>offset + space*5)
	    {
	    	if(isEigth) type ++;
	    	else type +=4;
	    }
	    if(isEigth)
		{
			drawEights(type, x, noteX(type, notes[i][2]), y);
		} else
		{
			drawNote(type, x, y);
		}
		if(y>160 && count < 12 && noteLength == 1)
		{
				var item = document.getElementById("Link" + count.toString());
				if(y>980) y = 2000;
				if(count < 4)
				{
					item.style.marginTop = ((y-29)*percentH).toString()+"px";
				} else
				{
					item.style.marginTop = ((y-22)*percentH).toString()+"px";
				}
				var extra = -5+x+(2*space);
				if(isEigth)
				{
					item.style.marginLeft = ((extra+wordHor[(type-11)*4+9])*percentW).toString()+"px";
				} else
				{
					item.style.marginLeft = ((extra+wordHor[type])*percentW).toString()+"px";
				}
				count++;
		}
	}
}
function isNote(type)
{
	return (type!=0&&type!=1&&type!=4&&type!=5);
}
function noteY(y)
{
	//if(y < 2000) y = Math.sqrt(y+300) * 42 - 650;
	return y/1.8;
}
function noteX(type, note)
{
	return offset+note*space;
}
var images = new Array();
var imageNames = [	'bass', 'treble', 'eigthRest', 'quarterRest', 'flat', 'sharp', 'whole',
					'sixteenth', 'eigth', 'quarter', 'half', 'sixteenth2', 'eigth2', 'quarter2', 'half2'];
var noteSizes = [130, 130, 80, 130, 55, 55, 130, 80, 80, 130, 170, 170];			// spacing between the notes
var noteWeight = [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1];					// how often a word will get drawn on the note
var imageDims = [	[45, -30], [5, -20], [65, -14], [60, -22], 
					[-15, -17], [-23, -28], [63, -25],
					[-11, -25], [-12, -25], [-11, -25], [-11, -25],
					[-85, -25], [-85, -25], [-85, 0], [-85, 0]];			// fixing x, y where image is drawn from
var wordHor = [0, 0, 40, 40, 0, 0, 20, 
				20, 20, 20, 20, -15, -48, -80, -80, 20, -80];						// how far in x direction the word is pushed
function drawNote(type, x, y)
{
	/*
	ctx.beginPath();
	drawLine(0,y, 200,y);*/
    x += imageDims[type][0] + space*2;
    y += imageDims[type][1];
    ctx.drawImage(images[type],x,y);
}
function drawEights(type, x1, x2, y)
{
	var imageType = ((type-10)*4) + 5;
	x1 += imageDims[imageType][0] + space*2;
	x2 += imageDims[imageType][0] + space*2;
    y += imageDims[imageType][1];
	if(type==11)
	{
		ctx.drawImage(images[imageType],x1,y);
		ctx.drawImage(images[imageType],x2,y+40);

		ctx.beginPath();
		ctx.moveTo(x1+96,y+27);
		ctx.lineTo(x2+96,y+67);
		ctx.lineTo(x2+86,y+67);
		ctx.lineTo(x1+86,y+27);
		ctx.closePath();
		ctx.fill();
	} else
	{
		ctx.drawImage(images[imageType],x1,y);
		ctx.drawImage(images[imageType],x2,y+40);

		ctx.beginPath();
		ctx.moveTo(x1,y+1);
		ctx.lineTo(x2,y+41);
		ctx.lineTo(x2+10,y+41);
		ctx.lineTo(x1+10,y+1);
		ctx.closePath();
		ctx.fill();
	}
}
function drawLine(x1, y1, x2, y2)
{
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}