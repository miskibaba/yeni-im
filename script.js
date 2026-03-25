// Tailwind Config (CDN kullanıldığı için JS içinde tanımlanmalı)
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2e7d32',
                secondary: '#ffcc00',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            }
        }
    }
}
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: { primary: '#2e7d32', secondary: '#ffcc00' },
            fontFamily: { heading: ['Poppins'], body: ['Inter'] }
        }
    }
}

// Karanlık Mod
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Popup Kapatma
function closePopup() {
    document.getElementById('campaignPopup').classList.add('hidden');
}

// Kampanya Slider Fonksiyonu
let currentSlide = 0;
const slides = document.querySelectorAll('.campaign-slide');
const dots = document.querySelectorAll('.slide-dot');

function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('bg-primary');
    dots[currentSlide].classList.add('bg-gray-300');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.remove('bg-gray-300');
    dots[currentSlide].classList.add('bg-primary');
}

// Otomatik Slider
setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    changeSlide(next);
}, 5000);

// Sayfa yüklendiğinde Popup aç
window.onload = () => {
    setTimeout(() => {
        document.getElementById('campaignPopup').classList.remove('hidden');
        document.getElementById('popupContent').classList.replace('opacity-0', 'opacity-100');
        document.getElementById('popupContent').classList.replace('scale-95', 'scale-100');
    }, 2000);
};

// Sayfa açıldıktan 2 saniye sonra popup göster
window.onload = () => {
    setTimeout(() => {
        const popup = document.getElementById('campaignPopup');
        const content = document.getElementById('popupContent');
        popup.classList.remove('hidden');
        setTimeout(() => {
            content.classList.replace('scale-95', 'scale-100');
            content.classList.replace('opacity-0', 'opacity-100');
        }, 10);
    }, 2000);
};

// Navbar Kaydırma Efekti
window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
};