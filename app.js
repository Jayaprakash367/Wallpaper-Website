// Wallpaper Data - 50 Unique High-Quality Images
const WALLPAPERS = [
    // Nature (10)
    { id: 1, title: "Mountain Sunrise", category: "nature", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90" },
    { id: 2, title: "Forest Morning Mist", category: "nature", thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", full: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90" },
    { id: 3, title: "Ocean Waves", category: "nature", thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80", full: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90" },
    { id: 4, title: "Autumn Leaves Path", category: "nature", thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", full: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90" },
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
    { id: 29, title: "Shadow Play", category: "minimal", thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", full: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90" },
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
   
    { id: 51, title: "lamborghini", category: "Cars", thumb: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?_gl=1*2gik0i*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3Njk5MTk1MDkkbzIkZzEkdDE3Njk5MTk1NjYkajMkbDAkaDA.", full: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?_gl=1*2gik0i*_ga*NjA0NzY1MDE5LjE3Njk4Mzc3MDk.*_ga_8JE65Q40S6*czE3Njk5MTk1MDkkbzIkZzEkdDE3Njk5MTk1NjYkajMkbDAkaDA." },
    { id: 52, title: "lamborghini Red ", category: "Cars", thumb: "pexels-photo-7925479.jpeg", full: "pexels-photo-7925479.jpeg" },
    { id: 53, title: "lamborghini black", category: "Cars", thumb: "pexels-photo-26954166.jpeg", full: "pexels-photo-26954166.jpeg" },
    { id: 54, title: "lamborghini Purple", category: "Cars", thumb: "pexels-mohit-hambiria-92377455-17832661.jpg", full: "pexels-mohit-hambiria-92377455-17832661.jpg" },
    { id: 55, title: "Classic Red BMW M5 ", category: "Cars", thumb: "pexels-photo-29883936.jpeg", full: "pexels-photo-29883936.jpeg" },
    { id: 56, title: "BMW Black Sports Car", category: "Cars", thumb: "pexels-photo-35612816.jpeg", full: "pexels-photo-35612816.jpeg" },
    { id: 57, title: " White Audi Parked on Road", category: "Cars", thumb: "pexels-photo-11960305.jpeg", full:"pexels-photo-11960305.jpeg" },
    { id: 58, title: "Silver Mercedes-benz ", category: "Cars", thumb: "pexels-photo-241316.jpeg", full: "pexels-photo-241316.jpeg" },
    { id: 59, title: "Blue Mercedes-AMG GT R", category: "Cars", thumb: "pexels-photo-20792557.jpeg", full: "pexels-photo-20792557.jpeg" },
    { id: 60, title: "porsche", category: "Cars", thumb: "car.jpg", full: "car.jpg" }










];


// Device Resolutions
const DEVICE_RESOLUTIONS = {
    mobile: [
        { label: '1179 × 2556', width: 1179, height: 2556 },
        { label: '1080 × 1920', width: 1080, height: 1920 },
        { label: '750 × 1334', width: 750, height: 1334 }
    ],
    laptop: [
        { label: '3456 × 2234', width: 3456, height: 2234 },
        { label: '1920 × 1080', width: 1920, height: 1080 },
        { label: '2560 × 1600', width: 2560, height: 1600 }
    ],
    desktop: [
        { label: '3840 × 2160', width: 3840, height: 2160 },
        { label: '2560 × 1440', width: 2560, height: 1440 },
        { label: '3440 × 1440', width: 3440, height: 1440 }
    ]
};

// State
let currentFilter = 'all';
let currentWallpaper = null;
let currentDevice = 'laptop';

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');
const modalTitle = document.getElementById('modalTitle');
const resolutionOptions = document.getElementById('resolutionOptions');
const visibleCount = document.getElementById('visibleCount');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const backToTopBtn = document.getElementById('backToTop');

// Render Gallery
function renderGallery(wallpapers) {
    galleryGrid.innerHTML = '';
    wallpapers.forEach(wp => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${wp.thumb}" alt="${wp.title}" loading="lazy">
                <div class="card-overlay">
                    <div class="overlay-actions">
                        <button class="action-btn btn-preview" onclick="openPreview(${wp.id})">
                            👁️ Preview
                        </button>
                        <button class="action-btn btn-download" onclick="quickDownload(${wp.id})">
                            ⬇️ Download
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h3 class="card-title">${wp.title}</h3>
                <div class="card-meta">
                    <span class="card-category">${wp.category}</span>
                    <span class="card-resolution">4K</span>
                </div>
            </div>
        `;
        card.querySelector('.card-image').onclick = () => openPreview(wp.id);
        galleryGrid.appendChild(card);
    });
    visibleCount.textContent = wallpapers.length;
    
    // Reapply animations after rendering
    setTimeout(() => {
        applyScrollAnimations();
        apply3DTiltEffect();
    }, 50);
}

// Filter Wallpapers
function filterWallpapers() {
    const searchTerm = searchInput.value.toLowerCase();
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

// Filter Button Handlers
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterWallpapers();
    });
});

// Filter by category (for footer links)
function filterByCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    filterWallpapers();
    window.scrollTo({ top: document.querySelector('.gallery-section').offsetTop - 150, behavior: 'smooth' });
}

// Search Handler
searchInput.addEventListener('input', filterWallpapers);

// Open Preview Modal
function openPreview(id) {
    currentWallpaper = WALLPAPERS.find(wp => wp.id === id);
    if (!currentWallpaper) return;

    modalTitle.textContent = currentWallpaper.title;
    previewImage.src = currentWallpaper.full;
    updateResolutionOptions();
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    previewModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Device Tab Handlers
document.querySelectorAll('.device-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.device-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentDevice = tab.dataset.device;
        updateResolutionOptions();
    });
});

// Update Resolution Options
function updateResolutionOptions() {
    const resolutions = DEVICE_RESOLUTIONS[currentDevice];
    resolutionOptions.innerHTML = resolutions.map((res, index) => `
        <button class="resolution-btn" data-index="${index}" data-width="${res.width}" data-height="${res.height}" data-label="${res.label}">
            <div class="resolution-info">
                <span class="resolution-label">${res.label}</span>
                <span class="resolution-size">${res.width} × ${res.height}</span>
            </div>
            <div class="download-icon">⬇️</div>
        </button>
    `).join('');
    
    // Attach click handlers to all resolution buttons
    document.querySelectorAll('.resolution-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const width = btn.dataset.width;
            const height = btn.dataset.height;
            const label = btn.dataset.label;
            await downloadWallpaper(width, height, label, btn);
        });
    });
}

// Download Wallpaper
async function downloadWallpaper(width, height, label, btn) {
    if (!currentWallpaper) return;

    const originalContent = btn.innerHTML;
    const originalPointerEvents = btn.style.pointerEvents;
    
    // Disable button and show loading state
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.7';
    btn.innerHTML = '<div class="resolution-info"><span class="resolution-label">⏳ Downloading...</span></div>';

    showToast(`Downloading ${label}...`);
    
    try {
        const imageUrl = `${currentWallpaper.full.split('?')[0]}?w=${width}&h=${height}&fit=crop&q=90`;
        const response = await fetch(imageUrl);
        
        if (!response.ok) throw new Error('Download failed');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g, '_')}_${width}x${height}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success
        btn.innerHTML = '<div class="resolution-info"><span class="resolution-label">✅ Downloaded!</span></div>';
        showToast(`✅ ${label} downloaded successfully!`, 'success');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.pointerEvents = originalPointerEvents;
            btn.style.opacity = '1';
        }, 2000);
    } catch (error) {
        console.error('Download error:', error);
        btn.innerHTML = originalContent;
        btn.style.pointerEvents = originalPointerEvents;
        btn.style.opacity = '1';
        showToast('❌ Download failed. Please try again.', 'error');
    }
}

// Quick Download (from gallery)
function quickDownload(id) {
    currentWallpaper = WALLPAPERS.find(wp => wp.id === id);
    if (currentWallpaper) {
        const label = 'Full HD (1920×1080)';
        showToast(`Downloading ${label}...`);
        downloadWallpaperDirect(1920, 1080, label);
    }
}

// Direct Download (no button state update needed)
async function downloadWallpaperDirect(width, height, label) {
    if (!currentWallpaper) return;
    
    try {
        const imageUrl = `${currentWallpaper.full.split('?')[0]}?w=${width}&h=${height}&fit=crop&q=90`;
        const response = await fetch(imageUrl);
        
        if (!response.ok) throw new Error('Download failed');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g, '_')}_${width}x${height}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showToast(`✅ ${label} downloaded successfully!`, 'success');
    } catch (error) {
        console.error('Download error:', error);
        showToast('❌ Download failed. Please try again.', 'error');
    }
}

// Show Toast
function showToast(message, type = '') {
    const toastEl = document.getElementById('toast');
    toastEl.querySelector('.toast-message').textContent = message;
    toastEl.className = `toast show ${type}`;
    setTimeout(() => toastEl.classList.remove('show'), 3000);
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Loading Page Handler
function initLoadingPage() {
    const loadingPage = document.getElementById('loadingPage');
    const loadingPercent = document.getElementById('loadingPercent');
    let percentage = 0;

    const loadingInterval = setInterval(() => {
        percentage += Math.random() * 25;
        if (percentage > 100) percentage = 100;
        loadingPercent.textContent = Math.floor(percentage) + '%';

        if (percentage >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingPage.classList.add('hidden');
            }, 300);
        }
    }, 300);

    // Force hide after 5 seconds
    setTimeout(() => {
        percentage = 100;
        loadingPercent.textContent = '100%';
        clearInterval(loadingInterval);
        loadingPage.classList.add('hidden');
    }, 5000);
}

// Scroll Handler
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
});

// Advanced Scroll Animations with Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const delay = index * 0.08;
            card.style.transitionDelay = `${delay}s`;
            card.classList.add('scroll-reveal');
            scrollObserver.unobserve(card);
        }
    });
}, observerOptions);

// Apply scroll observation to cards after render
function applyScrollAnimations() {
    const cards = document.querySelectorAll('.wallpaper-card');
    cards.forEach((card, index) => {
        card.classList.remove('scroll-reveal');
        card.style.opacity = '0';
        card.style.transform = 'translateY(80px) rotateX(20deg) scale(0.85)';
        scrollObserver.observe(card);
    });
}

// 3D Tilt Effect on Mouse Move
function apply3DTiltEffect() {
    const cards = document.querySelectorAll('.wallpaper-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `translateY(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    });
}

// Parallax effect on scroll
function applyParallaxEffect() {
    const cards = document.querySelectorAll('.wallpaper-card');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = (cardCenter - viewportCenter) / viewportCenter;
            
            const img = card.querySelector('.card-image img');
            if (img && rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxOffset = distance * 15;
                img.style.transform = `scale(1.05) translateY(${parallaxOffset}px)`;
            }
        });
    });
}

// Close modal on outside click
previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize
renderGallery(WALLPAPERS);
initLoadingPage();

// Apply advanced animations after DOM is ready
setTimeout(() => {
    applyScrollAnimations();
    apply3DTiltEffect();
    applyParallaxEffect();
}, 100);
