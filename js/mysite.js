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
	audio.src = 'songs/' + songs[index] + '.mp3';
    play();
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
});
$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e)
{
	resizeScrolling();
});
var desktop = true;
var oldDesktop = true;

var notes = [[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8], 
			[6, 1/8], [7, 1/8], [8, 1/8], [5, 1/8], 
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],
			[2, 1/8], [3, 1/8], [4, 1/8], [5, 1/8],];

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
			$("#Link" + i.toString()).fadeIn();
		}
    }, 200));

	var scrolled = $(window).scrollTop();
	var c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.clearRect (0 ,0 , 1000, 1000);
	ctx.strokeStyle="#444444";
	ctx.fillStyle = "#FFFFFF";
	for (var i = 0; i < 5; i++)
	{
		drawLine(offset+i*2*space, 0, offset+i*2*space, 1000)
	};
	ctx.strokeStyle="#FFFFFF";
	var startOffset = scrolled/2;
	var count = 0;
	for(var i = 0; i < 12; i++)
	{
		$("#Link" + i.toString()).fadeOut();
	}
	var percentH = $(window).height()/1000;
	var percentW = $(window).height()/1250;
	for(var i = 0; i < notes.length; i++)
	{
		var y = noteY(i, startOffset)
		var x = noteX(notes[i][0])
		if(count==3)
		{
			count++;
		} else
		{
			if(y>160 && count < 12)
			{
				var item = document.getElementById("Link" + count.toString());
				item.style.marginTop = ((y-25)*percentH).toString()+"px";
				if(x>offset + space*5)
				{
					item.style.marginLeft = ((x-95)*percentW).toString()+"px";
				} else
				{
					item.style.marginLeft = ((x+18)*percentW).toString()+"px";
				}
				count++;
			}
			drawNote(notes[i][1], x, y);
		}
	}
}
function noteY(i, off)
{
	y = 50+i*spacing-off;
	if(y < 2000) y = Math.sqrt(y) * 28;
	return y;
}
function noteX(note)
{
	return offset+note*space;;
}
function drawNote(duration, x, y)
{
	ctx.beginPath();
    if(x>offset + space*5)
    {
    	ctx.arc(x, y+radius, radius, 0, 2 * Math.PI, false);
    	ctx.fill();
    	drawLine(x,y, x-100,y)
    } else
    {
    	ctx.arc(x, y-radius, radius, 0, 2 * Math.PI, false);
    	ctx.fill();
    	drawLine(x,y, x+100,y)
    }
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