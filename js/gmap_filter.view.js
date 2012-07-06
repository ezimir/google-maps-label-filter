

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
            taglist = taglist.map(function (item) {
                return $.trim(item);
            });
            taglist.sort();
        }

        filter_updateMarkers({
            tags: taglist,
            time: {
                from: parseInt($.trim($this.find('input[name=time-from]').val()), 10),
                to: parseInt($.trim($this.find('input[name=time-to]').val()), 10),
            },
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
        marker.data.index = i;
        marker.data.enabled = true;
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
        if (marker.data.enabled) {
            if (!$('#edit').is(':visible') || $('#edit').data('id') !== marker.__gm_id) {
                var $tooltip = $('<div class="tooltip fade right in"><div class="tooltip-arrow"></div><div class="tooltip-inner">' + marker.title + '</div></div>');
                edit_updatePanelPosition($tooltip, marker);
                $tooltip.hide().appendTo('#map_canvas').fadeIn(100);
            }
        }
    });
    google.maps.event.addListener(marker, 'mouseout', function (event) {
        $('.tooltip').fadeOut(100, function () {
            $(this).remove();
        });
    });
}


var checkIcons = window.setInterval(function () {
    if (map) {
        var $icons = $(map.getDiv()).find('img:icons');
        if ($icons.length) {
            window.clearInterval(checkIcons);

            var $divs = $icons.parent(),
                marker_count = mapMarkers.length;
            $.each(MARKERS, function (id, marker) {
                marker.data.$elem = $divs.filter(function (index) {
                    return index === marker.data.index || index === marker.data.index + marker_count || index === marker.data.index + 2 * marker_count;
                });
            });
        }
    }
}, 500);


// --- Marker handling --------------------------------------------------------


function edit_updatePanelPosition($panel, marker) {
    var pixel = overlay.getProjection().fromLatLngToContainerPixel(marker.getPosition());
    $panel.css({
        top: pixel.y - 40,
        left: pixel.x + 10
    });
}


function filter_updateMarkers(filter_options) {
    $.each(MARKERS, function (id, marker) {
        var enable = true;

        if (filter_options.tags.length && marker.data.tags.length) {
            var found_tags = getIntersect(marker.data.tags, filter_options.tags);
            if (found_tags.join('') !== filter_options.tags.join('')) {
                enable = false;
            }
        }

        if (marker.data.time) {
            if (filter_options.time.from && marker.data.time < filter_options.time.from) {
                enable = false;
            }
            if (filter_options.time.to && marker.data.time > filter_options.time.to) {
                enable = false;
            }
        }

        if (filter_options.age) {
            if (marker.data.age.from && marker.data.age.from > filter_options.age) {
                enable = false;
            }
            if (marker.data.age.to && marker.data.age.to < filter_options.age) {
                enable = false;
            }
        }

        filter_toggleMarker(marker, enable);
    });
}


function filter_toggleMarker(marker, enable) {
    marker.data.enabled = enable;
    marker.data.$elem.css({ 'opacity': enable ? 1 : .2 });
}


// --- Utility functions ------------------------------------------------------


function getIntersect(arr1, arr2) {
    var r = [], o = {}, l = arr2.length, i, v;
    for (i = 0; i < l; i++) {
        o[arr2[i]] = true;
    }
    l = arr1.length;
    for (i = 0; i < l; i++) {
        v = arr1[i];
        if (v in o) {
            r.push(v);
        }
    }
    return r;
}


if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
        var T, A, k;

        if (this == null) {
            throw new TypeError(" this is null or not defined");
        }

        var O = Object(this),
            len = O.length >>> 0;

        if ({}.toString.call(callback) != "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }

        if (thisArg) {
            T = thisArg;
        }

        A = new Array(len);

        k = 0;

        while(k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[ k ];
                mappedValue = callback.call(T, kValue, k, O);
                A[ k ] = mappedValue;
            }
            k++;
        }

        return A;
    };
}

$.expr[':'].icons = function (elem) {
    return $(elem).attr('src').indexOf(ICON_PREFIX) === 0;
}

