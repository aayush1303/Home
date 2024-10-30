let toggle = false;
// target element
const moboicon = document.getElementById("menuToggle");
console.log(moboicon);

const mobomenu = document.getElementById("mobileMenu");
console.log(mobomenu);

moboicon.addEventListener("click", (e) => {
  if (!toggle) {
    mobomenu.style.transform = "translateX(0)";
    toggle = true;
  } else {
    mobomenu.style.transform = "translateX(-500px)";
    toggle = false;
  }
});

// Counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target"); // Get target number
    const count = +counter.innerText; // Current count value
    const increment = target / 200; // Control the speed by dividing

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10); // Repeat every 10ms
    } else {
      counter.innerText = target; // Ensure it ends exactly at target
    }
  };

  updateCount();
});

document.addEventListener("click", function (event) {
  // Check if the clicked target is not inside the menu or button
  if (!mobomenu.contains(event.target) && !moboicon.contains(event.target)) {
    mobomenu.style.transform = "translateX(-400px)";
    toggle = false;
  }
});

function toggleDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  dropdown.classList.toggle("hidden");
}


//FAQ
function toggleFAQ(faqId) {
  const content = document.getElementById(faqId);
  const icon = document.getElementById('icon-' + faqId);
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}

// Blog Section
function toggleLike(button) {
  const heartIcon = button.querySelector('.heart-icon');
  const likeCount = button.querySelector('.like-count');
  let count = parseInt(likeCount.textContent);

  if (heartIcon.textContent === 'favorite_border') {
    heartIcon.textContent = 'favorite';
    heartIcon.classList.add('text-red-500');
    likeCount.textContent = count + 1;
  } else {
    heartIcon.textContent = 'favorite_border';
    heartIcon.classList.remove('text-red-500');
    likeCount.textContent = count - 1;
  }
}

// Testimonials
var swiperTestimonials = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: true,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 32,
      },
  },
});





