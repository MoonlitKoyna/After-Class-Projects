class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  info() {
    return `${this.name} - ₹${this.price}`;
  }
}

class SpecialDish extends Food {
  constructor(name, price, description) {
    super(name, price);
    this.description = description;
  }

  info() {
    return `${this.name} - ₹${this.price} 🍴 (${this.description})`;
  }
}

const menuItems = [
  new Food("Pasta", 150),
  new SpecialDish("Pink Cupcake", 80, "Sweet🌸"),
  new SpecialDish("Cheesy Pizza", 200, "Extra cheese🧀"),
  new Food("Iced Coffee", 120)
];

const menuDiv = document.getElementById("menu");
menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${item.name}</h2>
    <p>Price: ₹${item.price}</p>
    <p>${item.description ? item.description : "Simple & tasty!"}</p>
  `;
  menuDiv.appendChild(card);
});
