const effects = [
    {
        type: 'fire',
        name: 'Campfire',
        url: 'https://lofi-co-assets.vexcited.com/effects/campfire.mp3',
    },
    {
        type: 'forest',
        name: 'Forest',
        url: 'https://lofi-co-assets.vexcited.com/effects/forest_night.mp3',
    },
    {
        type: 'rain_forest',
        name: 'Forest Rain',
        url: 'https://lofi-co-assets.vexcited.com/effects/rain_forest.mp3',
    },
    {
        type: 'waves',
        name: 'Waves',
        url: 'https://lofi-co-assets.vexcited.com/effects/waves.mp3',
    },
    {
        type: 'fan',
        name: 'Fan',
        url: 'https://lofi-co-assets.vexcited.com/effects/fan.mp3',
    },
    {
        type: 'city',
        name: 'City traffic',
        url: 'https://lofi-co-assets.vexcited.com/effects/city_traffic.mp3',
    },
    {
        type: 'storm',
        name: 'Summer Storm',
        url: 'https://lofi-co-assets.vexcited.com/effects/summer_storm.mp3',
    },
    {
        type: 'rain_street',
        name: 'City Rain',
        url: 'https://lofi-co-assets.vexcited.com/effects/rain_city.mp3',
    },
    {
        type: 'river',
        name: 'River',
        url: 'https://lofi-co-assets.vexcited.com/effects/river.mp3',
    },
    {
        type: 'birds',
        name: 'Bird Chirping',
        url: 'https://lofi-co-assets.vexcited.com/effects/birds.mp3',
    },
    {
        type: 'people',
        name: 'People Talking',
        url: 'https://lofi-co-assets.vexcited.com/effects/people_talk_inside.mp3',
    },
    {
        type: 'wind',
        name: 'Wind',
        url: 'https://lofi-co-assets.vexcited.com/effects/wind.mp3',
    },
    {
        type: 'ocean',
        name: 'Ocean',
        url: 'https://lofi-co-assets.vexcited.com/effects/ocean.mp3',
    },
    {
        type: 'fireplace',
        name: 'Fireplace',
        url: 'https://lofi-co-assets.vexcited.com/effects/fireplace.mp3',
    },
    {
        type: 'snow',
        name: 'Blizzard',
        url: 'https://lofi-co-assets.vexcited.com/effects/snow.mp3',
    },
    {
        type: 'keyboard',
        name: 'Keyboard',
        url: 'https://lofi-co-assets.vexcited.com/effects/keyboard.mp3',
    },
    {
        type: 'underwater',
        name: 'Underwater',
        url: 'https://lofi-co-assets.vexcited.com/effects/underwater.mp3',
    },
    {
        type: 'space',
        name: 'Deep Space',
        url: 'https://lofi-co-assets.vexcited.com/effects/deepspace.mp3',
    },
    // {
    //     type: 'train_rain',
    //     name: 'Window Rain',
    //     url: 'https://lofi-new.s3.us-east-2.amazonaws.com/Window+rain.mp3',
    // },
    // {
    //     type: 'train_noise',
    //     name: 'Train',
    //     url: 'https://lofi-new.s3.us-east-2.amazonaws.com/train.mp3',
    // },
];
const playlistsBase = {
    chill: [
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_1.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_2.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_3.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_4.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_5.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_6.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_7.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_8.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_9.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_10.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_11.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_12.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_13.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_14.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_15.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_16.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_17.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_18.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_19.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_20.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_21.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_22.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_23.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/chill/chill_24.mp3',
        },
    ],
    jazzy: [
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_1.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_2.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_3.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_4.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_5.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_6.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_7.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_8.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_9.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_10.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_11.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_12.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_13.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_14.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_15.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_16.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_17.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_18.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_19.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_20.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_21.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_22.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_23.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_24.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/jazzy/jazzy_25.mp3',
        },
    ],
    sleepy: [
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_1.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_2.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_3.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_4.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_4.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_5.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_6.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_7.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_8.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_9.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_10.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_11.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_12.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_13.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_14.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_15.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_16.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_17.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_18.mp3',
        },
        {
            url: 'https://lofi-co-assets.vexcited.com/ogtracks/sleepy/sleepy_19.mp3',
        },
    ],
};
const alarms = [
    'https://lofi-co-assets.vexcited.com/alarms/Digital.mp3',
    'https://lofi-co-assets.vexcited.com/alarms/Easy+Tone.mp3',
    'https://lofi-co-assets.vexcited.com/alarms/Piano.mp3',
    'https://lofi-co-assets.vexcited.com/alarms/Ringtone.mp3',
    'https://lofi-co-assets.vexcited.com/alarms/Soft.mp3',
];
export { playlistsBase, effects, alarms };
