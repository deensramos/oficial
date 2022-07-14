var audio = document.getElementById('audio');

$('.audiocontrol').click(function (e) {
    e.preventDefault();
    if ($('.audiocontrol').hasClass("start")) {
        audio.play();
        $('.start').addClass('pause');
        $('.pause').removeClass('start');
    } else if ($('.audiocontrol').hasClass("play")) {
        audio.play();
        $('.play').addClass('pause');
        $('.pause').removeClass('play');
    } else if ($('.audiocontrol').hasClass("pause")) {
        audio.pause();
        $('.pause').addClass('play');
        $('.play').removeClass('pause');
    }
});

$(audio).on('ended', function () {
    $('.pause').addClass('play');
    $('.play').removeClass('pause');
    // enable button/link
})