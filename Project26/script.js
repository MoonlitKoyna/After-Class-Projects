var Calculator = {
  add: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by 0";
  }
};

function calculate(operation) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  
  var result = Calculator[operation](num1, num2);
  
  document.getElementById("result").innerText = "Result: " + result;
}
