const moment = require('moment');

module.exports = {
    plus_one: (index) => {
        return index + 1;
    },
    format_time: (time) => {
        var min = Math.floor(time / 60);
        var sec = time - min * 60;
        if (sec.toString().length < 2) {
            return `${min}:0${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    },

    format_duration: (time) => {
        var min = Math.floor(time / 60);
        var hour = Math.floor(min / 60);
        if (time > 3600) {
            min = Math.floor(min % 60);
            return `${hour} h ${min} mins`;
        } else {
            return `${min} mins`;
        }
    },
    format_date: (date) => {
        if (date.length === 10) {
            return moment(date).format('MM-DD-YYYY');
        }
        return moment(date).format('MM-DD-YYYY h:mma');
    },
    format_venue_name: (name) => {
        const noSpacesName = name.replace(' ', '%20');
        return noSpacesName;
    },
};
