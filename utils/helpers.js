const moment = require('moment');

module.exports = {
    plus_one: index => {
        return index + 1
    },
    format_time: time => {
        var min = Math.floor(time / 60);
        var sec = time - (min * 60);
        if (sec.toString().length < 2) {
            return `${min}:0${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    },
    format_date: release_date => {
        return moment(release_date).format("MM-DD-YYYY");
    }
}