const targetDates = [
    [new Date("2024-11-09T00:00:00-0800"), "1", new Date("2024-11-10T00:00:00-0800")],
    [new Date("2024-11-16T00:00:00-0800"), "2", new Date("2024-11-17T00:00:00-0800")],
    [new Date("2024-11-23T00:00:00-0800"), "3", new Date("2024-11-24T00:00:00-0800")]
];

function updateTime() {
    const [targetDate, targetAct, showCurrentActUntil] = findNextDate();

    updateActNumber(targetAct); // We always want the act number updated, no matter the path we take

    const timer = document.getElementById("timer-hider");
    const act = document.getElementById("act-released-container");

    const currentTime = new Date();
    if (currentTime > targetDate && showCurrentActUntil > currentTime) {
        // We are in the grace period after an act releases.
        // As such, we just show the watch button and return
        timer.hidden = true;
        act.hidden = false;

        return;
    } else {
        // Make sure the timer is showing and the released text is not
        timer.hidden = false;
        act.hidden = true;
    }

    const humanTimeLeft = countdown(targetDate, null, countdown.DEFAULTS | countdown.WEEKS);

    displayTime(humanTimeLeft.months, humanTimeLeft.weeks, humanTimeLeft.days, humanTimeLeft.hours, humanTimeLeft.minutes, humanTimeLeft.seconds);
}

function findNextDate() {
    const currentTime = new Date();

    for (let i = 0; i < targetDates.length; i++) {
        if (targetDates[i][2] > currentTime) {
            return targetDates[i];
        }
    }

    return [currentTime, "?", currentTime];
}

function displayTime(months, weeks, days, hours, minutes, seconds) {
    setHiddenPlaces(months, weeks, days, hours, minutes, seconds);

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

    updateLabels(months, weeks, days, hours, minutes, seconds);
}

function updateLabels(months, weeks, days, hours, minutes, seconds) {
    const labelNamesValues = [["months", months], ["weeks", weeks], ["days", days], ["hours", hours], ["minutes", minutes], ["seconds", seconds]];

    for (const labelNameValue of labelNamesValues) {
        const name = labelNameValue[0];
        const value = labelNameValue[1];
        const elem = document.getElementById(`${name}-label`);
        const uppercasedLabel = name[0].toUpperCase() + name.slice(1);

        elem.textContent = (value === 1) ? uppercasedLabel.slice(0, -1) : uppercasedLabel;
    }
}

function updateActNumber(actNum) {
    document.getElementById("act-number").textContent = actNum;
}

function setHiddenPlaces(months, weeks, days, hours, minutes, seconds) {
    const monthsElem = document.getElementById("months-place");
    const weeksElem = document.getElementById("weeks-place");
    const daysElem = document.getElementById("days-place");
    const hoursElem = document.getElementById("hours-place");
    const minutesElem = document.getElementById("minutes-place");
    const secondsElem = document.getElementById("seconds-place");
    monthsElem.hidden = false;
    weeksElem.hidden = false;
    daysElem.hidden = false;
    hoursElem.hidden = false;
    minutesElem.hidden = false;
    secondsElem.hidden = false;

    if (months === 0) {
        monthsElem.hidden = true;
    } else {
        return;
    }

    if (weeks === 0) {
        weeksElem.hidden = true;
    } else {
        return;
    }

    if (days === 0) {
        daysElem.hidden = true;
    } else {
        return;
    }

    if (hours === 0) {
        hoursElem.hidden = true;
    } else {
        return;
    }

    if (minutes === 0) {
        minutesElem.hidden = true;
    } else {
        return;
    }

    if (seconds === 0) {
        secondsElem.hidden = true;
    } else {
        return;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);

    document.getElementById("watch-button").addEventListener("click", () => {
        window.location = "https://www.netflix.com/title/81435684";
    });
});
