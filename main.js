// Append a value to the calculator's input field
function cal(val) {
  document.getElementById("inputvalue").value += val;
}

// Clear the calculator's input field
function cleardata() {
  document.getElementById("inputvalue").value = "";
}

// Evaluate the expression in the calculator's input field
function result() {
  let expression = document.getElementById("inputvalue").value;

  try {
      // Use eval to compute the result, but be cautious with eval in production
      let result = eval(expression);
      document.getElementById("inputvalue").value = result;
  } catch (error) {
      document.getElementById("inputvalue").value = "error";
  }
}
