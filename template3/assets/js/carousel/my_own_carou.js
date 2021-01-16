$(document).ready(function () {
    // Activate Carousel
    $("#big_carousel1").carousel();

    $('.image_to_slide').css({
        "animation": "fadeIn",
        "animation-duration": "3s"
    })
    $('.fade-left').css({
        "animation": "fadeInLeft",
        "animation-duration": "3s"
    })
    $('.fade-right').css({
        "animation": "fadeInRight",
        "animation-duration": "3s"
    })
    $('.title_on_carou_big1').css({
        "animation": "flash",
        "animation-duration": "3s",
    })

    $("#big_carousel1").on('slid.bs.carousel', function () {
        $('.image_to_slide').css({
            "animation": "fadeIn",
            "animation-duration": "3s"
        })
        $('.fade-left').css({
            "animation": "fadeInLeft",
            "animation-duration": "3s"
        })
    });

    // Activate Carousel
    $("#big_carousel2").carousel();

    $('.BigTitle_Carou2,.secondTitle_Carou1,.Date_Carou1, .explorH1').css({
        "animation": "zoomIn",
        "animation-duration": "3s"
    })
    $('.explorH1').css({
        "animation": "slideInLeft",
        "animation-duration": "3s"
    })


    $("#big_carousel2").on('slid.bs.carousel', function () {
        $('.BigTitle_Carou2,.secondTitle_Carou1,.Date_Carou1').css({
            "animation": "zoomIn",
            "animation-duration": "3s"
        });
        $('.explorH1').css({
            "animation": "slideInLeft",
            "animation-duration": "3s"
        })
    }
    )
    // Enable Carousel Controls
    $(".prev-control-big-carou2").click(function () {
        $("#big_carousel2").carousel("prev");

    });
    // Enable Carousel Controls
    $(".next-control-big-carou2").click(function () {
        $("#big_carousel2").carousel("next");
    });

});