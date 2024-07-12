const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // converts input values to numbers
  const numDividend = Number(dividend);
  const numDivider = Number(divider);

  // clears previous results
  result.innerText = "";

// check for empty inputs
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try agian.";
  return;
}

// check for non-numeric inputs
if(isNaN(dividend) || isNaN(divider)) {
  console.error("Critical error: Non-numeric input detected");
  document.body.innerHTML = "Something went wrong. Please reload the page.";
  throw new Error("Non-numeric input detected.");
}

// check for division by zero
if (numDivider === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  console.error("Error: Division byy zero", new Error().stack);
  return;
}

// perform division
const divisionResult = Math.floor(numDividend / numDivider);
result.innerText = divisionResult;
});