// --- Side menu ---
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// --- Tab switching ---
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// --- Optional: Zoom image ---
function toggleImage(imageSrc) {
  const container = document.getElementById("largerImageContainer");
  const image = document.getElementById("largerImage");

  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    image.src = imageSrc;
    container.style.display = "block";
  }
}

// --- Optional: Toggle icon ---
function toggleIcon(event) {
  event.preventDefault();
  const icon = event.currentTarget.querySelector(".fa-external-link-alt");
  if (icon) {
    icon.classList.toggle("hidden");
  }
}

