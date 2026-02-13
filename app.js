// =============================================
// WallVault — Premium Wallpaper Engine
// Fast-loading, particle effects, aurora design
// =============================================

// ==================== DATA ====================
const WALLPAPERS = [
    // Nature (10)
    { id: 1, title: "Mountain Sunrise", category: "nature", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90" },
    { id: 2, title: "Forest Morning Mist", category: "nature", thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", full: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90" },
    { id: 3, title: "Ocean Waves", category: "nature", thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80", full: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90" },
    { id: 4, title: "Scenic Autumn Road Surrounded by Vibrant Foliage", category: "nature", thumb: "https://images.pexels.com/photos/34490278/pexels-photo-34490278.jpeg?_gl=1*1tfg6lq*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3NzA5OTc4MDgkbzMkZzEkdDE3NzA5OTgyNzMkajM3JGwwJGgw", full: "https://images.pexels.com/photos/34490278/pexels-photo-34490278.jpeg?_gl=1*1tfg6lq*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3NzA5OTc4MDgkbzMkZzEkdDE3NzA5OTgyNzMkajM3JGwwJGgw" },
    { id: 5, title: "Waterfall Paradise", category: "nature", thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&q=80", full: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=90" },
    { id: 6, title: "Desert Dunes", category: "nature", thumb: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80", full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=90" },
    { id: 7, title: "Northern Lights", category: "nature", thumb: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80", full: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=90" },
    { id: 8, title: "Cherry Blossoms", category: "nature", thumb: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80", full: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=90" },
    { id: 9, title: "Lavender Fields", category: "nature", thumb: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80", full: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&q=90" },
    { id: 10, title: "Tropical Beach", category: "nature", thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90" },

    // Architecture (10)
    { id: 11, title: "Modern Skyscraper", category: "architecture", thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", full: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90" },
    { id: 12, title: "Golden Gate Bridge", category: "architecture", thumb: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80", full: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=90" },
    { id: 13, title: "Ancient Temple", category: "architecture", thumb: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", full: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=90" },
    { id: 14, title: "City Night Lights", category: "architecture", thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80", full: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=90" },
    { id: 15, title: "Spiral Staircase", category: "architecture", thumb: "https://www.home-designing.com/wp-content/uploads/2021/08/spiral-staircase-with-courtyard.jpg", full: "https://www.home-designing.com/wp-content/uploads/2021/08/spiral-staircase-with-courtyard.jpg" },
    { id: 16, title: "Glass Building", category: "architecture", thumb: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", full: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=90" },
    { id: 17, title: "European Cathedral", category: "architecture", thumb: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", full: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90" },
    { id: 18, title: "Tokyo Tower", category: "architecture", thumb: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", full: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90" },
    { id: 19, title: "Brooklyn Bridge", category: "architecture", thumb: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=600&q=80", full: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1920&q=90" },
    { id: 20, title: "Colosseum Rome", category: "architecture", thumb: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", full: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=90" },

    // Minimal (10)
    { id: 21, title: "White Marble", category: "minimal", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", full: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90" },
    { id: 22, title: "Simple Lines", category: "minimal", thumb: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&q=80", full: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1920&q=90" },
    { id: 23, title: "Soft Gradient", category: "minimal", thumb: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80", full: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=90" },
    { id: 24, title: "Clean Workspace", category: "minimal", thumb: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80", full: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1920&q=90" },
    { id: 25, title: "Minimal Plant", category: "minimal", thumb: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80", full: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1920&q=90" },
    { id: 26, title: "Geometric Shapes", category: "minimal", thumb: "https://images.unsplash.com/photo-1509537257950-20f875b03669?w=600&q=80", full: "https://images.unsplash.com/photo-1509537257950-20f875b03669?w=1920&q=90" },
    { id: 27, title: "Pastel Colors", category: "minimal", thumb: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80", full: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=90" },
    { id: 28, title: "Single Leaf", category: "minimal", thumb: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80", full: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1920&q=90" },
    { id: 29, title: "White Dandelion Under Blue Sky", category: "minimal", thumb: "https://images.pexels.com/photos/14431345/pexels-photo-14431345.jpeg?_gl=1*19urmbf*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3NzA5OTc4MDgkbzMkZzEkdDE3NzA5OTc4NzQkajU5JGwwJGgw", full: "https://images.pexels.com/photos/14431345/pexels-photo-14431345.jpeg?_gl=1*19urmbf*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3NzA5OTc4MDgkbzMkZzEkdDE3NzA5OTc4NzQkajU5JGwwJGgw" },
    { id: 30, title: "White Architecture", category: "minimal", thumb: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80", full: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=90" },

    // Space (10)
    { id: 31, title: "Milky Way Galaxy", category: "space", thumb: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", full: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=90" },
    { id: 32, title: "Earth From Space", category: "space", thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", full: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90" },
    { id: 33, title: "Nebula Colors", category: "space", thumb: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80", full: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=90" },
    { id: 34, title: "Saturn Rings", category: "space", thumb: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80", full: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=90" },
    { id: 35, title: "Moon Surface", category: "space", thumb: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=600&q=80", full: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=1920&q=90" },
    { id: 36, title: "Star Field", category: "space", thumb: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", full: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=90" },
    { id: 37, title: "Solar Eclipse", category: "space", thumb: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=600&q=80", full: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=1920&q=90" },
    { id: 38, title: "Astronaut Float", category: "space", thumb: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80", full: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=90" },
    { id: 39, title: "Galaxy Spiral", category: "space", thumb: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80", full: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920&q=90" },
    { id: 40, title: "Deep Space", category: "space", thumb: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80", full: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=90" },

    // Abstract (10)
    { id: 41, title: "Fluid Motion", category: "abstract", thumb: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80", full: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1920&q=90" },
    { id: 42, title: "Color Splash", category: "abstract", thumb: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", full: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&q=90" },
    { id: 43, title: "Digital Wave", category: "abstract", thumb: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&q=80", full: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1920&q=90" },
    { id: 44, title: "Neon Glow", category: "abstract", thumb: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80", full: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=90" },
    { id: 45, title: "Crystal Formation", category: "abstract", thumb: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80", full: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1920&q=90" },
    { id: 46, title: "Smoke Art", category: "abstract", thumb: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=600&q=80", full: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=1920&q=90" },
    { id: 47, title: "Ink Drop", category: "abstract", thumb: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", full: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=90" },
    { id: 48, title: "Light Trails", category: "abstract", thumb: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=600&q=80", full: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=1920&q=90" },
    { id: 49, title: "Fractal Pattern", category: "abstract", thumb: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80", full: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1920&q=90" },
    { id: 50, title: "Prism Colors", category: "abstract", thumb: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80", full: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=90" },

    // Cars (10)
    { id: 51, title: "Lamborghini Gold", category: "Cars", thumb: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", full: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90" },
    { id: 52, title: "Lamborghini Red", category: "Cars", thumb: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&q=80", full: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920&q=90" },
    { id: 53, title: "Lamborghini Dark", category: "Cars", thumb: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80", full: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1920&q=90" },
    { id: 54, title: "Porsche 911 GT", category: "Cars", thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", full: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90" },
    { id: 55, title: "Classic Red BMW", category: "Cars", thumb: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80", full: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90" },
    { id: 56, title: "BMW M4 Sports", category: "Cars", thumb: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&q=80", full: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=90" },
    { id: 57, title: "White Audi Sport", category: "Cars", thumb: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80", full: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=90" },
    { id: 58, title: "Silver Mercedes", category: "Cars", thumb: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", full: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=90" },
    { id: 59, title: "Mercedes AMG GT", category: "Cars", thumb: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80", full: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=90" },
    { id: 60, title: "Ferrari Supercar", category: "Cars", thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", full: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=90" },
];

const DEVICE_RESOLUTIONS = {
    mobile: [
        { label: 'iPhone 15 Pro Max', width: 1179, height: 2556 },
        { label: 'Full HD Mobile', width: 1080, height: 1920 },
        { label: 'iPhone SE', width: 750, height: 1334 },
    ],
    laptop: [
        { label: 'MacBook Pro 16"', width: 3456, height: 2234 },
        { label: 'Full HD 1080p', width: 1920, height: 1080 },
        { label: 'QHD Display', width: 2560, height: 1600 },
    ],
    desktop: [
        { label: '4K Ultra HD', width: 3840, height: 2160 },
        { label: '2K QHD', width: 2560, height: 1440 },
        { label: 'Ultrawide', width: 3440, height: 1440 },
    ],
};

// ==================== STATE ====================
let currentFilter = 'all';
let currentWallpaper = null;
let currentDevice = 'laptop';
let currentView = 'grid';
let actualUserDevice = 'laptop'; // Detected from screen size

// ==================== DOM ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const galleryGrid = $('#galleryGrid');
const galleryEmpty = $('#galleryEmpty');
const previewModal = $('#previewModal');
const previewImage = $('#previewImage');
const previewLoading = $('#previewLoading');
const modalTitle = $('#modalTitle');
const modalCategory = $('#modalCategory');
const resolutionOptions = $('#resolutionOptions');
const visibleCount = $('#visibleCount');
const searchInput = $('#searchInput');
const backToTopBtn = $('#backToTop');
const mainHeader = $('#mainHeader');

// ==================== PARTICLE SYSTEM ====================
function initParticles() {
    const canvas = $('#particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;
    let w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.pulse += 0.02;
            this.opacity = 0.15 + Math.sin(this.pulse) * 0.15;
            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        const count = Math.min(80, Math.floor((w * h) / 15000));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        animId = requestAnimationFrame(animate);
    }

    init();
    animate();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 200);
    });
}

