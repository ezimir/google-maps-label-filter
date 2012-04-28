
var icon_category_hierarchy = {
        'stores': {
            'apparel': false,
            'computers-electronics': false,
            'food-drink': false,
            'general-merchandise': false
        },
        'nature': {
            'agriculture': false,
            'animals': false,
            'natural-marvels': false,
            'weather': false
        },
        'tourism': {
            'cult-religion': false,
            'monuments-structures': false,
            'old-defensive-buildings': false,
            'place-to-see': false
        },
        'friends-family': {
            'kids': false
        },
        'sports': {
            'air-sports': false,
            'ball-sports': false,
            'cycling': false,
            'fighting-sports': false,
            'motor-sports': false,
            'nature-sports': false,
            'relaxing-sports': false,
            'water-sports': false,
            'winter-sports': false
        },
        'health-education': {
            'education': false,
            'health': false
        },
        'events': {
            'crime': false,
            'natural-disaster': false
        },
        'culture-entertainment': {
            'culture': false,
            'museums': false,
            'music': false,
            'entertainment': false,
            'indoor-activities': false,
            'outdoor-activities': false
        },
        'restaurants-bars': {
            'bars': false,
            'hotels': false,
            'restaurants': false,
            'take-away': false
        },
        'offices': {
            'city-services': false,
            'interior': false,
            'real-estate': false
        },
        'industry': {
            'electric-power': false,
            'military': false
        },
        'transportation': {
            'aerial-transportation': false,
            'directions': false,
            'other-types-of-transportation': false,
            'road-signs': false,
            'road-transportation': false
        },
        'media': false
    };

