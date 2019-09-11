$(document).ready(function () {
    setTimeout(function(){ 
        $('.btn-learn').fadeIn(2000).removeClass('hidden');
     }, 3000);

    var options = {
      strings: ["I write beautiful software.", "I write beautiful software."],
      typeSpeed: 40
    }

    var typed = new Typed(".typewriter", options);

});
