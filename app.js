// =============================================
// WallVault 3.0 — Complete Cinematic Engine
// Netflix × Awwwards × Cinema4D × VFX Level
// =============================================

// ==================== WALLPAPER DATA ====================
const WALLPAPERS = [
    // ── NATURE (10)
    { id:1,  title:"Mountain Sunrise",    category:"nature",       thumb:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", full:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90", featured:true,  likes:1240, downloads:3200 },
    { id:2,  title:"Forest Morning Mist", category:"nature",       thumb:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", full:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90", featured:false, likes:890,  downloads:2100 },
    { id:3,  title:"Ocean Waves",         category:"nature",       thumb:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80", full:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90", featured:false, likes:760,  downloads:1800 },
    { id:4,  title:"Northern Lights",     category:"nature",       thumb:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80", full:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=90", featured:true,  likes:1850, downloads:4200 },
    { id:5,  title:"Cherry Blossoms",     category:"nature",       thumb:"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80", full:"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=90", featured:false, likes:920,  downloads:2300 },
    { id:6,  title:"Tropical Beach",      category:"nature",       thumb:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", full:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90", featured:true,  likes:1560, downloads:3600 },
    { id:7,  title:"Waterfall Paradise",  category:"nature",       thumb:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&q=80", full:"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1920&q=90", featured:true,  likes:1100, downloads:2800 },
    { id:8,  title:"Desert Dunes",        category:"nature",       thumb:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80", full:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=90", featured:false, likes:680,  downloads:1500 },
    { id:9,  title:"Lavender Fields",     category:"nature",       thumb:"https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80", full:"https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&q=90", featured:false, likes:780,  downloads:1900 },
    { id:10, title:"Autumn Road",         category:"nature",       thumb:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", full:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90", featured:false, likes:540,  downloads:1200 },

    // ── ARCHITECTURE (10)
    { id:11, title:"Modern Skyscraper",   category:"architecture", thumb:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", full:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90", featured:false, likes:640,  downloads:1400 },
    { id:12, title:"Golden Gate Bridge",  category:"architecture", thumb:"https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80", full:"https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1920&q=90", featured:true,  likes:1320, downloads:3100 },
    { id:13, title:"City Night Lights",   category:"architecture", thumb:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80", full:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=90", featured:true,  likes:1740, downloads:4100 },
    { id:14, title:"Ancient Temple",      category:"architecture", thumb:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", full:"https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=90", featured:false, likes:870,  downloads:2000 },
    { id:15, title:"Spiral Staircase",    category:"architecture", thumb:"https://images.unsplash.com/photo-1520942702018-0862200e6873?w=600&q=80", full:"https://images.unsplash.com/photo-1520942702018-0862200e6873?w=1920&q=90", featured:false, likes:560,  downloads:1300 },
    { id:16, title:"Glass Building",      category:"architecture", thumb:"https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80", full:"https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=90", featured:false, likes:490,  downloads:1100 },
    { id:17, title:"European Cathedral",  category:"architecture", thumb:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", full:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=90", featured:false, likes:720,  downloads:1600 },
    { id:18, title:"Tokyo Tower",         category:"architecture", thumb:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", full:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured:false, likes:830,  downloads:1900 },
    { id:19, title:"Brooklyn Bridge",     category:"architecture", thumb:"https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=600&q=80", full:"https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1920&q=90", featured:false, likes:660,  downloads:1450 },
    { id:20, title:"Colosseum Rome",      category:"architecture", thumb:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", full:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=90", featured:false, likes:580,  downloads:1250 },

    // ── MINIMAL (10)
    { id:21, title:"White Marble",        category:"minimal",      thumb:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", full:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90", featured:false, likes:450,  downloads:980 },
    { id:22, title:"Soft Gradient",       category:"minimal",      thumb:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80", full:"https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=90", featured:true,  likes:1100, downloads:2700 },
    { id:23, title:"Simple Lines",        category:"minimal",      thumb:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&q=80", full:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1920&q=90", featured:false, likes:380,  downloads:820 },
    { id:24, title:"Geometric Shapes",    category:"minimal",      thumb:"https://images.unsplash.com/photo-1509537257950-20f875b03669?w=600&q=80", full:"https://images.unsplash.com/photo-1509537257950-20f875b03669?w=1920&q=90", featured:false, likes:360,  downloads:780 },
    { id:25, title:"Pastel Colors",       category:"minimal",      thumb:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80", full:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=90", featured:false, likes:480,  downloads:1050 },
    { id:26, title:"Single Leaf",         category:"minimal",      thumb:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80", full:"https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1920&q=90", featured:false, likes:320,  downloads:700 },
    { id:27, title:"Clean Workspace",     category:"minimal",      thumb:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80", full:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1920&q=90", featured:false, likes:340,  downloads:740 },
    { id:28, title:"Minimal Plant",       category:"minimal",      thumb:"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80", full:"https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1920&q=90", featured:false, likes:410,  downloads:900 },
    { id:29, title:"White Dandelion",     category:"minimal",      thumb:"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80", full:"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=90", featured:false, likes:290,  downloads:640 },
    { id:30, title:"White Architecture",  category:"minimal",      thumb:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80", full:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=90", featured:false, likes:510,  downloads:1120 },

    // ── SPACE (10)
    { id:31, title:"Milky Way Galaxy",    category:"space",        thumb:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80", full:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=90", featured:true,  likes:2100, downloads:5200 },
    { id:32, title:"Earth From Space",    category:"space",        thumb:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", full:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90", featured:true,  likes:1920, downloads:4800 },
    { id:33, title:"Nebula Colors",       category:"space",        thumb:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80", full:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=90", featured:true,  likes:2350, downloads:6100 },
    { id:34, title:"Saturn Rings",        category:"space",        thumb:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80", full:"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=90", featured:false, likes:1450, downloads:3400 },
    { id:35, title:"Moon Surface",        category:"space",        thumb:"https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=600&q=80", full:"https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=1920&q=90", featured:false, likes:980,  downloads:2400 },
    { id:36, title:"Star Field",          category:"space",        thumb:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", full:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=90", featured:false, likes:1120, downloads:2700 },
    { id:37, title:"Astronaut Float",     category:"space",        thumb:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80", full:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=90", featured:true,  likes:1680, downloads:4000 },
    { id:38, title:"Galaxy Spiral",       category:"space",        thumb:"https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&q=80", full:"https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1920&q=90", featured:false, likes:1250, downloads:3000 },
    { id:39, title:"Deep Space",          category:"space",        thumb:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80", full:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=90", featured:false, likes:960,  downloads:2200 },
    { id:40, title:"Solar Eclipse",       category:"space",        thumb:"https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=600&q=80", full:"https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=1920&q=90", featured:false, likes:870,  downloads:2000 },

    // ── ABSTRACT (10)
    { id:41, title:"Fluid Motion",        category:"abstract",     thumb:"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80", full:"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=1920&q=90", featured:true,  likes:1340, downloads:3300 },
    { id:42, title:"Neon Glow",           category:"abstract",     thumb:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80", full:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=90", featured:true,  likes:1580, downloads:3800 },
    { id:43, title:"Color Splash",        category:"abstract",     thumb:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", full:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&q=90", featured:false, likes:890,  downloads:2100 },
    { id:44, title:"Digital Wave",        category:"abstract",     thumb:"https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600&q=80", full:"https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1920&q=90", featured:false, likes:720,  downloads:1700 },
    { id:45, title:"Crystal Formation",   category:"abstract",     thumb:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80", full:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1920&q=90", featured:false, likes:640,  downloads:1500 },
    { id:46, title:"Smoke Art",           category:"abstract",     thumb:"https://images.unsplash.com/photo-1507908708918-778587c9e563?w=600&q=80", full:"https://images.unsplash.com/photo-1507908708918-778587c9e563?w=1920&q=90", featured:false, likes:560,  downloads:1300 },
    { id:47, title:"Prism Colors",        category:"abstract",     thumb:"https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80", full:"https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=90", featured:false, likes:750,  downloads:1750 },
    { id:48, title:"Light Trails",        category:"abstract",     thumb:"https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=600&q=80", full:"https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=1920&q=90", featured:false, likes:680,  downloads:1600 },
    { id:49, title:"Ink Drop",            category:"abstract",     thumb:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80", full:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=90", featured:false, likes:490,  downloads:1100 },
    { id:50, title:"Fractal Pattern",     category:"abstract",     thumb:"https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&q=80", full:"https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=1920&q=90", featured:false, likes:420,  downloads:950 },

    // ── CARS (10)
    { id:51, title:"Lamborghini Gold",    category:"Cars",         thumb:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", full:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90", featured:true,  likes:2200, downloads:5500 },
    { id:52, title:"Lamborghini Red",     category:"Cars",         thumb:"https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&q=80", full:"https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1920&q=90", featured:true,  likes:1980, downloads:4900 },
    { id:53, title:"Porsche 911 GT",      category:"Cars",         thumb:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", full:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90", featured:true,  likes:1870, downloads:4600 },
    { id:54, title:"Classic Red BMW",     category:"Cars",         thumb:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80", full:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90", featured:false, likes:1200, downloads:2900 },
    { id:55, title:"Ferrari Supercar",    category:"Cars",         thumb:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", full:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=90", featured:true,  likes:2050, downloads:5100 },
    { id:56, title:"BMW M4 Sports",       category:"Cars",         thumb:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&q=80", full:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=90", featured:false, likes:1050, downloads:2500 },
    { id:57, title:"White Audi Sport",    category:"Cars",         thumb:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80", full:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=90", featured:false, likes:920,  downloads:2200 },
    { id:58, title:"Silver Mercedes",     category:"Cars",         thumb:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", full:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=90", featured:false, likes:840,  downloads:2000 },
    { id:59, title:"Mercedes AMG GT",     category:"Cars",         thumb:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80", full:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&q=90", featured:false, likes:780,  downloads:1850 },
    { id:60, title:"Lamborghini Dark",    category:"Cars",         thumb:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80", full:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1920&q=90", featured:false, likes:1430, downloads:3500 },

    // ── GAMES (10) — NEW
    { id:61, title:"Epic Gamer Setup",    category:"games",        thumb:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80", full:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1920&q=90", featured:true,  likes:2800, downloads:6800 },
    { id:62, title:"RGB Gaming Rig",      category:"games",        thumb:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80", full:"https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1920&q=90", featured:true,  likes:2400, downloads:5900 },
    { id:63, title:"Gaming Controller",   category:"games",        thumb:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80", full:"https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=90", featured:false, likes:1900, downloads:4600 },
    { id:64, title:"Neon Game World",     category:"games",        thumb:"https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=600&q=80", full:"https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=1920&q=90", featured:true,  likes:2600, downloads:6200 },
    { id:65, title:"Cyberpunk City",      category:"games",        thumb:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", full:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=90", featured:false, likes:2100, downloads:5000 },
    { id:66, title:"Game Over Screen",    category:"games",        thumb:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80", full:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=90", featured:false, likes:1700, downloads:4100 },
    { id:67, title:"VR Gaming Gear",      category:"games",        thumb:"https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80", full:"https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=1920&q=90", featured:false, likes:1500, downloads:3600 },
    { id:68, title:"Dark Gaming Room",    category:"games",        thumb:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&q=80", full:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1920&q=90", featured:false, likes:1800, downloads:4400 },
    { id:69, title:"Retro Arcade",        category:"games",        thumb:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80", full:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=90", featured:false, likes:1300, downloads:3100 },
    { id:70, title:"Holographic Display", category:"games",        thumb:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80", full:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=90", featured:true,  likes:2200, downloads:5300 },

    // ── ANIME (10) — EXPANDED
    { id:71, title:"Sakura Shrine",       category:"anime",        thumb:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80", full:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=90", featured:true,  likes:1650, downloads:4000 },
    { id:72, title:"Neon Tokyo Street",   category:"anime",        thumb:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", full:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured:false, likes:1380, downloads:3300 },
    { id:73, title:"Japan Mountain View", category:"anime",        thumb:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80", full:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90", featured:false, likes:940,  downloads:2200 },
    { id:74, title:"Lantern Festival",    category:"anime",        thumb:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80", full:"https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=90", featured:false, likes:1180, downloads:2800 },
    { id:75, title:"Japanese Garden",     category:"anime",        thumb:"https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80", full:"https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=90", featured:true,  likes:1420, downloads:3400 },
    { id:76, title:"Torii Gate Sunset",   category:"anime",        thumb:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80", full:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=90", featured:false, likes:1600, downloads:3800 },
    { id:77, title:"Shibuya Crossing",    category:"anime",        thumb:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&fit=crop&crop=bottom", full:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured:false, likes:1100, downloads:2600 },
    { id:78, title:"Cherry Night Sky",    category:"anime",        thumb:"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80&hue-rotate=180", full:"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=90", featured:false, likes:1250, downloads:3000 },
    { id:79, title:"Bamboo Forest",       category:"anime",        thumb:"https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=600&q=80", full:"https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=1920&q=90", featured:false, likes:980,  downloads:2350 },
    { id:80, title:"Futuristic Tokyo",    category:"anime",        thumb:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80&sat=150", full:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90", featured:false, likes:1350, downloads:3200 },

    // ── MOVIES (10) — NEW
    { id:81, title:"Cinema Hall",         category:"movies",       thumb:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80", full:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=90", featured:true,  likes:2000, downloads:4800 },
    { id:82, title:"Vintage Film Reel",   category:"movies",       thumb:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80", full:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=90", featured:false, likes:1600, downloads:3900 },
    { id:83, title:"Popcorn Cinema",      category:"movies",       thumb:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80", full:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=90", featured:false, likes:1200, downloads:2900 },
    { id:84, title:"Movie Clapperboard",  category:"movies",       thumb:"https://images.unsplash.com/photo-1512070679279-8988d32161be?w=600&q=80", full:"https://images.unsplash.com/photo-1512070679279-8988d32161be?w=1920&q=90", featured:false, likes:980,  downloads:2350 },
    { id:85, title:"Neon Movie Sign",     category:"movies",       thumb:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80", full:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&q=90", featured:true,  likes:1800, downloads:4300 },
    { id:86, title:"Film Strip",          category:"movies",       thumb:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", full:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=90", featured:false, likes:1400, downloads:3300 },
    { id:87, title:"Director's Chair",    category:"movies",       thumb:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80", full:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=90", featured:false, likes:1100, downloads:2600 },
    { id:88, title:"Hollywood Sign",      category:"movies",       thumb:"https://images.unsplash.com/photo-1580130544977-42b80b21f29b?w=600&q=80", full:"https://images.unsplash.com/photo-1580130544977-42b80b21f29b?w=1920&q=90", featured:false, likes:1700, downloads:4000 },
    { id:89, title:"Cinematic Sunset",    category:"movies",       thumb:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80", full:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=90", featured:false, likes:1300, downloads:3100 },
    { id:90, title:"Night Theater",       category:"movies",       thumb:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&q=80", full:"https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1920&q=90", featured:false, likes:1500, downloads:3600 },

    // ── CARTOON (8) — NEW
    { id:91, title:"Colorful Street Art", category:"cartoon",      thumb:"https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&q=80", full:"https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=1920&q=90", featured:true,  likes:1800, downloads:4400 },
    { id:92, title:"Graffiti Wall",       category:"cartoon",      thumb:"https://images.unsplash.com/photo-1534609965671-8e4e1124e1a7?w=600&q=80", full:"https://images.unsplash.com/photo-1534609965671-8e4e1124e1a7?w=1920&q=90", featured:false, likes:1400, downloads:3400 },
    { id:93, title:"Pop Art Colors",      category:"cartoon",      thumb:"https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=600&q=80", full:"https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1920&q=90", featured:false, likes:1200, downloads:2900 },
    { id:94, title:"Comic Style City",    category:"cartoon",      thumb:"https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&q=80", full:"https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1920&q=90", featured:false, likes:1000, downloads:2400 },
    { id:95, title:"Vivid Mural",         category:"cartoon",      thumb:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=600&q=80", full:"https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=1920&q=90", featured:true,  likes:1600, downloads:3800 },
    { id:96, title:"Neon Doodles",        category:"cartoon",      thumb:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", full:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=90", featured:false, likes:1300, downloads:3100 },
    { id:97, title:"Toy World",           category:"cartoon",      thumb:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&hue-rotate=90&sat=200", full:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90", featured:false, likes:900,  downloads:2100 },
    { id:98, title:"Colorful Balloons",   category:"cartoon",      thumb:"https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=600&q=80", full:"https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=1920&q=90", featured:false, likes:1100, downloads:2600 },

    // ── BIKES / MOTORCYCLES (8) — NEW
    { id:99,  title:"Harley Davidson",    category:"bikes",        thumb:"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80", full:"https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=90", featured:true,  likes:2500, downloads:6100 },
    { id:100, title:"Ducati Night Ride",  category:"bikes",        thumb:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80", full:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920&q=90", featured:true,  likes:2200, downloads:5400 },
    { id:101, title:"Kawasaki Ninja",     category:"bikes",        thumb:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80", full:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1920&q=90", featured:false, likes:1800, downloads:4400 },
    { id:102, title:"BMW Motorbike",      category:"bikes",        thumb:"https://images.unsplash.com/photo-1558980394-34764db076b4?w=600&q=80", full:"https://images.unsplash.com/photo-1558980394-34764db076b4?w=1920&q=90", featured:false, likes:1500, downloads:3600 },
    { id:103, title:"Yamaha R1 Racer",    category:"bikes",        thumb:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80", full:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&q=90", featured:false, likes:1700, downloads:4100 },
    { id:104, title:"Motocross Jump",     category:"bikes",        thumb:"https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&q=80", full:"https://images.unsplash.com/photo-1558980664-769d59546b3d?w=1920&q=90", featured:false, likes:2000, downloads:4800 },
    { id:105, title:"Vintage Chopper",    category:"bikes",        thumb:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=600&q=80", full:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=1920&q=90", featured:false, likes:1400, downloads:3300 },
    { id:106, title:"Street Racer",       category:"bikes",        thumb:"https://images.unsplash.com/photo-1498925008800-019d7b04c877?w=600&q=80", full:"https://images.unsplash.com/photo-1498925008800-019d7b04c877?w=1920&q=90", featured:false, likes:1600, downloads:3800 },

    // ── VEHICLES (8) — NEW
    { id:107, title:"Big Rig Truck",      category:"vehicles",     thumb:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80", full:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=90", featured:false, likes:1200, downloads:2900 },
    { id:108, title:"Luxury Yacht",       category:"vehicles",     thumb:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", full:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=90", featured:true,  likes:2000, downloads:4800 },
    { id:109, title:"Steam Locomotive",   category:"vehicles",     thumb:"https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80", full:"https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=90", featured:false, likes:1400, downloads:3400 },
    { id:110, title:"Race Car Track",     category:"vehicles",     thumb:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600&q=80", full:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1920&q=90", featured:false, likes:1600, downloads:3900 },
    { id:111, title:"Futuristic Bus",     category:"vehicles",     thumb:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80", full:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&q=90", featured:false, likes:900,  downloads:2200 },
    { id:112, title:"Military Tank",      category:"vehicles",     thumb:"https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80", full:"https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1920&q=90", featured:false, likes:1300, downloads:3100 },
    { id:113, title:"Speedboat Action",   category:"vehicles",     thumb:"https://images.unsplash.com/photo-1518176258769-f227c798150e?w=600&q=80", full:"https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1920&q=90", featured:false, likes:1500, downloads:3600 },
    { id:114, title:"Classic VW Van",     category:"vehicles",     thumb:"https://images.unsplash.com/photo-1533591380348-14193f1de18f?w=600&q=80", full:"https://images.unsplash.com/photo-1533591380348-14193f1de18f?w=1920&q=90", featured:false, likes:1700, downloads:4000 },

    // ── CYCLES / BICYCLES (6) — NEW
    { id:115, title:"Mountain Bike Trail",category:"cycles",       thumb:"https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?w=600&q=80", full:"https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?w=1920&q=90", featured:true,  likes:1800, downloads:4300 },
    { id:116, title:"BMX Street",         category:"cycles",       thumb:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&hue-rotate=45", full:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90", featured:false, likes:1400, downloads:3400 },
    { id:117, title:"Road Cycling",       category:"cycles",       thumb:"https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?w=600&q=80", full:"https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?w=1920&q=90", featured:false, likes:1200, downloads:2900 },
    { id:118, title:"Bicycle City",       category:"cycles",       thumb:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80", full:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1920&q=90", featured:false, likes:1000, downloads:2400 },
    { id:119, title:"Downhill Rider",     category:"cycles",       thumb:"https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80", full:"https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=1920&q=90", featured:false, likes:1600, downloads:3800 },
    { id:120, title:"Vintage Bicycle",    category:"cycles",       thumb:"https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&q=80", full:"https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1920&q=90", featured:false, likes:1300, downloads:3100 },

    // ── AIRCRAFT (8) — NEW
    { id:121, title:"Fighter Jet Afterburner", category:"aircraft", thumb:"https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80", full:"https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=90", featured:true,  likes:2800, downloads:6900 },
    { id:122, title:"Commercial Sunset",  category:"aircraft",     thumb:"https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80", full:"https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=90", featured:true,  likes:2200, downloads:5400 },
    { id:123, title:"Helicopter City",    category:"aircraft",     thumb:"https://images.unsplash.com/photo-1506947411487-a56738267384?w=600&q=80", full:"https://images.unsplash.com/photo-1506947411487-a56738267384?w=1920&q=90", featured:false, likes:1700, downloads:4100 },
    { id:124, title:"Air Force One",      category:"aircraft",     thumb:"https://images.unsplash.com/photo-1591510043737-0c7d65d50e6a?w=600&q=80", full:"https://images.unsplash.com/photo-1591510043737-0c7d65d50e6a?w=1920&q=90", featured:false, likes:1500, downloads:3600 },
    { id:125, title:"Hot Air Balloon",    category:"aircraft",     thumb:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&q=80", full:"https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=1920&q=90", featured:false, likes:2000, downloads:4800 },
    { id:126, title:"Wing View Clouds",   category:"aircraft",     thumb:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80", full:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=90", featured:false, likes:1900, downloads:4600 },
    { id:127, title:"Space Shuttle",      category:"aircraft",     thumb:"https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80", full:"https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=90", featured:true,  likes:2500, downloads:6100 },
    { id:128, title:"Military Drone",     category:"aircraft",     thumb:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&q=80", full:"https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=1920&q=90", featured:false, likes:1600, downloads:3900 },

    // ── DARK (8)
    { id:129, title:"Dark Forest",        category:"dark",         thumb:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", full:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90", featured:false, likes:980,  downloads:2350 },
    { id:130, title:"Midnight City",      category:"dark",         thumb:"https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&q=80", full:"https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1920&q=90", featured:true,  likes:1420, downloads:3500 },
    { id:131, title:"Dark Ocean",         category:"dark",         thumb:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80", full:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90", featured:false, likes:860,  downloads:2000 },
    { id:132, title:"Shadow Architecture",category:"dark",         thumb:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", full:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90", featured:false, likes:740,  downloads:1750 },
    { id:133, title:"Void Space",         category:"dark",         thumb:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80", full:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=90", featured:false, likes:1100, downloads:2650 },
    { id:134, title:"Dark Rain Street",   category:"dark",         thumb:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", full:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90", featured:false, likes:900,  downloads:2150 },
    { id:135, title:"Horror Mansion",     category:"dark",         thumb:"https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=600&q=80", full:"https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=1920&q=90", featured:false, likes:1200, downloads:2850 },
    { id:136, title:"Dark Silhouette",    category:"dark",         thumb:"https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=600&q=80", full:"https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=1920&q=90", featured:false, likes:800,  downloads:1900 },
];

const TOTAL_WALLPAPERS = WALLPAPERS.length;

// Netflix row definitions
const NETFLIX_ROWS = [
    { title:"🎮 Top Picks in Gaming",    emoji:"🎮", filter:"games",        desc:"Epic gaming universes & neon rigs" },
    { title:"⛩️ Anime & Japan Culture",  emoji:"⛩️", filter:"anime",        desc:"Sakura shrines & neon Tokyo" },
    { title:"🎬 Cinematic Movie Stills", emoji:"🎬", filter:"movies",       desc:"Hollywood & beyond" },
    { title:"🏍️ Bikes & Motorcycles",   emoji:"🏍️", filter:"bikes",        desc:"Raw power on two wheels" },
    { title:"✈️ Sky & Aircraft",         emoji:"✈️", filter:"aircraft",     desc:"Fighter jets to hot air balloons" },
    { title:"🌌 Space & Cosmos",         emoji:"🌌", filter:"space",        desc:"Galaxies, nebulas & beyond" },
    { title:"🏎️ Supercars",             emoji:"🏎️", filter:"Cars",         desc:"Lamborghini · Ferrari · Porsche" },
    { title:"🎭 Cartoon & Pop Art",      emoji:"🎭", filter:"cartoon",      desc:"Vivid colors & street art" },
    { title:"🚗 All Vehicles",           emoji:"🚗", filter:"vehicles",     desc:"Land, sea & everything else" },
    { title:"🌿 Nature & Landscapes",    emoji:"🌿", filter:"nature",       desc:"Mountains, oceans & forests" },
    { title:"🌑 Dark & Moody",           emoji:"🌑", filter:"dark",         desc:"Cinematic darkness & shadows" },
    { title:"🎨 Abstract Art",           emoji:"🎨", filter:"abstract",     desc:"Fluid motion & light trails" },
];

const COLLECTIONS = [
    { name:"Space Odyssey",     tag:"Editor's Pick", category:"space",    images:[WALLPAPERS[30].thumb, WALLPAPERS[31].thumb, WALLPAPERS[36].thumb] },
    { name:"Gaming Universe",   tag:"Trending",      category:"games",    images:[WALLPAPERS[60].thumb, WALLPAPERS[63].thumb, WALLPAPERS[67].thumb] },
    { name:"Cinematic Rides",   tag:"New",           category:"bikes",    images:[WALLPAPERS[98].thumb, WALLPAPERS[99].thumb, WALLPAPERS[100].thumb] },
    { name:"Sky Is No Limit",   tag:"Featured",      category:"aircraft", images:[WALLPAPERS[120].thumb, WALLPAPERS[121].thumb, WALLPAPERS[124].thumb] },
    { name:"Anime Dreams",      tag:"Popular",       category:"anime",    images:[WALLPAPERS[70].thumb, WALLPAPERS[71].thumb, WALLPAPERS[75].thumb] },
    { name:"Movie Night",       tag:"Cinema",        category:"movies",   images:[WALLPAPERS[80].thumb, WALLPAPERS[84].thumb, WALLPAPERS[87].thumb] },
];

const DEVICE_RESOLUTIONS = {
    mobile:  [{label:"iPhone 15 Pro Max",width:1179,height:2556},{label:"Full HD Mobile",width:1080,height:1920},{label:"iPhone SE",width:750,height:1334}],
    laptop:  [{label:'MacBook Pro 16"',width:3456,height:2234},{label:"Full HD 1080p",width:1920,height:1080},{label:"QHD Display",width:2560,height:1600}],
    desktop: [{label:"4K Ultra HD",width:3840,height:2160},{label:"2K QHD",width:2560,height:1440},{label:"Ultrawide",width:3440,height:1440}],
};

// ==================== STATE ====================
let currentFilter = 'all', currentWallpaper = null, currentWallpaperIndex = 0;
let currentDevice = 'laptop', currentView = 'masonry', currentSort = 'default';
let favourites = JSON.parse(localStorage.getItem('wv3_favourites') || '[]');
let filteredWallpapers = [...WALLPAPERS];
let featuredIndex = 0;

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// ==================== CINEMATIC BACKGROUND CANVAS ====================
function initBgCanvas() {
    const canvas = $('#bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, nodes = [], animId;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    class Node {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w; this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.3 + 0.05;
            this.pulse = Math.random() * Math.PI * 2;
            this.hue = [240, 270, 300, 190][Math.floor(Math.random() * 4)];
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            this.pulse += 0.02;
            this.currentOpacity = this.opacity + Math.sin(this.pulse) * 0.1;
            if (this.x < -50 || this.x > w + 50 || this.y < -50 || this.y > h + 50) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue},80%,65%,${Math.max(0,this.currentOpacity)})`;
            ctx.fill();
        }
    }

    function drawConnections() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < 130) {
                    ctx.beginPath();
                    const alpha = 0.045 * (1 - dist / 130);
                    ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function init() {
        resize();
        const count = Math.min(80, Math.floor(w * h / 14000));
        nodes = Array.from({ length: count }, () => new Node());
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        nodes.forEach(n => { n.update(); n.draw(); });
        drawConnections();
        requestAnimationFrame(animate);
    }

    init(); animate();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 250); });
}

// ==================== PARTICLE SYSTEM ====================
function initParticles() {
    const canvas = $('#particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w; this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.18; this.vy = (Math.random() - 0.5) * 0.18;
            this.size = Math.random() * 1.5 + 0.2;
            this.pulse = Math.random() * Math.PI * 2;
            this.hue = Math.random() > 0.6 ? 240 : (Math.random() > 0.5 ? 280 : 190);
        }
        update() {
            this.x += this.vx; this.y += this.vy; this.pulse += 0.015;
            this.opacity = 0.1 + Math.sin(this.pulse) * 0.1;
            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue},70%,65%,${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        const count = Math.min(60, Math.floor(w * h / 20000));
        particles = Array.from({ length: count }, () => new Particle());
    }
    function animate() { ctx.clearRect(0,0,w,h); particles.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animate); }
    init(); animate();
    let rt; window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(init,250);});
}

// ==================== SCROLL PROGRESS ==================== 
function initScrollProgress() {
    const bar = $('#scrollProgressBar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const total = document.body.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
        bar.style.width = `${progress}%`;
    }, { passive: true });
}

// ==================== CUSTOM CURSOR ====================
function initCursor() {
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) return;
    const core = $('#cursorCore'), glow = $('#cursorGlow'), trailCanvas = $('#cursorTrail');
    if (!core || !glow || !trailCanvas) return;
    const ctx = trailCanvas.getContext('2d');
    let mx = 0, my = 0, gx = 0, gy = 0, trail = [];

    function resizeT() { trailCanvas.width = window.innerWidth; trailCanvas.height = window.innerHeight; }
    resizeT(); window.addEventListener('resize', resizeT);

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        core.style.transform = `translate(${mx-10}px,${my-10}px)`;
        for (let i = 0; i < 3; i++) {
            trail.push({ x:mx+(Math.random()-0.5)*6, y:my+(Math.random()-0.5)*6, size:Math.random()*3+0.5, life:1, decay:Math.random()*0.028+0.018, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5, hue:Math.random()>0.5?240:280 });
        }
    });
    (function ag() { gx+=(mx-gx)*0.1; gy+=(my-gy)*0.1; glow.style.transform=`translate(${gx-26}px,${gy-26}px)`; requestAnimationFrame(ag); })();
    (function dt() {
        ctx.clearRect(0,0,trailCanvas.width,trailCanvas.height);
        trail=trail.filter(p=>p.life>0);
        trail.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.life-=p.decay;p.size*=0.96;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=`hsla(${p.hue},80%,65%,${p.life*0.55})`;ctx.fill();});
        if(trail.length>250) trail.splice(0,trail.length-250);
        requestAnimationFrame(dt);
    })();
    const hSel = 'a,button,.wallpaper-card,.category-chip,.resolution-btn,.nf-card,.collection-card,.search-tag';
    document.addEventListener('mouseover',e=>{if(e.target.closest(hSel)){core.classList.add('hover');glow.classList.add('hover');}});
    document.addEventListener('mouseout', e=>{if(e.target.closest(hSel)){core.classList.remove('hover');glow.classList.remove('hover');}});
    document.addEventListener('mousedown',()=>core.classList.add('click'));
    document.addEventListener('mouseup',()=>core.classList.remove('click'));
}

// ==================== HEADER ====================
function initHeader() {
    const header = $('#mainHeader');
    window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); }, { passive: true });
}

// ==================== THEME ====================
function initTheme() {
    const btn = $('#themeToggle');
    const saved = localStorage.getItem('wv3_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    btn?.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('wv3_theme', next);
    });
}

// ==================== HERO BG SLIDESHOW ====================
function initHeroBg() {
    const featured = WALLPAPERS.filter(w => w.featured);
    const layer = $('#heroBgLayer');
    if (!layer || !featured.length) return;
    let idx = 0;
    function set() {
        layer.style.backgroundImage = `url(${featured[idx].full})`;
        layer.style.backgroundSize = 'cover';
        layer.style.backgroundPosition = 'center';
        idx = (idx + 1) % featured.length;
    }
    set(); setInterval(set, 7000);
}

// ==================== NETFLIX SECTION ====================
let nfFeaturedList = [];
let nfFeaturedIdx = 0;

function initNetflix() {
    nfFeaturedList = [...WALLPAPERS].sort((a,b) => b.likes - a.likes).slice(0, 10);
    updateNfHero();
    setInterval(() => {
        nfFeaturedIdx = (nfFeaturedIdx + 1) % nfFeaturedList.length;
        updateNfHero();
    }, 6000);

    const rowsEl = $('#netflixRows');
    if (!rowsEl) return;
    rowsEl.innerHTML = NETFLIX_ROWS.map(row => buildNetflixRow(row)).join('');
    attachRowDrags();
    
    $('#nfPlayBtn')?.addEventListener('click', () => { openPreview(nfFeaturedList[nfFeaturedIdx].id); });
    $('#nfInfoBtn')?.addEventListener('click', () => { openPreview(nfFeaturedList[nfFeaturedIdx].id); });
}

function updateNfHero() {
    const wp = nfFeaturedList[nfFeaturedIdx];
    if (!wp) return;
    const bg = $('#nfHeroBg');
    if (bg) { bg.style.backgroundImage = `url(${wp.full})`; bg.style.backgroundSize='cover'; bg.style.backgroundPosition='center'; }
    const title = $('#nfHeroTitle'); if (title) title.textContent = wp.title;
    const desc  = $('#nfHeroDesc');  if (desc)  desc.textContent  = wp.category.charAt(0).toUpperCase() + wp.category.slice(1) + ' • ' + (wp.likes/1000).toFixed(1) + 'K likes';
}

function buildNetflixRow(row) {
    const items = WALLPAPERS.filter(w => w.category === row.filter).slice(0, 12);
    if (!items.length) return '';
    const cards = items.map(wp => {
        const isFav = favourites.includes(wp.id);
        return `
        <div class="nf-card" onclick="openPreview(${wp.id})" data-id="${wp.id}">
            <img src="${wp.thumb}" alt="${wp.title}" loading="lazy">
            <div class="nf-card-overlay">
                <div class="nf-card-title">${wp.title}</div>
                <div class="nf-card-cat">${wp.category}</div>
                <div class="nf-card-actions">
                    <button class="nf-card-btn nf-card-btn-play" onclick="event.stopPropagation();openPreview(${wp.id})">▶</button>
                    <button class="nf-card-btn nf-card-btn-fav${isFav?' active':''}" onclick="event.stopPropagation();toggleFavNfCard(${wp.id},this)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
    return `
    <div class="netflix-row" data-filter="${row.filter}">
        <div class="netflix-row-header">
            <h3 class="netflix-row-title">${row.title}</h3>
            <span class="netflix-row-see-all" onclick="filterByCategory('${row.filter}')">See all <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
        <div class="netflix-row-scroll-wrap">
            <div class="netflix-row-scroll">${cards}</div>
        </div>
    </div>`;
}

function attachRowDrags() {
    $$('.netflix-row-scroll').forEach(row => {
        let isDown = false, startX, scrollLeft;
        row.addEventListener('mousedown', e => { isDown=true; startX=e.pageX-row.offsetLeft; scrollLeft=row.scrollLeft; row.style.cursor='grabbing'; });
        document.addEventListener('mouseup', () => { isDown=false; row.style.cursor='grab'; });
        row.addEventListener('mousemove', e => { if(!isDown) return; e.preventDefault(); const x=e.pageX-row.offsetLeft; const walk=(x-startX)*2; row.scrollLeft=scrollLeft-walk; });
        let tx=0;
        row.addEventListener('touchstart', e => { tx=e.touches[0].pageX; }, {passive:true});
        row.addEventListener('touchmove', e => { const diff=tx-e.touches[0].pageX; row.scrollLeft+=diff*0.5; tx=e.touches[0].pageX; }, {passive:true});
    });
}

function toggleFavNfCard(id, btn) {
    const idx = favourites.indexOf(id);
    if (idx >= 0) {
        favourites.splice(idx, 1);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
        favourites.push(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
        btn.style.transform = 'scale(1.4)'; setTimeout(() => btn.style.transform='', 300);
    }
    localStorage.setItem('wv3_favourites', JSON.stringify(favourites));
    updateFavCount();
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
        </div>`
    ).join('');
}

// ==================== GALLERY ====================
function renderGallery(wallpapers) {
    const grid = $('#galleryGrid'), empty = $('#galleryEmpty');
    if (!grid) return;
    grid.innerHTML = '';
    const countEl = $('#visibleCount');
    if (countEl) countEl.textContent = wallpapers.length;
    if (!wallpapers.length) { empty.style.display='block'; return; }
    empty.style.display = 'none';
    const frag = document.createDocumentFragment();
    wallpapers.forEach((wp, i) => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        card.dataset.id = wp.id;
        card.style.transitionDelay = `${Math.min(i*0.035, 0.5)}s`;
        const isFav = favourites.includes(wp.id);
        const thumbUrl = wp.thumb.includes('unsplash.com') ? `${wp.thumb.split('?')[0]}?w=600&q=80&auto=format` : wp.thumb;
        card.innerHTML = `
            <button class="card-fav-btn${isFav?' active':''}" data-id="${wp.id}" onclick="event.stopPropagation();toggleFav(${wp.id},this)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <div class="card-image">
                <img src="${thumbUrl}" alt="${wp.title}" loading="lazy" decoding="async" style="background:var(--bg-tertiary);">
                <div class="card-overlay">
                    <div class="overlay-top">
                        <span class="overlay-badge quality">4K</span>
                        <span class="overlay-badge">${wp.category}</span>
                    </div>
                    <div class="overlay-info">
                        <h3 class="overlay-title">${wp.title}</h3>
                        <p class="overlay-cat">${wp.category} • ${(wp.likes/1000).toFixed(1)}K likes</p>
                        <div class="overlay-actions">
                            <button class="action-btn btn-preview" onclick="event.stopPropagation();openPreview(${wp.id})">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Preview
                            </button>
                            <button class="action-btn btn-download" onclick="event.stopPropagation();quickDownload(${wp.id})">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
        const img = card.querySelector('img');
        const ci = card.querySelector('.card-image');
        img.addEventListener('load', () => ci.classList.add('loaded'));
        if (img.complete) ci.classList.add('loaded');
        card.addEventListener('click', () => openPreview(wp.id));
        init3DTilt(card);
        frag.appendChild(card);
    });
    grid.appendChild(frag);
    requestAnimationFrame(observeCards);
}

// ==================== 3D TILT ====================
function init3DTilt(card) {
    if (window.matchMedia('(hover:none)').matches) return;
    let tX=0, tY=0, cX=0, cY=0, af=null;
    function lerp(a,b,t){return a+(b-a)*t;}
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        tX = ((e.clientY-r.top-r.height/2)/r.height)*14;
        tY = -((e.clientX-r.left-r.width/2)/r.width)*14;
        if (!af) af = requestAnimationFrame(tick);
    });
    card.addEventListener('mouseleave', () => { tX=0; tY=0; if(!af) af=requestAnimationFrame(tick); });
    function tick() {
        cX=lerp(cX,tX,0.1); cY=lerp(cY,tY,0.1);
        const done = Math.abs(cX-tX)<0.02 && Math.abs(cY-tY)<0.02;
        if (tX===0&&tY===0&&done) { card.style.transform=''; af=null; return; }
        card.style.transform=`perspective(900px) rotateX(${cX}deg) rotateY(${cY}deg) scale(${done&&tX===0?1:1.025})`;
        af = done ? null : requestAnimationFrame(tick);
    }
}

// ==================== SCROLL REVEAL ====================
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('revealed');revealObs.unobserve(e.target);} });
}, { rootMargin:'80px', threshold:0.06 });
function observeCards() { $$('.wallpaper-card').forEach(c=>{c.classList.remove('revealed');revealObs.observe(c);}); }

// ==================== PARALLAX SCROLL ====================
function initParallax() {
    const hero = $('.hero');
    window.addEventListener('scroll', () => {
        if (!hero) return;
        const sy = window.scrollY;
        const layer = $('#heroBgLayer');
        if (layer) layer.style.transform = `translateY(${sy * 0.25}px) scale(1.1)`;
    }, { passive: true });
}

// ==================== FILTERS ====================
function filterAndRender() {
    const q = $('#searchInput')?.value.toLowerCase().trim() || '';
    let result = [...WALLPAPERS];
    if (currentFilter === 'favourites') result = result.filter(w => favourites.includes(w.id));
    else if (currentFilter !== 'all') result = result.filter(w => w.category === currentFilter);
    if (q) result = result.filter(w => w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q));
    if (currentSort === 'popular') result.sort((a,b) => b.likes-a.likes);
    else if (currentSort === 'newest') result.sort((a,b) => b.id-a.id);
    else if (currentSort === 'az') result.sort((a,b) => a.title.localeCompare(b.title));
    filteredWallpapers = result;
    renderGallery(result);
}

function initFilters() {
    updateFavCount();
    $$('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            $$('.category-chip').forEach(c=>c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            filterAndRender();
        });
    });
    let st;
    $('#searchInput')?.addEventListener('input', () => { clearTimeout(st); st=setTimeout(filterAndRender,200); });
    $('#sortSelect')?.addEventListener('change', e => { currentSort=e.target.value; filterAndRender(); });
    $$('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.view-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            const grid = $('#galleryGrid');
            if(currentView==='grid') grid.classList.add('grid-view');
            else grid.classList.remove('grid-view');
            requestAnimationFrame(observeCards);
        });
    });
    document.addEventListener('keydown', e => {
        if ((e.metaKey||e.ctrlKey)&&e.key==='k') { e.preventDefault(); $('#searchInput')?.focus(); }
        if (e.key==='Escape') {
            if($('#previewModal')?.classList.contains('active')) closeModal();
            else { const si=$('#searchInput'); if(document.activeElement===si){si.blur();si.value='';filterAndRender();} }
        }
        if (e.key==='ArrowLeft'&&$('#previewModal')?.classList.contains('active')) navigateModal(-1);
        if (e.key==='ArrowRight'&&$('#previewModal')?.classList.contains('active')) navigateModal(1);
    });
}

