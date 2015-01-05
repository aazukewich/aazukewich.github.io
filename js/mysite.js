// Playlist Stuff
/*$('.active1Describe').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Home').offset().top
	}, 'slow');
});*/
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
	audio.src = songs[index] + '.mp3';
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
function resizeScrolling()
{
	desktop = ($(window).width() >= 992)
	if(oldDesktop!=desktop)
	{
		if(!desktop)
	    {
			document.getElementById("AboutInner").style.marginLeft =  "15%";
	    	document.getElementById("ShowsInner").style.marginLeft =  "15%";
	    	document.getElementById("MusicInner").style.marginLeft =  "15%";
	    	document.getElementById("ContactInner").style.marginLeft =  "15%";

	    	document.getElementById("AboutInner").style.width = "75%";
	    	document.getElementById("ShowsInner").style.width = "75%";
	    	document.getElementById("MusicInner").style.width = "75%";
	    	document.getElementById("ContactInner").style.width = "75%";
	    } else
	    {
	    	document.getElementById("AboutInner").style.marginLeft =  "45%";
	    	document.getElementById("ShowsInner").style.marginLeft =  "15%";
	    	document.getElementById("MusicInner").style.marginLeft =  "15%";
	    	document.getElementById("ContactInner").style.marginLeft =  "15%";

	    	document.getElementById("AboutInner").style.width = "45%";
	    	document.getElementById("ShowsInner").style.width = "50%";
	    	document.getElementById("MusicInner").style.width = "40%";
	    	document.getElementById("ContactInner").style.width = "50%";
	    }
	}
	oldDesktop = desktop;
}

// scrolling with navbar
$('#HomeLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Home').offset().top
	}, 'slow');
});
$('#AboutLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#About').offset().top
	}, 'slow');
});
$('#MusicLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Music').offset().top
	}, 'slow');
});
$('#ShowsLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Shows').offset().top
	}, 'slow');
});
$('#ContactLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Contact').offset().top
	}, 'slow');
});
