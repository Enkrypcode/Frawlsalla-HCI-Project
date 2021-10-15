$(document).ready(function () {

    $('#next').click(function () {
        var currImg = $('.active')
        var nextImg = currImg.next()
        if (nextImg.length) {
            currImg.removeClass('active')
            nextImg.addClass('active')
        }
    });
    
    $('#prev').click(function () {
        var currImg = $('.active')
        var prevImg = currImg.prev()
        if (prevImg.length) {
            currImg.removeClass('active')
            prevImg.addClass('active')
        }
    });
    
});