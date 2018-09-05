
jQuery(document).ready(
    $(window).scroll(function(){
        if ($(document).scrollTop() > 40){
            $("nav").addClass("mobile_nav");
        }
        else {
            $("nav").removeClass("mobile_nav");
        }
    }),
    function($) {
        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr('href')); 
            $('html, body').animate({
                scrollTop: $section.offset().top
            }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
    }(jQuery));