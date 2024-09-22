const targetDates = [[new Date("2024-11-09T00:00:00-0800"), "1"], [new Date("2024-11-16T00:00:00-0800"), "2"], [new Date("2024-11-23T00:00:00-0800"), "3"]];

function updateTime() {
    const [targetDate, targetAct] = findNextDate();

    const humanTimeLeft = countdown(targetDate, null, countdown.DEFAULTS | countdown.WEEKS);

    updateActNumber(targetAct);
    displayTime(humanTimeLeft.months, humanTimeLeft.weeks, humanTimeLeft.days, humanTimeLeft.hours, humanTimeLeft.minutes, humanTimeLeft.seconds);
}

function findNextDate() {
    const currentTime = new Date();

    for (let i = 0; i < targetDates.length; i++) {
        if (targetDates[i][0] > currentTime) {
            return targetDates[i];
        }
    }

    return [currentTime, "?"];
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

window.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});
