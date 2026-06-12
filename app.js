// =============================================
// WallVault 2.0 — Complete Premium Engine
// Unsplash × Pinterest × Pexels × Awwwards
// =============================================

// ==================== WALLPAPER DATA ====================
const WALLPAPERS = [
    // Nature (10)
    { id: 1,  title: "Mountain Sunrise",      category: "nature",       thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",  full: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90", featured: true,  likes: 1240, downloads: 3200 },
    { id: 2,  title: "Forest Morning Mist",   category: "nature",       thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",  full: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90", featured: false, likes: 890,  downloads: 2100 },
    { id: 3,  title: "Ocean Waves",           category: "nature",       thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80",  full: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90", featured: false, likes: 760,  downloads: 1800 },
    { id: 4,  title: "Autumn Road",           category: "nature",       thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",  full: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90", featured: false, likes: 540,  downloads: 1200 },
    { id: 5,  title: "Waterfall Paradise",    category: "nature",       thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&q=80",  full: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=90", featured: true,  likes: 1100, downloads: 2800 },
    { id: 6,  title: "Desert Dunes",          category: "nature",       thumb: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",  full: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=90", featured: false, likes: 680,  downloads: 1500 },
    { id: 7,  title: "Northern Lights",       category: "nature",       thumb: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",  full: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=90", featured: true,  likes: 1850, downloads: 4200 },
    { id: 8,  title: "Cherry Blossoms",       category: "nature",       thumb: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",  full: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=90", featured: false, likes: 920,  downloads: 2300 },
    { id: 9,  title: "Lavender Fields",       category: "nature",       thumb: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80",  full: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&q=90", featured: false, likes: 780,  downloads: 1900 },
    { id: 10, title: "Tropical Beach",        category: "nature",       thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",  full: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90", featured: true,  likes: 1560, downloads: 3600 },

    // Architecture (10)
    { id: 11, title: "Modern Skyscraper",     category: "architecture", thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",  full: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90", featured: false, likes: 640,  downloads: 1400 },
    { id: 12, title: "Golden Gate Bridge",    category: "architecture", thumb: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80",  full: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=90", featured: true,  likes: 1320, downloads: 3100 },
    { id: 13, title: "Ancient Temple",        category: "architecture", thumb: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",  full: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=90", featured: false, likes: 870,  downloads: 2000 },
    { id: 14, title: "City Night Lights",     category: "architecture", thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80",  full: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=90", featured: true,  likes: 1740, downloads: 4100 },
    { id: 15, title: "Spiral Staircase",      category: "architecture", thumb: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=600&q=80",  full: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=1920&q=90", featured: false, likes: 560,  downloads: 1300 },
    { id: 16, title: "Glass Building",        category: "architecture", thumb: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",  full: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=90", featured: false, likes: 490,  downloads: 1100 },
    { id: 17, title: "European Cathedral",    category: "architecture", thumb: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",  full: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90", featured: false, likes: 720,  downloads: 1600 },
    { id: 18, title: "Tokyo Tower",           category: "architecture", thumb: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",  full: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured: false, likes: 830,  downloads: 1900 },
    { id: 19, title: "Brooklyn Bridge",       category: "architecture", thumb: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=600&q=80",  full: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1920&q=90", featured: false, likes: 660,  downloads: 1450 },
    { id: 20, title: "Colosseum Rome",        category: "architecture", thumb: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",  full: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=90", featured: false, likes: 580,  downloads: 1250 },

    // Minimal (10)
    { id: 21, title: "White Marble",          category: "minimal",      thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  full: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90", featured: false, likes: 450,  downloads: 980 },
    { id: 22, title: "Simple Lines",          category: "minimal",      thumb: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&q=80",  full: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1920&q=90", featured: false, likes: 380,  downloads: 820 },
    { id: 23, title: "Soft Gradient",         category: "minimal",      thumb: "https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80",  full: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=90", featured: true,  likes: 1100, downloads: 2700 },
    { id: 24, title: "Clean Workspace",       category: "minimal",      thumb: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",  full: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1920&q=90", featured: false, likes: 340,  downloads: 740 },
    { id: 25, title: "Minimal Plant",         category: "minimal",      thumb: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",  full: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1920&q=90", featured: false, likes: 410,  downloads: 900 },
    { id: 26, title: "Geometric Shapes",      category: "minimal",      thumb: "https://images.unsplash.com/photo-1509537257950-20f875b03669?w=600&q=80",  full: "https://images.unsplash.com/photo-1509537257950-20f875b03669?w=1920&q=90", featured: false, likes: 360,  downloads: 780 },
    { id: 27, title: "Pastel Colors",         category: "minimal",      thumb: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80",  full: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=90", featured: false, likes: 480,  downloads: 1050 },
    { id: 28, title: "Single Leaf",           category: "minimal",      thumb: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80",  full: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1920&q=90", featured: false, likes: 320,  downloads: 700 },
    { id: 29, title: "White Dandelion",       category: "minimal",      thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",  full: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=90", featured: false, likes: 290,  downloads: 640 },
    { id: 30, title: "White Architecture",    category: "minimal",      thumb: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",  full: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=90", featured: false, likes: 510,  downloads: 1120 },

    // Space (10)
    { id: 31, title: "Milky Way Galaxy",      category: "space",        thumb: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",  full: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=90", featured: true,  likes: 2100, downloads: 5200 },
    { id: 32, title: "Earth From Space",      category: "space",        thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",  full: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90", featured: true,  likes: 1920, downloads: 4800 },
    { id: 33, title: "Nebula Colors",         category: "space",        thumb: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80",  full: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=90", featured: true,  likes: 2350, downloads: 6100 },
    { id: 34, title: "Saturn Rings",          category: "space",        thumb: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80",  full: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=90", featured: false, likes: 1450, downloads: 3400 },
    { id: 35, title: "Moon Surface",          category: "space",        thumb: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=600&q=80",  full: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=1920&q=90", featured: false, likes: 980,  downloads: 2400 },
    { id: 36, title: "Star Field",            category: "space",        thumb: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",  full: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=90", featured: false, likes: 1120, downloads: 2700 },
    { id: 37, title: "Solar Eclipse",         category: "space",        thumb: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=600&q=80",  full: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=1920&q=90", featured: false, likes: 870,  downloads: 2000 },
    { id: 38, title: "Astronaut Float",       category: "space",        thumb: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",  full: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=90", featured: true,  likes: 1680, downloads: 4000 },
    { id: 39, title: "Galaxy Spiral",         category: "space",        thumb: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80",  full: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920&q=90", featured: false, likes: 1250, downloads: 3000 },
    { id: 40, title: "Deep Space",            category: "space",        thumb: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80",  full: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=90", featured: false, likes: 960,  downloads: 2200 },

    // Abstract (10)
    { id: 41, title: "Fluid Motion",          category: "abstract",     thumb: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80",  full: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1920&q=90", featured: true,  likes: 1340, downloads: 3300 },
    { id: 42, title: "Color Splash",          category: "abstract",     thumb: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",  full: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&q=90", featured: false, likes: 890,  downloads: 2100 },
    { id: 43, title: "Digital Wave",          category: "abstract",     thumb: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&q=80",  full: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1920&q=90", featured: false, likes: 720,  downloads: 1700 },
    { id: 44, title: "Neon Glow",             category: "abstract",     thumb: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80",  full: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=90", featured: true,  likes: 1580, downloads: 3800 },
    { id: 45, title: "Crystal Formation",     category: "abstract",     thumb: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",  full: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1920&q=90", featured: false, likes: 640,  downloads: 1500 },
    { id: 46, title: "Smoke Art",             category: "abstract",     thumb: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=600&q=80",  full: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=1920&q=90", featured: false, likes: 560,  downloads: 1300 },
    { id: 47, title: "Ink Drop",              category: "abstract",     thumb: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",  full: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=90", featured: false, likes: 490,  downloads: 1100 },
    { id: 48, title: "Light Trails",          category: "abstract",     thumb: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=600&q=80",  full: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=1920&q=90", featured: false, likes: 680,  downloads: 1600 },
    { id: 49, title: "Fractal Pattern",       category: "abstract",     thumb: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80",  full: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1920&q=90", featured: false, likes: 420,  downloads: 950 },
    { id: 50, title: "Prism Colors",          category: "abstract",     thumb: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80",  full: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=90", featured: false, likes: 750,  downloads: 1750 },

    // Cars (10)
    { id: 51, title: "Lamborghini Gold",      category: "Cars",         thumb: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",  full: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90", featured: true,  likes: 2200, downloads: 5500 },
    { id: 52, title: "Lamborghini Red",       category: "Cars",         thumb: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&q=80",  full: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920&q=90", featured: true,  likes: 1980, downloads: 4900 },
    { id: 53, title: "Lamborghini Dark",      category: "Cars",         thumb: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80",  full: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1920&q=90", featured: false, likes: 1430, downloads: 3500 },
    { id: 54, title: "Porsche 911 GT",        category: "Cars",         thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",  full: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90", featured: true,  likes: 1870, downloads: 4600 },
    { id: 55, title: "Classic Red BMW",       category: "Cars",         thumb: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",  full: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90", featured: false, likes: 1200, downloads: 2900 },
    { id: 56, title: "BMW M4 Sports",         category: "Cars",         thumb: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&q=80",  full: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=90", featured: false, likes: 1050, downloads: 2500 },
    { id: 57, title: "White Audi Sport",      category: "Cars",         thumb: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",  full: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=90", featured: false, likes: 920,  downloads: 2200 },
    { id: 58, title: "Silver Mercedes",       category: "Cars",         thumb: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",  full: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=90", featured: false, likes: 840,  downloads: 2000 },
    { id: 59, title: "Mercedes AMG GT",       category: "Cars",         thumb: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",  full: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=90", featured: false, likes: 780,  downloads: 1850 },
    { id: 60, title: "Ferrari Supercar",      category: "Cars",         thumb: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",  full: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=90", featured: true,  likes: 2050, downloads: 5100 },

    // Anime (5)
    { id: 61, title: "Sakura Shrine",         category: "anime",        thumb: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",  full: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=90", featured: true,  likes: 1650, downloads: 4000 },
    { id: 62, title: "Neon Tokyo Street",     category: "anime",        thumb: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",  full: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured: false, likes: 1380, downloads: 3300 },
    { id: 63, title: "Temple at Dusk",        category: "anime",        thumb: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",  full: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1920&q=90", featured: false, likes: 1020, downloads: 2450 },
    { id: 64, title: "Japan Mountain View",   category: "anime",        thumb: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",  full: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90", featured: false, likes: 940,  downloads: 2200 },
    { id: 65, title: "Lantern Festival",      category: "anime",        thumb: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",  full: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=90", featured: false, likes: 1180, downloads: 2800 },

    // Dark (5)
    { id: 66, title: "Dark Forest",           category: "dark",         thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80&sat=-100",  full: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90", featured: false, likes: 980,  downloads: 2350 },
    { id: 67, title: "Midnight City",         category: "dark",         thumb: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&q=80",  full: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1920&q=90", featured: true,  likes: 1420, downloads: 3500 },
    { id: 68, title: "Dark Ocean",            category: "dark",         thumb: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&sat=-80",  full: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90", featured: false, likes: 860,  downloads: 2000 },
    { id: 69, title: "Shadow Architecture",   category: "dark",         thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&sat=-60",  full: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90", featured: false, likes: 740,  downloads: 1750 },
    { id: 70, title: "Void Space",            category: "dark",         thumb: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80",  full: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=90", featured: false, likes: 1100, downloads: 2650 },
];

// Alias for total count
const TOTAL_WALLPAPERS = WALLPAPERS.length;

// Device resolutions
const DEVICE_RESOLUTIONS = {
    mobile:  [{ label:'iPhone 15 Pro Max', width:1179, height:2556 }, { label:'Full HD Mobile', width:1080, height:1920 }, { label:'iPhone SE', width:750, height:1334 }],
    laptop:  [{ label:'MacBook Pro 16"', width:3456, height:2234 }, { label:'Full HD 1080p', width:1920, height:1080 }, { label:'QHD Display', width:2560, height:1600 }],
    desktop: [{ label:'4K Ultra HD', width:3840, height:2160 }, { label:'2K QHD', width:2560, height:1440 }, { label:'Ultrawide', width:3440, height:1440 }],
};

const CATEGORY_META = {
    all:          { icon:'✦', name:'All', desc:'Every wallpaper in one place', img:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80' },
    nature:       { icon:'🌿', name:'Nature', desc:'Mountains, forests, oceans & more', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    architecture: { icon:'🏛️', name:'Architecture', desc:'Cities, bridges & structures', img:'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&q=80' },
    minimal:      { icon:'◻️', name:'Minimal', desc:'Clean, simple & elegant designs', img:'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80' },
    space:        { icon:'🌌', name:'Space', desc:'Galaxies, nebulas & the cosmos', img:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80' },
    abstract:     { icon:'🎨', name:'Abstract', desc:'Fluid art, colors & light', img:'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&q=80' },
    Cars:         { icon:'🏎️', name:'Cars', desc:'Supercars, sports & luxury', img:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80' },
    anime:        { icon:'⛩️', name:'Anime', desc:'Japan, shrines & neon streets', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
    dark:         { icon:'🌑', name:'Dark', desc:'Moody, dark & cinematic scenes', img:'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&q=80' },
};

const COLLECTIONS = [
    { name:'Space Odyssey',     tag:'Editor\'s Pick', category:'space',    images: [WALLPAPERS[30].thumb, WALLPAPERS[31].thumb, WALLPAPERS[37].thumb] },
    { name:'Dark Mode Pack',    tag:'Trending',       category:'dark',     images: [WALLPAPERS[66].thumb, WALLPAPERS[67].thumb, WALLPAPERS[69].thumb] },
    { name:'Ultra Minimal',     tag:'Featured',       category:'minimal',  images: [WALLPAPERS[22].thumb, WALLPAPERS[26].thumb, WALLPAPERS[20].thumb] },
    { name:'Speed & Power',     tag:'Cars',           category:'Cars',     images: [WALLPAPERS[50].thumb, WALLPAPERS[51].thumb, WALLPAPERS[53].thumb] },
    { name:'Nature\'s Best',    tag:'Popular',        category:'nature',   images: [WALLPAPERS[0].thumb, WALLPAPERS[6].thumb, WALLPAPERS[9].thumb] },
    { name:'Abstract Dreams',   tag:'New',            category:'abstract', images: [WALLPAPERS[40].thumb, WALLPAPERS[43].thumb, WALLPAPERS[41].thumb] },
];

// ==================== STATE ====================
let currentFilter = 'all';
let currentWallpaper = null;
let currentWallpaperIndex = 0;
let currentDevice = 'laptop';
let currentView = 'masonry';
let currentSort = 'default';
let favourites = JSON.parse(localStorage.getItem('wv_favourites') || '[]');
let filteredWallpapers = [...WALLPAPERS];
let searchFocusIndex = -1;

// ==================== DOM ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==================== PARTICLE SYSTEM ====================
function initParticles() {
    const canvas = $('#particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [], animId, w, h;

    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w; this.y = Math.random() * h;
            this.size = Math.random() * 1.8 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.speedY = (Math.random() - 0.5) * 0.25;
            this.pulse = Math.random() * Math.PI * 2;
            this.hue = Math.random() > 0.6 ? 240 : (Math.random() > 0.5 ? 280 : 190);
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            this.pulse += 0.018;
            this.opacity = 0.12 + Math.sin(this.pulse) * 0.12;
            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`;
            ctx.fill();
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx+dy*dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(99,102,241,${0.05*(1-dist/120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function init() {
        resize();
        const count = Math.min(70, Math.floor((w * h) / 18000));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function animate() { ctx.clearRect(0,0,w,h); particles.forEach(p=>{p.update();p.draw();}); connectParticles(); requestAnimationFrame(animate); }
    init(); animate();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 200); });
}

// ==================== CUSTOM CURSOR ====================
function initCursor() {
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) return;
    const core = $('#cursorCore'), glow = $('#cursorGlow'), trailCanvas = $('#cursorTrail');
    if (!core || !glow || !trailCanvas) return;
    const ctx = trailCanvas.getContext('2d');
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0, trail = [];

    function resizeTrail() { trailCanvas.width = window.innerWidth; trailCanvas.height = window.innerHeight; }
    resizeTrail(); window.addEventListener('resize', resizeTrail);

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        core.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
        for (let i = 0; i < 2; i++) {
            trail.push({ x: mouseX + (Math.random()-0.5)*5, y: mouseY + (Math.random()-0.5)*5, size: Math.random()*2.5+0.8, life:1, decay: Math.random()*0.03+0.02, vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4, hue: Math.random() > 0.5 ? 240 : 280 });
        }
    });

    (function animateGlow() { glowX += (mouseX-glowX)*0.1; glowY += (mouseY-glowY)*0.1; glow.style.transform = `translate(${glowX-25}px, ${glowY-25}px)`; requestAnimationFrame(animateGlow); })();

    (function drawTrail() {
        ctx.clearRect(0,0,trailCanvas.width,trailCanvas.height);
        trail = trail.filter(p=>p.life>0);
        trail.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.life-=p.decay; p.size*=0.97; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fillStyle=`hsla(${p.hue},80%,65%,${p.life*0.5})`; ctx.fill(); });
        if (trail.length > 200) trail.splice(0, trail.length-200);
        requestAnimationFrame(drawTrail);
    })();

    const hover = 'a,button,.wallpaper-card,.category-chip,.resolution-btn,.view-btn,.social-link,.trending-card,.collection-card,.category-flip-card';
    document.addEventListener('mouseover', e => { if (e.target.closest(hover)) { core.classList.add('hover'); glow.classList.add('hover'); } });
    document.addEventListener('mouseout',  e => { if (e.target.closest(hover)) { core.classList.remove('hover'); glow.classList.remove('hover'); } });
    document.addEventListener('mousedown', () => core.classList.add('click'));
    document.addEventListener('mouseup',   () => core.classList.remove('click'));
}

// ==================== HEADER ====================
function initHeader() {
    const header = $('#mainHeader');
    window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); }, { passive: true });

    // Active nav link on scroll
    const sections = ['home','trending','gallery','collections'];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(id => { const el = $(`#${id}`); if (el) observer.observe(el); });
}

// ==================== THEME TOGGLE ====================
function initTheme() {
    const btn = $('#themeToggle');
    const saved = localStorage.getItem('wv_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    btn?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('wv_theme', next);
    });
}

// ==================== HERO BACKGROUND SLIDESHOW ====================
function initHeroBg() {
    const featuredImgs = WALLPAPERS.filter(w => w.featured).map(w => w.full);
    const el = $('#heroBgSlideshow');
    if (!el) return;
    let idx = 0;
    function setImg() {
        el.style.backgroundImage = `url(${featuredImgs[idx]})`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.transition = 'background-image 1.5s ease';
        idx = (idx + 1) % featuredImgs.length;
    }
    setImg();
    setInterval(setImg, 6000);
}

// ==================== HERO SEARCH ====================
function initHeroSearch() {
    const input = $('#heroSearchInput');
    const btn   = $('#heroSearchBtn');
    const sugg  = $('#searchSuggestions');

    if (!input) return;

    // Quick tag buttons
    $$('.search-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            input.value = tag.dataset.query;
            performHeroSearch(tag.dataset.query);
        });
    });

    // Input suggestions
    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) { sugg.classList.remove('visible'); return; }
        const matches = WALLPAPERS.filter(w => w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q)).slice(0, 6);
        if (!matches.length) { sugg.classList.remove('visible'); return; }

        sugg.innerHTML = matches.map((w, i) => `
            <div class="suggestion-item" data-id="${w.id}" data-index="${i}">
                <img class="suggest-icon" src="${w.thumb}" alt="${w.title}" loading="lazy">
                <span>${highlightMatch(w.title, q)} <small style="opacity:0.5">— ${w.category}</small></span>
            </div>
        `).join('');
        sugg.classList.add('visible');
        searchFocusIndex = -1;

        sugg.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                input.value = '';
                sugg.classList.remove('visible');
                openPreview(+item.dataset.id);
            });
        });
    });

    // Keyboard nav in suggestions
    input.addEventListener('keydown', (e) => {
        const items = sugg.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown') { e.preventDefault(); searchFocusIndex = Math.min(searchFocusIndex+1, items.length-1); items.forEach((it,i)=>it.classList.toggle('focused',i===searchFocusIndex)); }
        if (e.key === 'ArrowUp')   { e.preventDefault(); searchFocusIndex = Math.max(searchFocusIndex-1, -1); items.forEach((it,i)=>it.classList.toggle('focused',i===searchFocusIndex)); }
        if (e.key === 'Enter') { if (searchFocusIndex >= 0 && items[searchFocusIndex]) { items[searchFocusIndex].click(); } else { performHeroSearch(input.value); } }
        if (e.key === 'Escape') { sugg.classList.remove('visible'); input.blur(); }
    });

    document.addEventListener('click', (e) => { if (!e.target.closest('#heroSearch') && !e.target.closest('#searchSuggestions')) sugg.classList.remove('visible'); });

    btn?.addEventListener('click', () => performHeroSearch(input.value));

    function performHeroSearch(query) {
        sugg.classList.remove('visible');
        if (!query.trim()) return;
        // Set gallery search input and scroll
        const gallerySearch = $('#searchInput');
        if (gallerySearch) gallerySearch.value = query;
        currentFilter = 'all';
        $$('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
        filterAndRender();
        document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function highlightMatch(text, query) {
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const items = $$('.stat-item[data-target]');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix || '';
                const numEl = el.querySelector('.stat-number');
                animateCount(numEl, 0, target, suffix, 1800);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    items.forEach(el => observer.observe(el));
}

function animateCount(el, from, to, suffix, duration) {
    const start = performance.now();
    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
        const current = Math.floor(from + (to - from) * eased);
        el.textContent = current.toLocaleString() + (progress >= 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ==================== TRENDING CAROUSEL ====================
function initTrendingCarousel() {
    const carousel = $('#trendingCarousel');
    if (!carousel) return;

    const trending = [...WALLPAPERS].sort((a,b) => b.likes - a.likes).slice(0, 12);

    carousel.innerHTML = trending.map((wp, i) => `
        <div class="trending-card" onclick="openPreview(${wp.id})">
            <img src="${wp.thumb}" alt="${wp.title}" loading="lazy">
            <div class="trending-card-overlay">
                <div class="trending-card-rank">#${i+1}</div>
                <div class="trending-card-title">${wp.title}</div>
                <div class="trending-card-cat">${wp.category}</div>
            </div>
        </div>
    `).join('');

    // Drag to scroll
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; carousel.style.cursor='grabbing'; });
    document.addEventListener('mouseup', () => { isDown = false; carousel.style.cursor='grab'; });
    carousel.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - carousel.offsetLeft; const walk = (x - startX) * 2; carousel.scrollLeft = scrollLeft - walk; });

    // Touch scroll
    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].pageX; });
    carousel.addEventListener('touchmove', e => { const diff = touchStartX - e.touches[0].pageX; carousel.scrollLeft += diff * 0.5; touchStartX = e.touches[0].pageX; });
}