var icon_categories = {
        'stores': {
            title: 'Stores',
            icons: ['2hand.png', 'hoergeraeteakustiker_22px.png', 'medicalstore.png', 'bicycle_shop.png', 'binoculars.png', 'trolley.png', 'craftstore.png', 'comics.png', 'toys.png', 'tools.png', 'sledgerental.png', 'pets.png', 'pens.png', 'paint.png', 'newsagent.png', 'kiosk.png', 'homecenter.png', 'gifts.png', 'flowers.png', 'fishingstore.png', 'christmasmarket.png', 'artgallery.png', 'library.png']
        },
        'apparel': {
            title: 'Apparel',
            icons: ['umbrella-2.png', 'schreibwaren_web.png', 'textiles.png', 'tailor.png', 'sneakers.png', 'shoes.png', 'perfumery.png', 'lingerie.png', 'jewelry.png', 'hats.png', 'clothers_male.png', 'clothers_female.png', 'bags.png']
        },
        'computers-electronics': {
            title: 'Computers & Electronics',
            icons: ['videogames.png', 'photography.png', 'phones.png', 'music.png', 'movierental.png', 'computers.png']
        },
        'food-drink': {
            title: 'Food & Drink',
            icons: ['gumball_machine.png', 'muffin_bagle.png', 'japanese-sweet-2.png', 'farmstand.png', 'sandwich-2.png', 'cheese.png', 'fruits.png', 'candy.png', 'patisserie.png', 'liquor.png', 'grocery.png', 'eggs.png', 'butcher-2.png', 'bread.png']
        },
        'general-merchandise': {
            title: 'General Merchandise',
            icons: ['kayak1.png', 'skis.png', 'ski_shoe1.png', 'supermarket.png', 'market.png', 'mall.png', 'departmentstore.png', 'conveniencestore.png']
        },
        'nature': {
            title: 'Nature',
            icons: ['recycle.png', 'compost.png']
        },
        'agriculture': {
            title: 'Agriculture',
            icons: ['water.png', 'honeycomb.png', 'waterwellpump.png', 'quadrifoglio.png', 'u-pick_stand.png', 'farmstand.png', 'apple.png', 'sugar-shack.png', 'cheese.png', 'fruits.png', 'windmill-2.png', 'watermill-2.png', 'vineyard-2.png', 'haybale.png', 'field.png', 'farm-2.png', 'corral.png', 'cropcircles.png']
        },
        'animals': {
            title: 'Animals',
            icons: ['turtle-2.png', 'shark-export.png', 'lobster-export.png', 'cow-export.png', 'animal-shelter-export.png', 'ant-export.png', 'duck-export.png', 'monkey-export.png', 'butterfly-2.png', 'tiger-2.png', 'alligator.png', 'mosquito-2.png', 'frog-2.png', 'snail.png', 'spider.png', 'rodent.png', 'whale-2.png', 'pig.png', 'deer.png', 'bats.png', 'penguin-2.png', 'wildlifecrossing.png', 'snakes.png', 'seals.png', 'elephants.png', 'dolphins.png', 'chicken-2.png', 'birds-2.png', 'pets.png', 'eggs.png', 'veterinary.png', 'zoo.png']
        },
        'natural-marvels': {
            title: 'Natural marvels',
            icons: ['river-2.png', 'mountain-pass-locator-diagonal-reverse-export.png', 'grass.png', 'mushroom.png', 'desert-2.png', 'volcano-2.png', 'wetlands.png', 'waterwell.png', 'waterfall-2.png', 'shore-2.png', 'riparianhabitat.png', 'lake.png', 'hotspring.png', 'glacier-2.png', 'geyser-2.png', 'fossils.png', 'forest2.png', 'fjord-2.png', 'drinkingwater.png', 'canyon.png', 'beautifulview.png', 'beach.png', 'anchorpier.png', 'flowers.png', 'mountains.png']
        },
        'weather': {
            title: 'Weather',
            icons: ['umbrella-2.png', 'tornado-2.png', 'snowy-2.png', 'thunderstorm.png', 'sunny.png', 'cloudy.png', 'cloudysunny.png', 'rainy.png', 'wind-2.png']
        },
        'tourism': {
            title: 'Tourism',
            icons: ['marina-2.png', 'you-are-here-2.png', 'flag-export.png', 'palm-tree-export.png', 'pin-export.png', 'signpost-2.png', 'landmark.png', 'pleasurepier.png', 'picnic-2.png', 'lifeguard-2.png', 'gondola-2.png', 'ghosttown.png', 'forest.png', 'ford-2.png', 'dogs_leash.png', 'cruiseship.png', 'cave-2.png', 'camping-2.png', 'campfire-2.png', 'cabin-2.png', 'agritourism.png', 'shower.png', 'regroup.png', 'information.png', 'bustour.png']
        },
        'cult-religion': {
            title: 'Cult & Religion',
            icons: ['theravadatemple.png', 'japanese-temple.png', 'catholicgrave.png', 'jewishgrave.png', 'shintoshrine.png', 'sikh.png', 'prayer.png', 'templehindu.png', 'synagogue-2.png', 'mosquee.png', 'headstone-2.png', 'cross-2.png', 'convent-2.png', 'church-2.png', 'chapel-2.png', 'cemetary.png', 'cathedral.png']
        },
        'monuments-structures': {
            title: 'Monuments & Structures',
            icons: ['theravadapagoda.png', 'cromlech.png', 'ne_barn-2.png', 'megalith.png', 'rockhouse.png', 'memorial.png', 'templehindu.png', 'temple-2.png', 'statue-2.png', 'ruins-2.png', 'pyramid.png', 'palace-2.png', 'pagoda-2.png', 'monument.png', 'moderntower.png', 'modernmonument.png', 'fountain-2.png', 'bridge_old.png', 'bridge_modern.png', 'arch.png', 'amphitheater-2.png']
        },
        'old-defensive-buildings': {
            title: 'Old Defensive Buildings',
            icons: ['tower.png', 'ruins-2.png', 'palace-2.png', 'citywalls.png', 'castle-2.png']
        },
        'place-to-see': {
            title: 'Place to see',
            icons: ['footprint.png', 'japanese-lantern.png', 'star-3.png', 'map.png', 'clock.png', 'worldheritagesite.png', 'world.png', 'smallcity.png', 'sight-2.png', 'petroglyphs-2.png', 'panoramicview.png', 'olympicsite.png', 'notvisited.png', 'lighthouse-2.png', 'jewishquarter.png', 'historicalquarter.png', 'country.png', 'citysquare.png', 'bigcity.png']
        },
        'friends-family': {
            title: 'People',
            icons: ['smiley_happy.png', 'group-2.png', 'male-2.png', 'female-2.png', 'loveinterest.png', 'love_date.png', 'wedding.png', 'home.png', 'family.png', 'apartment-3.png']
        },
        'kids': {
            title: 'Kids',
            icons: ['scoutgroup.png', 'childmuseum01.png', 'toys.png', 'nursery.png', 'daycare.png', 'playground.png', 'nanny.png']
        },
        'sports': {
            title: 'Sports',
            icons: ['start-race-2.png', 'indoor-arena.png', 'cup.png', 'badminton-2.png', 'olympicsite.png', 'stadium.png', 'regroup.png']
        },
        'air-sports': {
            title: 'Air Sports',
            icons: ['speedriding.png', 'paragliding.png', 'kitesurfing.png', 'hanggliding.png']
        },
        'ball-sports': {
            title: 'Ball sports',
            icons: ['tebletennis.png', 'squash-2.png', 'volleyball.png', 'usfootball.png', 'tennis.png', 'soccer.png', 'rugbyfield.png', 'handball.png', 'golfing.png', 'cricket.png', 'beachvolleyball.png', 'basketball.png', 'baseball.png', 'australianfootball.png', 'billiard-2.png']
        },
        'cycling': {
            title: 'Cycling',
            icons: ['bike_downhill.png', 'bike_rising.png', 'finish.png', 'cycling_sprint.png', 'cycling_feed.png', 'cycling.png']
        },
        'fighting-sports': {
            title: 'Fighting Sports',
            icons: ['shootingrange.png', 'sumo-2.png', 'taekwondo-2.png', 'wrestling-2.png', 'karate.png', 'judo.png', 'boxing.png', 'shooting.png']
        },
        'motor-sports': {
            title: 'Motor Sports',
            icons: ['sportscar.png', 'finish.png', 'sportutilityvehicle.png', 'snowmobiling.png', 'motorbike.png', 'karting.png', 'atv.png']
        },
        'nature-sports': {
            title: 'Nature Sports',
            icons: ['ft.png', 'mountainbiking-3.png', 'bollie.png', 'spelunking.png', 'hunting.png', 'horseriding.png', 'hiking.png', 'golfing.png', 'fishing.png', 'climbing.png', 'beachvolleyball.png', 'archery.png', 'sledge_summer.png', 'ropescourse.png']
        },
        'relaxing-sports': {
            title: 'Relaxing Sports',
            icons: ['yoga.png', 'weights.png', 'swimming.png', 'rollerskate.png', 'petanque.png', 'jogging.png', 'fitness.png']
        },
        'water-sports': {
            title: 'Water Sports',
            icons: ['surfpaddle.png', 'windsurfing.png', 'waterskiing.png', 'watercraft.png', 'swimming.png', 'surfing.png', 'snorkeling.png', 'scubadiving.png', 'sailing.png', 'rowboat.png', 'kitesurfing.png', 'kayaking.png', 'diving.png', 'deepseafishing.png']
        },
        'winter-sports': {
            title: 'Winter Sports',
            icons: ['curling-2.png', 'surfacelift.png', 'snowshoeing.png', 'snowpark_arc.png', 'snowmobiling.png', 'snowboarding.png', 'skilifting.png', 'skijump.png', 'skiing.png', 'nordicski.png', 'iceskating.png', 'icehockey.png', 'bobsleigh.png', 'boardercross.png', 'avalanche1.png', 'yooner.png', 'sledge.png']
        },
        'health-education': {
            title: 'Health & Education',
            icons: []
        },
        'education': {
            title: 'Education',
            icons: ['dance_class.png', 'highschool.png', 'nursery.png', 'daycare.png', 'nanny.png', 'cramschool.png', 'summercamp.png', 'university.png', 'school.png']
        },
        'health': {
            title: 'Health',
            icons: ['footprint.png', 'sozialeeinrichtung.png', 'hoergeraeteakustiker_22px.png', 'medicalstore.png', 'aed-2.png', 'fetalalcoholsyndrom.png', 'pleasurepier.png', 'veterinary.png', 'therapy.png', 'spa.png', 'ophthalmologist.png', 'massage.png', 'hospital-building.png', 'firstaid.png', 'drugstore.png', 'medicine.png', 'dentist.png', 'beautysalon.png', 'barber.png', 'jacuzzi.png', 'acupuncture.png', 'chiropractor.png', 'toilets.png', 'disability.png', 'sauna.png']
        },
        'events': {
            title: 'Events',
            icons: ['alien.png', 'ufo.png', 'rescue-2.png', 'peace.png', 'phantom.png', 'battlefield.png', 'caraccident.png', 'poweroutage.png', 'love_date.png', 'linedown.png', 'cropcircles.png', 'cowabduction.png', 'wedding.png', 'strike.png', 'revolt.png', 'radiation.png', 'planecrash.png']
        },
        'crime': {
            title: 'Crime',
            icons: ['pirates.png', 'torture.png', 'theft.png', 'rape.png', 'abduction.png', 'crimescene.png', 'bomb.png', 'blast.png', 'shooting.png', 'fire.png', 'war.png']
        },
        'natural-disaster': {
            title: 'Natural Disaster',
            icons: ['shark-export.png', 'earthquake-3.png', 'skull.png', 'tsunami.png', 'avalanche1.png', 'treedown.png', 'flood.png', 'fire.png']
        },
        'culture-entertainment': {
            title: 'Culture & Entertainment',
            icons: []
        },
        'culture': {
            title: 'Culture',
            icons: ['aboriginal.png', 'planetarium-2.png', 'comedyclub.png', 'regroup.png', 'library.png', 'theater.png', 'cinema.png']
        },
        'museums': {
            title: 'Museums',
            icons: ['art-museum-2.png', 'coins.png', 'museum_openair.png', 'museum_industry.png', 'museum_science.png', 'museum_archeological.png', 'museum_war.png', 'museum_naval.png', 'museum_crafts.png', 'museum_art.png']
        },
        'music': {
            title: 'Music',
            icons: ['jazzclub.png', 'music_choral.png', 'music_live.png', 'music_rock.png', 'music_hiphop.png', 'music_classical.png', 'dancinghall.png']
        },
        'entertainment': {
            title: 'Entertainment',
            icons: ['party-2.png', 'anniversary.png', 'billiard-2.png']
        },
        'indoor-activities': {
            title: 'Indoor Activities',
            icons: ['stripclub2.png', 'laterne.png', 'mural.png', 'dance_class.png', 'videogames.png', 'casino-2.png', 'poker.png', 'magicshow.png', 'circus.png', 'bowling.png', 'aquarium.png']
        },
        'outdoor-activities': {
            title: 'Outdoor Activities',
            icons: ['treasure-mark.png', 'airshow-2.png', 'dinopark.png', 'fishing.png', 'bustour.png', 'walkingtour.png', 'sledge_summer.png', 'segway.png', 'paintball.png', 'bullfight.png', 'zoo.png', 'waterpark.png', 'themepark.png', 'ropescourse.png', 'publicart.png', 'fireworks.png', 'ferriswheel.png']
        },
        'restaurants-bars': {
            title: 'Restaurants & Hotels',
            icons: ['wifi.png']
        },
        'bars': {
            title: 'Bars',
            icons: ['beergarden.png', 'japanese-sake.png', 'gay-female.png', 'gay-male.png', 'winetasting.png', 'winebar.png', 'terrace.png', 'teahouse.png', 'coffee.png', 'bar_juice.png', 'bar_coktail.png', 'bar.png']
        },
        'hotels': {
            title: 'Hotels',
            icons: ['bed_breakfast1-2.png', 'motel-2.png', 'cruiseship.png', 'youthhostel.png', 'villa.png', 'resort.png', 'lodging_0star.png', 'hotel_0star.png', 'hostel_0star.png', 'wifi.png']
        },
        'restaurants': {
            title: 'Restaurants',
            icons: ['japanese-food.png', 'terrace.png', 'restaurant_vegetarian.png', 'restaurant_turkish.png', 'restaurant_thai.png', 'restaurant_tapas.png', 'restaurant_steakhouse.png', 'restaurant_romantic.png', 'restaurant_mexican.png', 'restaurant_mediterranean.png', 'restaurant_korean.png', 'restaurant_italian.png', 'restaurant_indian.png', 'restaurant_greek.png', 'restaurant_fish.png', 'restaurant_chinese.png', 'restaurant_buffet.png', 'restaurant_breakfast.png', 'restaurant_african.png', 'restaurant.png', 'pizzaria.png', 'kebab.png', 'gourmet_0star.png', 'fishchips.png', 'fastfood.png', 'cafetaria.png', 'barbecue.png']
        },
        'take-away': {
            title: 'Take-Away',
            icons: ['sandwich-2.png', 'takeaway.png', 'icecream.png', 'foodtruck.png', 'fooddeliveryservice.png']
        },
        'offices': {
            title: 'Offices',
            icons: ['fire-hydrant-2.png', 'printer-2.png', 'presentation.png', 'group-2.png', 'contract.png', 'administrativeboundary.png', 'carrental.png', 'cctv.png', 'regroup.png', 'workoffice.png', 'seniorsite.png', 'postal.png', 'police.png', 'military.png', 'lockerrental.png', 'laundromat.png', 'firemen.png', 'findajob.png', 'expert.png', 'embassy.png', 'customs.png', 'currencyexchange.png', 'court.png', 'conference.png', 'company.png', 'bank.png', 'atm-2.png', 'amphitheater.png', 'administration.png', 'laboratory.png', 'prison.png']
        },
        'city-services': {
            title: 'City services',
            icons: ['congress.png', 'library.png', 'seniorsite.png', 'postal.png', 'police.png', 'firemen.png', 'communitycentre.png', 'administration.png']
        },
        'interior': {
            title: 'Interior',
            icons: ['moving-walkway-enter-export.png', 'entrance.png', 'exit.png', 'firstaid.png', 'wifi.png', 'waiting.png', 'trash.png', 'toilets.png', 'telephone.png', 'smoking.png', 'shower.png', 'information.png', 'fireexstinguisher.png', 'elevator_up.png', 'elevator_down.png', 'elevator.png', 'drinkingfountain.png', 'disability.png']
        },
        'real-estate': {
            title: 'Real Estate',
            icons: ['townhouse.png', 'house.png', 'condominium.png', 'apartment-3.png']
        },
        'industry': {
            title: 'Industry',
            icons: ['gas_cylinder1.png', 'warehouse-2.png', 'foundry-2.png', 'metronetwork.png', 'database.png', 'chemistry-2.png', 'surveying-2.png', 'sawmill-2.png', 'brewery1.png', 'shipwreck.png', 'lighthouse-2.png', 'fishing.png', 'deepseafishing.png', 'recycle.png', 'construction.png', 'landfill.png', 'museum_industry.png', 'mine.png', 'watertower.png', 'oilpumpjack.png', 'observatory.png', 'mobilephonetower.png', 'fishingboat.png', 'factory.png', 'expert.png', 'spaceport-2.png', 'laboratory.png']
        },
        'electric-power': {
            title: 'Electric power',
            icons: ['no-nuke-export.png', 'poweroutage.png', 'linedown.png', 'solarenergy.png', 'windturbine.png', 'powersubstation.png', 'powerlinepole.png', 'dam.png', 'powerplant.png']
        },
        'military': {
            title: 'Military',
            icons: ['channelchange.png', 'freqchg.png', 'bomber-2.png', 'missile-2.png', 'battleship-3.png', 'aircraftcarrier.png', 'army.png', 'jetfighter.png', 'radar.png', 'bunker-2-2.png', 'submarine-2.png']
        },
        'transportation': {
            title: 'Transportation',
            icons: ['stargate-raw.png', 'barrier.png', 'worldwildway.png', 'cctv.png', 'disability.png', 'customs.png']
        },
        'aerial-transportation': {
            title: 'Aerial Transportation',
            icons: ['taxiway.png', 'hotairbaloon.png', 'helicopter.png', 'airport_terminal.png', 'airport_runway.png', 'airport_apron.png', 'airport.png', 'aircraftsmall.png']
        },
        'directions': {
            title: 'Directions',
            icons: ['direction_down.png']
        },
        'other-types-of-transportation': {
            title: 'Other Types of Transportation',
            icons: ['funicolar-22x22.png', 'tidaldiamond.png', 'slipway.png', 'oil-2.png', 'footprint.png', 'harbor.png', 'ferry.png', 'train.png', 'levelcrossing.png', 'underground.png', 'tramway.png', 'steamtrain.png', 'pedestriancrossing.png', 'crossingguard.png', 'cablecar.png', 'boat.png', 'watercraft.png']
        },
        'road-signs': {
            title: 'Road Signs',
            icons: ['accesdenied.png', 'tires.png', 'stop.png', 'speedhump.png', 'mainroad.png', 'icy_road.png', 'highway.png', 'fallingrocks.png', 'doublebendright.png', 'crossingguard.png', 'closedroad.png', 'caution.png', 'speed_50.png', 'construction.png']
        },
        'road-transportation': {
            title: 'Road Transportation',
            icons: ['sportscar.png', 'convertible.png', 'parking-meter-export.png', 'bus.png', 'busstop.png', 'vespa.png', 'van.png', 'tunnel.png', 'truck3.png', 'trafficlight.png', 'trafficcamera.png', 'tollstation.png', 'taxi.png', 'roadtype_gravel.png', 'repair.png', 'parkinggarage.png', 'parkandride.png', 'motorcycle.png', 'highway.png', 'fillingstation.png', 'carwash.png', 'carrental.png', 'caraccident.png', 'car.png', 'bulldozer.png', 'sportutilityvehicle.png', 'cycling.png']
        },
        'media': {
            title: 'Media',
            icons: ['wiki-export.png', 'price-tag-export.png', 'comment-map-icon.png', 'conversation-map-icon.png', 'award.png', 'star-3.png', '360degrees.png', 'share.png', 'downloadicon.png', 'tweet.png', 'folder-2.png', 'chart-2.png', 'calendar-3.png', 'zoom.png', 'information.png', 'video.png', 'webcam.png', 'text.png', 'audio.png', 'photo.png']
        }
    };

