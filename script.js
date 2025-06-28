let countdownDate = new Date("Jun 30, 2025 00:00:00").getTime();

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

let interval = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Исправлено: formateTime -> formatTime
    document.querySelector('.days').textContent = formatTime(days);
    document.querySelector('.hours').textContent = formatTime(hours);
    document.querySelector('.minutes').textContent = formatTime(minutes);
    document.querySelector('.seconds').textContent = formatTime(seconds);

    // Остановка таймера при завершении отсчёта
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.days').textContent = '00';
        document.querySelector('.hours').textContent = '00';
        document.querySelector('.minutes').textContent = '00';
        document.querySelector('.seconds').textContent = '00';
    }
}, 1000);