// ==================== CATEGORY FLIP CARDS ====================
function initCategoryCards() {
    const grid = $('#categoriesGrid');
    if (!grid) return;

    const cats = Object.entries(CATEGORY_META).filter(([k]) => k !== 'all');

    grid.innerHTML = cats.map(([key, meta]) => {
        const count = key === 'all' ? WALLPAPERS.length : WALLPAPERS.filter(w => w.category === key).length;
        return `
        <div class="category-flip-card" onclick="filterByCategory('${key}')">
            <div class="category-flip-inner">
                <div class="category-flip-front">
                    <img src="${meta.img}" alt="${meta.name}" loading="lazy">
                    <div class="category-flip-front-overlay">
                        <div class="category-flip-icon">${meta.icon}</div>
                        <div class="category-flip-name">${meta.name}</div>
                    </div>
                </div>
                <div class="category-flip-back">
                    <div class="category-flip-icon">${meta.icon}</div>
                    <h3>${meta.name}</h3>
                    <div class="category-flip-count">${count}</div>
                    <div class="category-flip-desc">${meta.desc}</div>
                    <button class="category-flip-btn">Browse →</button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ==================== COLLECTIONS ====================
function initCollections() {
    const grid = $('#collectionsGrid');
    if (!grid) return;

    grid.innerHTML = COLLECTIONS.map(col => `
        <div class="collection-card" onclick="filterByCategory('${col.category}')">
            <div class="collection-images">
                ${col.images.map(src => `<img src="${src}" alt="${col.name}" loading="lazy">`).join('')}
            </div>
            <div class="collection-overlay">
                <div class="collection-tag">${col.tag}</div>
                <div class="collection-name">${col.name}</div>
                <div class="collection-count">${WALLPAPERS.filter(w=>w.category===col.category).length} wallpapers</div>
            </div>
        </div>
    `).join('');
}

// ==================== GALLERY RENDERING ====================
function getThumbUrl(url, size = 600) {
    const base = url.split('?')[0];
    if (base.includes('unsplash.com')) return `${base}?w=${size}&q=80&auto=format`;
    return url;
}

function renderGallery(wallpapers) {
    const grid = $('#galleryGrid');
    const empty = $('#galleryEmpty');
    if (!grid) return;

    grid.innerHTML = '';

    if (!wallpapers.length) {
        empty.style.display = 'block';
        $('#visibleCount').textContent = '0';
        return;
    }
    empty.style.display = 'none';
    $('#visibleCount').textContent = wallpapers.length;

    const fragment = document.createDocumentFragment();

    wallpapers.forEach((wp, index) => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.dataset.id = wp.id;
        card.style.transitionDelay = `${Math.min(index * 0.04, 0.5)}s`;

        const isFav = favourites.includes(wp.id);
        const thumbUrl = getThumbUrl(wp.thumb);

        card.innerHTML = `
            <button class="card-fav-btn${isFav ? ' active' : ''}" data-id="${wp.id}" title="${isFav ? 'Remove from favourites' : 'Add to favourites'}" onclick="event.stopPropagation(); toggleFav(${wp.id}, this)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <div class="card-image">
                <img src="${thumbUrl}" alt="${wp.title}" loading="lazy" decoding="async" width="600" height="400" style="background:var(--bg-tertiary);">
                <div class="card-overlay">
                    <div class="overlay-top">
                        <span class="overlay-badge quality">4K</span>
                        <span class="overlay-badge">${wp.category}</span>
                    </div>
                    <div class="overlay-info">
                        <h3 class="overlay-title">${wp.title}</h3>
                        <p class="overlay-cat">${wp.category} • ${(wp.likes/1000).toFixed(1)}K likes</p>
                        <div class="overlay-actions">
                            <button class="action-btn btn-preview" onclick="event.stopPropagation(); openPreview(${wp.id})">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                Preview
                            </button>
                            <button class="action-btn btn-download" onclick="event.stopPropagation(); quickDownload(${wp.id})">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const img = card.querySelector('img');
        const cardImg = card.querySelector('.card-image');
        img.addEventListener('load', () => cardImg.classList.add('loaded'));
        if (img.complete) cardImg.classList.add('loaded');

        card.addEventListener('click', () => openPreview(wp.id));

        // 3D Tilt
        init3DTilt(card);

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    requestAnimationFrame(observeCards);
}

// ==================== 3D CARD TILT ====================
function init3DTilt(card) {
    if (window.matchMedia('(hover: none)').matches) return;
    let animFrame;
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    function lerp(a, b, t) { return a + (b - a) * t; }

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        targetX = ((e.clientY - cy) / rect.height) * 12;
        targetY = -((e.clientX - cx) / rect.width) * 12;

        if (!animFrame) {
            animFrame = requestAnimationFrame(updateTilt);
        }
    });

    card.addEventListener('mouseleave', () => {
        targetX = 0; targetY = 0;
        if (!animFrame) animFrame = requestAnimationFrame(updateTilt);
    });

    function updateTilt() {
        currentX = lerp(currentX, targetX, 0.12);
        currentY = lerp(currentY, targetY, 0.12);

        if (Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
            card.style.transform = `perspective(800px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale(1.02)`;
            animFrame = requestAnimationFrame(updateTilt);
        } else {
            currentX = targetX; currentY = targetY;
            if (targetX === 0 && targetY === 0) {
                card.style.transform = '';
            } else {
                card.style.transform = `perspective(800px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale(1.02)`;
            }
            animFrame = null;
        }
    }
}

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObserver.unobserve(e.target); } });
}, { rootMargin: '60px', threshold: 0.08 });

