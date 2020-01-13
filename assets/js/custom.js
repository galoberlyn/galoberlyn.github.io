$(document).ready(function () {
    setTimeout(function(){ 
        $('.btn-learn').fadeIn(1700).removeClass('hidden');
     }, 3000);

    var options = {
      strings: ["I write beautiful software.", "I write beautiful software."],
      typeSpeed: 40
    }

    var typed = new Typed(".typewriter", options);

    // scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});


window.onscroll = function() { scroller() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroller() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$('li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});