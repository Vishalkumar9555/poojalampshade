document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category-list li");
  const products = document.querySelectorAll(".product");

  categories.forEach((cat) => {
    cat.addEventListener("click", () => {
      const selected = cat.getAttribute("data-category");

      products.forEach((prod) => {
        if (selected === "All" || prod.getAttribute("data-category") === selected) {
          prod.style.display = "block";
        } else {
          prod.style.display = "none";
        }
      });

      categories.forEach((c) => {
        c.style.background = "#f9f9f9";
        c.style.color = "#000";
      });

      cat.style.background = "#d4af37";
      cat.style.color = "#fff";

      function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
function changeImage(thumb) {
  const main = document.getElementById("mainImage");
  main.src = thumb.src;
}
 // Slider functionality
const productCard = document.querySelector(".product-card");
const slides = productCard.querySelectorAll(".slider-img");
const prevBtn = productCard.querySelector(".prev");
const nextBtn = productCard.querySelector(".next");
let currentIndex = 0;

// Function to show the current image
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Show first image initially
showSlide(currentIndex);

// Button Event Listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);

});


  function showSectionFromHash() {
    const hash = window.location.hash || '#home';
    const sections = ['#home', '#products', '#contact', '#about'];

    sections.forEach(id => {
      const section = document.querySelector(id);
      if (section) {
        section.style.display = (id === hash) ? 'block' : 'none';
      }
    });
  }

  window.addEventListener('DOMContentLoaded', showSectionFromHash);
  window.addEventListener('hashchange', showSectionFromHash);
  


  // Home ke liya sling changing
   




    });
  });
});



    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let index = 0;

    function slide() {
        index++;
        if(index > totalSlides - 2) {
            index = 0;
        }
        sliderTrack.style.transform = `translateX(${-index * 500}px)`;
    }

    setInterval(slide, 2000); // Slide every 2 seconds



    

    // lest side image right side text

    const customSliderTrack = document.getElementById('customSliderTrack');
    const customSlides = document.querySelectorAll('.custom-section .slide');
    const totalCustomSlides = customSlides.length;
    let customIndex = 0;

    function customSlide() {
        customIndex++;
        if(customIndex > totalCustomSlides - 1) {
            customIndex = 0;
        }
        customSliderTrack.style.transform = `translateX(${-customIndex * 480}px)`;
    }

    setInterval(customSlide, 2000);




    // slider contact

   