function observeCards() { $$('.wallpaper-card').forEach(c => { c.classList.remove('revealed'); revealObserver.observe(c); }); }

// ==================== FILTERING & SORTING ====================
function filterAndRender() {
    const searchTerm = $('#searchInput')?.value.toLowerCase().trim() || '';
    let result = [...WALLPAPERS];

    // Filter
    if (currentFilter === 'favourites') {
        result = result.filter(w => favourites.includes(w.id));
    } else if (currentFilter !== 'all') {
        result = result.filter(w => w.category === currentFilter);
    }

    // Search
    if (searchTerm) {
        result = result.filter(w => w.title.toLowerCase().includes(searchTerm) || w.category.toLowerCase().includes(searchTerm));
    }

    // Sort
    if (currentSort === 'popular') result.sort((a,b) => b.likes - a.likes);
    else if (currentSort === 'newest') result.sort((a,b) => b.id - a.id);
    else if (currentSort === 'az') result.sort((a,b) => a.title.localeCompare(b.title));

    filteredWallpapers = result;
    renderGallery(result);
}

// Init filter chips
function initFilters() {
    // Update fav count chip
    const favChip = document.querySelector('.category-chip[data-filter="favourites"] .chip-count');
    if (favChip) favChip.textContent = favourites.length;

    $$('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            $$('.category-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            filterAndRender();
        });
    });

    // Search input
    let searchTimer;
    $('#searchInput')?.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(filterAndRender, 220);
    });

    // Sort
    $('#sortSelect')?.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterAndRender();
    });

    // View toggle
    $$('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            const grid = $('#galleryGrid');
            if (currentView === 'grid') {
                grid.classList.add('grid-view');
            } else {
                grid.classList.remove('grid-view');
            }
            requestAnimationFrame(observeCards);
        });
    });

    // Ctrl+K / Cmd+K
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); $('#searchInput')?.focus(); }
        if (e.key === 'Escape') {
            if ($('#previewModal')?.classList.contains('active')) closeModal();
            else { const si = $('#searchInput'); if (document.activeElement === si) { si.blur(); si.value = ''; filterAndRender(); } }
        }
        if (e.key === 'ArrowLeft' && $('#previewModal')?.classList.contains('active')) navigateModal(-1);
        if (e.key === 'ArrowRight' && $('#previewModal')?.classList.contains('active')) navigateModal(1);
    });
}

