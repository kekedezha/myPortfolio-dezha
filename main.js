const timeContainer = document.getElementById("time-container");
const RACE_DAY = "5-4-2024";
const RACE_DAY_DATE = new Date(RACE_DAY);
const intlNumFormat = new Intl.NumberFormat("en-US");
const _sec = 1000;
const _mins = _sec * 60;
const _hour = _mins * 60;
const _day = _hour * 24;

setInterval(() => {
    const now = new Date();
    const difference = RACE_DAY_DATE - now;
    let days = Math.floor(difference / _day);
    let hours = Math.ceil((difference % _day) / _hour);
    let minutes = Math.floor((difference % _hour) / _mins)
    let seconds = Math.floor((difference % _mins) / _sec);

    timeContainer.innerText = days + " days,";
    timeContainer.innerText += " " + hours + " hours, ";
    timeContainer.innerText += " " + minutes + " minutes, ";
    timeContainer.innerText += " " + seconds + " seconds!";

}, 1000);