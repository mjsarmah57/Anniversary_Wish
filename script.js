// script.js

const welcomePage = document.getElementById('welcome-page');
const loginPage = document.getElementById('login-page');
const anniversaryPage = document.getElementById('anniversary-page');
const galleryPage = document.getElementById('gallery-page');

const enterBtn = document.getElementById('enter-btn');
const exitBtn = document.getElementById('exit-btn');
const loginBtn = document.getElementById('login-btn');
const anniversaryDateInput = document.getElementById('anniversary-date');
const loginError = document.getElementById('login-error');
const galleryBtn = document.getElementById('gallery-btn');
const backBtn = document.getElementById('back-btn');
const photoContainer = document.getElementById('photo-container');
const bgMusic = document.getElementById('bg-music');


const anniversaryDate = '2022-02-24'; //  Replace with your actual anniversary date (YYYY-MM-DD)

// --- Welcome Page ---
enterBtn.addEventListener('click', () => {
    welcomePage.style.display = 'none';
    loginPage.style.display = 'block';
});

exitBtn.addEventListener('click', () => {
    window.close(); // Close the window/tab
});

// --- Login Page ---
loginBtn.addEventListener('click', () => {
    if (anniversaryDateInput.value === anniversaryDate) {
        loginPage.style.display = 'none';
        anniversaryPage.style.display = 'block';
        startTimer();
        bgMusic.play(); // Start playing music
        createHearts(); // Start the hearts animation
    } else {
        loginError.style.display = 'block';
        // Clear the input field after an incorrect attempt
        anniversaryDateInput.value = "";
    }
});

// --- Anniversary Page ---
function startTimer() {
    const anniversary = new Date(anniversaryDate);
    // Get the timer display elements.  More robust to get them here, inside the function.
    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');


    function updateTimer() {
        const now = new Date();
        const diff = now.getTime() - anniversary.getTime();

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))); // Approximate months
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update the timer display. Use textContent for security.
        yearsSpan.textContent = years;
        monthsSpan.textContent = months;
        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;
    }

    updateTimer(); // Initial call to avoid a 1-second delay
    setInterval(updateTimer, 1000); // Update every second
}



galleryBtn.addEventListener('click', () => {
    anniversaryPage.style.display = 'none';
    galleryPage.style.display = 'block';
    addPhotos(); // Add photos to the gallery
});

// --- Photo Gallery Page ---
backBtn.addEventListener('click', () => {
    galleryPage.style.display = 'none';
    anniversaryPage.style.display = 'block';
});


function addPhotos() {
    // Clear any existing photos before adding new ones
    photoContainer.innerHTML = '';

    // Array of photo data (image URL, date, description)
    const photos = [
        { url: 'Photo1.jpeg' },
        { url: 'Photo2.jpeg' },
        { url: 'Photo3.jpg' },
        { url: 'Photo4.jpg' },
        { url: 'Photo5.jpg' },
        { url: 'Photo6.jpg' },
        { url: 'Photo7.jpg'},
        { url: 'Photo8.jpg' },
        { url: 'Photo9.jpg'},
        { url: 'Photo10.jpeg' },
        { url: 'Photo11.jpeg' },
        { url: 'Photo12.jpg' },
        { url: 'Photo13.jpg'},
        { url: 'Photo14.jpg' },
        { url: 'Photo15.jpg' },
        { url: 'Photo16.jpg'},
        { url: 'Photo17.jpg' },
        { url: 'Photo18.jpg' },
        { url: 'Photo19.jpg'},
        { url: 'Photo20.jpg' },
        { url: 'Photo21.jpg'},
        { url: 'Photo22.jpg'},
        { url: 'Photo23.jpg' },
        { url: 'Photo24.jpg'},
        { url: 'Photo25.jpeg' },
        { url: 'Photo26.jpg' },
        { url: 'Photo28.jpg' },
        { url: 'Photo29.jpg' },
     //   { url: 'Image/Photo29.jpg', date: '2024-10-27', description: 'At Kolkata Airport, waiting for flight!' },
        


        // Add more photos here.  Make sure the paths are correct!
    ];

    photos.forEach(photo => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');

        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.description; //  Important for accessibility

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = photo.date;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = photo.description;

        photoItem.appendChild(img);
        photoItem.appendChild(date);
        photoItem.appendChild(description);
        photoContainer.appendChild(photoItem);
    });
}

// --- Heart Animation ---

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const numHearts =500; // Number of hearts

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#x2764;'; // Heart symbol

        // Randomize position, size, animation duration, and delay
        const x = Math.random() * 200 - 100; // -100 to 100 vw
        const y = Math.random() * 200 - 100;  //-100 to 100 vh
        const rotate = Math.random() * 720 - 360; //-360 to 360
        const size = Math.random() * 20 + 10; // 10px to 30px
        const duration = Math.random() * 5 + 5; // 5s to 10s
        const delay = Math.random() * 5; // 0s to 5s

        heart.style.fontSize = `${size}px`;
        heart.style.setProperty('--x', `${x}vw`);
        heart.style.setProperty('--y', `${y}vh`);
        heart.style.setProperty('--rotate', `${rotate}deg`);
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;

        heartsContainer.appendChild(heart);
    }
}