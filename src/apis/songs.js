import axios from 'axios';
import { playlistsBase } from '~/assets/data/audios.data';

export const fetchCustomTracks = async () => {
    try {
        // const res1 = await axios.get(
        //     "https://sheets.googleapis.com/v4/spreadsheets/1LHdX1CrJQct6f6t1Cx8IxvtdLUjwd5kG0yPH9R0saRY/values/'sheet1'!A2:F1000?key=AIzaSyCo3Wls8gIK0QuoUW3LlO4tbZD6DSxqe6g",
        // );
        // const res2 = await axios.get(
        //     "https://sheets.googleapis.com/v4/spreadsheets/1LHdX1CrJQct6f6t1Cx8IxvtdLUjwd5kG0yPH9R0saRY/values/'tracce%20da%20escludere'!b1:z3?key=AIzaSyCo3Wls8gIK0QuoUW3LlO4tbZD6DSxqe6g",
        // );
        const res2 = await axios.get(
            'https://script.googleusercontent.com/macros/echo?user_content_key=-mgKoEgt175TLxZ85TEcH9M8uOi98-m0y7W5ZoE367uSfN1poyp0u5DICrP55963-q0L6YMKZYVZzX-Pi2hmjd7QSj0ljFgUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJuD652NTebPr9CD3YXluXoStcmpYaYbFdrYcyxTTPmE06kmmMa5p9D3KP9c7a7JCmWecUJjQx5zvese9nrJUk97ZYOACHsD2Q&lib=M8KowYp8tmfDRK7HegS8vhJtbR-jD7LxN',
        );
        const res3 = await axios.get(
            'https://script.googleusercontent.com/macros/echo?user_content_key=r9lJF3NSsDZl9UIVmFv2DJKe1Zx1f10HC3H8jxYP0PqYQqNr96LOd-WIRrqVpjXjCR7o64A0Slu3Y2uYVAtgVHKagwfaoRDCm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH_s3_2KVr6j5VfqcRgyVS6mHaWbBgnJq_pJVNT9etEUv8dny6xEk4ob3fOibMPOR9bTIGz-TZsocuW2QNHedBQ19EvuK3ZqWNz9Jw9Md8uu&lib=MtSKi8TfbvFSk_tmHCDxPr_DvJ3rkudxi',
        );

        // const tracksRaw = res1.data.values;
        const exclude = res2.data.values;
        const tracksRaw2 = res3.data.values;

        // toFixed :number to string
        const customTracks = {
            chill: playlistsBase.chill.filter((e, i) => !exclude[0].includes(i + 1)),
            jazzy: playlistsBase.jazzy.filter((e, i) => !exclude[1].includes(i + 1)),
            sleepy: playlistsBase.sleepy.filter((e, i) => !exclude[2].includes(i + 1)),
        };

        tracksRaw2.forEach((e) => {
            if (e['bool'].toUpperCase() === 'TRUE') {
                const obj = {
                    title: e['title'],
                    url: e['url'],
                    social_link: e['social'],
                };
                if (['jazzy', 'sleepy', 'chill'].includes(e['mood'])) {
                    customTracks[e['mood']].push(obj);
                }
            }
        });
        return customTracks;
    } catch (error) {
        console.log(error);
    }
};
