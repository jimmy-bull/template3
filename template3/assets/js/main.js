alert()
let imgt = document.getElementById("imgt").height;
$('play_logo_parent').css({
    "margin-top:": imgt
})

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

var options = {
    // more options here
    scale: 1
};
new ImageZoom(document.getElementById("img-container"), options);

//DESCRIPTION PAGES EFFECT ON MINIATURE CLICKS

$(".miniature_images:eq(0)").css({
    "border-style": "solid",
    "padding": 0 + "px",
    "border-width": 1 + "px",
    'box-sizing': 'border-box',
    'border-color': "#01FF70"
})
$(".miniature_images").hover(function (e) {
    new ImageZoom(document.getElementById("img-container"), options);
    $('.contain_big_miniature_images').attr('src', $(this).attr('src'))
    $(this).css({
        "border-style": "solid",
        "padding": 0 + "px",
        "border-width": 1 + "px",
        'box-sizing': 'border-box',
        'border-color': "#01FF70"
    })
    $(this).siblings().css({
        "border-style": "none",
    })
    $('.js-image-zoom__zoomed-area').css({
        'background': 'white',
        'opacity': '-=0.1', //TO KEEP THE  Js-image-zoom__zoomed-area AT THE SAME PLACE
    })

})

$("#img-container").hover(function (e) {
    $('.the_other_side_of_zoom_part').css({
        "opacity": 0
    });
})

$("#img-container").mouseleave(function () {
    $('.the_other_side_of_zoom_part').css({
        "opacity": 1
    });
});

$('.others_images:eq(0)').css({
    "border-style": "solid",
    "padding": 0 + "px",
    "border-width": 1 + "px",
    'box-sizing': 'border-box',
    'border-color': "#01FF70"
})