// ==================== CUSTOM CURSOR — Aurora Crosshair with Particle Trail ====================
function initCursor() {
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) return;

    const core = $('#cursorCore');
    const glow = $('#cursorGlow');
    const trailCanvas = $('#cursorTrail');
    if (!core || !glow || !trailCanvas) return;

    const ctx = trailCanvas.getContext('2d');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let trail = [];

    // Resize trail canvas
    function resizeTrail() {
        trailCanvas.width = window.innerWidth;
        trailCanvas.height = window.innerHeight;
    }
    resizeTrail();
    window.addEventListener('resize', resizeTrail);

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        core.style.transform = `translate(${mouseX - core.offsetWidth / 2}px, ${mouseY - core.offsetHeight / 2}px)`;

        // Add trail particles
        for (let i = 0; i < 2; i++) {
            trail.push({
                x: mouseX + (Math.random() - 0.5) * 6,
                y: mouseY + (Math.random() - 0.5) * 6,
                size: Math.random() * 2.5 + 1,
                life: 1,
                decay: Math.random() * 0.03 + 0.015,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                hue: Math.random() > 0.5 ? 240 : 280,
            });
        }
    });

    // Smooth glow follow
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        glow.style.transform = `translate(${glowX - glow.offsetWidth / 2}px, ${glowY - glow.offsetHeight / 2}px)`;
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

    // Draw trail particles
    function drawTrail() {
        ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
        trail = trail.filter(p => p.life > 0);

        trail.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            p.size *= 0.98;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.life * 0.6})`;
            ctx.fill();
        });

        // Cap array
        if (trail.length > 200) trail.splice(0, trail.length - 200);

        requestAnimationFrame(drawTrail);
    }
    drawTrail();

    // Hover effect on interactive elements
    const hoverTargets = 'a, button, .wallpaper-card, .category-chip, .resolution-btn, .view-btn, .social-link';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            core.classList.add('hover');
            glow.classList.add('hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            core.classList.remove('hover');
            glow.classList.remove('hover');
        }
    });

    // Click pulse
    document.addEventListener('mousedown', () => core.classList.add('click'));
    document.addEventListener('mouseup', () => core.classList.remove('click'));
}

// ==================== HEADER SCROLL ====================
function initHeaderScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        mainHeader.classList.toggle('scrolled', scrollY > 50);
        lastScroll = scrollY;
    }, { passive: true });
}

// ==================== GALLERY RENDERING ====================
function getBaseUrl(url) {
    return url.split('?')[0];
}

function generateSrcSet(url) {
    const base = getBaseUrl(url);
    // Unsplash/Pexels support dynamic resizing
    if (base.includes('images.unsplash.com') || base.includes('images.pexels.com')) {
        return `${base}?w=300&q=75&auto=format 300w, 
                ${base}?w=600&q=80&auto=format 600w, 
                ${base}?w=900&q=80&auto=format 900w`;
    }
    return '';
}

function renderGallery(wallpapers) {
    galleryGrid.innerHTML = '';

    if (wallpapers.length === 0) {
        galleryEmpty.style.display = 'block';
        visibleCount.textContent = '0';
        return;
    }

    galleryEmpty.style.display = 'none';

    // Use DocumentFragment for performance
    const fragment = document.createDocumentFragment();

    wallpapers.forEach((wp, index) => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.style.transitionDelay = `${Math.min(index * 0.05, 0.5)}s`;

        // Generate srcset for responsive loading
        // 300w for mobile (2 columns), 600w for tablet/desktop grid
        const srcSet = generateSrcSet(wp.thumb);
        const sizes = "(max-width: 600px) 50vw, (max-width: 1200px) 33vw, 25vw";
        const initialSrc = wp.thumb; // Fallback

        card.innerHTML = `
            <div class="card-image">
                <img 
                    src="${initialSrc}" 
                    srcset="${srcSet}" 
                    sizes="${sizes}" 
                    alt="${wp.title}" 
                    loading="lazy" 
                    decoding="async"
                    width="600"
                    height="400"
                    style="background: #111631;"
                >
                <div class="card-overlay">
                    <div class="overlay-top">
                        <span class="overlay-badge quality">4K</span>
                        <span class="overlay-badge">${wp.category}</span>
                    </div>
                    <div class="overlay-info">
                        <h3 class="overlay-title">${wp.title}</h3>
                        <p class="overlay-cat">${wp.category}</p>
                        <div class="overlay-actions">
                            <button class="action-btn btn-preview" onclick="event.stopPropagation(); openPreview(${wp.id})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                Preview
                            </button>
                            <button class="action-btn btn-download" onclick="event.stopPropagation(); quickDownload(${wp.id})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Image load handler for shimmer effect
        const img = card.querySelector('img');
        const cardImage = card.querySelector('.card-image');
        img.addEventListener('load', () => cardImage.classList.add('loaded'));
        if (img.complete) cardImage.classList.add('loaded');

        // Click to preview
        card.addEventListener('click', () => openPreview(wp.id));

        fragment.appendChild(card);
    });

    galleryGrid.appendChild(fragment);
    visibleCount.textContent = wallpapers.length;

    // Trigger reveal animations with IntersectionObserver
    requestAnimationFrame(() => observeCards());
}

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '50px', threshold: 0.1 });

