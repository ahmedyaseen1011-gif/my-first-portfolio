const form = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYouMessage");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      thankYou.classList.add("show");

      setTimeout(() => {
        thankYou.classList.remove("show");
      }, 5000);

      form.reset();
    }

  } catch (error) {
    console.error("Error sending form:", error);
  }
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
