



// Playlist Stuff
/*$('.active1Describe').click(function()
{
	$('html, body').animate(
	{
		scrollTop: $('#Home').offset().top
	}, 'slow');
});*/
var currentSong;
var songs = ['audio/song1.mp3', 'audio/song2.mp3', 'audio/song3.mp3'];

function playSong(songNum){
    currentSong=songNum;
    changeSong();
};

//to use in other
function prevSong(){
    if (currentSong > 0){
        currentSong -= 1;
        changeSong();
    };
};

function nextSong(){
    if (currentSong < songs.length){
        currentSong += 1;
        changeSong();
    };
};
function changeSong(){
    var newSong = songs[currentSong];
    var player = document.getElementById('audio');
    player.setAttribute('src', newSong);
    player.load();
    player.play();
};
function playSong(){
    var player = document.getElementById('audio');
    player.play();
};
function pauseSong(){
    var player = document.getElementById('audio');
    player.pause();
};


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