function clearFilters() {
    currentFilter = 'all';
    currentSort = 'default';
    const si = $('#searchInput'); if (si) si.value = '';
    const ss = $('#sortSelect'); if (ss) ss.value = 'default';
    $$('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
    filterAndRender();
}

function filterByCategory(cat) {
    currentFilter = cat;
    $$('.category-chip').forEach(c => c.classList.toggle('active', c.dataset.filter === cat));
    filterAndRender();
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==================== FAVOURITES ====================
function toggleFav(id, btn) {
    const idx = favourites.indexOf(id);
    if (idx >= 0) {
        favourites.splice(idx, 1);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
        btn.title = 'Add to favourites';
    } else {
        favourites.push(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        btn.title = 'Remove from favourites';
        // Heart animation
        btn.style.transform = 'scale(1.4)';
        setTimeout(() => btn.style.transform = '', 300);
    }
    localStorage.setItem('wv_favourites', JSON.stringify(favourites));
    updateFavCount();
    // Update preview fav btn if open
    if (currentWallpaper?.id === id) updatePreviewFavBtn();
}

function updateFavCount() {
    const count = favourites.length;
    const badge = $('#favCount');
    if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
    const chip = document.querySelector('.category-chip[data-filter="favourites"] .chip-count');
    if (chip) chip.textContent = count;
}

function updatePreviewFavBtn() {
    const btn = $('#previewFavBtn');
    if (!btn || !currentWallpaper) return;
    const isFav = favourites.includes(currentWallpaper.id);
    btn.classList.toggle('active', isFav);
    btn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
}

// ==================== PREVIEW MODAL ====================
function openPreview(id) {
    currentWallpaper = WALLPAPERS.find(w => w.id === id);
    if (!currentWallpaper) return;

    // Find index in filtered list
    currentWallpaperIndex = filteredWallpapers.findIndex(w => w.id === id);
    if (currentWallpaperIndex < 0) currentWallpaperIndex = WALLPAPERS.findIndex(w => w.id === id);

    const modal = $('#previewModal');
    const previewImg = $('#previewImage');
    const loading = $('#previewLoading');

    $('#modalTitle').textContent = currentWallpaper.title;
    $('#modalCategory').textContent = currentWallpaper.category;

    // Show loading
    loading.classList.add('active');
    previewImg.style.opacity = '0.2';

    // Load full image
    const img = new Image();
    img.onload = () => { previewImg.src = currentWallpaper.full; previewImg.style.opacity = '1'; loading.classList.remove('active'); };
    img.onerror = () => { previewImg.src = currentWallpaper.thumb; previewImg.style.opacity = '1'; loading.classList.remove('active'); };
    img.src = currentWallpaper.full;
    previewImg.src = currentWallpaper.thumb; // show thumb while loading

    updatePreviewFavBtn();
    autoSelectDeviceTab();
    updateResolutionOptions();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    $('#previewModal')?.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateModal(dir) {
    const list = filteredWallpapers.length > 0 ? filteredWallpapers : WALLPAPERS;
    currentWallpaperIndex = ((currentWallpaperIndex + dir) + list.length) % list.length;
    openPreview(list[currentWallpaperIndex].id);
}

// Modal backdrop click
$('#modalBackdrop')?.addEventListener('click', closeModal);

// Modal navigation buttons
$('#modalPrev')?.addEventListener('click', () => navigateModal(-1));
$('#modalNext')?.addEventListener('click', () => navigateModal(1));

function autoSelectDeviceTab() {
    const w = window.innerWidth;
    const device = w < 768 ? 'mobile' : w < 1200 ? 'laptop' : 'desktop';
    currentDevice = device;
    $$('.device-tab').forEach(t => t.classList.toggle('active', t.dataset.device === device));
}

$$('.device-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.device-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentDevice = tab.dataset.device;
        updateResolutionOptions();
    });
});

function updateResolutionOptions() {
    const res = DEVICE_RESOLUTIONS[currentDevice] || DEVICE_RESOLUTIONS.laptop;
    const el = $('#resolutionOptions');
    if (!el) return;
    el.innerHTML = res.map(r => `
        <button class="resolution-btn" data-width="${r.width}" data-height="${r.height}" data-label="${r.label}">
            <div class="resolution-info">
                <span class="resolution-label">${r.label}</span>
                <span class="resolution-size">${r.width} × ${r.height}</span>
            </div>
            <div class="download-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
        </button>
    `).join('');

    $$('.resolution-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault(); e.stopPropagation();
            await downloadWallpaper(btn.dataset.width, btn.dataset.height, btn.dataset.label, btn);
        });
    });
}

