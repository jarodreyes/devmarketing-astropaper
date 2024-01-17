// This function will handle the form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  fetch("https://api.omnisend.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-API-KEY":
        "656e398a34d22521e1a1283f-ltg8PyM7U4k5DtmL6rWXtSwcS9uDamJJLQgoKnCg96IpdMude9",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      // Handle success (e.g., show a thank you message)
    })
    .catch(error => {
      console.error("Error:", error);
      // Handle errors here
    });
}
window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", { handleSubmit });
});

// Attach the handleSubmit function to the form when the window loads
window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});
