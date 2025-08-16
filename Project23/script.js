function showInfo() {
  // Object for Tenu’s details
  let tenu = {
    name: "Tenu",
    age: 15,
    hobby: "Drawing",
    school: "South Point School"
  };

  // Array of favorite colors
  let favColors = ["Pink", "Purple", "Blue", "Peach", "Mint"];

  // Display area
  let output = document.getElementById("output");
  output.innerHTML = ""; // clear before printing

  // Accessing object values by keys
  output.innerHTML += "<b>🎀 Object Values (with Keys):</b><br>";
  for (let key in tenu) {
    output.innerHTML += key + ": " + tenu[key] + "<br>";
  }

  output.innerHTML += "<br><b>🎨 Array Values (by Index):</b><br>";
  output.innerHTML += "First color: " + favColors[0] + "<br>";
  output.innerHTML += "Third color: " + favColors[2] + "<br>";

  // Using join method
  output.innerHTML += "<br><b>✨ Colors (join):</b><br>";
  output.innerHTML += favColors.join(", ") + "<br>";

  // Using pop method
  let popped = favColors.pop(); // removes last element
  output.innerHTML += "<br><b> After pop (removed '" + popped + "'):</b><br>";
  output.innerHTML += favColors.join(", ") + "<br>";
}