// Preview Fav & Share
$('#previewFavBtn')?.addEventListener('click', () => {
    if (!currentWallpaper) return;
    const cardFavBtn = document.querySelector(`.card-fav-btn[data-id="${currentWallpaper.id}"]`);
    if (cardFavBtn) toggleFav(currentWallpaper.id, cardFavBtn);
    else {
        const idx = favourites.indexOf(currentWallpaper.id);
        if (idx >= 0) { favourites.splice(idx, 1); } else { favourites.push(currentWallpaper.id); }
        localStorage.setItem('wv_favourites', JSON.stringify(favourites));
        updateFavCount();
        updatePreviewFavBtn();
    }
});

$('#previewShareBtn')?.addEventListener('click', async () => {
    if (!currentWallpaper) return;
    const shareData = { title: currentWallpaper.title, text: `Check out "${currentWallpaper.title}" on WallVault!`, url: window.location.href };
    if (navigator.share) {
        try { await navigator.share(shareData); } catch(e) {}
    } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to clipboard!');
    }
});

// Modal swipe (touch)
function initModalSwipe() {
    const modal = $('#modalContent');
    if (!modal) return;
    let startY = 0, startX = 0;
    modal.addEventListener('touchstart', e => { startY = e.touches[0].clientY; startX = e.touches[0].clientX; }, { passive: true });
    modal.addEventListener('touchend', e => {
        const dy = e.changedTouches[0].clientY - startY;
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dy) > Math.abs(dx) && dy > 80) closeModal();
        else if (Math.abs(dx) > Math.abs(dy)) {
            if (dx < -60) navigateModal(1);
            else if (dx > 60) navigateModal(-1);
        }
    }, { passive: true });
}

