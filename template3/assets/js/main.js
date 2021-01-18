



//Get the button FOR SCROLLING TO TOP
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
        $(".computer_menu").fadeIn("slow");
        $('.computer_menu').css({
            'position': "fixed",
            "z-index": "1000000000000000",
            "background-color": "#fff",
            "boxShadow": "0 10px 15px rgba(25, 25, 25, 0.1)",
            "animation": "fadeInDown",
            "animation-duration": "0.5s",
            'padding-bottom': "35px"
        });

        $('.my_nav_link').css({
            'color': "black",
        });
        $('#search_icons_on_scroll').show();
    } else {
        mybutton.style.display = "none";
        $('.computer_menu').css({
            "z-index": "10000",
            "background-color": "rgba(117, 190, 218, 0.0)",
            "boxShadow": "none",
            "animation-duration": "0.5s",
            "animation": "fadeInUp",
        });
        $('.my_nav_link').css({
            'color': "white",
        });
        $('#search_icons_on_scroll').hide();
    }
}

$("#myBtn").on('click', function (event) {

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: 0
    }, 800, function () {

    });

});


$('.miniature_grid').hover(function (e) {
    $(this).parent().parent().prev().children("img.principale_grid_image").attr("src", $(this).attr('src'))
})


//TO DISABLE SCROLLING 
var y_offsetWhenScrollDisabled = 0;
function disableScrollOnBody() {
    y_offsetWhenScrollDisabled = $(window).scrollTop();
    $('body').addClass('scrollDisabled').css('margin-top', -y_offsetWhenScrollDisabled);
}
function enableScrollOnBody() {
    $('body').removeClass('scrollDisabled').css('margin-top', 0);
    $(window).scrollTop(y_offsetWhenScrollDisabled);
}



$('.open_search_box').click(function (e) {
    $(".my_own_moda_search").css({
        "width": "100%",
        "animation": "slideInLeft",
        "animation-duration": ".5s",
    });
    disableScrollOnBody();
})

$('.close_modal_search').click(function (e) {
    $(".my_own_moda_search").css({
        "width": "0",
        "animation": "slideOutLeft",
        "animation-duration": ".5s",
    });
    enableScrollOnBody();
})

let my_own_moda_search = document.getElementById('my_own_moda_search');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == my_own_moda_search) {
        $(".my_own_moda_search").css({
            "width": "0",
            "animation": "slideOutLeft",
            "animation-duration": ".5s",
        });
        enableScrollOnBody();
    }
}

//Menu
$('.open_main_menu_side').click(function (e) {
    $('.sidebar_main_menu').css({
        "width": "100%",
        "animation": "slideInLeft",
        "animation-duration": ".5s",
    });
    disableScrollOnBody();
})

$('.close_main_menu').click(function (e) {
    $(".sidebar_main_menu").css({
        "width": "0",
        "animation": "slideOutLeft",
        "animation-duration": ".5s",
    });
    enableScrollOnBody();
})

$(document).ready(function () {
    $(".owl_home2").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navSpeed: 1000,
        dragEndSpeed: 1000,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    let owl_home2 = $('.owl_home2');
    owl_home2.owlCarousel();
    // Go to the next item
    $('.btn_right_carousel_home2').click(function () {
        owl_home2.trigger('next.owl.carousel', [1000]);
    })
    // Go to the previous item
    $('.btn_left_carousel_home2').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl_home2.trigger('prev.owl.carousel', [1000]);
    })
});





