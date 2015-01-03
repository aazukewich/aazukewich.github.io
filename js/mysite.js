



// Playlist Stuff
/*$('.active1Describe').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Home').offset().top
	}, 'slow');
});*/
var currentSong = 0;
var songs = ['song1', 'song2'];
var numOfSongs = 2;

audio = $('#player').bind('ended', function() {
	currentSong++;
	if(currentSong>numOfSongs-1) currentSong =0;
	playSong(currentSong);
}).get(0);

function playSong(index){
	audio.src = songs[index] + '.mp3';
    audio.play();
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
$('#PhotosLink').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Photos').offset().top
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
