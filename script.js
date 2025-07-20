// Moral Thoughts Data
const moralThoughts = [
  "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”<br>- Malcolm X",
  "“Discipline is the bridge between goals and accomplishment.”<br>- Jim Rohn",
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.”<br>- Winston Churchill",
  "“Honesty is the first chapter in the book of wisdom.”<br>- Thomas Jefferson",
  "“Kind words can be short and easy to speak, but their echoes are truly endless.”<br>- Mother Teresa",
  "“Work hard in silence; let success make the noise.”",
  "“There is no substitute for hard work.”<br>- Thomas Edison",
  "“Integrity is doing the right thing, even when no one is watching.”<br>- C.S. Lewis",
  "“Knowledge will bring you the opportunity to make a difference.”<br>- Claire Fagan",
  "“Leadership and learning are indispensable to each other.”<br>- John F. Kennedy"
];

let moralIndex = Math.floor(Math.random() * moralThoughts.length);

function displayMoral() {
  document.getElementById('moral-thought').innerHTML = moralThoughts[moralIndex];
}
function nextMoral() {
  moralIndex = (moralIndex + 1) % moralThoughts.length;
  displayMoral();
}
window.onload = displayMoral;

// Carousel for Gallery
const galleryImages = [
  {src: "gallery1.jpeg", caption: "C.M Yogi Ji Visit"},
  {src: "gallery2.jpg", caption: "Result-2024"},
  {src: "gallery3.jpg", caption: "Independence day"},
  {src: "gallery4.jpg", caption: "Activities"},
  {src: "gallery5.jpg", caption: "Result-2025"}
];
let carouselIdx = 0;
function updateCarousel() {
  const img = document.getElementById('carousel-img');
  const cap = document.getElementById('carousel-caption');
  img.src = galleryImages[carouselIdx].src;
  cap.textContent = galleryImages[carouselIdx].caption;
}
function changeImage(dir) {
  carouselIdx = (carouselIdx + dir + galleryImages.length) % galleryImages.length;
  updateCarousel();
}
window.addEventListener('DOMContentLoaded', updateCarousel);

// Latest Notice Button
function showNotice() {
  alert("Admissions open for 2025-26! Visit the college office or contact us for details.");
}
