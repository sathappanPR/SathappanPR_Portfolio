const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 50;

for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const vx = Math.random() * 2 - 1; // velocity in x direction
    const vy = Math.random() * 2 - 1; // velocity in y direction
    particles.push({ x, y, vx, vy });
}

function updateParticles() {
    particles.forEach(particle => {
        // Move particles in a wave-like pattern
        particle.x += particle.vx;
        particle.y = particle.y + Math.sin(particle.x / 50) * 5; // Adjust the values for the wave effect

        // Bounce off the walls
        if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -1;
        }
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
}

animate();

// Function to handle resume download
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
