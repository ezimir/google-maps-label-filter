
var control_status = {},
    control_actions = {},
    control_mapclicks = {},
    info_panel_view,
    info_panel_edit;


// --- General Control UI ----------------------------------------------------


function initialize_controls(target_id) {
    $(target_id)
        .delegate('[data-action]', 'click', function () {
            var action = 'action_' + $(this).data('action');

            if (typeof window[action] === 'function') {
                window[action].call(this);
            }
        })
        .delegate('[data-toggle~=button]', 'click', function () {
            $(this).toggleClass('btn-success', !$(this).hasClass('active'));
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
    };\n\
\n\
';

var template_marker = '\n\
';

var template_init = '\n\
function initialize_map(element_id) {\n\
    map = new google.maps.Map(document.getElementById(element_id), mapOptions);\n\
}\
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

    output += template_init;

    $(target_id).find('textarea').val(output);
}


// --- Marker handling --------------------------------------------------------


function action_addMarker() {
}


/*
function initializeControls() {
    $('menu li[id]').each(function () {
        if (this.id.indexOf('toggle_') !== -1) {
            var action_name = this.id.substring(7);
            control_status[action_name] = false;
            if ($(this).hasClass('mapevent')) {
                control_mapclicks[action_name] = window[action_name]
            }

            $(this).click(function () {
                toggleControl(this.id.substring(7));
            })
        }
    });
}
*/

function initializeEvents() {
    google.maps.event.addListener(map, 'click', function (event) {
        for (prop in control_mapclicks) {
            if (control_mapclicks.hasOwnProperty(prop) && control_status[prop]) {
                control_mapclicks[prop](event);
            }
        }
    });

    $('#info_panel_edit button.save').click(saveInfoPanel);
    $('#info_panel_edit a.delete').click(function (e) {
        removeInfoPanelAndMarker();
        return e.preventDefault();
    });
}

function toggleControl(control) {
    control_status[control] = !control_status[control];
    if (control_status[control]) {
        for (prop in control_status) {
            if (control_status.hasOwnProperty(prop) && prop != control) {
                control_status[prop] = false;
                $('#toggle_' + prop).removeClass('enabled');
            }
        }
    }
    $('#toggle_' + control).toggleClass('enabled', control_status[control]);
}

var markers = [];

function addMarker(event) {
    var marker = new google.maps.Marker({
            position: event.latLng,
            title: 'Test marker',

            map: map,
            draggable: true
        });

    marker.id = markers.length;
    markers.push(marker);

    var panel = { id: marker.id, name: marker.title };
    panels[marker.id] = panel;

    setInfoPanelData(panel);
    info_panel_edit.open(map, marker);

    google.maps.event.addListener(marker, 'click', function (event) {
        var $panel = $('#info_panel_edit');
        if ($panel.is(':visible') && $panel.data('id') === marker.id) {
            info_panel_edit.close();
        } else {
            setInfoPanelData(panels[marker.id]);
            info_panel_edit.open(map, marker);
        }
    });
}

function setInfoPanelData(data) {
    if (typeof data.desc === 'undefined') {
        data.desc = '';
    }
    if (typeof data.genre === 'undefined') {
        data.genre = '';
    }

    $('#info_panel_edit').data('id', data.id)
        .find('.info_name').val(data.name).end()
        .find('.info_desc').val(data.desc).end()
        .find('.info_genre').val(data.genre).end()
        .find('.info_time').val(data.time).end()
        .show();
}

var panels = {};

function saveInfoPanel() {
    var $panel = $('#info_panel_edit'),
        data = {
            id: $panel.data('id'),
            name: $panel.find('.info_name').val().trim(),
            desc: $panel.find('.info_desc').val().trim(),
            genre: $panel.find('.info_genre').val().trim(),
            time: $panel.find('.info_time').val().trim()
        };

    panels[data.id] = data;

    $('<div class="alert"> Saved! </div>').insertAfter($('#info_panel_edit .save'));
    window.setTimeout(function () {
        $('#info_panel_edit .alert').fadeOut(function () {
            $(this).remove();
        });
    }, 2500);
}

function removeInfoPanelAndMarker() {
    var $panel = $('#info_panel_edit'),
        marker_id = $panel.data('id');

    info_panel_edit.close();
    markers[marker_id].setMap(null);
}

