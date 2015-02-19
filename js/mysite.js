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