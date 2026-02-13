// ===== Texte qui défile (effet machine à écrire) =====
const typingEl = document.getElementById("typing");

if (typingEl) {
  const texts = [
    "Bienvenue sur notre Portfolio de Groupe",
    "Étudiants à l’ESA – École Supérieure des Affaires",
    "Web • Cybersécurité • Cybercriminalité"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = texts[textIndex];
    if (!isDeleting) {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        setTimeout(() => isDeleting = true, 1500);
      }
    } else {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
}

// ===== Barres de compétences animées =====
window.addEventListener("load", () => {
  document.querySelectorAll(".progress").forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
  });
});

// ===== Animation au scroll (reveal) =====
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== Slider automatique =====
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 3000);
   
  function showProfil(person) {
  const data = {
    toi: {
      nom: "Toi",
      age: "20 ans",                 // À MODIFIER
      sexe: "Masculin",              // À MODIFIER
      interets: "Web, Électronique",
      desc: "Étudiant à l’ESA, passionné par le numérique.",
      img: "assets/images/toi.jpg"   // AJOUTER l’image
    },
    blessing: {
      nom: "AKOUETE Blessing",
      age: "19 ans",                 // À MODIFIER
      sexe: "Féminin",
      interets: "Développement Web, Cybersécurité",
      desc: "Passionnée par la sécurité informatique.",
      img: "assets/images/blessing.jpg"
    },
    liliane: {
      nom: "AGBO Liliane",
      age: "19 ans",                 // À MODIFIER
      sexe: "Féminin",
      interets: "Web, Cybercriminalité, Cybersécurité",
      desc: "Sensibilisation aux dangers du numérique.",
      img: "assets/images/liliane.jpg"
    }
  };

  const profil = data[person];

  document.getElementById("profil-nom").textContent = profil.nom;
  document.getElementById("profil-age").textContent = profil.age;
  document.getElementById("profil-sexe").textContent = profil.sexe;
  document.getElementById("profil-interets").textContent = profil.interets;
  document.getElementById("profil-desc").textContent = profil.desc;
  document.getElementById("profil-img").src = profil.img;

  document.getElementById("profil-detail").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("close");
  if (closeBtn) {
    closeBtn.onclick = () => {
      document.getElementById("profil-detail").classList.add("hidden");
    };
  }
});
}