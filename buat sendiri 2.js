// Pop-up Welcome
window.onload = function() {
  alert("Selamat datang di Website Anime 😻");
};

// Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.classList.add("dark-toggle");

// Tambahkan tombol ke header
document.querySelector("header").appendChild(darkModeBtn);

// Event klik Dark Mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
});

// // Efek klik pada tombol "Baca Selengkapnya"
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   alert("Fitur ini belum aktif, tetap pantau ya! 😉");
// });

// Animasi saat scroll
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(135deg, #1a237e, #311b92)";
  } else {
    header.style.background = "linear-gradient(135deg, #3f51b5, #673ab7)";
  }
});

  const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      video.addEventListener("play", () => {
        // Ketika satu video mulai diputar, pause semua video lain
        videos.forEach(v => {
          if (v !== video) v.pause();
        });
      });
    });

     const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
      audio.addEventListener("play", () => {
        // Saat satu audio diputar, pause semua audio lain
        audios.forEach(a => {
          if (a !== audio) a.pause();
        });
      });
    });
    // Saat form disubmit
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Contoh login sederhana (kamu bisa ganti dengan validasi sebenarnya)
    if (username && email && password) {
        localStorage.setItem("status", "login");
        localStorage.setItem("username", username);
        alert("Login berhasil! Selamat datang, " + username);
        window.location.href = "buat sendiri.html"; // halaman utama setelah login
    } else {
        alert("Lengkapi semua data terlebih dahulu!");
    }
});

// Saat user klik "Masuk Web" sebagai tamu
document.getElementById("guestLink").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.setItem("status", "tamu");
    alert("Masuk sebagai tamu. Fitur terbatas.");
    window.location.href = "buat sendiri.html";
});
