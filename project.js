const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth; // Get the width of one card
const numberOfVisibleCards = 3; // Number of cards visible at a time
let sliderIndex = 0;

document.getElementById('resume-link').addEventListener('click', function() {
    // Change 'your-resume.pdf' to the actual path of your resume file
    const resumeUrl = 'SathappanPR.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'SathappanPR-resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Set the width of the cards container to accommodate the visible cards
cardsContainer.style.width = `${cardWidth * numberOfVisibleCards}px`;

// Function to show the visible cards
function showVisibleCards() {
    cardsContainer.style.transform = `translateX(-${sliderIndex * cardWidth}px)`;
}

// Function to move to the next slide
function nextSlide() {
    sliderIndex++;
    if (sliderIndex > cards.length - numberOfVisibleCards) {
        sliderIndex = 0; // Reset index to loop back to the first card
    }
    showVisibleCards();
}

// Function to move to the previous slide
function prevSlide() {
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = cards.length - numberOfVisibleCards; // Loop to the last card
    }
    showVisibleCards();
}

// Add click event listeners to the arrows
document.querySelector('.prev-btn').addEventListener('click', () => {
    prevSlide();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    nextSlide();
});

