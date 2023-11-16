const targetDate = new Date("2024-12-01T00:00:00-0700");
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

    const days = Math.floor(timeLeft / MS_IN_DAY);
    const hours = Math.floor((timeLeft % MS_IN_DAY) / MS_IN_HOUR);
    const minutes = Math.floor((timeLeft % MS_IN_HOUR) / MS_IN_MIN);
    const seconds = Math.floor((timeLeft % MS_IN_MIN) / MS_IN_SEC);

    const elem = document.getElementById("timer");
    if (elem === null) {
        return;
    }

    const hourStr = hours.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const minStr = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    const secStr = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });

    elem.innerText = "".concat(days, " Days ").concat(hourStr, ":").concat(minStr, ":").concat(secStr);

    if (timeLeft < 0) {
        elem.innerText = "Season 2 is released!";
    }
}
