function generateData() {
    let randomSet = [];
    let i = 0;
    while (i < 5) {
        randomSet.push(Math.floor(Math.random() * 100)); // random 0-99
        i++;
    }
    document.getElementById("randomNumbers").innerHTML =
        "Random Set: " + randomSet.join(", ");

    let randomNum = Math.random() * 50; // 0-50
    let rounded = Math.round(randomNum);
    document.getElementById("roundedNumber").innerHTML =
        "Rounded Random Number: " + rounded;

    // Current date
    let today = new Date();
    document.getElementById("currentDate").innerHTML =
        "Today's Date: " + today.toDateString();
}

generateData();
