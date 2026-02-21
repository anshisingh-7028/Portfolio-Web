document.getElementById("downloadResume").addEventListener("click", function (e) {
  e.preventDefault();

  const resumeUrl = "Anshika Singh Resume.pdf";

  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Anshika Singh Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

  /* ============ CONTACT FORM LOGIC ============ */

const contactForm = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // ❌ Empty field check
    if (!name || !email || !message) {
      showStatus("Please fill all the fields ❌", "error");
      return;
    }

    // ❌ Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showStatus("Please enter a valid email ❌", "error");
      return;
    }

    // ✅ Success
    showStatus("Message sent successfully ✅", "success");

    contactForm.reset(); // Works everywhere
  });
}

/* ============ STATUS MESSAGE FUNCTION ============ */

function showStatus(message, type) {
  statusText.textContent = message;
  statusText.style.marginTop = "15px";
  statusText.style.fontWeight = "500";

  if (type === "success") {
    statusText.style.color = "#00ff99";
  } else {
    statusText.style.color = "#ff4d4d";
  }

  setTimeout(() => {
    statusText.textContent = "";
  }, 4000);
}
/* ================= PROJECT SECTION ================= */

const projects = [
  {
    title: "Foodies Website",
    description: "Food ordering website using HTML, CSS & JavaScript",
    liveLink: "https://anshisingh-7028.github.io/Flavour-Lab-project/",
    githubLink: "https://github.com/anshisingh-7028/Flavour-Lab-project"
  },
  {
    title: "Terranova A Green Legacy",
    description: "Eco-friendly website built with pure frontend",
    liveLink: "https://anshisingh-7028.github.io/Terranova-Project/",
    githubLink: "https://github.com/anshisingh-7028/Terranova-Project"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with responsive design",
    liveLink: "https://anshisingh-7028.github.io/Portfolio-Web/",
    githubLink: "https://github.com/anshisingh-7028/Portfolio-Web"
  }
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-btns">
      <a href="${project.liveLink}" target="_blank">liveLink</a>
       <a href="${project.githubLink}" target="_blank">GitHub</a>
    </div>
  `;

  projectGrid.appendChild(card);

});


