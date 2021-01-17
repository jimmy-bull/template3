//DESCRIPTION PAGES EFFECT ON MINIATURE CLICKS
var options = {
    // more options here
    scale: 1
};
new ImageZoom(document.getElementById("img-container"), options);
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