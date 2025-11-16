
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
    darkModeBtn.textContent = "☀️ Mode Terang";
  } else {
    darkModeBtn.textContent = "🌙 Mode Gelap";
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
    function playVideo(selectElement, videoId) {
  const video = document.getElementById(videoId);
  const file = selectElement.value;
  if (file) {
    video.src = file;
  } else {
    video.pause();
    video.removeAttribute('src');
  }
}
  function toggleTeks(btn) {
      const teks = btn.nextElementSibling; // ambil div setelah tombol
      if (teks.style.display === "block") {
        teks.style.display = "none";
        btn.textContent = "Lihat Detail ⮟";
      } else {
        teks.style.display = "block";
        btn.textContent = "Sembunyikan ⮝";
      }
    }
