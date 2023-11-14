"use strict";
var targetDate = new Date("2024-12-01T00:00:00-0700");
var MS_IN_DAY = 1000 * 60 * 60 * 24;
var MS_IN_HOUR = 1000 * 60 * 60;
var MS_IN_MIN = 1000 * 60;
var MS_IN_SEC = 1000;
function main() {
    updateTime();
    setInterval(updateTime, 1000);
}
function updateTime() {
    var currentTime = new Date();
    var timeLeft = targetDate.getTime() - currentTime.getTime();
    var days = Math.floor(timeLeft / MS_IN_DAY);
    var hours = Math.floor((timeLeft - (days * MS_IN_DAY)) / MS_IN_HOUR);
    var minutes = Math.floor((timeLeft - (days * MS_IN_DAY + hours * MS_IN_HOUR)) / MS_IN_MIN);
    var seconds = Math.floor((timeLeft - (days * MS_IN_DAY + hours * MS_IN_HOUR + minutes * MS_IN_MIN)) / MS_IN_SEC);
    var elem = document.getElementById("timer");
    if (elem === null) {
        return;
    }
    var hourStr = hours.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    var minStr = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    var secStr = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2, useGrouping: false });
    elem.innerText = "".concat(days, " Days ").concat(hourStr, ":").concat(minStr, ":").concat(secStr);
}
//# sourceMappingURL=index.js.map
