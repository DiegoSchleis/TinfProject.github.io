/**
 * Created by Diego on 10/01/2017.
 */
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";

    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.opacity = "1";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function slide(name) {
    var targetPage = "./mainPage.html",
        delay = 800; // delay in ms

    var aTag = $("a[name='" + name + "']");
    $('body').animate({
        scrollTop: aTag.offset().top
    }, 'slow');
    setTimeout(function () {
        window.location.href = targetPage;
    }, delay);
}
$(function () {
    $('body').removeClass('fade-out');
});
$(document).ready(function(){
    $("body").scrollTop(0);
});