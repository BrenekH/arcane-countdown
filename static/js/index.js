const targetDate = new Date("2024-12-01T00:00:00-0700");
const MS_IN_WEEK = 1000 * 60 * 60 * 24 * 7;
const MS_IN_DAY = 1000 * 60 * 60 * 24;
const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_MIN = 1000 * 60;
const MS_IN_SEC = 1000;

function main() {
    updateTime();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const currentTime = new Date();
    const timeLeft = targetDate.getTime() - currentTime.getTime();

    const weeks = Math.floor(timeLeft / MS_IN_WEEK);
    const days = Math.floor((timeLeft % MS_IN_WEEK) / MS_IN_DAY);
    const hours = Math.floor((timeLeft % MS_IN_DAY) / MS_IN_HOUR);
    const minutes = Math.floor((timeLeft % MS_IN_HOUR) / MS_IN_MIN);
    const seconds = Math.floor((timeLeft % MS_IN_MIN) / MS_IN_SEC);

    displayTime(weeks, days, hours, minutes, seconds);

    // if (timeLeft < 0) {
    //     elem.innerText = "Season 2 is released!";
    // }
}

function displayTime(weeks, days, hours, minutes, seconds) {
    const weeksElem = document.getElementById("weeks-digit");
    const daysElem = document.getElementById("days-digit");
    const hoursElem = document.getElementById("hours-digit");
    const minutesElem = document.getElementById("minutes-digit");
    const secondsElem = document.getElementById("seconds-digit");

    const weeksStr = weeks.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const daysStr = days.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const hoursStr = hours.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const minutesStr = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const secondsStr = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });

    weeksElem.innerText = weeksStr;
    daysElem.innerText = daysStr;
    hoursElem.innerText = hoursStr;
    minutesElem.innerText = minutesStr;
    secondsElem.innerText = secondsStr;
}