var icons = {
        'bike_downhill.png': {
            title: 'Bike downhill',
            excerpt: 'cycling, race'
        },
        'bike_rising.png': {
            title: 'Bike rising',
            excerpt: 'cycling, rade'
        },
        'funicolar-22x22.png': {
            title: 'Funicular',
            excerpt: 'cliff railway, cable, rails'
        },
        'surfpaddle.png': {
            title: 'Surf Paddle',
            excerpt: 'surfing, pad'
        },
        'tidaldiamond.png': {
            title: 'Tidal Diamond',
            excerpt: ''
        },
        'slipway.png': {
            title: 'Slipway',
            excerpt: 'boat, harbor'
        },
        'marina-2.png': {
            title: 'Marina',
            excerpt: 'pier, boat'
        },
        'townhouse.png': {
            title: 'Townhouse',
            excerpt: 'real estate, house, townhouse, office'
        },
        'oil-2.png': {
            title: 'Oil',
            excerpt: 'fuel, gasoline, petrol, diesel'
        },
        'water.png': {
            title: 'Water temperature',
            excerpt: 'lake, hot'
        },
        'gas_cylinder1.png': {
            title: 'Gas +',
            excerpt: 'gas cylinder'
        },
        'ft.png': {
            title: 'Field target',
            excerpt: 'shooting'
        },
        'theravadapagoda.png': {
            title: 'Theravada Buddhist Pagoda',
            excerpt: 'asia'
        },
        'theravadatemple.png': {
            title: 'Theravada Buddhist Temple',
            excerpt: 'small pagodas'
        },
        'footprint.png': {
            title: 'Footprint',
            excerpt: 'step, feet'
        },
        'umbrella-2.png': {
            title: 'Umbrella',
            excerpt: 'weather, rain'
        },
        'channelchange.png': {
            title: 'Channel Change',
            excerpt: ''
        },
        'turtle-2.png': {
            title: 'Turtle',
            excerpt: 'endangered species'
        },
        'freqchg.png': {
            title: 'Frequency Change',
            excerpt: 'radio-comms, operation'
        },
        'kayak1.png': {
            title: 'Kayak Rental',
            excerpt: 'canoe rental'
        },
        'skis.png': {
            title: 'Ski Store',
            excerpt: 'ski rental'
        },
        'ski_shoe1.png': {
            title: 'Ski Rental',
            excerpt: 'ski boot'
        },
        'bed_breakfast1-2.png': {
            title: 'Bed And Breakfast',
            excerpt: 'hotel, hostel'
        },
        'sportscar.png': {
            title: 'Sports Car',
            excerpt: 'sportscar, supercar'
        },
        'convertible.png': {
            title: 'Convertible',
            excerpt: 'coupÄ‚Â©, cabriolet, roadster'
        },
        'mountainbiking-3.png': {
            title: 'Mountain-Biking',
            excerpt: 'cycling, bike, off-road, cross-country, trail riding, downhill'
        },
        'beergarden.png': {
            title: 'Beer Garden',
            excerpt: 'pub garden, open-air pub'
        },
        'gumball_machine.png': {
            title: 'Gumballs',
            excerpt: 'gum ball machine'
        },
        'scoutgroup.png': {
            title: 'Scout Group',
            excerpt: ''
        },
        'muffin_bagle.png': {
            title: 'Donuts',
            excerpt: 'muffin , cupcake, bagle'
        },
        '2hand.png': {
            title: 'Secondhand Shop',
            excerpt: 'used'
        },
        'sozialeeinrichtung.png': {
            title: 'Social Services Provider',
            excerpt: 'help, community'
        },
        'stripclub2.png': {
            title: 'Strip club',
            excerpt: 'girls, sex, dance, stripper'
        },
        'laterne.png': {
            title: 'Lantern',
            excerpt: 'red light district, brothel, sex shop'
        },
        'hoergeraeteakustiker_22px.png': {
            title: 'Hearing Aid Acoustician',
            excerpt: 'amp'
        },
        'medicalstore.png': {
            title: 'Medical Store',
            excerpt: 'wheelchair, bed, bathing equipment, disabilities'
        },
        'treasure-mark.png': {
            title: 'Treasure Mark',
            excerpt: ''
        },
        'airshow-2.png': {
            title: 'Air Show',
            excerpt: 'plane'
        },
        'you-are-here-2.png': {
            title: 'You Are Here',
            excerpt: 'current location'
        },
        'art-museum-2.png': {
            title: 'Art Museum',
            excerpt: 'statue'
        },
        'start-race-2.png': {
            title: 'Start Race +',
            excerpt: 'finish, end, loop'
        },
        'schreibwaren_web.png': {
            title: 'Stationery',
            excerpt: 'paper, office supplies, writing, pencil'
        },
        'river-2.png': {
            title: 'River',
            excerpt: 'water'
        },
        'bicycle_shop.png': {
            title: 'Bicycle Shop',
            excerpt: 'bike, biking'
        },
        'bomber-2.png': {
            title: 'Bomber',
            excerpt: 'BUFF, B-52, Stratofortress'
        },
        'missile-2.png': {
            title: 'Missile',
            excerpt: 'Rocket, MIL-STD-2525'
        },
        'aboriginal.png': {
            title: 'Aboriginal',
            excerpt: 'Torres Strait Islander'
        },
        'warehouse-2.png': {
            title: 'Warehouse',
            excerpt: 'stock, storage, forklift truck, pallet rack'
        },
        'foundry-2.png': {
            title: 'Foundry',
            excerpt: 'factory, metal castings, melting, anvil'
        },
        'honeycomb.png': {
            title: 'Honey Comb',
            excerpt: 'bee, honeycomb, beehive'
        },
        'bollie.png': {
            title: 'Carp Fishing',
            excerpt: ''
        },
        'shootingrange.png': {
            title: 'Shooting range',
            excerpt: 'target, guns, firearm, bulls-eye'
        },
        'wiki-export.png': {
            title: 'Wiki',
            excerpt: 'puzzle'
        },
        'price-tag-export.png': {
            title: 'Tag Label',
            excerpt: 'taxonomy, tag, label, category'
        },
        'no-nuke-export.png': {
            title: 'No Nuke',
            excerpt: 'stop nuclear power, energy'
        },
        'flag-export.png': {
            title: 'Flag',
            excerpt: ''
        },
        'shark-export.png': {
            title: 'Shark',
            excerpt: ''
        },
        'lobster-export.png': {
            title: 'Lobster',
            excerpt: ''
        },
        'cow-export.png': {
            title: 'Cow',
            excerpt: ''
        },
        'mountain-pass-locator-diagonal-reverse-export.png': {
            title: 'Mountain Pass',
            excerpt: ''
        },
        'animal-shelter-export.png': {
            title: 'Animal Shelter',
            excerpt: ''
        },
        'ant-export.png': {
            title: 'Ants',
            excerpt: ''
        },
        'duck-export.png': {
            title: 'Duck',
            excerpt: ''
        },
        'monkey-export.png': {
            title: 'Monkey',
            excerpt: ''
        },
        'parking-meter-export.png': {
            title: 'Parking Meter',
            excerpt: ''
        },
        'palm-tree-export.png': {
            title: 'Palm Tree',
            excerpt: 'beach'
        },
        'moving-walkway-enter-export.png': {
            title: 'Moving Walkway +',
            excerpt: ''
        },
        'tebletennis.png': {
            title: 'Table tennis',
            excerpt: 'ping-pong'
        },
        'aed-2.png': {
            title: 'Automated External Defibrillator',
            excerpt: 'AED, heart failure'
        },
        'comment-map-icon.png': {
            title: 'Comment',
            excerpt: 'reaction, discussion, debate'
        },
        'conversation-map-icon.png': {
            title: 'Conversation',
            excerpt: 'chat, message'
        },
        'metronetwork.png': {
            title: 'Metro Network',
            excerpt: ''
        },
        'sumo-2.png': {
            title: 'Sumo',
            excerpt: 'rikishi, wresler'
        },
        'japanese-lantern.png': {
            title: 'Japanese garden',
            excerpt: 'tourou, japan'
        },
        'japanese-sweet-2.png': {
            title: 'Japanese sweet',
            excerpt: 'odango, japan'
        },
        'japanese-sake.png': {
            title: 'Sake bar',
            excerpt: 'japan, alcohol'
        },
        'japanese-temple.png': {
            title: 'Japanese temple',
            excerpt: ''
        },
        'taekwondo-2.png': {
            title: 'Taekwondo',
            excerpt: 'combat, self-defense, Ă­ÂĹ›Ä™Â¶ĹšĂ«Ĺąâ€ž; ÄŤÂ·â€ Ä‡â€ąĹ‚Ă©Ââ€ś, taekwon-Do, tae kwon-do'
        },
        'waterwellpump.png': {
            title: 'Borehole',
            excerpt: 'water, well, pump'
        },
        'alien.png': {
            title: 'Alien Encounter',
            excerpt: 'extraterrestrial'
        },
        'ufo.png': {
            title: 'Ufo',
            excerpt: 'flying, alien, space'
        },
        'binoculars.png': {
            title: 'Binoculars',
            excerpt: ''
        },
        'award.png': {
            title: 'Award',
            excerpt: 'win, contest'
        },
        'harbor.png': {
            title: 'Harbor',
            excerpt: 'boat, see'
        },
        'star-3.png': {
            title: 'Star',
            excerpt: 'space, favorite, bookmark, like'
        },
        'rescue-2.png': {
            title: 'Rescue',
            excerpt: 'operation, save'
        },
        'cromlech.png': {
            title: 'Cromlech',
            excerpt: ''
        },
        '360degrees.png': {
            title: '360Ă‚Ĺź Photo',
            excerpt: 'picture, panorama'
        },
        'gay-female.png': {
            title: 'Gay Bar (Female)',
            excerpt: 'lesbian, homosexual, homo-sexual'
        },
        'gay-male.png': {
            title: 'Gay Bar (Male)',
            excerpt: 'homosexual, homo-sexual'
        },
        'butterfly-2.png': {
            title: 'Butterfly',
            excerpt: 'insect'
        },
        'coins.png': {
            title: 'Coin Museum',
            excerpt: 'money'
        },
        'fire-hydrant-2.png': {
            title: 'Fire Hydrant',
            excerpt: 'flame, smoke'
        },
        'earthquake-3.png': {
            title: 'Earthquake',
            excerpt: 'destruction'
        },
        'quadrifoglio.png': {
            title: 'Four-leaf clover',
            excerpt: 'quatrefoil'
        },
        'pin-export.png': {
            title: 'Pin +',
            excerpt: 'special place'
        },
        'mural.png': {
            title: 'Mural',
            excerpt: 'painting'
        },
        'u-pick_stand.png': {
            title: 'U-Pick Stand',
            excerpt: 'fruits picking, apple, orange, peach, pear'
        },
        'farmstand.png': {
            title: 'Farmstand',
            excerpt: 'farmers market, vegetable stand'
        },
        'apple.png': {
            title: 'Apple',
            excerpt: 'orchard, fruit'
        },
        'smiley_happy.png': {
            title: 'Smiley +',
            excerpt: 'happy, sad, neutral, expression, sentiment, emoticon, face, joy, cry'
        },
        'share.png': {
            title: 'Share',
            excerpt: 'sharing'
        },
        'indoor-arena.png': {
            title: 'Indoor Sports Pavilion',
            excerpt: 'arena, gymnasium'
        },
        'sugar-shack.png': {
            title: 'Sugar Shack',
            excerpt: 'Sugar House, Maple Sugar Shack'
        },
        'dance_class.png': {
            title: 'Dance class',
            excerpt: 'dancing, lesson, salsa, ballroom, waltz, tango'
        },
        'ne_barn-2.png': {
            title: 'New England Barn',
            excerpt: ''
        },
        'tiger-2.png': {
            title: 'Tiger',
            excerpt: ''
        },
        'alligator.png': {
            title: 'Crocodile',
            excerpt: ''
        },
        'skull.png': {
            title: 'Deadly Danger',
            excerpt: ''
        },
        'catholicgrave.png': {
            title: 'Catholic Cemetery',
            excerpt: ''
        },
        'jewishgrave.png': {
            title: 'Jewish Cemetery',
            excerpt: ''
        },
        'wrestling-2.png': {
            title: 'Wrestling',
            excerpt: ''
        },
        'childmuseum01.png': {
            title: 'Kids Learning Area',
            excerpt: ''
        },
        'database.png': {
            title: 'Data Center',
            excerpt: 'database'
        },
        'sandwich-2.png': {
            title: 'Sandwich',
            excerpt: 'bread, panini'
        },
        'stargate-raw.png': {
            title: 'Stargate',
            excerpt: ''
        },
        'signpost-2.png': {
            title: 'Signpost +',
            excerpt: 'directions'
        },
        'landmark.png': {
            title: 'Landmark',
            excerpt: 'boundary, sight, milestone, stage, beacon, sighpost'
        },
        'ferry.png': {
            title: 'Ferry',
            excerpt: 'boat'
        },
        'megalith.png': {
            title: 'Megalith',
            excerpt: 'stonehenge, dolmen, menhir, cromlech'
        },
        'shintoshrine.png': {
            title: 'Shinto shrine',
            excerpt: 'japan'
        },
        'downloadicon.png': {
            title: 'Download',
            excerpt: 'Super basic download icon.'
        },
        'printer-2.png': {
            title: 'Printer',
            excerpt: 'printer, print stations'
        },
        'battleship-3.png': {
            title: 'Battleship',
            excerpt: 'boat, army, cannon'
        },
        'aircraftcarrier.png': {
            title: 'Aircraft carrier',
            excerpt: 'boat, plane'
        },
        'train.png': {
            title: 'Train',
            excerpt: 'railway'
        },
        'bus.png': {
            title: 'Bus',
            excerpt: 'omnibus, multibus, autobus'
        },
        'busstop.png': {
            title: 'Bus Stop',
            excerpt: 'omnibus, multibus, autobus'
        },
        'cheese.png': {
            title: 'Cheese',
            excerpt: 'fromage'
        },
        'mosquito-2.png': {
            title: 'Dragonfly',
            excerpt: 'insect, fly'
        },
        'frog-2.png': {
            title: 'Frog',
            excerpt: 'toad'
        },
        'snail.png': {
            title: 'Snail',
            excerpt: 'mollusca, shell'
        },
        'grass.png': {
            title: 'High grass',
            excerpt: 'savanna'
        },
        'spider.png': {
            title: 'Spider',
            excerpt: 'arthropods, arachnid'
        },
        'mushroom.png': {
            title: 'Mushroom',
            excerpt: 'fungus'
        },
        'rodent.png': {
            title: 'Rodent',
            excerpt: 'squirrel'
        },
        'peace.png': {
            title: 'Peace',
            excerpt: 'end of war, treaty, agreement'
        },
        'barrier.png': {
            title: 'Barrier',
            excerpt: ''
        },
        'fruits.png': {
            title: 'Fruits',
            excerpt: 'grape, bananas, oranges'
        },
        'army.png': {
            title: 'Army',
            excerpt: 'division'
        },
        'japanese-food.png': {
            title: 'Japanese +',
            excerpt: 'sushi, sashimi, sake, restaurant, rice, miso-soup, grilled salmon'
        },
        'jetfighter.png': {
            title: 'Fighter jet',
            excerpt: ''
        },
        'desert-2.png': {
            title: 'Desert',
            excerpt: 'sand, cactus, hot'
        },
        'presentation.png': {
            title: 'Presentation',
            excerpt: 'class, graph, powerpoint'
        },
        'cup.png': {
            title: 'Cup',
            excerpt: 'championship, competition, tourtitlent, race, contest'
        },
        'accesdenied.png': {
            title: 'Acces denied',
            excerpt: 'forbidden, impossible, wrong direction'
        },
        'trolley.png': {
            title: 'Trolley',
            excerpt: 'bags, baggages, luggage'
        },
        'tweet.png': {
            title: 'Tweet',
            excerpt: 'twitter, bird, message'
        },
        'tsunami.png': {
            title: 'Tsunami',
            excerpt: 'wave'
        },
        'folder-2.png': {
            title: 'Folder',
            excerpt: 'directory, files'
        },
        'group-2.png': {
            title: 'Group',
            excerpt: 'people, team'
        },
        'male-2.png': {
            title: 'Male +',
            excerpt: 'man, men, people, boys, sex'
        },
        'female-2.png': {
            title: 'Female +',
            excerpt: 'woman, women, people'
        },
        'chart-2.png': {
            title: 'Chart',
            excerpt: 'graphic'
        },
        'whale-2.png': {
            title: 'Whale',
            excerpt: 'beluga, cetacean'
        },
        'finish.png': {
            title: 'Finish Race +',
            excerpt: 'end of race, track, circuit, speedway, over'
        },
        'radar.png': {
            title: 'Radar',
            excerpt: ''
        },
        'pig.png': {
            title: 'Pig',
            excerpt: 'BBQ, barbecue'
        },
        'phantom.png': {
            title: 'Ghost',
            excerpt: 'haunted, phantom, spook house'
        },
        'dinopark.png': {
            title: 'Dinosaur park',
            excerpt: ''
        },
        'rockhouse.png': {
            title: 'Rock house',
            excerpt: ''
        },
        'craftstore.png': {
            title: 'Craft store',
            excerpt: ''
        },
        'planetarium-2.png': {
            title: 'Planetarium',
            excerpt: ''
        },
        'comedyclub.png': {
            title: 'Comedy club',
            excerpt: ''
        },
        'sikh.png': {
            title: 'Sikh religion',
            excerpt: ''
        },
        'prayer.png': {
            title: 'Prayer',
            excerpt: 'church'
        },
        'fetalalcoholsyndrom.png': {
            title: 'Fetal alcohol syndrom',
            excerpt: ''
        },
        'bunker-2-2.png': {
            title: 'Bunker',
            excerpt: ''
        },
        'house.png': {
            title: 'House +',
            excerpt: 'home'
        },
        'condominium.png': {
            title: 'Condominium',
            excerpt: 'condo'
        },
        'submarine-2.png': {
            title: 'Submarine',
            excerpt: ''
        },
        'chemistry-2.png': {
            title: 'Chemistry +',
            excerpt: 'chemist'
        },
        'surveying-2.png': {
            title: 'Surveying',
            excerpt: 'expert, geometry, engineering, trigonometry, mathematics'
        },
        'sawmill-2.png': {
            title: 'Sawmill',
            excerpt: 'chainsaw'
        },
        'volcano-2.png': {
            title: 'Volcano',
            excerpt: 'active, sleeping'
        },
        'brewery1.png': {
            title: 'Brewery +',
            excerpt: ''
        },
        'map.png': {
            title: 'Map',
            excerpt: 'treasure'
        },
        'deer.png': {
            title: 'Deer',
            excerpt: 'forest'
        },
        'pirates.png': {
            title: 'Pirates',
            excerpt: 'skull, bones'
        },
        'contract.png': {
            title: 'Contract',
            excerpt: 'signature'
        },
        'shipwreck.png': {
            title: 'Shipwreck',
            excerpt: 'ship, boat'
        },
        'memorial.png': {
            title: 'Memorial',
            excerpt: ''
        },
        'clock.png': {
            title: 'Clock',
            excerpt: 'hour'
        },
        'battlefield.png': {
            title: 'Battlefield',
            excerpt: 'war, army'
        },
        'administrativeboundary.png': {
            title: 'Administrative boundary',
            excerpt: 'fronteer, limits'
        },
        'highschool.png': {
            title: 'High School',
            excerpt: ''
        },
        'entrance.png': {
            title: 'Entrance',
            excerpt: 'in'
        },
        'exit.png': {
            title: 'Exit',
            excerpt: 'out'
        },
        'bats.png': {
            title: 'Bats',
            excerpt: ''
        },
        'comics.png': {
            title: 'Comic store',
            excerpt: 'comics'
        },
        'badminton-2.png': {
            title: 'Badminton',
            excerpt: 'racquet'
        },
        'congress.png': {
            title: 'Parliament',
            excerpt: 'congress'
        },
        'motel-2.png': {
            title: 'Motel',
            excerpt: ''
        },
        'curling-2.png': {
            title: 'Curling',
            excerpt: ''
        },
        'calendar-3.png': {
            title: 'Calendar',
            excerpt: 'date, month, day'
        },
        'squash-2.png': {
            title: 'Squash',
            excerpt: 'racketball'
        },
        'penguin-2.png': {
            title: 'Penguin',
            excerpt: ''
        },
        'candy.png': {
            title: 'Candy store',
            excerpt: ''
        },
        'jazzclub.png': {
            title: 'Jazz club',
            excerpt: ''
        },
        'worldwildway.png': {
            title: 'WorldWildWay',
            excerpt: 'transport, brand'
        },
        'vespa.png': {
            title: 'Vespa',
            excerpt: 'moto, scooter, moped'
        },
        'levelcrossing.png': {
            title: 'Level crossing',
            excerpt: 'train'
        },
        'van.png': {
            title: 'Van',
            excerpt: 'mpv, minibus'
        },
        'underground.png': {
            title: 'Subway',
            excerpt: 'underground, metro'
        },
        'tunnel.png': {
            title: 'Tunnel',
            excerpt: ''
        },
        'truck3.png': {
            title: 'Truck +',
            excerpt: 'lorry, camion, LKV, TIR'
        },
        'tramway.png': {
            title: 'Tram',
            excerpt: 'tramway'
        },
        'trafficlight.png': {
            title: 'Traffic Lights',
            excerpt: 'signals, stoplight, semaphore'
        },
        'trafficcamera.png': {
            title: 'Traffic enforcement camera',
            excerpt: 'limit, tele laser, speed trap'
        },
        'tollstation.png': {
            title: 'Toll Station',
            excerpt: 'booth, plaza, gate'
        },
        'tires.png': {
            title: 'Tires, chains +',
            excerpt: 'tire chaining zone, snow chains'
        },
        'taxiway.png': {
            title: 'Taxiway',
            excerpt: 'airport'
        },
        'taxi.png': {
            title: 'Taxi',
            excerpt: 'cab'
        },
        'stop.png': {
            title: 'Stop',
            excerpt: 'halt, give way'
        },
        'steamtrain.png': {
            title: 'Steam Locomotive',
            excerpt: 'train'
        },
        'speedhump.png': {
            title: 'Speed Hump',
            excerpt: 'limit'
        },
        'roadtype_gravel.png': {
            title: 'Road types +',
            excerpt: 'tar, track, sand, gravel'
        },
        'repair.png': {
            title: 'Repair +',
            excerpt: 'garage, repair shop, car'
        },
        'pedestriancrossing.png': {
            title: 'Pedestrian Crossing',
            excerpt: 'crosswalk, zebra'
        },
        'parkinggarage.png': {
            title: 'Parking +',
            excerpt: 'lot, garage, ramp, car park, bicycle parking racks, stands, disabled, handicapped'
        },
        'parkandride.png': {
            title: 'Park and Ride',
            excerpt: 'incentive parking'
        },
        'motorcycle.png': {
            title: 'Motorcycle',
            excerpt: 'bike'
        },
        'mainroad.png': {
            title: 'Priority Road',
            excerpt: 'priority to the right, main'
        },
        'icy_road.png': {
            title: 'Icy road',
            excerpt: 'slippery'
        },
        'hotairbaloon.png': {
            title: 'Hot Air Balloon',
            excerpt: 'hopper, airhopper, montgolfiere'
        },
        'highway.png': {
            title: 'Highway',
            excerpt: 'road, freeway, highway'
        },
        'helicopter.png': {
            title: 'Helicopter',
            excerpt: 'rotorcraft'
        },
        'fillingstation.png': {
            title: 'Filling Station',
            excerpt: 'gas, petrol, fuel, service, garage'
        },
        'fallingrocks.png': {
            title: 'Falling rocks',
            excerpt: ''
        },
        'direction_down.png': {
            title: 'Directions +',
            excerpt: '16 directions, east, west, south, north, back, return, straight, ahead, arrow'
        },
        'doublebendright.png': {
            title: 'Curvy road +',
            excerpt: 'curves, serpentine, crooked road, double bend'
        },
        'crossingguard.png': {
            title: 'Crossing guard',
            excerpt: 'crosswalk, children'
        },
        'closedroad.png': {
            title: 'Closed road',
            excerpt: 'roadblock, bifurcation'
        },
        'caution.png': {
            title: 'General Caution',
            excerpt: 'warning, accident'
        },
        'carwash.png': {
            title: 'Car Wash',
            excerpt: 'auto, tunnel, in-bay'
        },
        'carrental.png': {
            title: 'Car Rental',
            excerpt: 'hire, renting, auto'
        },
        'caraccident.png': {
            title: 'Car accident',
            excerpt: 'car crash'
        },
        'car.png': {
            title: 'Car',
            excerpt: 'automobile'
        },
        'cablecar.png': {
            title: 'Cable Car',
            excerpt: 'aerial tramway, gondola lift, ropeway'
        },
        'bulldozer.png': {
            title: 'Bulldozer',
            excerpt: 'crawler, caterpillar'
        },
        'boat.png': {
            title: 'Boat',
            excerpt: 'ship, harbor, dock, wharf, port'
        },
        'airport_terminal.png': {
            title: 'Airport terminal',
            excerpt: 'airport'
        },
        'airport_runway.png': {
            title: 'Airport runway',
            excerpt: 'airport'
        },
        'airport_apron.png': {
            title: 'Airport apron',
            excerpt: 'airport'
        },
        'airport.png': {
            title: 'Airport',
            excerpt: 'plane, airfield, airstrip, aerodrome'
        },
        'aircraftsmall.png': {
            title: 'Aircraft small',
            excerpt: 'plane'
        },
        'speed_50.png': {
            title: 'Speed limit +',
            excerpt: 'max speed'
        },
        'worldheritagesite.png': {
            title: 'World Heritage Site',
            excerpt: 'protected, famous'
        },
        'world.png': {
            title: 'World',
            excerpt: 'location'
        },
        'windmill-2.png': {
            title: 'Windmill',
            excerpt: 'grinding'
        },
        'wildlifecrossing.png': {
            title: 'Wildlife Crossing',
            excerpt: 'dromedary, camel'
        },
        'wetlands.png': {
            title: 'Wetland',
            excerpt: 'marshes, swamp'
        },
        'waterwell.png': {
            title: 'Water well',
            excerpt: 'pump'
        },
        'watermill-2.png': {
            title: 'Watermill',
            excerpt: 'river, wheel'
        },
        'waterfall-2.png': {
            title: 'Waterfall',
            excerpt: ''
        },
        'vineyard-2.png': {
            title: 'Vineyard',
            excerpt: 'wine, clos, winery, plantation'
        },
        'tower.png': {
            title: 'Tower',
            excerpt: 'turret, defense, fortification'
        },
        'templehindu.png': {
            title: 'Hindu temple',
            excerpt: 'mandir'
        },
        'temple-2.png': {
            title: 'Temple +',
            excerpt: 'greek, roman, ruins'
        },
        'synagogue-2.png': {
            title: 'Synagogue',
            excerpt: 'jewish worship, batei midrash, shtiebel'
        },
        'statue-2.png': {
            title: 'Statue',
            excerpt: 'sculpture, statuettes, ikon, bust'
        },
        'snakes.png': {
            title: 'Rattlesnakes',
            excerpt: 'viper, snake'
        },
        'smallcity.png': {
            title: 'Small City',
            excerpt: 'village, hamlet, town'
        },
        'sight-2.png': {
            title: 'Sight',
            excerpt: 'point of interest'
        },
        'shore-2.png': {
            title: 'Shore',
            excerpt: 'see, ocean, coast'
        },
        'seals.png': {
            title: 'Seals',
            excerpt: ''
        },
        'ruins-2.png': {
            title: 'Ruins',
            excerpt: 'destroyed, fallen'
        },
        'riparianhabitat.png': {
            title: 'Riparian Habitat',
            excerpt: 'river bank'
        },
        'pyramid.png': {
            title: 'Pyramid +',
            excerpt: 'egyptian, tomb, pharaoh, mesoamerican, aztec, maya, inca'
        },
        'pleasurepier.png': {
            title: 'Pleasure Pier',
            excerpt: 'bathing, cold bath house'
        },
        'picnic-2.png': {
            title: 'Picnic +',
            excerpt: 'cookout, shelter'
        },
        'petroglyphs-2.png': {
            title: 'Petroglyphs',
            excerpt: 'rock engravings'
        },
        'panoramicview.png': {
            title: 'Panoramic View',
            excerpt: 'view, 180, sight'
        },
        'palace-2.png': {
            title: 'Palace',
            excerpt: 'mansion, residence'
        },
        'pagoda-2.png': {
            title: 'Pagoda',
            excerpt: 'temple, asian, japan castle'
        },
        'olympicsite.png': {
            title: 'Olympic Site',
            excerpt: 'arena, stadium'
        },
        'notvisited.png': {
            title: 'Visited place +',
            excerpt: 'visited, un-visited'
        },
        'mosquee.png': {
            title: 'Mosque',
            excerpt: 'muslim worship, islam'
        },
        'monument.png': {
            title: 'Ancient monument',
            excerpt: 'monolith, memorial'
        },
        'moderntower.png': {
            title: 'Modern tower',
            excerpt: 'skyscraper'
        },
        'modernmonument.png': {
            title: 'Modern monument',
            excerpt: 'monolith, memorial'
        },
        'lighthouse-2.png': {
            title: 'Lighthouse',
            excerpt: 'beacon, belfry'
        },
        'lifeguard-2.png': {
            title: 'Lifeguard',
            excerpt: ''
        },
        'lake.png': {
            title: 'Lake +',
            excerpt: 'water'
        },
        'jewishquarter.png': {
            title: 'Jewish Quarter',
            excerpt: 'jewish center'
        },
        'hotspring.png': {
            title: 'Hot spring',
            excerpt: 'well, onsen, hydrolysate'
        },
        'historicalquarter.png': {
            title: 'Historical Quarter',
            excerpt: 'old town, old center'
        },
        'headstone-2.png': {
            title: 'Headstone +',
            excerpt: 'tombstone, grave stone, jewish'
        },
        'haybale.png': {
            title: 'Hay bale',
            excerpt: ''
        },
        'gondola-2.png': {
            title: 'Gondola',
            excerpt: ''
        },
        'glacier-2.png': {
            title: 'Glacier',
            excerpt: 'ice'
        },
        'ghosttown.png': {
            title: 'Ghost town',
            excerpt: 'abandoned city'
        },
        'geyser-2.png': {
            title: 'Geyser',
            excerpt: 'hot water'
        },
        'fountain-2.png': {
            title: 'Fountain',
            excerpt: 'well, cascade, jet, spring, font'
        },
        'fossils.png': {
            title: 'Fossils',
            excerpt: 'archeology'
        },
        'forest2.png': {
            title: 'Forest',
            excerpt: 'trees, park'
        },
        'forest.png': {
            title: 'Park +',
            excerpt: 'forest, reservation, grove, woodland, urban park'
        },
        'ford-2.png': {
            title: 'Ford',
            excerpt: 'water crossing, watersplash'
        },
        'fjord-2.png': {
            title: 'Fjord',
            excerpt: 'ice'
        },
        'field.png': {
            title: 'Field',
            excerpt: 'harvest, crop'
        },
        'farm-2.png': {
            title: 'Farm +',
            excerpt: 'plantation, orchard, livestock'
        },
        'elephants.png': {
            title: 'Elephants',
            excerpt: ''
        },
        'drinkingwater.png': {
            title: 'Drinking water',
            excerpt: 'tap'
        },
        'dolphins.png': {
            title: 'Dolphins',
            excerpt: ''
        },
        'dogs_leash.png': {
            title: 'Dogs +',
            excerpt: 'leash, un-leash, park'
        },
        'cruiseship.png': {
            title: 'Cruise Ship',
            excerpt: 'boat, ship, ocean'
        },
        'cross-2.png': {
            title: 'Cross',
            excerpt: 'symbol, monument'
        },
        'country.png': {
            title: 'Country',
            excerpt: 'location'
        },
        'corral.png': {
            title: 'Corral',
            excerpt: 'enclosure, pen'
        },
        'convent-2.png': {
            title: 'Convent',
            excerpt: 'monastery, friary, nunnery'
        },
        'citywalls.png': {
            title: 'City Walls & Gates',
            excerpt: 'gatehouse, drawbridge, fortress'
        },
        'citysquare.png': {
            title: 'City Square',
            excerpt: 'plaÄ‚Â§a'
        },
        'church-2.png': {
            title: 'Church',
            excerpt: 'christian worship'
        },
        'chicken-2.png': {
            title: 'Chicken',
            excerpt: 'live stock'
        },
        'chapel-2.png': {
            title: 'Chapel',
            excerpt: 'christian worship'
        },
        'cemetary.png': {
            title: 'Cemetery',
            excerpt: 'graveyard, burial ground'
        },
        'cave-2.png': {
            title: 'Cave',
            excerpt: 'cavern, prehistorical'
        },
        'cathedral.png': {
            title: 'Cathedral +',
            excerpt: 'bishopĂ˘â‚¬â„˘s seat, christian worship, basilica'
        },
        'castle-2.png': {
            title: 'Castle',
            excerpt: 'keep, fortress'
        },
        'canyon.png': {
            title: 'Canyon',
            excerpt: 'sierra, valley, desert'
        },
        'camping-2.png': {
            title: 'Camping +',
            excerpt: 'caravan, tent, camping site, camper, rv, drain off'
        },
        'campfire-2.png': {
            title: 'Campfire',
            excerpt: 'fire ring'
        },
        'cabin-2.png': {
            title: 'Cabin +',
            excerpt: 'shelter'
        },
        'bridge_old.png': {
            title: 'Old bridge',
            excerpt: 'viaduct, aqueduct, arch, toll'
        },
        'bridge_modern.png': {
            title: 'Modern bridge',
            excerpt: 'viaduct, suspension, cable-stayed'
        },
        'birds-2.png': {
            title: 'Birds +',
            excerpt: 'birdwatching, birding'
        },
        'bigcity.png': {
            title: 'Big City',
            excerpt: 'capital, town, building'
        },
        'beautifulview.png': {
            title: 'Beautiful View',
            excerpt: 'picture, sight, picturesque'
        },
        'beach.png': {
            title: 'Beach +',
            excerpt: 'pets, cars, certified, handicapped, nudists'
        },
        'arch.png': {
            title: 'Arch',
            excerpt: 'victory, monument'
        },
        'anchorpier.png': {
            title: 'Anchor Pier',
            excerpt: 'diving, bathing, lake side'
        },
        'amphitheater-2.png': {
            title: 'Amphitheater',
            excerpt: 'open-air venue'
        },
        'agritourism.png': {
            title: 'Agritourism',
            excerpt: 'turismo em espaÄ‚Â§os rurais'
        },
        'videogames.png': {
            title: 'Video Games',
            excerpt: 'console, PC, arcade'
        },
        'toys.png': {
            title: 'Toys',
            excerpt: 'kids, play'
        },
        'tools.png': {
            title: 'Hardware',
            excerpt: 'tools, diy, ironmonger'
        },
        'textiles.png': {
            title: 'Textiles',
            excerpt: 'fabric'
        },
        'tailor.png': {
            title: 'Tailor',
            excerpt: ''
        },
        'supermarket.png': {
            title: 'Supermarket',
            excerpt: 'grocery store, self-service store, shopping'
        },
        'sneakers.png': {
            title: 'Sneakers',
            excerpt: 'shoes'
        },
        'sledgerental.png': {
            title: 'Sledge Rental',
            excerpt: 'winter'
        },
        'shoes.png': {
            title: 'Shoes',
            excerpt: 'sneakers, footwear'
        },
        'photography.png': {
            title: 'Photography',
            excerpt: ''
        },
        'phones.png': {
            title: 'Phones',
            excerpt: 'cell, mobile, pda'
        },
        'pets.png': {
            title: 'Pets',
            excerpt: 'animal, dog'
        },
        'perfumery.png': {
            title: 'Perfumery',
            excerpt: 'cosmetics'
        },
        'pens.png': {
            title: 'Pens',
            excerpt: ''
        },
        'patisserie.png': {
            title: 'Patisserie',
            excerpt: 'cake, sugar'
        },
        'paint.png': {
            title: 'Paint',
            excerpt: ''
        },
        'newsagent.png': {
            title: 'Newsagent',
            excerpt: 'news, magazine, newspaper'
        },
        'music.png': {
            title: 'Music',
            excerpt: 'CD, DVD, audio'
        },
        'movierental.png': {
            title: 'Movie rental',
            excerpt: 'video, vhs, dvd, blu-ray, films, movies'
        },
        'market.png': {
            title: 'Market',
            excerpt: 'flea'
        },
        'mall.png': {
            title: 'Shopping Mall',
            excerpt: 'shopping center, strip mall'
        },
        'liquor.png': {
            title: 'Liquor store',
            excerpt: 'alcohol, whiskey, bottle, cognac'
        },
        'lingerie.png': {
            title: 'Lingerie',
            excerpt: 'underwear'
        },
        'kiosk.png': {
            title: 'Kiosk',
            excerpt: 'papers, journal'
        },
        'jewelry.png': {
            title: 'Jewelery',
            excerpt: 'jewels, bijouterie, diamond'
        },
        'homecenter.png': {
            title: 'Home center',
            excerpt: 'house, furniture'
        },
        'hats.png': {
            title: 'Hats',
            excerpt: ''
        },
        'grocery.png': {
            title: 'Grocery',
            excerpt: 'food, apple, milk'
        },
        'gifts.png': {
            title: 'Gifts',
            excerpt: 'present, souvenir'
        },
        'flowers.png': {
            title: 'Flowers +',
            excerpt: 'florist, ikebana, garden'
        },
        'fishingstore.png': {
            title: 'Fishing',
            excerpt: 'angling, bait, tackle, fly'
        },
        'eggs.png': {
            title: 'Eggs',
            excerpt: 'food, chicken, farmer'
        },
        'departmentstore.png': {
            title: 'Department Store',
            excerpt: ''
        },
        'conveniencestore.png': {
            title: 'Convenience store',
            excerpt: 'mini-market, neighborhood'
        },
        'computers.png': {
            title: 'Computers',
            excerpt: 'PC, Mac, hardware, software'
        },
        'clothers_male.png': {
            title: 'Male Clothes +',
            excerpt: 'boutique, rag-stock'
        },
        'clothers_female.png': {
            title: 'Female Clothes',
            excerpt: 'boutique, rag-stock'
        },
        'christmasmarket.png': {
            title: 'Christmas Market',
            excerpt: 'winter'
        },
        'butcher-2.png': {
            title: 'Butcher',
            excerpt: 'meat, steak'
        },
        'bags.png': {
            title: 'Bags',
            excerpt: ''
        },
        'artgallery.png': {
            title: 'Art gallery',
            excerpt: 'paintings'
        },
        'yoga.png': {
            title: 'Yoga',
            excerpt: ''
        },
        'windsurfing.png': {
            title: 'Windsurfing',
            excerpt: 'sailboarding, board sailing'
        },
        'weights.png': {
            title: 'Weight lifting',
            excerpt: 'gym, bodybuilding'
        },
        'waterskiing.png': {
            title: 'Waterskiing',
            excerpt: ''
        },
        'watercraft.png': {
            title: 'Personal Water Craft',
            excerpt: 'PWC, jet ski, sea-doo'
        },
        'volleyball.png': {
            title: 'Volley-ball',
            excerpt: 'volley'
        },
        'veterinary.png': {
            title: 'Veterinary',
            excerpt: 'vet, animal hospital'
        },
        'usfootball.png': {
            title: 'American football',
            excerpt: 'US football'
        },
        'therapy.png': {
            title: 'Therapy',
            excerpt: 'psychologist, shrink, counseling'
        },
        'tennis.png': {
            title: 'Tennis +',
            excerpt: 'tennis court'
        },
        'swimming.png': {
            title: 'Swimming +',
            excerpt: 'swimming pool, swimming bath, wading pool'
        },
        'surfing.png': {
            title: 'Surfing',
            excerpt: 'water, wave'
        },
        'surfacelift.png': {
            title: 'Surface Lift',
            excerpt: 't-bar, j-bar, platter'
        },
        'stadium.png': {
            title: 'Stadium',
            excerpt: 'arena'
        },
        'sportutilityvehicle.png': {
            title: 'Sport Utility Vehicle',
            excerpt: 'SUV, 4 wheeler, 4Ä‚â€”4'
        },
        'spelunking.png': {
            title: 'Spelunking',
            excerpt: 'cave exploring'
        },
        'speedriding.png': {
            title: 'Speedriding',
            excerpt: 'speed flying'
        },
        'spa.png': {
            title: 'Spa',
            excerpt: 'relaxation'
        },
        'soccer.png': {
            title: 'Soccer, Football +',
            excerpt: 'football, soccer, footie'
        },
        'snowshoeing.png': {
            title: 'Snowshoeing',
            excerpt: 'webs, snow'
        },
        'snowpark_arc.png': {
            title: 'Snowpark +',
            excerpt: 'snowboard, whoops, step, mailbox, kink, edge, arc, half/quarterpipe, big air, waterslide'
        },
        'snowmobiling.png': {
            title: 'Snowmobiling',
            excerpt: 'snowmachine, skimobile'
        },
        'snowboarding.png': {
            title: 'Snowboarding',
            excerpt: ''
        },
        'snorkeling.png': {
            title: 'Snorkeling',
            excerpt: 'diving, underwater'
        },
        'skilifting.png': {
            title: 'Ski Lift',
            excerpt: 'aerial, chairlift'
        },
        'skijump.png': {
            title: 'Ski jumping',
            excerpt: 'inrun, ski-flying'
        },
        'skiing.png': {
            title: 'Skiing',
            excerpt: 'alpine, slalom, downhill'
        },
        'scubadiving.png': {
            title: 'Scuba Diving',
            excerpt: ''
        },
        'sailing.png': {
            title: 'Sailing',
            excerpt: 'sailboat, watercraft, boat'
        },
        'rugbyfield.png': {
            title: 'Rugby',
            excerpt: ''
        },
        'rowboat.png': {
            title: 'Rowboat',
            excerpt: 'watercraft, oars'
        },
        'rollerskate.png': {
            title: 'Skateboarding',
            excerpt: 'skate'
        },
        'petanque.png': {
            title: 'Boules',
            excerpt: 'petanque, boccia, bowls'
        },
        'paragliding.png': {
            title: 'Paragliding',
            excerpt: 'free-flying, parachuting'
        },
        'ophthalmologist.png': {
            title: 'Ophthalmologist',
            excerpt: 'eyes'
        },
        'nordicski.png': {
            title: 'Cross Country Skiing +',
            excerpt: 'telemark, nordic skiing, ski hiking, ski touring, backcountry skiing'
        },
        'mountains.png': {
            title: 'Mountains',
            excerpt: ''
        },
        'motorbike.png': {
            title: 'Motorbike',
            excerpt: 'bike, cross'
        },
        'massage.png': {
            title: 'Massage',
            excerpt: 'acupressure, shiatsu'
        },
        'kitesurfing.png': {
            title: 'Kitesurfing',
            excerpt: 'kiteboarding'
        },
        'kayaking.png': {
            title: 'Kayaking',
            excerpt: 'kayak, paddling'
        },
        'karting.png': {
            title: 'Kart racing',
            excerpt: 'go-kart, karting'
        },
        'karate.png': {
            title: 'Karate',
            excerpt: 'martial arts'
        },
        'judo.png': {
            title: 'Judo',
            excerpt: 'martial arts'
        },
        'jogging.png': {
            title: 'Jogging',
            excerpt: 'running'
        },
        'iceskating.png': {
            title: 'Ice Skating',
            excerpt: ''
        },
        'icehockey.png': {
            title: 'Ice Hockey',
            excerpt: 'ice rink'
        },
        'hunting.png': {
            title: 'Hunting',
            excerpt: 'shooting, rifle'
        },
        'hospital-building.png': {
            title: 'Hospital +',
            excerpt: 'clinic, emergency'
        },
        'horseriding.png': {
            title: 'Horse Riding',
            excerpt: 'equestrianism, dressage'
        },
        'hiking.png': {
            title: 'Hiking',
            excerpt: 'hillwalking, backpacking, trekking'
        },
        'hanggliding.png': {
            title: 'Hang Gliding',
            excerpt: ''
        },
        'handball.png': {
            title: 'Handball',
            excerpt: ''
        },
        'golfing.png': {
            title: 'Golf',
            excerpt: ''
        },
        'fitness.png': {
            title: 'Fitness Center',
            excerpt: 'health club'
        },
        'fishing.png': {
            title: 'Fishing',
            excerpt: 'angling, fly fishing'
        },
        'firstaid.png': {
            title: 'First aid',
            excerpt: 'med-kit, red cross'
        },
        'drugstore.png': {
            title: 'Pharmacy +',
            excerpt: 'chemist, drugstore, cosmetic, beauty care, cure, elixir, medical'
        },
        'medicine.png': {
            title: 'Doctor',
            excerpt: 'nurse, medic, MD'
        },
        'diving.png': {
            title: 'Diving',
            excerpt: 'water'
        },
        'dentist.png': {
            title: 'Dentist',
            excerpt: 'teeth, medicine'
        },
        'deepseafishing.png': {
            title: 'Deep Sea Fishing',
            excerpt: 'offshore, open water'
        },
        'cycling_sprint.png': {
            title: 'Sprint',
            excerpt: 'cycling track type'
        },
        'cycling_feed.png': {
            title: 'Feed Area',
            excerpt: 'cycling, food drink stop'
        },
        'cycling.png': {
            title: 'Cycling',
            excerpt: 'biking'
        },
        'cricket.png': {
            title: 'Cricket',
            excerpt: ''
        },
        'climbing.png': {
            title: 'Climbing',
            excerpt: 'mountaineering, rock'
        },
        'boxing.png': {
            title: 'Boxing',
            excerpt: 'english boxing'
        },
        'bobsleigh.png': {
            title: 'Bobsleigh',
            excerpt: 'bobsled, bobsledge, tobogganing'
        },
        'beautysalon.png': {
            title: 'Beauty Salon',
            excerpt: 'aesthetics, parlor'
        },
        'boardercross.png': {
            title: 'Boardercross',
            excerpt: 'bladercross, snowboardcross'
        },
        'beachvolleyball.png': {
            title: 'Beach Volleyball',
            excerpt: 'volley, beach'
        },
        'basketball.png': {
            title: 'Basketball +',
            excerpt: 'basket, streetball, slamball'
        },
        'baseball.png': {
            title: 'Baseball',
            excerpt: ''
        },
        'barber.png': {
            title: 'Hair Salon',
            excerpt: 'barber, hairdresser, parlor'
        },
        'avalanche1.png': {
            title: 'Avalanche +',
            excerpt: 'mountains'
        },
        'australianfootball.png': {
            title: 'Australian football',
            excerpt: 'football'
        },
        'atv.png': {
            title: 'All-Terrain Vehicle',
            excerpt: 'ATV, quad bike'
        },
        'archery.png': {
            title: 'Archery',
            excerpt: 'arrow, bow'
        },
        'jacuzzi.png': {
            title: 'Jacuzzi',
            excerpt: 'bubble bath, hot bath'
        },
        'acupuncture.png': {
            title: 'Acupuncture',
            excerpt: 'filiform needles'
        },
        'chiropractor.png': {
            title: 'Chiropractor',
            excerpt: 'spine, bones'
        },
        'youthhostel.png': {
            title: 'Youth Hostel',
            excerpt: 'dorm, YMCA, auberge'
        },
        'winetasting.png': {
            title: 'Wine tasting',
            excerpt: 'sommelier'
        },
        'winebar.png': {
            title: 'Wine bar',
            excerpt: 'winery, bodega'
        },
        'villa.png': {
            title: 'Villa',
            excerpt: 'rental property'
        },
        'terrace.png': {
            title: 'Terrace',
            excerpt: 'restaurant'
        },
        'teahouse.png': {
            title: 'Tea house',
            excerpt: 'tearoom, salon de thÄ‚Â©'
        },
        'takeaway.png': {
            title: 'Take-Away',
            excerpt: 'take-out, carry-out'
        },
        'restaurant_vegetarian.png': {
            title: 'Vegetarian',
            excerpt: 'vegetables, vegan, restaurant'
        },
        'restaurant_turkish.png': {
            title: 'Turkish',
            excerpt: 'kÄ‚Â¶fte, dÄ‚Â¶ner, bÄ‚Â¶rek, meze, restaurant, shawarma, halal'
        },
        'restaurant_thai.png': {
            title: 'ThaÄ‚Ĺ»',
            excerpt: 'sala pao, tom yum, pad thai, restaurant'
        },
        'restaurant_tapas.png': {
            title: 'Spanish',
            excerpt: 'pica, bravas, restaurant'
        },
        'restaurant_steakhouse.png': {
            title: 'Steakhouse',
            excerpt: 'grill, steak, beef, restaurant'
        },
        'restaurant_romantic.png': {
            title: 'Romantic',
            excerpt: 'restaurant'
        },
        'restaurant_mexican.png': {
            title: 'Mexican',
            excerpt: 'tacos, enchilada, burritos, restaurant'
        },
        'restaurant_mediterranean.png': {
            title: 'Mediterranean',
            excerpt: 'restaurant'
        },
        'restaurant_korean.png': {
            title: 'Korean',
            excerpt: 'guksu, kimchi, anju, restaurant'
        },
        'restaurant_italian.png': {
            title: 'Italian restaurant',
            excerpt: 'pasta, risotto'
        },
        'restaurant_indian.png': {
            title: 'Indian restaurant',
            excerpt: 'curry, tandoori, thali'
        },
        'restaurant_greek.png': {
            title: 'Greek restaurant',
            excerpt: 'gyros, souvlaki, meze'
        },
        'restaurant_fish.png': {
            title: 'Fish restaurant',
            excerpt: 'sea'
        },
        'restaurant_chinese.png': {
            title: 'Chinese restaurant',
            excerpt: 'cantonese, sichuan'
        },
        'restaurant_buffet.png': {
            title: 'Buffet',
            excerpt: 'sideboard, smÄ‚Â¶rgÄ‚Ä„sbord, restaurant'
        },
        'restaurant_breakfast.png': {
            title: 'Breakfast',
            excerpt: 'continental, full, restaurant'
        },
        'restaurant_african.png': {
            title: 'African restaurant',
            excerpt: ''
        },
        'restaurant.png': {
            title: 'Restaurant',
            excerpt: 'bistro, canteen, taverna'
        },
        'resort.png': {
            title: 'Resort',
            excerpt: 'all-inclusive'
        },
        'pizzaria.png': {
            title: 'Pizzaria +',
            excerpt: 'italia, restaurant'
        },
        'lodging_0star.png': {
            title: 'Lodging +',
            excerpt: 'accommodation'
        },
        'kebab.png': {
            title: 'Kebab',
            excerpt: 'dÄ‚Â¶ner, durum, shawarma, restaurant, halal'
        },
        'icecream.png': {
            title: 'Ice Cream Parlor',
            excerpt: 'gelateria'
        },
        'hotel_0star.png': {
            title: 'Hotel +',
            excerpt: 'accommodation, lodging'
        },
        'hostel_0star.png': {
            title: 'Hostel +',
            excerpt: 'pousada, hotel, bed and breakfast'
        },
        'gourmet_0star.png': {
            title: 'Gourmet +',
            excerpt: 'gastronomic, michelin, epicure, restaurant'
        },
        'foodtruck.png': {
            title: 'Food Truck',
            excerpt: 'mobile kitchen'
        },
        'fooddeliveryservice.png': {
            title: 'Food Delivery Service',
            excerpt: 'catering'
        },
        'fishchips.png': {
            title: 'Fish & chips',
            excerpt: 'fish-and-chips, battery, restaurant'
        },
        'fastfood.png': {
            title: 'Fast Food',
            excerpt: 'diner, deli, hamburger, hot dog, restaurant'
        },
        'coffee.png': {
            title: 'Coffee',
            excerpt: 'Cafe, cafeteria, coffee-house'
        },
        'cafetaria.png': {
            title: 'Cafeteria',
            excerpt: 'student, lunchroom, mess, restaurant'
        },
        'bread.png': {
            title: 'Bakery',
            excerpt: 'baguette, food, sandwich, bread'
        },
        'barbecue.png': {
            title: 'Barbecue',
            excerpt: 'grill, restaurant, BBQ'
        },
        'bar_juice.png': {
            title: 'Juice bar',
            excerpt: 'fruits'
        },
        'bar_coktail.png': {
            title: 'Cocktail bar',
            excerpt: 'drinks, alcohol'
        },
        'bar.png': {
            title: 'Bar',
            excerpt: 'pub, dive, saloon, cantina, alcohol, bar'
        },
        'cctv.png': {
            title: 'CCTV',
            excerpt: 'surveillance, camera'
        },
        'zoom.png': {
            title: 'Zoom',
            excerpt: 'magnifying glass'
        },
        'wifi.png': {
            title: 'Wi-Fi +',
            excerpt: 'wifi, internet, wireless, access point'
        },
        'waiting.png': {
            title: 'Waiting room',
            excerpt: ''
        },
        'trash.png': {
            title: 'Trash',
            excerpt: 'waste bin'
        },
        'toilets.png': {
            title: 'Toilets +',
            excerpt: 'WC, lavatories, latrine, bathroom, restroom'
        },
        'telephone.png': {
            title: 'Telephone',
            excerpt: 'call box'
        },
        'smoking.png': {
            title: 'Smoking',
            excerpt: 'cigarettes'
        },
        'shower.png': {
            title: 'Shower',
            excerpt: 'water, bath'
        },
        'regroup.png': {
            title: 'Regroup',
            excerpt: 'group, gathering, meeting point'
        },
        'recycle.png': {
            title: 'Recycle',
            excerpt: 'reuse, garbage, recover, civic amenity site, dump'
        },
        'information.png': {
            title: 'Information',
            excerpt: 'tip, help, support'
        },
        'fireexstinguisher.png': {
            title: 'Fire extinguisher',
            excerpt: ''
        },
        'elevator_up.png': {
            title: 'Escalator, up',
            excerpt: ''
        },
        'elevator_down.png': {
            title: 'Escalator, down',
            excerpt: ''
        },
        'elevator.png': {
            title: 'Elevator',
            excerpt: ''
        },
        'drinkingfountain.png': {
            title: 'Drinking fountain',
            excerpt: 'water'
        },
        'disability.png': {
            title: 'Disability',
            excerpt: 'handicap, incapable, wheelchair, accessibility'
        },
        'construction.png': {
            title: 'Construction',
            excerpt: 'building site, dig'
        },
        'compost.png': {
            title: 'Compost',
            excerpt: ''
        },
        'video.png': {
            title: 'Video',
            excerpt: 'clip, movie, film'
        },
        'webcam.png': {
            title: 'Webcam',
            excerpt: 'instant messaging, videophone'
        },
        'text.png': {
            title: 'Text',
            excerpt: 'write, article, book, note, letter'
        },
        'audio.png': {
            title: 'Audio',
            excerpt: 'sound, noise'
        },
        'photo.png': {
            title: 'Photo',
            excerpt: 'photography, shot, picture'
        },
        'loveinterest.png': {
            title: 'Love interest',
            excerpt: 'lover, fiancÄ‚Â©, heart, girlfriend, passion'
        },
        'treedown.png': {
            title: 'Tree down',
            excerpt: 'uprooted'
        },
        'torture.png': {
            title: 'Torture',
            excerpt: 'torment, punishment, pain'
        },
        'theft.png': {
            title: 'Theft',
            excerpt: 'snatching, robbery, burglary'
        },
        'rape.png': {
            title: 'Rape',
            excerpt: 'abuse, mistreatment'
        },
        'poweroutage.png': {
            title: 'Power outage',
            excerpt: 'black out, power failure'
        },
        'love_date.png': {
            title: 'Love date',
            excerpt: 'girlfriend'
        },
        'linedown.png': {
            title: 'Power lines down',
            excerpt: 'line cut, power cut'
        },
        'cropcircles.png': {
            title: 'Crop circles',
            excerpt: 'agroglyph'
        },
        'cowabduction.png': {
            title: 'Cow abduction',
            excerpt: 'UFO, kidnapping'
        },
        'abduction.png': {
            title: 'Abduction +',
            excerpt: 'ransom, kidnapping'
        },
        'crimescene.png': {
            title: 'Crime scene',
            excerpt: 'murder, kill, assassination, death, investigation, police'
        },
        'wedding.png': {
            title: 'Wedding',
            excerpt: 'wife, husband'
        },
        'flood.png': {
            title: 'Flood',
            excerpt: 'water, overflow'
        },
        'strike.png': {
            title: 'Manifestation',
            excerpt: 'strike, demonstration, protest'
        },
        'bomb.png': {
            title: 'Bomb',
            excerpt: 'dynamite, warhead, missile'
        },
        'revolt.png': {
            title: 'Revolution',
            excerpt: 'revolt, overthrow, overturn'
        },
        'radiation.png': {
            title: 'Radiation',
            excerpt: 'radioactivity, decontamination, nuclear, uranium'
        },
        'blast.png': {
            title: 'Explosion',
            excerpt: 'bomb, blast, boom'
        },
        'planecrash.png': {
            title: 'Plane Crash',
            excerpt: 'aviation accident, airplane'
        },
        'shooting.png': {
            title: 'Shooting',
            excerpt: 'guns, weapons, combat, handgun, firearm'
        },
        'fire.png': {
            title: 'Fire',
            excerpt: 'blaze, burn, flames'
        },
        'tornado-2.png': {
            title: 'Tornado',
            excerpt: 'twister, cyclone'
        },
        'snowy-2.png': {
            title: 'Snowy',
            excerpt: 'ice, cold, frost'
        },
        'thunderstorm.png': {
            title: 'Thunderstorm',
            excerpt: 'lightning, thunder, squall'
        },
        'sunny.png': {
            title: 'Sunny',
            excerpt: 'beaming, bright, hot'
        },
        'cloudy.png': {
            title: 'Cloudy',
            excerpt: 'gray, beclouded'
        },
        'cloudysunny.png': {
            title: 'Cloudy and Sunny',
            excerpt: 'clouds, partly cloudy, mixed, sun'
        },
        'rainy.png': {
            title: 'Rainy',
            excerpt: 'rain, showers, monsoon'
        },
        'wind-2.png': {
            title: 'Wind',
            excerpt: 'breeze, gale, storm'
        },
        'nursery.png': {
            title: 'Nursery',
            excerpt: 'baby'
        },
        'daycare.png': {
            title: 'Day care +',
            excerpt: 'child care, kindergarten'
        },
        'playground.png': {
            title: 'Playground',
            excerpt: 'play area, sandbox, playscape'
        },
        'nanny.png': {
            title: 'Nanny',
            excerpt: 'babysitter, governess, au pair, stroller, pram'
        },
        'cramschool.png': {
            title: 'Cram school',
            excerpt: 'high school, university'
        },
        'summercamp.png': {
            title: 'Summer camp',
            excerpt: 'summertime program'
        },
        'university.png': {
            title: 'University',
            excerpt: 'college, faculty, student, exam'
        },
        'school.png': {
            title: 'School +',
            excerpt: 'learning, education, classes'
        },
        'yooner.png': {
            title: 'Paret / Yooner',
            excerpt: 'sledge'
        },
        'solarenergy.png': {
            title: 'Solar energy',
            excerpt: 'sun, power, electricity'
        },
        'library.png': {
            title: 'Library',
            excerpt: 'books, reading'
        },
        'landfill.png': {
            title: 'Landfill',
            excerpt: 'dump, rubbish'
        },
        'sauna.png': {
            title: 'Sauna',
            excerpt: ''
        },
        'bustour.png': {
            title: 'Bus tour',
            excerpt: 'sightseeing'
        },
        'walkingtour.png': {
            title: 'Walking tour',
            excerpt: 'walk-and-see, sightseeing'
        },
        'sledge_summer.png': {
            title: 'Summer sledge',
            excerpt: 'alpine coaster, sommerrodelbahn'
        },
        'segway.png': {
            title: 'Segway tour',
            excerpt: 'personal transporter'
        },
        'paintball.png': {
            title: 'Paintball',
            excerpt: ''
        },
        'museum_openair.png': {
            title: 'Open-air museum',
            excerpt: 'folk, skansen, living museum'
        },
        'sledge.png': {
            title: 'Sledge +',
            excerpt: ''
        },
        'bullfight.png': {
            title: 'Bullfight arena',
            excerpt: 'bullfighting, corrida'
        },
        'museum_industry.png': {
            title: 'Industry museum',
            excerpt: 'manufacture'
        },
        'music_choral.png': {
            title: 'Choral',
            excerpt: 'choir, chorus, a cappella'
        },
        'music_live.png': {
            title: 'Live music',
            excerpt: 'song, stage, concert'
        },
        'party-2.png': {
            title: 'Party',
            excerpt: 'birthday, party, anniversary'
        },
        'museum_science.png': {
            title: 'Science museum',
            excerpt: 'computer, physics, chemistry'
        },
        'museum_archeological.png': {
            title: 'Archeological museum',
            excerpt: 'excavation, dig, history'
        },
        'war.png': {
            title: 'War',
            excerpt: 'battle'
        },
        'museum_war.png': {
            title: 'War museum',
            excerpt: 'history, military, battle'
        },
        'museum_naval.png': {
            title: 'Naval museum',
            excerpt: 'history, boat, sea'
        },
        'casino-2.png': {
            title: 'Casino',
            excerpt: 'gambling'
        },
        'zoo.png': {
            title: 'Zoological Garden',
            excerpt: 'zoo, animal park, paw print'
        },
        'waterpark.png': {
            title: 'Waterpark',
            excerpt: ''
        },
        'themepark.png': {
            title: 'Theme park',
            excerpt: 'amusement, funfair, rides'
        },
        'theater.png': {
            title: 'Theater',
            excerpt: 'play, performance, drama'
        },
        'ropescourse.png': {
            title: 'Ropes course',
            excerpt: 'trees, adventure, zip-line'
        },
        'publicart.png': {
            title: 'Public art',
            excerpt: 'sculpture, architecture'
        },
        'poker.png': {
            title: 'Card games',
            excerpt: 'poker, blackjack, bridge'
        },
        'music_rock.png': {
            title: 'Rock music',
            excerpt: 'concert, gig'
        },
        'music_hiphop.png': {
            title: 'Hip-hop music',
            excerpt: ''
        },
        'music_classical.png': {
            title: 'Classical music',
            excerpt: 'orchestral, symphony'
        },
        'museum_crafts.png': {
            title: 'Crafts museum',
            excerpt: ''
        },
        'museum_art.png': {
            title: 'Art museum +',
            excerpt: 'history, paintings, art studio'
        },
        'magicshow.png': {
            title: 'Magic show',
            excerpt: 'circus'
        },
        'fireworks.png': {
            title: 'Fireworks',
            excerpt: 'pyrotechnic'
        },
        'ferriswheel.png': {
            title: 'Ferris wheel',
            excerpt: ''
        },
        'dancinghall.png': {
            title: 'Dancing hall',
            excerpt: 'music, dance, disco, club'
        },
        'circus.png': {
            title: 'Circus',
            excerpt: 'clown'
        },
        'cinema.png': {
            title: 'Cinema',
            excerpt: 'movie, film, projection'
        },
        'bowling.png': {
            title: 'Bowling',
            excerpt: 'skittles, skee ball, ten-pin'
        },
        'aquarium.png': {
            title: 'Aquarium',
            excerpt: 'fishes, marine life'
        },
        'anniversary.png': {
            title: 'Anniversary',
            excerpt: 'birthday, celebration'
        },
        'mine.png': {
            title: 'Mine +',
            excerpt: 'open mine, closed mine'
        },
        'workoffice.png': {
            title: 'Work office +',
            excerpt: 'job, work desk'
        },
        'windturbine.png': {
            title: 'Wind turbine',
            excerpt: 'generator, WPU, WEC'
        },
        'watertower.png': {
            title: 'Water tower',
            excerpt: ''
        },
        'seniorsite.png': {
            title: 'Senior site',
            excerpt: 'retired, senior'
        },
        'powersubstation.png': {
            title: 'Electrical Substation',
            excerpt: 'power, transformer'
        },
        'powerlinepole.png': {
            title: 'Power Line Pole',
            excerpt: 'overhead power line'
        },
        'postal.png': {
            title: 'Post office',
            excerpt: 'letter, post card, mail, envelope'
        },
        'police.png': {
            title: 'Police +',
            excerpt: 'citizen protection, guard'
        },
        'oilpumpjack.png': {
            title: 'Oil pump jack',
            excerpt: 'oil derrick, horsehead'
        },
        'observatory.png': {
            title: 'Observatory',
            excerpt: 'astronomy'
        },
        'mobilephonetower.png': {
            title: 'Mobile Phone Tower',
            excerpt: 'cell site, radio, tv, transmitter mast'
        },
        'military.png': {
            title: 'Military base',
            excerpt: 'army, civil guard'
        },
        'lockerrental.png': {
            title: 'Locker Rental',
            excerpt: 'box, safe'
        },
        'laundromat.png': {
            title: 'Laundromat',
            excerpt: 'Self-service Laundry, launderettes'
        },
        'fishingboat.png': {
            title: 'Fishing boat',
            excerpt: 'trawler, seiner'
        },
        'firemen.png': {
            title: 'Fire station',
            excerpt: 'firefighter, firemen'
        },
        'findajob.png': {
            title: 'Employment agency',
            excerpt: 'temp agency, staffing firm'
        },
        'factory.png': {
            title: 'Factory',
            excerpt: 'production'
        },
        'expert.png': {
            title: 'Expert',
            excerpt: 'specialist, engineer'
        },
        'embassy.png': {
            title: 'Embassy',
            excerpt: 'diplomat'
        },
        'dam.png': {
            title: 'Dam',
            excerpt: 'power, hydro, reservoir'
        },
        'customs.png': {
            title: 'Customs',
            excerpt: 'douane, zoll'
        },
        'currencyexchange.png': {
            title: 'Currency Exchange',
            excerpt: 'change, money'
        },
        'court.png': {
            title: 'Court',
            excerpt: 'law, lawyer, justice'
        },
        'conference.png': {
            title: 'Conference Center',
            excerpt: 'meeting, convention'
        },
        'company.png': {
            title: 'Company',
            excerpt: 'business, job, work'
        },
        'communitycentre.png': {
            title: 'Community center',
            excerpt: 'philanthropy, humanitarian aid'
        },
        'bank.png': {
            title: 'Bank +',
            excerpt: 'cash, money, coins'
        },
        'atm-2.png': {
            title: 'ATM +',
            excerpt: 'Automatic Teller Machine, ATM, cash machine'
        },
        'amphitheater.png': {
            title: 'Amphitheater',
            excerpt: ''
        },
        'administration.png': {
            title: 'Administration',
            excerpt: ''
        },
        'home.png': {
            title: 'Home',
            excerpt: 'residence, house'
        },
        'family.png': {
            title: 'Family',
            excerpt: ''
        },
        'apartment-3.png': {
            title: 'Apartment +',
            excerpt: 'home, house, building, city'
        },
        'spaceport-2.png': {
            title: 'Spaceport',
            excerpt: 'astrodrome, cosmodrome'
        },
        'billiard-2.png': {
            title: 'Billiard',
            excerpt: 'pool, snooker'
        },
        'powerplant.png': {
            title: 'Power Plant',
            excerpt: 'generating station, power station, powerhouse'
        },
        'laboratory.png': {
            title: 'Laboratory',
            excerpt: 'science, chemistry'
        },
        'prison.png': {
            title: 'Prison',
            excerpt: ''
        }
    };

