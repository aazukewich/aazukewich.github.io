$(window).bind('scroll', function(e)
{
	redrawSideBar();
});

var currentSong = 0;
var songs = ['Away From Home', 'Beatrice', 'Down By The River', 'Emily', 'Fly Me To The Moon', 'Original', 'Stella By Starlight', 'Tire Swing Era'];
var numOfSongs = 8;

audio = $('#player').bind('ended', function() {
	currentSong++;
	if(currentSong>numOfSongs-1) currentSong =0;
	playSong(currentSong);
}).get(0);

function play()
{
	$('.playSong').hide();
    $('.pauseSong').show();
	audio.play();
}
function pause()
{
	$('.playSong').show();
    $('.pauseSong').hide();
    audio.pause();
}
function playSong(index){
	currentSong = index;
	audio.src = 'songs/' + songs[index] + '.mp3';
    play();
    $("#myCanvas").fadeOut(200);
    setTimeout(function ()
	{
		notes = songNotes[currentSong];
    	$("#myCanvas").fadeIn(200);
    	redrawSideBar();
	}, 200);
}
//to use in other
function prevSong(){
	currentSong--;
    if (currentSong < 0){
        currentSong = numOfSongs-1;
    }
    playSong(currentSong);
}
function nextSong(){
    currentSong++;
    if (currentSong > numOfSongs-1){
        currentSong = 0;
    }
    playSong(currentSong);
}
$(document).ready(function()
{
	$('.pauseSong').hide();
	for(var i = 0; i < 15; i++)
	{
		images[i] = new Image();
		images[i].src = 'css/notes/' + imageNames[i] + '.png';
	}
	redrawSideBar();
});
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
{
	resizeScrolling();
});
var desktop = true;
var oldDesktop = true;
/*
var imageNames = [	'bass'0, 'treble'1, 'eigthRest'2, 'quarterRest'3, 'flat'4, 'sharp'5, 'whole'6,
					'sixteenth'7, 'eigth'8, 'quarter'9, 'half'10, 'sixteenth2', 'eigth2', 'quarter2', 'half2'];
*/

// 
var songNotes = [	[[1], 	[4, 4],

							[9, -2], [9, 1], [9, 5], [8, 1], [9, 7],
							[9, 1], [9, 5], [8, 1], [9, -1], [5, 1],[9, 1], 
							[9, 5], [8, 1], [9, 7], [5, 1], [9, 1], 
							[9, 5], [8, 1], [9, -1], [9, 1], [9, 5],
							[8, 1], [9, 4], [9, 1], [9, 5], [8, 1],
							[4, -1], [9, -1], [9, 1], [9, 5], [8, 1], [10, 2]],	

					[[1], 	[4, 4],

							[9, -2], [9, 1], [9, 5], [8, 1], [9, 7],
							[9, 1], [9, 5], [8, 1], [9, -1], [5, 1],[9, 1], 
							[9, 5], [8, 1], [9, 7], [5, 1], [9, 1], 
							[9, 5], [8, 1], [9, -1], [9, 1], [9, 5],
							[8, 1], [9, 4], [9, 1], [9, 5], [8, 1],
							[4, -1], [9, -1], [9, 1], [9, 5], [8, 1], [10, 2]],		

					[[0], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]],	

					[[1], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]],

					[[0], 	
							[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]],	

					[[1], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]],	

					[[0], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]],	

					[[1], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]]	];

var notes = [[1], 	[9, -2], [8, 2], [2], [8, 4], [8, 3],
							[9, -1], [8, 1], [2], [8, 2], [8, -3], 
							[9, -2], [8, 2], [2], [8, 4], [8, 3], 
							[9, -1], [8, 1], [2], [8, 2], [8, -3]];
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
	ctx.strokeStyle="#444444";
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
	var percentH = $(window).height()/1000;
	var percentW = $(window).height()/1250;
	var position = offset;
	for(var i = 0; i < notes.length; i++)
	{
		type = notes[i][0];
		var y = noteY(position-startOffset);
		position += noteSizes[type];
		var x = 0;
		if(type > 3) x = noteX(type, notes[i][1])
		if(x>offset + space*5)
	    {
	    	type += 4;
	    }
		if(count==3)
		{
			ctx.globalAlpha = 0.2;
			count++;
			drawNote(type, x, y);
			ctx.globalAlpha = 1;
		} else
		{
			if(y>160 && count < 12)
			{
				var item = document.getElementById("Link" + count.toString());
				item.style.marginTop = ((y-25)*percentH).toString()+"px";
				item.style.marginLeft = ((x+wordHor[type]+(2*space))*percentW).toString()+"px";
				count++;
			}
			drawNote(type, x, y);
		}
	}
}
function noteY(y)
{
	if(y < 2000) y = Math.sqrt(y+300) * 42 - 650;
	return y;
}
function noteX(type, note)
{
	if(type < 7) return 0;
	return offset+note*space;
}
var images = new Array();
var imageNames = [	'bass', 'treble', 'eigthRest', 'quarterRest', 'flat', 'sharp', 'whole',
					'sixteenth', 'eigth', 'quarter', 'half', 'sixteenth2', 'eigth2', 'quarter2', 'half2'];
var noteSizes = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
var imageDims = [	[55, -30], [28, -20], [58, -22], [60, -22], 
					[55, 0], [40, 0], [63, -25],
					[-11, -25], [-12, -25], [-11, -25], [-11, -25], [-85, -25], [-85, -25], [-85, 0], [-85, 0]];
var wordHor = [0, 0, 40, 40, 0, 0, 20, 
				20, 20, 20, 20, -15, -48, -80, -80];
function drawNote(type, x, y)
{
	/*
	ctx.beginPath();
	drawLine(x,y, x-100,y); */
    x += imageDims[type][0] + space*2;
    y += imageDims[type][1];
    ctx.drawImage(images[type],x,y);
}
function drawLine(x1, y1, x2, y2)
{
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function resizeScrolling()
{
	screenWidth = $(window).width();
	screenHeight = $(window).height();
	desktop = (screenWidth >= 992)
	if(oldDesktop!=desktop)
	{
		if(!desktop)
	    {
			document.getElementById("AboutInner").style.marginLeft =  "15%";
	    	document.getElementById("ShowsInner").style.marginLeft =  "15%";
	    	document.getElementById("ContactInner").style.marginLeft =  "15%";

	    	document.getElementById("AboutInner").style.width = "75%";
	    	document.getElementById("ShowsInner").style.width = "75%";
	    	document.getElementById("ContactInner").style.width = "75%";
	    } else
	    {
	    	document.getElementById("AboutInner").style.marginLeft =  "45%";
	    	document.getElementById("ShowsInner").style.marginLeft =  "15%";
	    	document.getElementById("ContactInner").style.marginLeft =  "15%";

	    	document.getElementById("AboutInner").style.width = "45%";
	    	document.getElementById("ShowsInner").style.width = "50%";
	    	document.getElementById("ContactInner").style.width = "50%";
	    }
	}
	oldDesktop = desktop;
	redrawSideBar();
}
function scrollTo(section)
{
	$('html, body').animate(
	{
		scrollTop: $('#'+section).offset().top
	}, 'slow');
}