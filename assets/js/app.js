document.addEventListener("DOMContentLoaded", function () {
	const scrollButtons = document.querySelectorAll(".scroll-button");
	const navScrollButtons = document.querySelectorAll(".nav-button-scroll");

    scrollButtons.forEach(function (scrollButton) {
        scrollButton.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.scrollY;
                                
				window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                });
            }
        });
    });
	
	navScrollButtons.forEach(function (scrollButton) {
		scrollButton.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const offset = targetElement.getBoundingClientRect().top + window.scrollY;

				window.scrollTo({
					top: offset,
					behavior: "smooth",
				});
			}
		});
	});

	const slides = document.querySelectorAll('.carousel-slide');
	let currentSlide = 0;
	let timer;

	function showSlide(index) {
		slides.forEach((slide, i) => {
			if (i === index) {
				slide.classList.add('active');
			} else {
				slide.classList.remove('active');
			}
		});
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		showSlide(currentSlide);
	}

	function startCarousel() {
		timer = setInterval(nextSlide, 5000);
	}

	function stopCarousel() {
		clearInterval(timer);
	}

	const nextButton = document.getElementById('next-button');
	const prevButton = document.getElementById('prev-button');

	if (nextButton && prevButton) {
		nextButton.addEventListener('click', () => {
			nextSlide();
			stopCarousel();
		});

		prevButton.addEventListener('click', () => {
			prevSlide();
			stopCarousel();
		});

		startCarousel();
	}

	showSlide(currentSlide);
	
	particlesJS.load('background-1', 'assets/particles.json', function() {
		console.log('Home Background loaded.');
	});
	
	particlesJS.load('background-2', 'assets/particles2.json', function() {
		console.log('Projects Background loaded.');
	});
	
});