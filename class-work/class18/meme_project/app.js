$('.meme-form').submit(function (event){

    event.preventDefault();

    $('.video-wrapper').empty();

    var userInput = $('.meme-input').val();

var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q="+ userInput +"+shiba+inu&api_key=e5VchrjW4NHjO16be8NQdpugLBJjR1Ev&limit=5");
xhr.done(function(data) { 

    var memes = data.data;

    memes.forEach(function(meme){
        var memeUrl = meme.images.looping.mp4;
        $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay></video>');
    })
 });



})




				