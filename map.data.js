
var map, overlay,
    mapOptions = {
        mapTypeId: google.maps.MapTypeId.HYBRID,

        center: new google.maps.LatLng(48.721585257761035, 21.258485740661627),
        zoom: 15,

        streetViewControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    },
    mapMarkers = [
        {
            position: new google.maps.LatLng(48.7255204788367, 21.254537528991705),
            title: 'Soccer Preview',
            data: {
                tags: ['fun', 'player', 'soccer'],
                time: 15,
                age: { from: 5, to: 35 },
                icon: 'stadium.png'
            }
        },
        {
            position: new google.maps.LatLng(48.72059432622901, 21.258056587219244),
            title: 'Elizabeth\'s Church',
            data: {
                tags: ['fun', 'religion', 'temple'],
                time: 60,
                age: { from: 25, to: null },
                icon: 'cathedral.png'
            }
        },
        {
            position: new google.maps.LatLng(48.72243461210676, 21.26711172485352),
            title: 'Train Station',
            data: {
                tags: ['run', 'trains'],
                time: 30,
                age: { from: null, to: null },
                icon: 'train.png'
            }
        }
    ];

