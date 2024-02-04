const timeContainer = document.getElementById("time-container");
const RACE_DAY = "5-4-2024";
const RACE_DAY_DATE = new Date(RACE_DAY);
const intlNumFormat = new Intl.NumberFormat("en-US");
const _sec = 1000;
const _mins = _sec * 60;
const _hour = _mins * 60;
const _day = _hour * 24;
const words = "C H R I S T I A N D E Z H A ' S P O R T F O L I O";
const ANIMATION_DURATION = 2000; //ms

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
    timeContainer.style.color = "red";

}, 1000);

//Function to separate each character into it's own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay= `${i * (ANIMATION_DURATION / 20) - offset}ms`
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (4000 / 2)));
});