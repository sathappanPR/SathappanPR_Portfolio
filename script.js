// Add this JavaScript code to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    const boxTrigger = document.querySelector('.box-trigger');
    const box = document.querySelector('.box');
    const logoContainer = document.querySelector('.logo-container');

    // Function to toggle box display
    function toggleBox() {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }

    // Function to move the logo to the bottom left
    function moveLogoDownLeft() {
        logoContainer.classList.toggle('move-down-left');
    }

    // Event listener for clicking the "Click here" link
    boxTrigger.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleBox();
        moveLogoDownLeft();
    });

    // Event listener for clicking the popup arrow to close the box
    const popupArrow = document.querySelector('.popup-arrow');
    popupArrow.addEventListener('click', function() {
        box.style.display = 'none';
    });

    // Event listener for pressing the escape button
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            box.style.display = 'none';
        }
    });
});

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
