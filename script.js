const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.slide');
let slideLength = carouselSlide.childElementCount;

// Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Counter
let counter = 0;
let size = carouselImages[0].clientWidth;

window.addEventListener('resize', () => {
	size = carouselImages[0].clientWidth;
	carouselSlide.scrollTo({
		left: counter * size,
		behavior: 'smooth',
	});
});

// Button listeners
nextBtn.addEventListener('click', () => {
	prevBtn.classList.remove('disabled');
	if (counter < slideLength - 1) {
		counter++;
		carouselSlide.scrollTo({
			left: counter * size,
			behavior: 'smooth',
		});

		if (counter === slideLength - 1) {
			nextBtn.classList.toggle('disabled');
		}
	}
});

prevBtn.addEventListener('click', () => {
	nextBtn.classList.remove('disabled');
	if (counter > 0) {
		counter--;
		carouselSlide.scrollTo({
			left: counter * size,
			behavior: 'smooth',
		});

		if (counter === 0) {
			prevBtn.classList.toggle('disabled');
		}
	}
});
