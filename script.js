"use strict";

/* ============================
   MOBILE MENU
============================ */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

    const opened = mobileMenu.classList.contains("active");

    menuButton.setAttribute(
      "aria-expanded",
      opened ? "true" : "false"
    );

  });


  mobileMenu.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      mobileMenu.classList.remove("active");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ============================
   QUOTE FORM
============================ */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
      quoteForm.querySelector('[name="name"]').value.trim();

    const phone =
      quoteForm.querySelector('[name="phone"]').value.trim();

    const property =
      quoteForm.querySelector('[name="property"]').value;

    const message =
      quoteForm.querySelector('[name="message"]').value.trim();


    if (!name || !phone || !message) {

      alert(
        "Please enter your name, phone number and a short description of the work."
      );

      return;

    }


    /*
      WhatsApp enquiry

      This doesn't require a paid form service.
      It opens WhatsApp with the customer's enquiry.
    */

    const whatsappNumber = "447775877746";

    const text =
      "Hello Pro APEX,%0A%0A" +
      "I would like to request a quote.%0A%0A" +
      "Name: " + encodeURIComponent(name) + "%0A" +
      "Phone: " + encodeURIComponent(phone) + "%0A" +
      "Property type: " + encodeURIComponent(property) + "%0A" +
      "Work required: " + encodeURIComponent(message);


    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      text;


    window.open(
      whatsappURL,
      "_blank",
      "noopener"
    );

  });

}


/* ============================
   HEADER SHADOW
============================ */

const navbar = document.querySelector(".navbar");

window.addEventListener(
  "scroll",
  function () {

    if (!navbar) return;

    if (window.scrollY > 20) {

      navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.06)";

    } else {

      navbar.style.boxShadow = "none";

    }

  },
  { passive: true }
);


/* ============================
   CURRENT YEAR
============================ */

const yearElements =
  document.querySelectorAll("[data-year]");

yearElements.forEach(function (element) {

  element.textContent =
    new Date().getFullYear();

});