function observeCards() {
    $$('.wallpaper-card').forEach(card => {
        card.classList.remove('revealed');
        revealObserver.observe(card);
    });
}

// ==================== FILTERING ====================
function filterWallpapers() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let filtered = WALLPAPERS;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(wp => wp.category === currentFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(wp =>
            wp.title.toLowerCase().includes(searchTerm) ||
            wp.category.toLowerCase().includes(searchTerm)
        );
    }

    renderGallery(filtered);
}

// Category chips
$$('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        $$('.category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.dataset.filter;
        filterWallpapers();
    });
});

// Set "All" active by default
document.querySelector('.category-chip[data-filter="all"]')?.classList.add('active');

// Filter by category (for footer links)
function filterByCategory(category) {
    currentFilter = category;
    $$('.category-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.filter === category);
    });
    filterWallpapers();
    document.querySelector('.gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Search with debounce
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterWallpapers, 200);
});

// Keyboard shortcut: Cmd/Ctrl+K to focus search
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    if (e.key === 'Escape') {
        if (previewModal.classList.contains('active')) {
            closeModal();
        } else if (document.activeElement === searchInput) {
            searchInput.blur();
            searchInput.value = '';
            filterWallpapers();
        }
    }
});

// ==================== VIEW TOGGLE ====================
$$('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        galleryGrid.classList.toggle('masonry', currentView === 'masonry');
        // Re-observe for animations
        requestAnimationFrame(() => observeCards());
    });
});

