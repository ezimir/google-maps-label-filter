

// --- Global variables -------------------------------------------------------


var MARKERS = {},
    ICON_PREFIX = 'http://dl.dropbox.com/u/3904604/MapMarkerIcons/',
    ICON_SHADOW = 'shadow.png',
    IMAGE_SHADOW = new google.maps.MarkerImage(
        ICON_PREFIX + ICON_SHADOW,
        new google.maps.Size(51, 37),   // size
        new google.maps.Point(0, 0),    // origin
        new google.maps.Point(28, 37)   // anchor
    );


// --- General Control UI -----------------------------------------------------


function initialize_controls(target_id) {
    $(target_id).find('form').submit(function (e) {
        var $this = $(this),
            taglist = [],
            tagsraw = $.trim($this.find('input[name=tags]').val());

        if (tagsraw.length) {
            taglist = tagsraw.split(',');
        }

        filter_updateMarkers({
            tags: taglist,
            time: parseInt($.trim($this.find('input[name=time]').val()), 10),
            age: parseInt($.trim($this.find('input[name=age]').val()), 10)
        });

        e.preventDefault();
        return false;
    });
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
        marker_options.icon = initialize_icon(marker_options.data.icon);
        marker_options.shadow = IMAGE_SHADOW;

        var marker = new google.maps.Marker(marker_options);
        marker.data = marker_options.data;
        initialize_markerEvents(marker);

        MARKERS[marker.__gm_id] = marker;
    }
}


function initialize_icon(image) {
    return new google.maps.MarkerImage(
        ICON_PREFIX + image,
        new google.maps.Size(32, 37),   // size
        new google.maps.Point(0, 0),    // origin
        new google.maps.Point(16, 37)   // anchor
    )
}


function initialize_markerEvents(marker) {
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


// --- Marker handling --------------------------------------------------------


function edit_updatePanelPosition($panel, marker) {
    var pixel = overlay.getProjection().fromLatLngToContainerPixel(marker.getPosition());
    $panel.css({
        top: pixel.y - 40,
        left: pixel.x + 10
    });
}


function filter_updateMarkers(filter_options) {
    console.log(filter_options);
    $.each(MARKERS, function (id, marker) {
        var age_from_ok = true,
            age_to_ok = true;

        if (marker.data.age_from && marker.data.age_from >= filter_options.age) {
            age_from_ok = false;
        }
        if (marker.data.age_to && marker.data.age_to <= filter_options.age) {
            age_to_ok = false;
        }
        if (age_from_ok && age_to_ok) {
            return filter_enableMarker(marker);
        }

        if (marker.data.time - 5 <= filter_options.time && marker.data.time + 5 >= filter_options.time) {
            return filter_enableMarker(marker);
        }
        filter_disableMarker(marker);
    });
}


function filter_enableMarker(marker) {
    marker.setVisible(true);
}


function filter_disableMarker(marker) {
    marker.setVisible(false);
}

