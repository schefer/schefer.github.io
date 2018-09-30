// Google Map
google.maps.visualRefresh = true;
function initialize() {
    var myLatlng = new google.maps.LatLng(56.8360658,60.5559682);
    var mapOptions = {
        zoom: 17,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    var contentString = '<div>SCHEF SPORTSWEAR</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'SCHEF SPORTSWEAR'
    });
    infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', initialize);

// Gallery
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
