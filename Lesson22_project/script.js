function spinHoroscope() {
    let horoscopes = [
        "You will find joy in small things today 🌸",
        "A surprise is on its way 💌",
        "Trust your instincts — they are right ✨",
        "New opportunities are waiting 🌈",
        "Take time for yourself and relax ☁️"
    ];

    let count = 0;
    while (count < 1) { // just to show while loop usage
        let randomIndex = Math.floor(Math.random() * horoscopes.length);
        document.getElementById("result").innerHTML = horoscopes[randomIndex];
        count++;
    }
}
