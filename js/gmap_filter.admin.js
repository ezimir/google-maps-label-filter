

var DEFAULT_CLICK_MODE = 'default',
    CLICK_MODE = DEFAULT_CLICK_MODE,
    MARKERS = {};


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
            control_setDefaultClickMode();

            var active = $(this).hasClass('active');
            $(this).toggleClass('btn-success', !active);

            $('#edit').remove();

            CLICK_MODE = [DEFAULT_CLICK_MODE, $(this).data('action')][~~!active];
        });
}


function control_setDefaultClickMode() {
    $('[data-toggle~=button].active').removeClass('btn-success active');
    CLICK_MODE = DEFAULT_CLICK_MODE;
}


function click_default(event) {
    $('#edit:visible').remove();
}


// --- Initialization ---------------------------------------------------------


function initialize_map(element_id) {
    map = new google.maps.Map(document.getElementById(element_id), mapOptions);

    overlay = new google.maps.OverlayView();
    overlay.draw = function() {};
    overlay.setMap(map);

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
    google.maps.event.addListener(map, 'bounds_changed', function (event) {
        var $panel = $('#edit:visible')
        if ($panel.length > 0) {
            var marker = MARKERS[$panel.data('id')];
            edit_updatePanelPosition($panel, marker);
        }
    });
}


// --- Templates for JS output ------------------------------------------------


var template_output = '\n\
var map, overlay,\n\
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
        },';

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
        output = sprintf(template_output, data),
        count = 0;

    $.each(MARKERS, function (id, marker) {
        var position = marker.getPosition();
        data = {
            latitude: position.lat(),
            longitude: position.lng(),
            title: marker.title
        }
        output += sprintf(template_marker, data);

        count += 1;
    });
    if (count) {
        output = output.slice(0, -1); // remove trailing comma if necessary
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

    marker.data = {
        tags: [],
        time: null,
        age: {
            from: null,
            to: null
        }
    };

    MARKERS[marker.__gm_id] = marker;

    google.maps.event.addListener(marker, 'click', function (event) {
        if (CLICK_MODE !== DEFAULT_CLICK_MODE) {
            var action = 'click_marker_' + CLICK_MODE;

            if (typeof window[action] === 'function') {
                return window[action](marker, event);
            }
        }

        edit_openPanel(marker);
    });
    google.maps.event.addListener(marker, 'dragstart', function (event) {
        var $panel = $('#edit:visible');
        if ($panel.length > 0) {
            $panel.fadeTo(100, .4);
            google.maps.event.addListener(marker, 'drag', function (event) {
                edit_updatePanelPosition($panel, marker);
            });
            google.maps.event.addListener(marker, 'dragend', function (event) {
                $panel.fadeTo(100, 1);
            });
        }
    });
    google.maps.event.addListener(marker, 'mouseover', function (event) {
        if (!$('#edit').is(':visible') || $('#edit').data('id') !== marker.__gm_id) {
            var $tooltip = $('<div class="tooltip fade right in"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + marker.title + '</div></div>');
            edit_updatePanelPosition($tooltip, marker);
            $tooltip.hide().appendTo('#map_canvas').fadeIn(100);
        }
    });
    google.maps.event.addListener(marker, 'mouseout', function (event) {
        $('.tooltip').fadeOut(100, function () {
            $(this).remove();
        });
    });

    var $panel = edit_openPanel(marker);
    $panel.find('.popover-title input').focus();

    control_setDefaultClickMode();
}


$.fn.ownHtml = function () {
    return $('<div>').append(this.clone()).remove().html();
}


function edit_updatePanelPosition($panel, marker) {
    var pixel = overlay.getProjection().fromLatLngToContainerPixel(marker.getPosition());
    $panel.css({
        top: pixel.y - 45,
        left: pixel.x + 10
    });
}

function edit_appendPanel(marker, pixel) {
    var data = $.extend({}, marker.data, {
            id: marker.__gm_id,
            title: marker.title,
            tags: marker.data.tags.join(', ')
        }),
        $panel = $('#template-edit')
            .tmpl(data)
            .data(data);

    $panel.find('#control-age-to').keydown(function (e) {
        var key = e.keyCode || e.which;
        if (key === 9) {
            $('#edit .popover-title input').focus();
            return e.preventDefault();
        }
    });

    $panel.appendTo('#map_canvas');

    return $panel;
}


function edit_openPanel(marker, pixel) {
    var $panel = $('#edit');

    if ($panel.length === 0) {
        $panel = edit_appendPanel(marker);
    }

    if ($panel.data('id') !== marker.__gm_id) {
        $panel.remove();
        $panel = edit_appendPanel(marker);
    }

    edit_updatePanelPosition($panel, marker);

    $panel.toggle();
    $('.tooltip').toggle();

    return $panel;
}


function click_marker_deleteMarker(selected_marker, event) {
    selected_marker.setMap(null);
    $('.tooltip').remove();

    var markers_new = {},
        selected_id = selected_marker.__gm_id.toString();

    $.each(MARKERS, function (id, marker) {
        if (id !== selected_id) {
            markers_new[id] = marker;
        }
    });
    MARKERS = markers_new;

    control_setDefaultClickMode();
}

