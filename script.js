const contactInput = document.getElementById("contact");
const contactError = document.getElementById("contact-error");

let timeout = null;

contactInput.addEventListener("input", () => {
  const number = contactInput.value;
  const apiKey = "8ac1790588064a88b764b333d8bf895c";
  // Delay API call until user pauses typing (debounce)
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (number.length < 10) {
      contactError.textContent = "";
      return;
    }

    fetch(
      `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${number}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          contactError.textContent = "✔ Valid number";
          contactError.style.color = "green";
        } else {
          contactError.textContent = "✘ Invalid number";
          contactError.style.color = "red";
        }
      })
      .catch((err) => {
        contactError.textContent = "Error checking number.";
        contactError.style.color = "red";
      });
  }, 600); // delay in milliseconds
});