// ==================== DOWNLOAD ====================
async function downloadWallpaper(width, height, label, btn) {
    if (!currentWallpaper) return;
    const orig = btn.innerHTML;
    btn.style.pointerEvents = 'none'; btn.style.opacity = '0.65';
    btn.innerHTML = `<div class="resolution-info"><span class="resolution-label">Downloading…</span><span class="resolution-size">Please wait</span></div><div class="download-arrow"><div class="preview-spinner" style="width:16px;height:16px;border-width:2px;"></div></div>`;
    showToast(`Preparing ${label}…`);
    try {
        const base = currentWallpaper.full.split('?')[0];
        const imageUrl = base.includes('unsplash.com') ? `${base}?w=${width}&h=${height}&fit=crop&q=90&auto=format` : currentWallpaper.full;
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Network error');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g,'_')}_${width}x${height}.jpg`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`✓ ${label} downloaded!`, 'success');
        btn.innerHTML = `<div class="resolution-info"><span class="resolution-label">Downloaded!</span><span class="resolution-size">${width} × ${height}</span></div><div class="download-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg></div>`;
        setTimeout(() => { btn.innerHTML = orig; btn.style.pointerEvents=''; btn.style.opacity='1'; }, 2500);
    } catch (err) {
        btn.innerHTML = orig; btn.style.pointerEvents=''; btn.style.opacity='1';
        showToast('Download failed. Try again.', 'error');
    }
}

