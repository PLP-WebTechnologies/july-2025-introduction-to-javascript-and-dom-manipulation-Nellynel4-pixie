// =========================
// Part 1: Variables & Conditionals
// =========================
let age = 18;
let name = "Alice";

// Simple conditional check
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// =========================
// Part 2: Functions
// =========================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log("Total: $" + calculateTotal(100, 0.1));

// Function 2: Toggle visibility message
function toggleMessage(msg) {
  return "Message: " + msg.toUpperCase();
}
console.log(toggleMessage("javascript is fun!"));

// =========================
// Part 3: Loops
// =========================

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration " + i);
}

// Loop 2: While loop (countdown)
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =========================
// Part 4: DOM Manipulation
// =========================

// DOM Interaction 1: Change text when button is clicked
document.getElementById("btnChangeText").addEventListener("click", function () {
  document.getElementById("welcome").textContent = "Text has been changed!";
});

// DOM Interaction 2: Toggle a CSS class
document.getElementById("btnToggleColor").addEventListener("click", function () {
  document.getElementById("welcome").classList.toggle("highlight");
});

// DOM Interaction 3: Add new list items dynamically
document.getElementById("btnAddItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Dynamic Item";
  document.getElementById("dynamicList").appendChild(newItem);
});