function clearFilters() {
    currentFilter='all'; currentSort='default';
    const si=$('#searchInput'); if(si) si.value='';
    const ss=$('#sortSelect'); if(ss) ss.value='default';
    $$('.category-chip').forEach(c=>c.classList.toggle('active',c.dataset.filter==='all'));
    filterAndRender();
}

function filterByCategory(cat) {
    currentFilter = cat;
    $$('.category-chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===cat));
    filterAndRender();
    document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth',block:'start'});
}

// ==================== FAVOURITES ====================
function toggleFav(id, btn) {
    const idx = favourites.indexOf(id);
    if (idx >= 0) {
        favourites.splice(idx,1);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill','none');
    } else {
        favourites.push(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill','currentColor');
        btn.style.transform='scale(1.5)'; setTimeout(()=>btn.style.transform='',300);
    }
    localStorage.setItem('wv3_favourites', JSON.stringify(favourites));
    updateFavCount();
    if (currentWallpaper?.id===id) updatePreviewFavBtn();
}

function updateFavCount() {
    const n = favourites.length;
    const badge = $('#favCount');
    if (badge) { badge.textContent=n; badge.style.display=n>0?'flex':'none'; }
    const chip = document.querySelector('.category-chip[data-filter="favourites"] .chip-count');
    if (chip) chip.textContent = n;
    const countFav = $('#countFav');
    if (countFav) countFav.textContent = n;
}

function updatePreviewFavBtn() {
    const btn = $('#previewFavBtn');
    if(!btn||!currentWallpaper) return;
    const isFav = favourites.includes(currentWallpaper.id);
    btn.classList.toggle('active',isFav);
    btn.querySelector('svg').setAttribute('fill',isFav?'currentColor':'none');
}

// ==================== PREVIEW MODAL ====================
function openPreview(id) {
    currentWallpaper = WALLPAPERS.find(w=>w.id===id);
    if (!currentWallpaper) return;
    currentWallpaperIndex = filteredWallpapers.findIndex(w=>w.id===id);
    if (currentWallpaperIndex<0) currentWallpaperIndex = WALLPAPERS.findIndex(w=>w.id===id);
    const previewImg = $('#previewImage'), loading = $('#previewLoading');
    $('#modalTitle').textContent = currentWallpaper.title;
    $('#modalCategory').textContent = currentWallpaper.category;
    loading.classList.add('active');
    previewImg.style.opacity='0.2';
    const img = new Image();
    img.onload = () => { previewImg.src=currentWallpaper.full; previewImg.style.opacity='1'; loading.classList.remove('active'); };
    img.onerror = () => { previewImg.src=currentWallpaper.thumb; previewImg.style.opacity='1'; loading.classList.remove('active'); };
    img.src = currentWallpaper.full;
    previewImg.src = currentWallpaper.thumb;
    updatePreviewFavBtn();
    autoSelectDeviceTab();
    updateResolutionOptions();
    $('#previewModal').classList.add('active');
    document.body.style.overflow='hidden';
}

function closeModal() { $('#previewModal')?.classList.remove('active'); document.body.style.overflow=''; }

function navigateModal(dir) {
    const list = filteredWallpapers.length>0 ? filteredWallpapers : WALLPAPERS;
    currentWallpaperIndex = ((currentWallpaperIndex+dir)+list.length)%list.length;
    openPreview(list[currentWallpaperIndex].id);
}

$('#modalBackdrop')?.addEventListener('click', closeModal);
$('#modalPrev')?.addEventListener('click', ()=>navigateModal(-1));
$('#modalNext')?.addEventListener('click', ()=>navigateModal(1));

function autoSelectDeviceTab() {
    const d = window.innerWidth<768?'mobile':window.innerWidth<1200?'laptop':'desktop';
    currentDevice=d;
    $$('.device-tab').forEach(t=>t.classList.toggle('active',t.dataset.device===d));
}

$$('.device-tab').forEach(tab => {
    tab.addEventListener('click',()=>{
        $$('.device-tab').forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        currentDevice=tab.dataset.device;
        updateResolutionOptions();
    });
});

function updateResolutionOptions() {
    const res = DEVICE_RESOLUTIONS[currentDevice]||DEVICE_RESOLUTIONS.laptop;
    const el = $('#resolutionOptions');
    if (!el) return;
    el.innerHTML = res.map(r=>`
        <button class="resolution-btn" data-width="${r.width}" data-height="${r.height}" data-label="${r.label}">
            <div class="resolution-info"><span class="resolution-label">${r.label}</span><span class="resolution-size">${r.width} × ${r.height}</span></div>
            <div class="download-arrow"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
        </button>`
    ).join('');
    $$('.resolution-btn').forEach(btn=>btn.addEventListener('click',async e=>{e.stopPropagation();await downloadWallpaper(btn.dataset.width,btn.dataset.height,btn.dataset.label,btn);}));
}

$('#previewFavBtn')?.addEventListener('click',()=>{
    if(!currentWallpaper) return;
    const cb = document.querySelector(`.card-fav-btn[data-id="${currentWallpaper.id}"]`);
    if(cb) toggleFav(currentWallpaper.id,cb);
    else {
        const idx=favourites.indexOf(currentWallpaper.id);
        if(idx>=0) favourites.splice(idx,1); else favourites.push(currentWallpaper.id);
        localStorage.setItem('wv3_favourites',JSON.stringify(favourites));
        updateFavCount(); updatePreviewFavBtn();
    }
});

$('#previewShareBtn')?.addEventListener('click',async()=>{
    if(!currentWallpaper) return;
    if(navigator.share) { try{await navigator.share({title:currentWallpaper.title,url:window.location.href});}catch(e){} }
    else { await navigator.clipboard.writeText(window.location.href); showToast('Link copied!'); }
});

// Swipe modal
function initModalSwipe() {
    const mc=$('#modalContent'); if(!mc) return;
    let sy=0,sx=0;
    mc.addEventListener('touchstart',e=>{sy=e.touches[0].clientY;sx=e.touches[0].clientX;},{passive:true});
    mc.addEventListener('touchend',e=>{
        const dy=e.changedTouches[0].clientY-sy, dx=e.changedTouches[0].clientX-sx;
        if(Math.abs(dy)>Math.abs(dx)&&dy>80) closeModal();
        else if(Math.abs(dx)>Math.abs(dy)){if(dx<-60)navigateModal(1);else if(dx>60)navigateModal(-1);}
    },{passive:true});
}

// ==================== DOWNLOAD ====================
async function downloadWallpaper(width, height, label, btn) {
    if (!currentWallpaper) return;
    const orig=btn.innerHTML;
    btn.style.pointerEvents='none'; btn.style.opacity='0.6';
    btn.innerHTML=`<div class="resolution-info"><span class="resolution-label">Downloading…</span><span class="resolution-size">Please wait</span></div><div class="download-arrow"><div class="preview-spinner" style="width:15px;height:15px;border-width:2px;"></div></div>`;
    showToast(`⬇️ Preparing ${label}…`);
    try {
        const base = currentWallpaper.full.split('?')[0];
        const url = base.includes('unsplash.com') ? `${base}?w=${width}&h=${height}&fit=crop&q=90&auto=format` : currentWallpaper.full;
        const resp = await fetch(url); if(!resp.ok) throw new Error();
        const blob = await resp.blob(), objUrl=URL.createObjectURL(blob);
        const a=document.createElement('a'); a.href=objUrl; a.download=`WallVault_${currentWallpaper.title.replace(/\s+/g,'_')}_${width}x${height}.jpg`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(objUrl);
        showToast(`✅ ${label} downloaded!`,'success');
        btn.innerHTML=`<div class="resolution-info"><span class="resolution-label">Downloaded ✓</span><span class="resolution-size">${width} × ${height}</span></div><div class="download-arrow"></div>`;
        setTimeout(()=>{btn.innerHTML=orig;btn.style.pointerEvents='';btn.style.opacity='1';},2500);
    } catch { btn.innerHTML=orig;btn.style.pointerEvents='';btn.style.opacity='1'; showToast('Download failed.','error'); }
}

function quickDownload(id) {
    currentWallpaper = WALLPAPERS.find(w=>w.id===id);
    if (!currentWallpaper) return;
    const d = window.innerWidth<768?'mobile':window.innerWidth<1200?'laptop':'desktop';
    const res = DEVICE_RESOLUTIONS[d][1];
    showToast(`⬇️ Preparing ${res.label}…`);
    (async()=>{
        try {
            const base=currentWallpaper.full.split('?')[0];
            const url=base.includes('unsplash.com')?`${base}?w=${res.width}&h=${res.height}&fit=crop&q=90&auto=format`:currentWallpaper.full;
            const resp=await fetch(url); if(!resp.ok) throw new Error();
            const blob=await resp.blob(), objUrl=URL.createObjectURL(blob);
            const a=document.createElement('a'); a.href=objUrl; a.download=`WallVault_${currentWallpaper.title.replace(/\s+/g,'_')}_${res.width}x${res.height}.jpg`;
            document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(objUrl);
            showToast(`✅ Downloaded!`,'success');
        } catch { showToast('Download failed.','error'); }
    })();
}

// ==================== HERO SEARCH ====================
function initHeroSearch() {
    const input=$('#heroSearchInput'), btn=$('#heroSearchBtn'), sugg=$('#searchSuggestions');
    if (!input) return;
    $$('.search-tag').forEach(tag=>{
        tag.addEventListener('click',()=>{ input.value=tag.dataset.query; doHeroSearch(tag.dataset.query); });
    });
    let si=-1;
    input.addEventListener('input',()=>{
        const q=input.value.trim().toLowerCase(); if(q.length<2){sugg.classList.remove('visible');return;}
        const matches=WALLPAPERS.filter(w=>w.title.toLowerCase().includes(q)||w.category.toLowerCase().includes(q)).slice(0,7);
        if(!matches.length){sugg.classList.remove('visible');return;}
        sugg.innerHTML=matches.map((w,i)=>`<div class="suggestion-item" data-id="${w.id}"><img class="suggest-icon" src="${w.thumb}" alt="${w.title}" loading="lazy"><span>${w.title.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'),'<mark>$1</mark>')} <small style="opacity:.5">— ${w.category}</small></span></div>`).join('');
        sugg.classList.add('visible'); si=-1;
        sugg.querySelectorAll('.suggestion-item').forEach(item=>{
            item.addEventListener('click',()=>{input.value='';sugg.classList.remove('visible');openPreview(+item.dataset.id);});
        });
    });
    input.addEventListener('keydown',e=>{
        const items=sugg.querySelectorAll('.suggestion-item');
        if(e.key==='ArrowDown'){e.preventDefault();si=Math.min(si+1,items.length-1);items.forEach((it,i)=>it.classList.toggle('focused',i===si));}
        if(e.key==='ArrowUp'){e.preventDefault();si=Math.max(si-1,-1);items.forEach((it,i)=>it.classList.toggle('focused',i===si));}
        if(e.key==='Enter'){if(si>=0&&items[si])items[si].click();else doHeroSearch(input.value);}
        if(e.key==='Escape'){sugg.classList.remove('visible');input.blur();}
    });
    document.addEventListener('click',e=>{if(!e.target.closest('#heroSearch')&&!e.target.closest('#searchSuggestions'))sugg.classList.remove('visible');});
    btn?.addEventListener('click',()=>doHeroSearch(input.value));
}

function doHeroSearch(q) {
    const si=$('#searchSuggestions'); if(si) si.classList.remove('visible');
    if (!q.trim()) return;
    const gi=$('#searchInput'); if(gi) gi.value=q;
    currentFilter='all';
    $$('.category-chip').forEach(c=>c.classList.toggle('active',c.dataset.filter==='all'));
    filterAndRender();
    document.querySelector('#gallery')?.scrollIntoView({behavior:'smooth',block:'start'});
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const items = $$('.stat-item[data-target]');
    const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{
            if(e.isIntersecting){
                const el=e.target, target=parseInt(el.dataset.target), suffix=el.dataset.suffix||'', numEl=el.querySelector('.stat-number');
                animCount(numEl,0,target,suffix,2000); obs.unobserve(el);
            }
        });
    },{threshold:0.5});
    items.forEach(el=>obs.observe(el));
}

