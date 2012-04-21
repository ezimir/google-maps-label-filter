

var CLICK_MODE = '',
    MARKERS = [];


// --- General Control UI -----------------------------------------------------


function initialize_controls(target_id) {
    $(target_id)
        .find('.btn').tooltip({
            placement: 'left'
        }).end()
        .delegate('[data-action]', 'click', function () {
            var action = 'action_' + $(this).data('action');

            if (typeof window[action] === 'function') {
                window[action].call(this);
            }
        })
        .delegate('[data-toggle~=button]', 'click', function () {
            var active = $(this).hasClass('active');
            $(this).toggleClass('btn-success', !active);

            CLICK_MODE = ['', $(this).data('action')][~~!active];
        });
}


// --- Initialization ---------------------------------------------------------


function initialize_map(element_id) {
    map = new google.maps.Map(document.getElementById(element_id), mapOptions);

    for (var i = 0; marker = mapMarkers[i]; i++) {
        marker.map = map;
        marker.draggable = true;
        new google.maps.Marker(marker);
    }

    google.maps.event.addListener(map, 'click', function (event) {
        var action = 'click_' + CLICK_MODE;

        if (typeof window[action] === 'function') {
            window[action](event);
        }
    });
}


// --- Templates for JS output ------------------------------------------------


var template_output = '\n\
var map,\n\
    mapOptions = {\n\
        mapTypeId: google.maps.MapTypeId.HYBRID,\n\
\n\
        center: new google.maps.LatLng(%(latitude)s, %(longitude)s),\n\
        zoom: %(zoom)d,\n\
\n\
        mapTypeControlOptions: {\n\
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU\n\
        }\n\
    },\n\
    mapMarkers = [';

var template_marker = '\n\
        {\n\
            position: new google.maps.LatLng(%(latitude)s, %(longitude)s),\n\
            title: \'%(title)s\',\n\
        }';

var template_output_end = '\n\
    ];\n\
';


// --- Outputting JS map data -------------------------------------------------


function action_mapOutput() {
    var target_id = $(this).data('target'),
        center = map.getCenter(),
        data = {
            latitude: center.lat(),
            longitude: center.lng(),
            zoom: map.getZoom()
        },
        output = sprintf(template_output, data);

    for (var i = 0; marker = MARKERS[i]; i++) {
        var position = marker.getPosition();
        data = {
            latitude: position.lat(),
            longitude: position.lng(),
            title: ''
        }
        output += sprintf(template_marker, data);
        if (i < MARKERS.length - 1) {
            output += ',';
        }
    }

    output += template_output_end;

    $(target_id).find('textarea').val(output);
}


// --- Marker handling --------------------------------------------------------


function click_addMarker(event) {
    var marker = new google.maps.Marker({
            position: event.latLng,
            title: 'New Marker',

            map: map,
            draggable: true
        });

    MARKERS.push(marker);

    google.maps.event.addListener(marker, 'click', function (event) {
        edit_openPanel(marker, event.pixel);
    });
}


function edit_openPanel(marker, position) {

}

