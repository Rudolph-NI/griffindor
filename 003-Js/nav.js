// // ===== MENÚ MÓVIL =====
// function openNav() {
//     document.getElementById("mobile-menu").style.width = "100%";
// }
// function closeNav() {
//     document.getElementById("mobile-menu").style.width = "0%";
// }


// window.addEventListener("load", () => {
//     const preloader = document.getElementById("preloader");

//     setTimeout(() => {
//         preloader.style.opacity = "0";
//         preloader.style.transition = "opacity 0.5s ease";

//         setTimeout(() => {
//             preloader.style.display = "none";
//             document.body.classList.add("loaded");
//         }, 500);
//     }, 2000); // 2 segundos de preloader
// });


// // // ===== BOTÓN "SUBIR" =====
// const backToTopBtn = document.createElement("button");
// backToTopBtn.innerHTML = "⬆";
// backToTopBtn.id = "backToTop";
// document.body.appendChild(backToTopBtn);

// backToTopBtn.style.position = "fixed";
// backToTopBtn.style.bottom = "20px";
// backToTopBtn.style.right = "20px";
// backToTopBtn.style.padding = "10px 15px";
// backToTopBtn.style.border = "none";
// backToTopBtn.style.borderRadius = "50%";
// backToTopBtn.style.backgroundColor = "#ffbc0e";
// backToTopBtn.style.color = "#000";
// backToTopBtn.style.fontSize = "20px";
// backToTopBtn.style.cursor = "pointer";
// backToTopBtn.style.display = "none";
// backToTopBtn.style.zIndex = "999";

// // Mostrar/ocultar botón al hacer scroll
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//         backToTopBtn.style.display = "block";
//     } else {
//         backToTopBtn.style.display = "none";
//     }
// });

// // // Volver arriba
// backToTopBtn.addEventListener("click", () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });

// // ===== EFECTO FADE-IN EN SECCIONES =====
// const sections = document.querySelectorAll("section, main, footer");
// sections.forEach(sec => sec.style.opacity = "0");

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.transition = "opacity 1s ease";
//             entry.target.style.opacity = "1";
//         }
//     });
// }, { threshold: 0.2 });

// sections.forEach(sec => observer.observe(sec));

// // ===== MODO OSCURO/CLARO =====
// const themeBtn = document.createElement("button");
// themeBtn.innerHTML = "🌙";
// themeBtn.id = "themeToggle";
// themeBtn.style.position = "fixed";
// themeBtn.style.bottom = "80px";
// themeBtn.style.right = "20px";
// themeBtn.style.padding = "10px 15px";
// themeBtn.style.border = "none";
// themeBtn.style.borderRadius = "50%";
// themeBtn.style.backgroundColor = "#1e2326";
// themeBtn.style.color = "#fff";
// themeBtn.style.fontSize = "18px";
// themeBtn.style.cursor = "pointer";
// themeBtn.style.zIndex = "999";
// document.body.appendChild(themeBtn);
// function setTheme(dark) {
//     const header = document.querySelector(".header");
//     const navLinks = document.querySelectorAll(".header .nav-links a");
//     const overlay = document.getElementById("mobile-menu");

//     // Aplicar transición suave a todos los enlaces
//     navLinks.forEach(link => link.style.transition = "color 0.4s ease");
//     overlay.querySelectorAll("a").forEach(link => link.style.transition = "color 0.4s ease");

//     if (dark) {
//         // Fondo general
//         document.body.style.backgroundColor = "#121212";
//         document.body.style.color = "#f5f5f5";

//         // Header
//         header.style.backgroundColor = "#1b1b1b";
//         navLinks.forEach(link => link.style.color = "#f5f5f5"); // Celeste claro

//         // Menú móvil
//         overlay.style.backgroundColor = "rgba(33, 33, 33, 0.95)";
//         overlay.querySelectorAll("a").forEach(link => link.style.color = "#80d4ff");

//         themeBtn.innerHTML = "☀️";
//         localStorage.setItem("theme", "dark");
//     } else {
//         // Fondo general
//         document.body.style.backgroundColor = "#1CB698";
//         document.body.style.color = "#000";

//         // Header
//         header.style.backgroundColor = "#1CB698";
//         navLinks.forEach(link => link.style.color = "#000"); // Gris claro

//         // Menú móvil
//         overlay.style.backgroundColor = "rgba(33, 49, 63, .95)";
//         overlay.querySelectorAll("a").forEach(link => link.style.color = "#eceff1");

//         themeBtn.innerHTML = "🌙";
//         localStorage.setItem("theme", "light");
//     }
// }



// // Cargar tema guardado
// setTheme(localStorage.getItem("theme") !== "white");

// themeBtn.addEventListener("click", () => {
//     const isDark = localStorage.getItem("theme") === "dark";
//     setTheme(!isDark);
// });