function animCount(el,from,to,suffix,dur) {
    const start=performance.now();
    function up(now){
        const p=Math.min((now-start)/dur,1), ease=1-Math.pow(1-p,3);
        el.textContent=Math.floor(from+(to-from)*ease).toLocaleString()+(p>=1?suffix:'');
        if(p<1) requestAnimationFrame(up);
    }
    requestAnimationFrame(up);
}

// ==================== NEWSLETTER ====================
function initNewsletter() {
    const form=$('#newsletterForm'); if(!form) return;
    form.addEventListener('submit',e=>{
        e.preventDefault();
        const em=$('#nlEmail')?.value; if(!em) return;
        showToast(`🎉 Subscribed with ${em}!`,'success'); form.reset();
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const btn=$('#mobileMenuBtn'),menu=$('#mobileMenu'),close=$('#mobileMenuClose'),backdrop=$('#mobileMenuBackdrop');
    if(!btn) return;
    const open=()=>{menu.classList.add('active');btn.classList.add('active');document.body.style.overflow='hidden';};
    const closeMenu=()=>{menu.classList.remove('active');btn.classList.remove('active');document.body.style.overflow='';};
    btn.addEventListener('click',()=>menu.classList.contains('active')?closeMenu():open());
    close?.addEventListener('click',closeMenu);
    backdrop?.addEventListener('click',closeMenu);
    $$('.mobile-nav-link').forEach(l=>l.addEventListener('click',closeMenu));
}

// ==================== BACK TO TOP ====================
function scrollToTop() { window.scrollTo({top:0,behavior:'smooth'}); }
window.addEventListener('scroll',()=>{ const b=$('#backToTop'); if(b)b.classList.toggle('visible',window.scrollY>600); },{passive:true});

// ==================== BOTTOM NAV ====================
function initBottomNav() {
    window.addEventListener('scroll',()=>{
        const sections=['home','netflix','gallery','collections'];
        let active='home';
        sections.forEach(id=>{ const el=$(`#${id}`); if(el&&el.getBoundingClientRect().top<window.innerHeight*0.5)active=id; });
        const map={home:'bnHome',netflix:'bnNetflix',gallery:'bnGallery',collections:'bnGallery'};
        $$('.bottom-nav-item').forEach(it=>{it.classList.remove('active');});
        const el=$(('#'+map[active])); if(el) el.classList.add('active');
    },{passive:true});
}

// ==================== TOAST ====================
function showToast(msg, type='') {
    const t=$('#toast'); if(!t) return;
    t.querySelector('.toast-message').textContent=msg;
    t.className=`toast show ${type}`; clearTimeout(t._t);
    t._t=setTimeout(()=>t.classList.remove('show'),3500);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursor();
    initBgCanvas();
    initParticles();
    initScrollProgress();
    initHeader();
    initMobileMenu();
    initModalSwipe();
    initHeroBg();
    initHeroSearch();
    initParallax();
    initNetflix();
    initCollections();
    initFilters();
    filterAndRender();
    initCounters();
    initNewsletter();
    initBottomNav();
    updateFavCount();

    const tc=$('#totalCount'); if(tc) tc.textContent=TOTAL_WALLPAPERS;
    const ca=$('#countAll'); if(ca) ca.textContent=TOTAL_WALLPAPERS;
    $('#logoBtn')?.addEventListener('click',scrollToTop);
    $('#favBtn')?.addEventListener('click',()=>filterByCategory('favourites'));
});
