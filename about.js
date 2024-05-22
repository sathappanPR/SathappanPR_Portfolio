const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const neurons = [];
const numNeurons = 10;

for (let i = 0; i < numNeurons; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const vx = Math.random() * 2 - 1; // velocity in x direction
    const vy = Math.random() * 2 - 1; // velocity in y direction
    neurons.push({ x, y, vx, vy, connections: [] });
}

// Function to calculate distance between two neurons
function calculateDistance(neuron1, neuron2) {
    const dx = neuron2.x - neuron1.x;
    const dy = neuron2.y - neuron1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Function to get a random subset of neurons
function getRandomSubset(arr, size) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    while (i--) {
        const index = Math.floor((i + 1) * Math.random());
        const temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

// Create connections randomly
neurons.forEach(neuron => {
    const numConnections = Math.floor(Math.random() * 2) + 5; // Random number of connections (between 5 and 6)
    const subset = getRandomSubset(neurons.filter(n => n !== neuron), numConnections);
    neuron.connections = subset;
});

function updateNeurons() {
    neurons.forEach(neuron => {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Bounce off the walls
        if (neuron.x < 0 || neuron.x > canvas.width) {
            neuron.vx *= -1;
        }
        if (neuron.y < 0 || neuron.y > canvas.height) {
            neuron.vy *= -1;
        }
    });
}

function drawNeurons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';

    neurons.forEach(neuron => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawConnections() {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';

    neurons.forEach(neuron => {
        neuron.connections.forEach(connection => {
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(connection.x, connection.y);
        });
    });

    ctx.stroke();
}

function animate() {
    updateNeurons();
    drawNeurons();
    drawConnections();
    requestAnimationFrame(animate);
}

animate();

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
