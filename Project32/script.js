function filterMenu(category) {
const items = document.querySelectorAll('.menu-item');
items.forEach(item => {
    if(category === 'all' || item.classList.contains(category)) {
    item.style.display = 'block';
    } else {
    item.style.display = 'none';
    }
});
}

function submitForm() {
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const formMessage = document.getElementById('formMessage');

if(name === "" || email === "" || message === "") {
    formMessage.innerHTML = "⚠️ Please fill all fields!";
    formMessage.style.color = "#ff4d6d";
} else {
    formMessage.innerHTML = "✅ Message sent! We'll contact you soon.";
    formMessage.style.color = "#4caf50";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}
}