// ==================== PREVIEW MODAL ====================
function openPreview(id) {
    currentWallpaper = WALLPAPERS.find(wp => wp.id === id);
    if (!currentWallpaper) return;

    modalTitle.textContent = currentWallpaper.title;
    modalCategory.textContent = currentWallpaper.category;

    // Show loading
    previewLoading.classList.add('active');
    previewImage.style.opacity = '0.3';

    // Load full image
    const img = new Image();
    img.onload = () => {
        previewImage.src = currentWallpaper.full;
        previewImage.style.opacity = '1';
        previewLoading.classList.remove('active');
    };
    img.onerror = () => {
        previewImage.src = currentWallpaper.thumb;
        previewImage.style.opacity = '1';
        previewLoading.classList.remove('active');
    };
    img.src = currentWallpaper.full;

    // Set initial thumb while loading
    previewImage.src = currentWallpaper.thumb;

    updateResolutionOptions();
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto-detect user's device and set appropriate tab
    setTimeout(() => autoSelectDeviceTab(), 50);
}

function closeModal() {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Auto-detect user's actual device and set modal tab
function autoSelectDeviceTab() {
    const userDevice = detectUserDevice();
    const deviceTab = document.querySelector(`.device-tab[data-device="${userDevice}"]`);
    if (deviceTab) {
        $$('.device-tab').forEach(t => t.classList.remove('active'));
        deviceTab.classList.add('active');
        currentDevice = userDevice;
        updateResolutionOptions();
    }
}

// Device tabs
$$('.device-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.device-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentDevice = tab.dataset.device;
        updateResolutionOptions();
    });
});

