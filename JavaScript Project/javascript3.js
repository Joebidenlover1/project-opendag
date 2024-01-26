document.addEventListener("DOMContentLoaded", function() {
    const countdownDate = new Date("January 26, 2024 15:00:00").getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerText = formatTime(days) + "d " +
                formatTime(hours) + "h " +
                formatTime(minutes) + "m " +
                formatTime(seconds) + "s";
        }
    }, 1000);

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});
