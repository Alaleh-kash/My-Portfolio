// --- Side menu ---
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// --- Tab switching (About Me section, etc.) ---

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// --- Zoom image function (gallery, portfolio images, etc.) ---
function toggleImage(imageSrc) {
  const largerImageContainer = document.getElementById("largerImageContainer");
  const largerImage = document.getElementById("largerImage");

  if (largerImageContainer.style.display === "block") {
    largerImageContainer.style.display = "none";
  } else {
    largerImage.src = imageSrc;
    largerImageContainer.style.display = "block";
  }
}

// --- External link icon toggle (optional, only if using Font Awesome) ---
function toggleIcon(event) {
  event.preventDefault();
  const icon = event.currentTarget.querySelector(".fa-external-link-alt");
  if (icon) {
    icon.classList.toggle("hidden");
  }
}


// This will NOT work on GitHub because it requires a PHP server.
// Use services like Formspree or EmailJS instead if you want to enable contact forms.
/*
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch("send_message.php", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Network response was not ok.");
    })
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to send message. Please try again later.");
    });
});
*/
