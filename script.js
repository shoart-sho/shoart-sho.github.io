// ================================
// 画像クリックで拡大表示
// ================================
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});


// ================================
// スクロールでふわっと表示
// ================================
const targets = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

targets.forEach(target => observer.observe(target));


// ================================
// メッセージ表示切り替え