function updateResolutionOptions() {
    const resolutions = DEVICE_RESOLUTIONS[currentDevice];
    resolutionOptions.innerHTML = resolutions.map(res => `
        <button class="resolution-btn" data-width="${res.width}" data-height="${res.height}" data-label="${res.label}">
            <div class="resolution-info">
                <span class="resolution-label">${res.label}</span>
                <span class="resolution-size">${res.width} × ${res.height}</span>
            </div>
            <div class="download-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
        </button>
    `).join('');

    // Attach handlers
    $$('.resolution-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await downloadWallpaper(
                btn.dataset.width,
                btn.dataset.height,
                btn.dataset.label,
                btn
            );
        });
    });
}

// ==================== DOWNLOAD ====================
async function downloadWallpaper(width, height, label, btn) {
    if (!currentWallpaper) return;

    const originalHTML = btn.innerHTML;
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.7';
    btn.innerHTML = `
        <div class="resolution-info">
            <span class="resolution-label">Downloading...</span>
            <span class="resolution-size">Please wait</span>
        </div>
        <div class="download-arrow"><div class="preview-spinner" style="width:16px;height:16px;border-width:2px;"></div></div>
    `;

    showToast(`Preparing ${label}...`);

    try {
        const imageUrl = `${currentWallpaper.full.split('?')[0]}?w=${width}&h=${height}&fit=crop&q=90`;
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Download failed');

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g, '_')}_${width}x${height}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`${label} downloaded!`, 'success');

        btn.innerHTML = `
            <div class="resolution-info">
                <span class="resolution-label">Downloaded!</span>
                <span class="resolution-size">${width} × ${height}</span>
            </div>
            <div class="download-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
        `;

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.pointerEvents = '';
            btn.style.opacity = '1';
        }, 2000);
    } catch (err) {
        console.error('Download error:', err);
        btn.innerHTML = originalHTML;
        btn.style.pointerEvents = '';
        btn.style.opacity = '1';
        showToast('Download failed. Try again.', 'error');
    }
}

// Detect actual user device from screen size
function detectUserDevice() {
    const width = window.innerWidth;
    if (width < 768) {
        actualUserDevice = 'mobile';
    } else if (width < 1024) {
        actualUserDevice = 'laptop';
    } else {
        actualUserDevice = 'desktop';
    }
    return actualUserDevice;
}

