// This function will handle the form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const { firstName, lastName, email, phone, message } = data;
  // Get the current date and time
  const date = new Date().toISOString();

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-API-KEY":
        "656e398a34d22521e1a1283f-ltg8PyM7U4k5DtmL6rWXtSwcS9uDamJJLQgoKnCg96IpdMude9",
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      tags: ["devmarketing", "contact-us", "source: website"],
      identifiers: [
        {
          type: "email",
          id: email,
          channels: { email: { status: "subscribed" } },
        },
        {
          type: "phone",
          id: phone,
          channels: { sms: { status: "subscribed" } },
        },
      ],
      customProperties: {
        message: message,
      },
    }),
  };
  console.log(options);
  fetch("https://api.omnisend.com/v3/contacts", options)
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

// Attach the handleSubmit function to the form when the window loads
window.addEventListener("load", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});
