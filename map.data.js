
var map,
    mapOptions = {
        mapTypeId: google.maps.MapTypeId.HYBRID,

        center: new google.maps.LatLng(48.720948232588576, 21.25689787292481),
        zoom: 15,

        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    };

function initialize_map(element_id) {
    map = new google.maps.Map(document.getElementById(element_id), mapOptions);
}