function quickDownload(id) {
    currentWallpaper = WALLPAPERS.find(w => w.id === id);
    if (!currentWallpaper) return;
    const w = window.innerWidth;
    const device = w < 768 ? 'mobile' : w < 1200 ? 'laptop' : 'desktop';
    const res = DEVICE_RESOLUTIONS[device][1]; // Full HD
    showToast(`Preparing ${res.label}…`);
    (async () => {
        try {
            const base = currentWallpaper.full.split('?')[0];
            const url = base.includes('unsplash.com') ? `${base}?w=${res.width}&h=${res.height}&fit=crop&q=90&auto=format` : currentWallpaper.full;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error();
            const blob = await resp.blob();
            const objUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = objUrl; a.download = `WallVault_${currentWallpaper.title.replace(/\s+/g,'_')}_${res.width}x${res.height}.jpg`;
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            URL.revokeObjectURL(objUrl);
            showToast(`✓ Downloaded!`, 'success');
        } catch { showToast('Download failed.', 'error'); }
    })();
}

// ==================== TOAST ====================
function showToast(msg, type = '') {
    const toast = $('#toast');
    if (!toast) return;
    toast.querySelector('.toast-message').textContent = msg;
    toast.className = `toast show ${type}`;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==================== BACK TO TOP ====================
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

window.addEventListener('scroll', () => {
    const btn = $('#backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const btn = $('#mobileMenuBtn'), menu = $('#mobileMenu'), close = $('#mobileMenuClose'), backdrop = $('#mobileMenuBackdrop');
    if (!btn) return;
    const open = () => { menu.classList.add('active'); btn.classList.add('active'); document.body.style.overflow='hidden'; };
    const closeMenu = () => { menu.classList.remove('active'); btn.classList.remove('active'); document.body.style.overflow=''; };
    btn.addEventListener('click', () => menu.classList.contains('active') ? closeMenu() : open());
    close?.addEventListener('click', closeMenu);
    backdrop?.addEventListener('click', closeMenu);
    $$('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));
}

// ==================== NEWSLETTER ====================
function initNewsletter() {
    const form = $('#newsletterForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = $('#nlEmail')?.value;
        if (!email) return;
        showToast(`🎉 Welcome! You're subscribed with ${email}`, 'success');
        form.reset();
    });
}

// ==================== IMAGE PREFETCH ====================
function prefetchImages() {
    WALLPAPERS.slice(0, 6).forEach(wp => {
        const link = document.createElement('link');
        link.rel = 'preload'; link.as = 'image';
        link.href = getThumbUrl(wp.thumb, 600);
        document.head.appendChild(link);
    });
}

// ==================== BOTTOM NAV ====================
function initBottomNav() {
    const items = $$('.bottom-nav-item');
    window.addEventListener('scroll', () => {
        const sections = ['home','trending','gallery','collections'];
        let active = 'home';
        sections.forEach(id => {
            const el = $(`#${id}`);
            if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) active = id;
        });
        items.forEach(item => {
            item.classList.toggle('active', item.id === `bn${active.charAt(0).toUpperCase()}${active.slice(1)}`);
        });
    }, { passive: true });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    initTheme();

    // Core systems
    initCursor();
    initParticles();
    initHeader();
    initMobileMenu();
    initModalSwipe();

    // Hero
    initHeroBg();
    initHeroSearch();

    // Sections
    initTrendingCarousel();
    initCategoryCards();
    initCollections();

    // Gallery
    initFilters();
    prefetchImages();
    filterAndRender();

    // Extras
    initCounters();
    initNewsletter();
    initBottomNav();

    // Update fav count on load
    updateFavCount();

    // Total count
    const tc = $('#totalCount');
    if (tc) tc.textContent = TOTAL_WALLPAPERS;
    const ca = $('#countAll');
    if (ca) ca.textContent = TOTAL_WALLPAPERS;

    // Logo click
    $('#logoBtn')?.addEventListener('click', scrollToTop);
    $('#favBtn')?.addEventListener('click', () => filterByCategory('favourites'));
});
