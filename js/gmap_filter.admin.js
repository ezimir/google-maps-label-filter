

// --- Utility functions ------------------------------------------------------


$.fn.ownHtml = function () {
    return $('<div>').append(this.clone()).remove().html();
}


if (!Array.prototype.map) {
    Array.prototype.map = function(fun /*, thisp*/) {
        if (typeof fun !== 'function') {
            throw new TypeError();
        }

        var len = this.length,
            res = new Array(len),
            thisp = arguments[1];

        for (var i = 0; i < len; i++) {
            if (i in this) {
                res[i] = fun.call(thisp, this[i], i, this);
            }
        }

        return res;
    };
}


// --- Global variables -------------------------------------------------------


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

    for (var i = 0; marker_options = mapMarkers[i]; i++) {
        marker_options.map = map;
        marker_options.draggable = true;

        var marker = new google.maps.Marker(marker_options);
        marker.data = marker_options.data;
        initialize_markerEvents(marker);

        MARKERS[marker.__gm_id] = marker;
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


function initialize_markerEvents(marker) {
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
        streetViewControl: false,\n\
        mapTypeControlOptions: {\n\
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU\n\
        }\n\
    },\n\
    mapMarkers = [';

var template_marker = '\n\
        {\n\
            position: new google.maps.LatLng(%(latitude)s, %(longitude)s),\n\
            title: \'%(title)s\',\n\
            data: {\n\
                tags: [%(tags)s],\n\
                time: %(time)s,\n\
                age: { from: %(age.from)s, to: %(age.to)s }\n\
            }\n\
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
        var position = marker.getPosition(),
            marker_data = $.extend({}, marker.data, {
                latitude: position.lat(),
                longitude: position.lng(),
                title: marker.title
            });
        marker_data.tags = marker.data.tags.map(function (tag) {
            return '\'' + tag + '\'';
        }).join(', ');
        output += sprintf(template_marker, marker_data);

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

    marker.data = edit_getDefaultMarkerData();

    MARKERS[marker.__gm_id] = marker;
    edit_openPanel(marker);

    initialize_markerEvents(marker);

    control_setDefaultClickMode();
}


function edit_getDefaultMarkerData(marker)  {
    return {
        tags: [],
        time: null,
        age: {
            from: null,
            to: null
        }
    };
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

    $panel.find('input').keyup(function (e) {
        var $panel = $('#edit'),
            marker = MARKERS[$panel.data('id')];

        marker.title = $.trim($panel.find('.popover-title input').val());
        var data = edit_getDefaultMarkerData();
            tags = $.trim($panel.find('#control-tags').val()),
            time = $.trim($panel.find('#control-time').val()),
            age_from = $.trim($panel.find('#control-age-from').val()),
            age_to = $.trim($panel.find('#control-age-to').val());

        if (tags) {
            data.tags = tags.split(',').map($.trim);
        }
        if (time) {
            data.time = parseInt(time);
        }
        if (age_from) {
            data.age.from = parseInt(age_from);
        }
        if (age_to) {
            data.age.to = parseInt(age_to);
        }
        marker.data = data;
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

    $panel
        .toggle()
        .find('.popover-title input').focus();

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

