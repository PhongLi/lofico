import Videos from '~/assets/videos';
import {
    cafeInPreview,
    cafeOutPreview,
    forestInsidePreview,
    forestOutsidePreview,
    summerOutPreview,
    summerPreview,
    vanOutPreview,
    vanPreview,
    oceanPreview,
    oceanOutPreview,
    livingRoom,
    bedRoom,
    studyCity,
    studyBeach,
    studyMountain,
    cottageIn,
    cottageOut,
    bookOut,
    bookIn,
    kyotoPark,
    kyotoStreet,
    spacePW,
    underwaterPW,
    honoluluIn,
    honoluluOut,
    greenHouse,
    seoulIn,
    seoulOut,
    trainCity,
    trainCountry,
} from '~/assets/thumbnails';

// Video Api
const URL = 'https://lofi-co-assets.vexcited.com/scenes/';
// Wallpaper Api
const URLW = 'https://lofi-co-assets.vexcited.com/wallpapers/';

const URL_NEW = 'https://lofi-co-assets.vexcited.com/scenes/';

export const scenes = {
    forestInside: {
        thumbnail: forestInsidePreview,
        wallpaper: URLW + 'Forest+House/forest1.jpg',
        variants: {
            default: URL + Videos.forest.inside,
            rain_forest: URL + Videos.forest.insideRain,
            default_pixel: URL + Videos.forest.insidePix,
            rain_forest_pixel: URL + Videos.forest.insideRainPix,
        },
        actions: [
            {
                position: [70, 30],
                title: 'Forest Rain',
                type: 'sound',
                effect: 'rain_forest',
            },
            {
                position: [15, 20],
                title: 'Bird chirping',
                type: 'sound',
                effect: 'birds',
            },
            {
                position: [15, 85],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    forestOutside: {
        thumbnail: forestOutsidePreview,
        wallpaper: URLW + 'Forest+House/forest2.jpg',
        variants: {
            default: URL + Videos.forest.outside,
            rain_forest: URL + Videos.forest.outsideRain,
            default_pixel: URL + Videos.forest.outsidePix,
            rain_forest_pixel: URL + Videos.forest.outsideRainPix,
        },

        actions: [
            {
                position: [70, 70],
                title: 'River',
                type: 'sound',
                effect: 'river',
            },
            {
                position: [10, 50],
                title: 'Bird chirping',
                type: 'sound',
                effect: 'birds',
            },
            {
                position: [67, 12],
                title: 'Forest Rain',
                type: 'sound',
                effect: 'rain_forest',
            },
        ],
    },
    vanInside: {
        thumbnail: vanPreview,
        variants: {
            default: URL + Videos.van.in,
            rain_forest: URL + Videos.van.inRain,
        },

        wallpaper: URLW + 'Van+Life/van.jpg',
        actions: [
            {
                position: [50, 30],
                title: 'Forest Rain',
                type: 'sound',
                effect: 'rain_forest',
            },
            {
                position: [55, 20],
                title: 'Forest',
                type: 'sound',
                effect: 'forest',
            },
            {
                position: [80, 85],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    vanOutside: {
        thumbnail: vanOutPreview,
        variants: {
            default: URL + Videos.van.out,
            fire: URL + Videos.van.outFire,
        },
        wallpaper: URLW + 'Van+Life/lofi3.jpg',
        actions: [
            {
                position: [10, 20],
                title: 'Forest sound',
                type: 'sound',
                effect: 'forest',
            },
            {
                position: [42, 78],
                title: 'Campfire sound',
                type: 'sound',
                effect: 'fire',
            },
            {
                position: [61, 78],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    cafeInside: {
        thumbnail: cafeInPreview,
        wallpaper: URLW + 'Lofi+Cafe/cafe2.jpg',
        variants: {
            default: URL + Videos.cafe.inDay,
            default_night: URL + Videos.cafe.inNight,
            rain_street_night: URL + Videos.cafe.inNightRain,
            rain_street: URL + Videos.cafe.inDayRain,
        },

        actions: [
            {
                position: [20, 38],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [50, 70],
                title: 'People Talks',
                type: 'sound',
                effect: 'people',
            },
            {
                position: [26, 65],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    cafeOutside: {
        thumbnail: cafeOutPreview,
        variants: {
            default: URL + Videos.cafe.outDay,
            rain_street: URL + Videos.cafe.outDayRain,
            default_night: URL + Videos.cafe.outNight,
            rain_street_night: URL + Videos.cafe.outNightRain,
        },
        wallpaper: URLW + 'Lofi+Cafe/lofi4a+hr.jpg',
        actions: [
            {
                position: [75, 80],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
            {
                position: [3, 35],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [60, 65],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    summerInside: {
        thumbnail: summerPreview,
        variants: {
            default: URL + Videos.summer.inside,
            storm: URL + Videos.summer.insideRain,
        },
        wallpaper: URLW + 'Summer+Days/beach2.jpg',
        actions: [
            {
                position: [30, 25],
                title: 'Summer storm',
                type: 'sound',
                effect: 'storm',
            },
            {
                position: [65, 51],
                title: 'Open mixer',
                type: 'open-mixer',
            },
            {
                position: [60, 45],
                title: 'Fan',
                type: 'sound',
                effect: 'fan',
            },
        ],
    },
    summerOutside: {
        thumbnail: summerOutPreview,
        variants: {
            default: URL + Videos.summer.outside,
            storm: URL + Videos.summer.outsideRain,
            default_pixel: URL + Videos.summer.outsidePix,
            storm_pixel: URL + Videos.summer.outsideRainPix,
        },
        wallpaper: URLW + 'Summer+Days/beach1.jpg',

        actions: [
            {
                position: [75, 80],
                title: 'Sea Waves',
                type: 'sound',
                effect: 'waves',
            },
            {
                position: [85, 15],
                title: 'Summer storm',
                type: 'sound',
                effect: 'storm',
            },
            {
                position: [19, 63],
                title: 'Open mixer',
                type: 'open-mixer',
            },
        ],
    },
    oceanInside: {
        thumbnail: oceanPreview,
        variants: {
            default: URL + Videos.ocean.in,
            storm: URL + Videos.ocean.inRain,
        },
        wallpaper: URLW + 'Ocean+Tales/lo-fi+scene+2-01.png',

        actions: [
            {
                position: [8, 59],
                title: 'Wind',
                type: 'sound',
                effect: 'wind',
            },
            {
                position: [60, 70],
                title: 'Open mixer',
                type: 'open-mixer',
            },
            {
                position: [59, 31],
                title: 'Summer Storm',
                type: 'sound',
                effect: 'storm',
            },
        ],
    },
    oceanOutside: {
        thumbnail: oceanOutPreview,
        variants: {
            default: URL + Videos.ocean.out,
            storm: URL + Videos.ocean.outRain,
        },
        wallpaper: URLW + 'Ocean+Tales/lo-fi+scene+1-01.png',

        actions: [
            {
                position: [8, 15],
                title: 'Wind',
                type: 'sound',
                effect: 'wind',
            },
            {
                position: [42, 64],
                title: 'Ocean',
                type: 'sound',
                effect: 'ocean',
            },
            {
                position: [48, 13],
                title: 'Summer Storm',
                type: 'sound',
                effect: 'storm',
            },
        ],
    },
    lrBedRoom: {
        thumbnail: bedRoom,
        variants: {
            default: URL + Videos.chillVibes.bed,
            rain_street: URL + Videos.chillVibes.bedRain,
            default_night: URL + Videos.chillVibes.bedNight,
            rain_street_night: URL + Videos.chillVibes.bedRainNight,
        },
        wallpaper: URLW + 'Chill+Vibes/BDR+COLOR+FINAL+with+person+-+Day+(4).png',
        actions: [
            {
                position: [82, 20],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [7, 18],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
        ],
    },
    lrLivingRoom: {
        thumbnail: livingRoom,
        variants: {
            default: URL + Videos.chillVibes.lr,
            rain_street: URL + Videos.chillVibes.lrRain,
            default_night: URL + Videos.chillVibes.lrNight,
            rain_street_night: URL + Videos.chillVibes.lrNightRain,
        },
        wallpaper: URLW + 'Chill+Vibes/LVR+COLOR+FINAL+with+person+(2).png',
        actions: [
            {
                position: [40, 14],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [4, 68],
                title: 'Fireplace',
                type: 'sound',
                effect: 'fireplace',
            },
        ],
    },
    deskCity: {
        variants: { default: URL + Videos.study.city },
        thumbnail: studyCity,
        wallpaper: URLW + 'Lofi+Desk/city.jpg',
        actions: [
            {
                position: [44, 52.5],
                title: 'Change place',
                type: 'next-set',
            },
            {
                position: [40, 15],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
        ],
    },
    deskBeach: {
        variants: { default: URL + Videos.study.beach },
        thumbnail: studyBeach,
        wallpaper: URLW + 'Lofi+Desk/beach.jpg',
        actions: [
            {
                position: [44, 52.5],
                title: 'Change place',
                type: 'next-set',
            },
            {
                position: [40, 15],
                title: 'Waves',
                type: 'sound',
                effect: 'waves',
            },
        ],
    },
    deskSnow: {
        variants: {
            default: URL + Videos.study.snow,
            snow: URL + Videos.study.snowBlizzard,
        },
        thumbnail: studyMountain,
        wallpaper: URLW + 'Lofi+Desk/snow.jpg',
        actions: [
            {
                position: [44, 52.5],
                title: 'Change place',
                type: 'next-set',
            },
            {
                position: [40, 15],
                title: 'Blizzard',
                type: 'sound',
                effect: 'snow',
            },
        ],
    },
    cottageIn: {
        variants: {
            default: URL + Videos.cottage.in,
            snow: URL + Videos.cottage.inSnow,
        },
        thumbnail: cottageIn,
        wallpaper: URLW + 'Cottage/COTTAGE+INT.png',
        actions: [
            {
                position: [10, 70],
                title: 'Fireplace',
                type: 'sound',
                effect: 'fireplace',
            },
            {
                position: [30, 15],
                title: 'Blizzard',
                type: 'sound',
                effect: 'snow',
            },
            {
                position: [50, 50],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
        ],
    },
    cottageOut: {
        variants: {
            default: URL + Videos.cottage.out,
            snow: URL + Videos.cottage.outSnow,
        },
        thumbnail: cottageOut,
        wallpaper: URLW + 'Cottage/COTTAGE+EXT.png',
        actions: [
            {
                position: [25, 45],
                title: 'Blizzard',
                type: 'sound',
                effect: 'snow',
            },
        ],
    },

    bookCafeIn: {
        variants: {
            default: URL + Videos.bookCafe.in,
            default_night: URL + Videos.bookCafe.inNight,
            rain_street: URL + Videos.bookCafe.inRain,
            rain_street_night: URL + Videos.bookCafe.inRainNight,
        },
        thumbnail: bookIn,

        wallpaper: URLW + 'book-cafe/int.png',
        actions: [
            {
                position: [17, 20],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [84, 72],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
        ],
    },
    bookCafeOut: {
        variants: {
            default: URL + Videos.bookCafe.out,
            default_night: URL + Videos.bookCafe.outNight,
            rain_street: URL + Videos.bookCafe.outRain,
            rain_street_night: URL + Videos.bookCafe.outRainNight,
        },
        thumbnail: bookOut,
        wallpaper: URLW + 'book-cafe/ext.png',
        actions: [
            {
                position: [6, 40],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [30, 65],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
            {
                position: [60, 60],
                title: 'Enter',
                type: 'next-set',
            },
        ],
    },
    kyotoPark: {
        variants: {
            default: URL + Videos.kyoto.park,
            default_night: URL + Videos.kyoto.parkNight,
        },
        thumbnail: kyotoPark,
        wallpaper: URLW + 'kyoto/Kyoto+Park+Day.png',
        actions: [
            {
                position: [30, 20],
                title: 'Birds chirping',
                type: 'sound',
                effect: 'birds',
            },
            {
                position: [50, 70],
                title: 'River',
                type: 'sound',
                effect: 'river',
            },
        ],
    },
    kyotoStreet: {
        variants: {
            default: URL + Videos.kyoto.street,
            default_night: URL + Videos.kyoto.streetNight,
        },
        thumbnail: kyotoStreet,
        wallpaper: URLW + 'kyoto/Kyoto+Street+Day.png',

        actions: [
            {
                position: [50, 27],
                title: 'Birds chirping',
                type: 'sound',
                effect: 'birds',
            },
            {
                position: [30, 75],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
        ],
    },
    underwater: {
        variants: {
            default: URL + Videos.dreaming.underwater,
        },
        thumbnail: underwaterPW,
        wallpaper: URLW + 'am-i-dreaming/underwater-wp.png',

        actions: [
            {
                position: [40, 27],
                title: 'Underwater',
                type: 'sound',
                effect: 'underwater',
            },
            {
                position: [67, 77],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
        ],
    },
    space: {
        variants: {
            default: URL + Videos.dreaming.space,
        },
        thumbnail: spacePW,
        wallpaper: URLW + 'am-i-dreaming/space-wp.png',

        actions: [
            {
                position: [40, 27],
                title: 'Deep space',
                type: 'sound',
                effect: 'space',
            },
            {
                position: [67, 77],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
        ],
    },
    honoluluIn: {
        variants: {
            default: URL + Videos.honolulu.inside,
            storm: URL + Videos.honolulu.insideRain,
            default_night: URL + Videos.honolulu.insideNight,
            storm_night: URL + Videos.honolulu.insideNightRain,
        },
        thumbnail: honoluluIn,
        wallpaper: URLW + 'honolulu/Honolulu+Balcony+-+Day+(3).png',

        actions: [
            {
                position: [40, 27],
                title: 'Summer storm',
                type: 'sound',
                effect: 'storm',
            },
            {
                position: [67, 82],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
        ],
    },
    honoluluOut: {
        variants: {
            default: URL + Videos.honolulu.outside,
            storm: URL + Videos.honolulu.outsideRain,
            default_night: URL + Videos.honolulu.outsideNight,
            storm_night: URL + Videos.honolulu.outsideNightRain,
        },
        thumbnail: honoluluOut,
        wallpaper: URLW + 'honolulu/Honolulu+Beach+-+Day.png',

        actions: [
            {
                position: [40, 27],
                title: 'Summer storm',
                type: 'sound',
                effect: 'storm',
            },
            {
                position: [67, 60],
                title: 'Ocean',
                type: 'sound',
                effect: 'ocean',
            },
        ],
    },
    greenHouse: {
        variants: {
            default: URL_NEW + Videos.greenHouse.greenHouseDay,
            default_night: URL_NEW + Videos.greenHouse.greenHouseNight,
            rain_forest: URL_NEW + Videos.greenHouse.greenHouseDayRain,
            rain_forest_night: URL_NEW + Videos.greenHouse.greenHouseNightRain,
        },
        thumbnail: greenHouse,
        wallpaper: URL_NEW + 'green-house/LOFI.CO+-+GARDEN+-+DAY+-+IMAGE.png',

        actions: [
            {
                position: [20, 20],
                title: 'Forest Rain',
                type: 'sound',
                effect: 'rain_forest',
            },
            {
                position: [43, 55],
                title: 'River',
                type: 'sound',
                effect: 'river',
            },
            {
                position: [75, 20],
                title: 'Birds chirping',
                type: 'sound',
                effect: 'birds',
            },
        ],
    },
    seoulInside: {
        variants: {
            default: URL_NEW + Videos.seoul.insideDay,
            default_night: URL_NEW + Videos.seoul.insideNight,
            rain_street: URL_NEW + Videos.seoul.insideDayRain,
            rain_street_night: URL_NEW + Videos.seoul.insideNightRain,
        },
        thumbnail: seoulIn,
        wallpaper: URL_NEW + 'seoul/seoul-indoor.png',

        actions: [
            {
                position: [28, 82],
                title: 'Keyboard',
                type: 'sound',
                effect: 'keyboard',
            },
            {
                position: [59, 44],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
        ],
    },
    seoulOutside: {
        variants: {
            default: URL_NEW + Videos.seoul.outsideDay,
            default_night: URL_NEW + Videos.seoul.outsideNight,
            rain_street: URL_NEW + Videos.seoul.outsideDayRain,
            rain_street_night: URL_NEW + Videos.seoul.outsideNightRain,
        },
        thumbnail: seoulOut,
        wallpaper: URL_NEW + 'seoul/seoul-outdoor.png',

        actions: [
            {
                position: [36, 28],
                title: 'City Rain',
                type: 'sound',
                effect: 'rain_street',
            },
            {
                position: [85, 70],
                title: 'City Traffic',
                type: 'sound',
                effect: 'city',
            },
        ],
    },
    // trainJourneyCity: {
    //     variants: {
    //         default: URL_NEW + Videos.train.cityDay,
    //         train_rain: URL_NEW + Videos.train.cityDayRain,
    //         default_night: URL_NEW + Videos.train.cityNight,
    //         train_rain_night: URL_NEW + Videos.train.cityNightRain,
    //     },
    //     thumbnail: trainCity,
    //     wallpaper: URL_NEW + 'Train+set+-+City+Day.png',

    //     actions: [
    //         {
    //             position: [25, 27],
    //             title: 'Window rain',
    //             type: 'sound',
    //             effect: 'train_rain',
    //         },
    //         {
    //             position: [64, 68],
    //             title: 'Train',
    //             type: 'sound',
    //             effect: 'train_noise',
    //         },
    //         {
    //             position: [16, 85],
    //             title: 'Keyboard',
    //             type: 'sound',
    //             effect: 'keyboard',
    //         },
    //     ],
    // },
    // trainJourneyCountry: {
    //     variants: {
    //         default: URL_NEW + Videos.train.countryDay,
    //         train_rain: URL_NEW + Videos.train.countryRainDay,
    //         default_night: URL_NEW + Videos.train.countryNight,
    //         train_rain_night: URL_NEW + Videos.train.countryRainNight,
    //     },
    //     thumbnail: trainCountry,
    //     wallpaper: URL_NEW + 'Train+set+-+Country+Day.png',

    //     actions: [
    //         {
    //             position: [25, 27],
    //             title: 'Window rain',
    //             type: 'sound',
    //             effect: 'train_rain',
    //         },
    //         {
    //             position: [64, 68],
    //             title: 'Train',
    //             type: 'sound',
    //             effect: 'train_noise',
    //         },
    //         {
    //             position: [16, 85],
    //             title: 'Keyboard',
    //             type: 'sound',
    //             effect: 'keyboard',
    //         },
    //     ],
    // },
};
