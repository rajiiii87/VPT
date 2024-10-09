/* Created by Tivotal */

// let menu = document.querySelector("#menu-bars");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

// let themeToggler = document.querySelector(".theme-toggler");
// let toggleBtn = document.querySelector(".toggle-btn");

// toggleBtn.onclick = () => {
//   themeToggler.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
//   themeToggler.classList.remove("active");
// };

// document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
//   btn.onclick = () => {
//     let color = btn.style.background;
//     document.querySelector(":root").style.setProperty("--theme-color", color);
//   };
// });

// var swiper = new Swiper(".home-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

// var swiper = new Swiper(".review-slider", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   spaceBetween: 10,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     700: {
//       slidesPerView: 2,
//     },
//     1050: {
//       slidesPerView: 3,
//     },
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },

  
// });
/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
// app.js

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  const user = {
      id: Date.now(),
      username: username,
      email: email,
      password: password
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert('Sign-up successful! Please log in.');
  window.location.href = 'login.html';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser || storedUser.username !== loginUsername || storedUser.password !== loginPassword) {
      alert('Invalid username or password.');
      return;
  }

  alert('Login successful!');
  window.location.href = 'home.html';
});


