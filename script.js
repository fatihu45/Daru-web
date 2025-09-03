// Slideshow logic
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'images/daruimg1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
        // Add more image paths here if needed
    ];
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.querySelector('.slide-arrow.prev');
    const nextBtn = document.querySelector('.slide-arrow.next');
    let currentIndex = 0;
    let timer;

    // Initialize slides
    slidesContainer.innerHTML = images.map((src, i) =>
        `<img src="${src}" alt="School Image ${i + 1}" class="slide-img${i === 0 ? ' active' : ''}">`
    ).join('');

    const slideImgs = slidesContainer.querySelectorAll('.slide-img');

    function showSlide(index) {
        slideImgs.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        renderEvents(index); // Sync event card
        currentIndex = index;
    }

    function nextSlide() {
        let nextIndex = (currentIndex + 1) % images.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(prevIndex);
    }

    function startAutoSlide() {
        timer = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(timer);
    }

    nextBtn.addEventListener('click', function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Events data (update weekly as needed)
    const events = [
        {
            title: "Daru Ulumil Qur'an Building Completion",
            date: "Sept 3, 2025",
            desc: "Daru Ulumil Qur'an has successfully completed her building",
            img: "images/daruimg1.jpg"
        },
        {
            title: "Pioneering Islamic Education: Daru Ulumil Qur'an achieve Government approval",
            date: "Sept 3, 2025",
            desc: "Alhamdulillah, Daru Ulumil Qur'an has achieved government approval for its innovative curriculum. Recently, we became the first school in western part of the country to receive this recognition.",
            img: "images/img2.jpg"
        },
        {
            title: "Maulid! Maulid!! Maulid!!!",
            date: "Sept 3, 2025",
            desc: "Join us for the annual Maulid celebration, honoring the birth of the Prophet Muhammad (PBUH).",
            img: "images/img3.jpg"
        }
        // Add more events as needed, matching the slider images order
    ];

    // Render events
    function renderEvents(activeIndex = 0) {
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = '';
        if (events[activeIndex]) {
            const event = events[activeIndex];
            eventsList.innerHTML = `
                <div class="event-card">
                    <img src="${event.img}" alt="${event.title}" class="event-img">
                    <div class="event-details">
                        <div class="event-title">${event.title}</div>
                        <div class="event-date">${event.date}</div>
                        <p class="event-desc">${event.desc}</p>
                    </div>
                </div>
            `;
        }
    }

    // Initial render
    renderEvents(0);
    startAutoSlide();
});