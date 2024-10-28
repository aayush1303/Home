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



// Service Section
const serviceData = [
  {
    id: 1,
    title: 'Plumbing Services',
    description: 'Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.',
    image: 'https://img.icons8.com/?size=100&id=66406&format=png&color=2a1768',
  },
  {
    id: 2,
    title: 'Installation Services',
    description: 'Professional installation services for plumbing fixtures and systems.',
    image: 'https://img.icons8.com/?size=100&id=11151&format=png&color=2a1768',
  },
  {
    id: 3,
    title: 'Specialized Plumbing Services',
    description: 'Tailored solutions for unique plumbing challenges.',
    image: 'https://img.icons8.com/?size=100&id=S0nuGyUk3Uap&format=png&color=2a1768',
  },
  {
    id: 4,
    title: 'Residential Services',
    description: 'Comprehensive plumbing solutions for homes.',
    image: 'https://img.icons8.com/?size=100&id=z2kaqounQOlS&format=png&color=2a1768',
  },
  {
    id: 5,
    title: 'Commercial Plumbing Services',
    description: 'Expert plumbing solutions for businesses and commercial properties.',
    image: 'https://img.icons8.com/?size=100&id=8077&format=png&color=2a1768',
  },
  {
    id: 6,
    title: 'Maintenance Services',
    description: 'Regular maintenance to keep your plumbing systems in top shape.',
    image: 'https://img.icons8.com/?size=100&id=GKFN2Gk1rPIh&format=png&color=2a1768',
  },
  {
    id: 7,
    title: 'Additional Services',
    description: 'Other plumbing services tailored to meet your needs.',
    image: 'https://img.icons8.com/?size=100&id=Jyk2e0Q3Fry6&format=png&color=2a1768',
  },
  {
    id: 8,
    title: 'Customer Support Services',
    description: 'Dedicated support for all your plumbing inquiries.',
    image: 'https://img.icons8.com/?size=100&id=113139&format=png&color=2a1768',
  },
];

const swiperWrapper = document.getElementById('service-swiper-wrapper');

serviceData.forEach(service => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <a href="about:blank" target="_blank" class="relative service-card p-6 bg-white rounded-lg shadow-lg text-center">
      <div class="icon-container">
        <img src="${service.image}" alt="${service.title}" class="h-16 w-16">
      </div>
      <h2 class="mt-16 text-lg font-semibold">${service.title}</h2>
      <p class="text-gray-700 text-sm mb-4">${service.description}</p>
      <span class="explore-link font-semibold hover:text-purple-900 text-sm">EXPLORE THIS SERVICE &rarr;</span>
    </a>
  `;
  swiperWrapper.appendChild(slide);
});

const swiper = new Swiper('.service-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      navigation: false,
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
});
if (swiper.slides.length <= 1) {
  document.querySelector('.swiper-button-next').style.display = 'none';
  document.querySelector('.swiper-button-prev').style.display = 'none';
}