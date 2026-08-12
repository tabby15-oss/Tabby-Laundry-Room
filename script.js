const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const pickupDate = document.getElementById("pickupDate");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
pickupDate.min = tomorrow.toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const date = document.getElementById("pickupDate").value;
  const service = document.getElementById("service").value;
  const notes = document.getElementById("notes").value.trim() || "None";

  const subject = encodeURIComponent(`Laundry Pickup Request - ${name}`);
  const body = encodeURIComponent(
`Hello Tabby Laundry Room,

I would like to request laundry service.

Name: ${name}
Phone: ${phone}
Pickup address: ${address}
Preferred pickup date: ${date}
Service: ${service}
Laundry notes/preferences: ${notes}

Please contact me to confirm availability and pricing.

Thank you.`
  );

  window.location.href = `mailto:tabithalucas438@gmail.com?subject=${subject}&body=${body}`;
});
