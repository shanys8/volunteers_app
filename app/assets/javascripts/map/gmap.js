//
//
//function initialize() {
//    var mapOptions = {
//        zoom: 2,
//        center: new google.maps.LatLng(32.0630310,34.7716800),
//        disableDefaultUI: true
//    };
//    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
//    var styles = [
//        {
//            "elementType": "labels",
//            "stylers": [
//                { "visibility": "off" }
//            ]
//        },
//        {
//            "featureType": "landscape",
//            "stylers": [
//                { "visibility": "on" },
//                { "color": "#cee2ff" }
//            ]
//        },
//        {
//            "featureType": "water",
//            "stylers": [
//                { "color": "#f5f9ff" }
//            ]
//        },
//        {
//            "featureType": "administrative.country",
//            "elementType": "geometry",
//            "stylers": [
//                { "visibility": "off" }
//            ]
//        },
//        {
//            "featureType": "administrative.province",
//            "stylers": [
//                { "visibility": "off" }
//            ]
//        },
//        {
//            "featureType": "administrative",
//            "elementType": "geometry.stroke",
//            "stylers": [
//                { "visibility": "off" }
//            ]
//        },
//        {
//            "featureType": "landscape.natural",
//            "elementType": "geometry",
//            "stylers": [
//                { "visibility": "on" },
//                { "color": "#cee2ff" }
//            ]
//        },
//        {
//            "featureType": "road",
//            "stylers": [
//                { "visibility": "off" }
//            ]
//        },
//        {
//            "featureType": "poi",
//            "stylers": [
//                { "visibility": "on" },
//                { "color": "#cee2ff" }
//            ]
//        },
//        {
//        }
//
//    ];
//
//    var hotels = gon.hotels_arr;
//    map.setOptions({styles: styles});
//    setMarkers(map, hotels);
//}
//
//
//
//
//function setMarkers(map, locations) {
//
//    // image for marker
//    var image = {
//        url: 'assets/stat-map-pin.png',
//        size: new google.maps.Size(20, 32),
//        origin: new google.maps.Point(0,0),
//        anchor: new google.maps.Point(0, 32)
//    };
//
//    // loop on hotels array data
//    for (var i = 0; i < locations.length; i++) {
//        var hotel = locations[i];
//        var hotel_name = hotel[0];
//        var hotel_lat = hotel[1];
//        var hotel_long = hotel[2];
//        var hotel_address = hotel[3];
//        var hotel_initial_stock_amount_sum = hotel[4];
//        var hotel_reservation_num = hotel[5];
//        var reservation_id = hotel[6];
//
//        var myLatLng = new google.maps.LatLng(hotel_lat, hotel_long);
//
//        var marker = new google.maps.Marker({
//            position: myLatLng,
//            map: map,
//            icon: image,
//            hotel_name: hotel_name,
//            hotel_address: hotel_address,
//            hotel_initial_stock_amount_sum: hotel_initial_stock_amount_sum,
//            hotel_reservation_num: hotel_reservation_num,
//            reservation_id: reservation_id
//        });
//
//
//        google.maps.event.addListener(marker, 'click', (function(marker) {
//            return function() {
//
//                var view_on_roomer_string = "";
//                if (this.hotel_reservation_num == 1) {
//                    view_on_roomer_string =
//                        '<div id="view_on_roomer_link"><span> <a target="_blank" href="https://www.roomertravel.com/room/' +this.reservation_id+ '"' + ' > View on Roomer </a></span></div>'
//                }
//
//                var infowindow = new google.maps.InfoWindow();
//
//
//                content_string =
//                    '<div id="content">'+
//                    '<div id="firstHeading">'+ this.hotel_name +'</div>'+
//                    '<div id="bodyContent">'+
//                    '<span>'+ this.hotel_address +'</span>'+
//                    '</div>'+
//                    '<div id="firstHeading">'+
//                    '<span> No. of Reservations: '+ this.hotel_initial_stock_amount_sum +'</span>'+
//                    '</div>'+
//                    view_on_roomer_string+
//                    '</div>';
//
//                infowindow.setContent(content_string);
//                infowindow.open(map, marker);
//
//
//            }
//        })(marker));
//
//
//    }
//
//
//}
//
////$('#statistics').ready(function() {
//    google.maps.event.addDomListener(window, 'load', initialize);
////});
//
//
