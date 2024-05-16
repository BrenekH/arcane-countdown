const targetDate = new Date("2024-12-01T00:00:00-0700");
const MS_IN_WEEK = 1000 * 60 * 60 * 24 * 7;
const MS_IN_DAY = 1000 * 60 * 60 * 24;
const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_MIN = 1000 * 60;
const MS_IN_SEC = 1000;

function updateTime() {
    const humanTimeLeft = countdown(targetDate, null, countdown.DEFAULTS | countdown.WEEKS);

    displayTime(humanTimeLeft.months, humanTimeLeft.weeks, humanTimeLeft.days, humanTimeLeft.hours, humanTimeLeft.minutes, humanTimeLeft.seconds);
}

function displayTime(months, weeks, days, hours, minutes, seconds) {
    const monthsElem = document.getElementById("months-digit");
    const weeksElem = document.getElementById("weeks-digit");
    const daysElem = document.getElementById("days-digit");
    const hoursElem = document.getElementById("hours-digit");
    const minutesElem = document.getElementById("minutes-digit");
    const secondsElem = document.getElementById("seconds-digit");

    const monthsStr = months.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });
    const weeksStr = weeks.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });
    const daysStr = days.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });
    const hoursStr = hours.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });
    const minutesStr = minutes.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });
    const secondsStr = seconds.toLocaleString(undefined, { minimumIntegerDigits: 1, useGrouping: false });

    monthsElem.textContent = monthsStr;
    weeksElem.textContent = weeksStr;
    daysElem.textContent = daysStr;
    hoursElem.textContent = hoursStr;
    minutesElem.textContent = minutesStr;
    secondsElem.textContent = secondsStr;
}

window.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});
