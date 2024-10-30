//
const services = [
    {
        id: 1,
        title: 'Plumbing Services',
        description: 'Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.',
        image: 'https://img.icons8.com/?size=100&id=66406&format=png&color=2a1768',
        link: './pages/services/plumbingServices.html'
    },
    {
        id: 2,
        title: 'Installation Services',
        description: 'Professional installation services for plumbing fixtures and systems.',
        image: 'https://img.icons8.com/?size=100&id=11151&format=png&color=2a1768',
        link: './pages/services/installationServices.html'
    },
    {
        id: 3,
        title: 'Specialized Plumbing Services',
        description: 'Tailored solutions for unique plumbing challenges.',
        image: 'https://img.icons8.com/?size=100&id=S0nuGyUk3Uap&format=png&color=2a1768',
        link: './pages/services/specializedService.html'
    },
    {
        id: 4,
        title: 'Residential Services',
        description: 'Comprehensive plumbing solutions for homes.',
        image: 'https://img.icons8.com/?size=100&id=z2kaqounQOlS&format=png&color=2a1768',
        link: './pages/services/residentialService.html'
    },
    {
        id: 5,
        title: 'Commercial Plumbing Services',
        description: 'Expert plumbing solutions for businesses and commercial properties.',
        image: 'https://img.icons8.com/?size=100&id=8077&format=png&color=2a1768',
        link: './pages/services/commercialservice.html'
    },
    {
        id: 6,
        title: 'Maintenance Services',
        description: 'Regular maintenance to keep your plumbing systems in top shape.',
        image: 'https://img.icons8.com/?size=100&id=GKFN2Gk1rPIh&format=png&color=2a1768',
        link: './pages/services/maintenanceService.html'
    },
    {
        id: 7,
        title: 'Additional Services',
        description: 'Other plumbing services tailored to meet your needs.',
        image: 'https://img.icons8.com/?size=100&id=Jyk2e0Q3Fry6&format=png&color=2a1768',
        link: './pages/services/additionalService.html'
    },
    {
        id: 8,
        title: 'Customer Support Services',
        description: 'Dedicated support for all your plumbing inquiries.',
        image: 'https://img.icons8.com/?size=100&id=113139&format=png&color=2a1768',
        link: './pages/services/customerSuppService.html'
    },
  ];
  
  
  const serviceContainer = document.querySelector('.swiper-wrapper');
  
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'swiper-slide service-card bg-white text-center shadow-lg rounded-lg';
  
    card.innerHTML = `
        <div class="icon-wrapper relative -mt-14 mb-6 flex justify-center">
            <div class="icon bg-white border-4" style="border-color: #2A1768 !important; padding: 1rem; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <img src="${service.image}" alt="Icon representing ${service.title}" class="w-16 h-16">
            </div>
        </div>
        <h3 class="text-xl font-bold mb-2" style="font-family: 'PT Serif', serif;">${service.title}</h3>
        <p class="text-gray-600 mb-4">${service.description}</p>
        <a href="${service.link}" class="text-purple-600 font-bold uppercase text-xs">Explore This Service ></a>
    `;
  
    serviceContainer.appendChild(card);
  });
  
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    speed: 1500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        invert: false,
        forceToAxis: true,
        releaseOnEdges: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
        },
    },
  });