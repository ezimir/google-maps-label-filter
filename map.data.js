
var map, overlay,
    mapOptions = {
        mapTypeId: google.maps.MapTypeId.HYBRID,

        center: new google.maps.LatLng(48.720948232588576, 21.25689787292481),
        zoom: 15,

        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    },
    mapMarkers = [
    ];