function quickDownload(id) {
    currentWallpaper = WALLPAPERS.find(wp => wp.id === id);
    if (!currentWallpaper) return;
    
    // Get resolution for user's actual device
    const userDevice = detectUserDevice();
    const defaultResolution = DEVICE_RESOLUTIONS[userDevice][0]; // Get first (best) resolution for device
    
    showToast(`Preparing ${defaultResolution.label} download...`);
    downloadWallpaperDirect(defaultResolution.width, defaultResolution.height, defaultResolution.label);
}

async function downloadWallpaperDirect(width, height, label) {
    if (!currentWallpaper) return;
    try {
        const imageUrl = `${currentWallpaper.full.split('?')[0]}?w=${width}&h=${height}&fit=crop&q=90`;
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Download failed');

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g, '_')}_${width}x${height}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`${label} downloaded!`, 'success');
    } catch (err) {
        console.error('Download error:', err);
        showToast('Download failed. Try again.', 'error');
    }
}

// ==================== TOAST ====================
function showToast(message, type = '') {
    const toast = $('#toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.className = `toast show ${type}`;
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== SCROLL & BACK TO TOP ====================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// ==================== IMAGE PREFETCHING ====================
function prefetchImages() {
    // 1. Critical Preload for top images (First 4 = first row)
    // We prioritize mobile view (2 per row) -> first 4 covers top 2 rows
    const preloadCount = 4;
    const critical = WALLPAPERS.slice(0, preloadCount);
    
    critical.forEach(wp => {
        const base = wp.thumb.split('?')[0];
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        
        // Responsive preload logic
        if (base.includes('unsplash') || base.includes('pexels')) {
            link.href = `${base}?w=600&q=80&auto=format`;
            link.imagesrcset = `${base}?w=300&q=75&auto=format 300w, ${base}?w=600&q=80&auto=format 600w`;
            link.imagesizes = "(max-width: 600px) 50vw, 33vw";
        } else {
            link.href = wp.thumb;
        }
        document.head.appendChild(link);
    });

    // 2. Low-priority prefetch for next batch
    const prefetchBatch = WALLPAPERS.slice(preloadCount, preloadCount + 8);
    prefetchBatch.forEach(wp => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = wp.thumb; // Let browser cache the default URL or handle it
        link.as = 'image';
        document.head.appendChild(link);
    });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    // Detect user's actual device
    detectUserDevice();
    
    // Update device detection on window resize
    window.addEventListener('resize', detectUserDevice);
    
    initCursor();
    initParticles();
    initHeaderScroll();
    initMobileMenu();
    initModalSwipe();
    prefetchImages();
    renderGallery(WALLPAPERS);
});

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const menuBtn = $('#mobileMenuBtn');
    const menu = $('#mobileMenu');
    const closeBtn = $('#mobileMenuClose');
    const backdrop = $('#mobileMenuBackdrop');
    if (!menuBtn || !menu) return;

    function openMenu() {
        menu.classList.add('active');
        menuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
        menu.classList.contains('active') ? closeMenu() : openMenu();
    });

    closeBtn?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);

    // Close on nav link click
    $$('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) closeMenu();
    });

    // Swipe right to close
    let touchStartX = 0;
    menu.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    menu.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (diff > 80) closeMenu();
    }, { passive: true });
}

// ==================== MODAL SWIPE TO CLOSE (Mobile) ====================
function initModalSwipe() {
    const modal = previewModal;
    const content = modal?.querySelector('.modal-content');
    if (!modal || !content) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const handle = modal.querySelector('.modal-swipe-handle');
    if (!handle) return;

    handle.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
        content.style.transition = 'none';
    }, { passive: true });

    handle.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        if (diff > 0) {
            content.style.transform = `translateY(${diff}px)`;
            content.style.opacity = `${1 - diff / 400}`;
        }
    }, { passive: true });

    handle.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        const diff = currentY - startY;
        content.style.transition = '';

        if (diff > 120) {
            closeModal();
        }
        content.style.transform = '';
        content.style.opacity = '';
    }, { passive: true });
}

// Close modal on backdrop click or Escape
previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) closeModal();
});
