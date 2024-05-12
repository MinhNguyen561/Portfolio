(function () {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    function addClickEventListeners() {
        const controls = document.querySelectorAll(".control");
        controls.forEach(control => {
            control.addEventListener("click", function() {
                console.log("Clicked control: " + this.dataset.id);
                scrollToSection(this.dataset.id);
                document.querySelector(".active-btn").classList.remove("active-btn");
                this.classList.add("active-btn");
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        addClickEventListeners();
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();



const roles = ["Web Developer", "Full Stack Developer", "Software Developer"];
let currentRoleIndex = 0;

function typeWriter(text, i, span) {
  if (i < text.length) {
    span.textContent += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, i, span);
    }, 80);
  }
}

function updateRole() {
  const developerSpan = document.getElementById("role");
  developerSpan.textContent = "";
  typeWriter(roles[currentRoleIndex], 0, developerSpan);
  currentRoleIndex = (currentRoleIndex + 2) % roles.length;
}

document.addEventListener("DOMContentLoaded", function() {
    updateRole();
  });

setInterval(updateRole, 4000);
