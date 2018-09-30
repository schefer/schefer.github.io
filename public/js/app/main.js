
var calc_elem = document.getElementById('calculator');
if (calc_elem) {
    var calc = new Calculator('calculator');
    calc.refresh();
    calc.listen();
}


$('.gallery-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.gallery-thumbs',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                draggable: true,
            }
        }
    ]
});

$('.gallery-thumbs').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    asNavFor: '.gallery-images',
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    draggable: false,
    variableWidth: true,
    arrows: false
});