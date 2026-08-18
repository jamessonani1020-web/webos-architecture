/* CopyMac OS 2 — Main Script (Enhanced) */
var highestZIndex = 100;

function wpUrl(id, w) { return 'https://images.unsplash.com/photo-' + id + '?w=' + (w || 1920) + '&q=80'; }
function wpThumb(id) { return wpUrl(id, 300); }

// ===================== WALLPAPER CATALOG =====================
var WALLPAPER_CATS = {
    "Nature": [
        ["Forest Path","1441974231531-c6227db76b6e"],["Foggy Morning","1470071459604-3b5ec3a7fe05"],
        ["Autumn Trees","1447752875215-b2761acb3c5d"],["Green Valley","1426604966848-d7adac402bff"],
        ["Waterfall","1433086966358-54859d0ed716"],["Sunset Field","1469474968028-56623f02e42e"],
        ["Lavender Fields","1504567961542-e24d9439a724"],["Cherry Blossom","1490750967868-88aa4f44baee"],
        ["Bamboo Grove","1518173946687-a243e2e77614"],["Mossy Stream","1501854140801-7c6e4ae7c18e"],
        ["Misty Lake","1418065460487-3e903d3c9f16"],["Wildflowers","1431794062232-2a99a5431c6c"],
        ["Tropical Leaves","1476514525535-07fb3b4ae5f1"],["Fern Close-up","1500534314463-2ea98ff9b653"],
        ["Spring Meadow","1462275646964-a0e3c11fb5a3"],["Rainy Forest","1428592953211-364fdcb8c56b"],
        ["Golden Hour","1495616811223-4d98c6e9c869"],["Desert Bloom","1509316975850-ff9c5deb0cd9"],
        ["Snowy Pine","1491002052546-521e03c29e34"],["River Bend","1470252649378-9c29740c9fa8"],
        ["Palm Trees","1507525428034-b723cf961d3e"],["Sunflower","1470509037663-253afd7f0f51"],
        ["Redwood","1448375240586-882707db888b"],["Moss Garden","1518531933037-91b2f5f229cc"],
        ["Autumn Road","1472214103451-9374bd1c798e"]
    ],
    "Space": [
        ["Earth Night","1451187580459-43490279c0fa"],["Nebula","1462332420958-a8e7d0e73150"],
        ["Milky Way","1419242902214-272b3f66ee7a"],["Star Field","1444703686981-a3abbc4d4fe3"],
        ["Galaxy Spiral","1465101162946-4377e57745c3"],["Aurora","1531366936337-7c912a4589a7"],
        ["Moon Surface","1446776811953-b23d57bd21aa"],["Deep Space","1464802453278-cf12b34b0b77"],
        ["Rocket Launch","1516339901601-2e1b52d348a2"],["Solar Eclipse","1503149779833-1de50ece41d4"],
        ["Andromeda","1543722530-d2f3ab3c04a4"],["Cosmic Dust","1520034475321-cbe63696eca2"],
        ["Planet Surface","1454789548928-9efd52dc4031"],["Star Trail","1532274069305-3fd76a413ed6"],
        ["Astronaut","1541185933-ef5d8ed016c2"],["Satellite View","1446776899648-21f17ce47b7e"],
        ["Blue Marble","1451187580459-43490279c0fa"],["Supernova","1462332420958-a8e7d0e73150"],
        ["Galactic Core","1419242902214-272b3f66ee7a"],["Pulsar","1444703686981-a3abbc4d4fe3"],
        ["Mars Red","1614730321836-7d04efd75afe"],["Ring Nebula","1543722530-d2f3ab3c04a4"],
        ["Space Walk","1541185933-ef5d8ed016c2"],["Jupiter Eye","1614730321836-7d04efd75afe"],
        ["Comet Tail","1520034475321-cbe63696eca2"]
    ],
    "Abstract": [
        ["Neon Gradient","1579546929518-9e396f3cc809"],["Obsidian Flow","1618005182384-a83a8bd57fbe"],
        ["Color Swirl","1557682250012-097c6e440e5b"],["Ink Drop","1604076913837-52ab5f6f4d1b"],
        ["Fluid Art","1620121692029-d088224fdb7e"],["Gradient Mesh","1635070041078-e363dbe005cb"],
        ["Smoke Trails","1614850715649-1d1ff82d6c87"],["Glass Morph","1558591710-1a0cbcbb39e2"],
        ["Light Leak","1550684848-fac1c5b4e853"],["Prism","1508739773434-c26b3d09e071"],
        ["Bokeh","1519608487953-e999c86e7455"],["Digital Waves","1557682224-5b8590cd9ec5"],
        ["Holographic","1618005198919-d3d4b5a92ead"],["Fire Abstract","1523895665936-7bfe172b757d"],
        ["Liquid Metal","1604076850742-42b505d9a8e4"],["Pastel Blur","1557683316094-a5986e76b4fd"],
        ["Iridescent","1553356084-58ef4a67b2a7"],["Glitch Art","1545239705-1564e58b9e4a"],
        ["Watercolor","1534796636912-3b95b3ab5986"],["Geometric","1509228627152-72ae9ae6848d"],
        ["Rainbow","1579546929518-9e396f3cc809"],["Marbled","1567095751004-aa51a2690368"],
        ["Crystal","1557682250012-097c6e440e5b"],["Oil Spill","1618005182384-a83a8bd57fbe"],
        ["Neon Lines","1604076913837-52ab5f6f4d1b"]
    ],
    "City": [
        ["NYC Skyline","1449824913935-59a10b8d2000"],["Tokyo Night","1480714378408-67cf0d13bc5b"],
        ["London Bridge","1477959858617-67f85cf4f1df"],["Hong Kong","1514565131-fce0801e5785"],
        ["Paris Streets","1519501025264-65ba15a82390"],["Dubai Sunset","1444723121867-13bd53ad77db"],
        ["Chicago","1467269204594-9661b134dd2b"],["Singapore","1485470733090-0aae1788d668"],
        ["Sydney Opera","1480796927426-f609979314bd"],["Venice","1496588152823-86ff7695e68f"],
        ["Berlin Wall","1460723237483-7a6dc9d0b212"],["Rome","1515542622106-78bda8ba0e5b"],
        ["Bangkok","1508009603885-50cf7c579a1c"],["Lisbon Tram","1536344150529-fb7ec7b2dabb"],
        ["Moscow Night","1513326738677-b964603b136d"],["San Francisco","1449034446853-66c86144b0ad"],
        ["Amsterdam","1534351590666-13e3e96b5017"],["Prague","1519677100203-a0e668c92439"],
        ["Istanbul","1524231757912-21f4fe3a7200"],["Seoul Night","1506501139174-099022df5260"],
        ["Rio Aerial","1483729558449-99ef09a8c325"],["Cape Town","1516026672322-bc52d9c4d76e"],
        ["Vienna","1519677100203-a0e668c92439"],["Barcelona","1523531294919-4bcd7c65ef8a"],
        ["New Delhi","1524492412937-b28074a5d7da"]
    ],
    "Ocean": [
        ["Aerial Beach","1505118380757-91f5816b1189"],["Coral Reef","1518837695005-2083093ee35b"],
        ["Sunset Waves","1439405326854-04ef5a68e94f"],["Tropical Shore","1471922694854-f2fcef8fdc5f"],
        ["Deep Blue","1468413253725-0d5c25e820b4"],["Ocean Mist","1494783367193-149034c05e8f"],
        ["Lighthouse","1484291150161-a26c40c72e70"],["Cliff Coast","1505142468610-359e7d316be0"],
        ["Turquoise Bay","1504681869696-d977211a5e0c"],["Wave Tunnel","1507525428034-b723cf961d3e"],
        ["Starfish Beach","1518837695005-2083093ee35b"],["Underwater","1439405326854-04ef5a68e94f"],
        ["Mangrove","1471922694854-f2fcef8fdc5f"],["Pier Sunset","1468413253725-0d5c25e820b4"],
        ["Sailing","1494783367193-149034c05e8f"],["Whale Tail","1484291150161-a26c40c72e70"],
        ["Rocky Shore","1505142468610-359e7d316be0"],["Tidal Pool","1504681869696-d977211a5e0c"],
        ["Surf Break","1507525428034-b723cf961d3e"],["Lagoon","1518837695005-2083093ee35b"],
        ["Fisherman","1439405326854-04ef5a68e94f"],["Marina","1471922694854-f2fcef8fdc5f"],
        ["Sunset Pier","1468413253725-0d5c25e820b4"],["Seagull","1505118380757-91f5816b1189"],
        ["Coral Garden","1494783367193-149034c05e8f"]
    ],
    "Mountains": [
        ["Mountain Lake","1506744038136-46273834b3fb"],["Snowy Peaks","1519681393784-d120267933ba"],
        ["Alpine Meadow","1464822759023-fed6ef5a98c5"],["Misty Range","1454496522488-7a8e488e8606"],
        ["Dawn Summit","1444927714506-8492d94b4e3d"],["Valley Fog","1470770903676-69b98201ea1c"],
        ["Rocky Ridge","1486673615660-5cf5fd4ee81c"],["Glacier Lake","1464278533981-50106e6176b1"],
        ["Sunset Peak","1485201921234-6e9f3abc1065"],["Northern Lights","1531366936337-7c912a4589a7"],
        ["Everest View","1506905925346-21bda4d32df4"],["Autumn Hills","1500964757134-68a1946ec4e7"],
        ["Canyon","1474044159687-1ee9f3a51722"],["Volcano","1462275646964-a0e3c11fb5a3"],
        ["Waterfall Peak","1432405972618-c6b0c0d38c4d"],["Swiss Alps","1506905925346-21bda4d32df4"],
        ["Mountain Road","1500964757134-68a1946ec4e7"],["Cliff Edge","1474044159687-1ee9f3a51722"],
        ["Summit Cross","1462275646964-a0e3c11fb5a3"],["Lake Reflect","1506744038136-46273834b3fb"],
        ["Fog Valley","1519681393784-d120267933ba"],["Autumn Peak","1464822759023-fed6ef5a98c5"],
        ["Ice Cave","1454496522488-7a8e488e8606"],["Starry Summit","1444927714506-8492d94b4e3d"],
        ["Tibet Plateau","1470770903676-69b98201ea1c"]
    ],
    "Minimal": [
        ["Soft Gradient","1557683316094-a5986e76b4fd"],["White Space","1553356084-58ef4a67b2a7"],
        ["Simple Lines","1545239705-1564e58b9e4a"],["Paper Fold","1494256997604-768d1f608cac"],
        ["Grid Pattern","1507003211169-0a1dd7228f2d"],["Mono Shadow","1528459801416-a5e0ad8d1a3c"],
        ["Pastel Wall","1520209759809-a9bcb6cb3241"],["Sand Dune","1517816428104-798cad33deb3"],
        ["Leaf Shadow","1509515637298-b62b5ed1e38e"],["Stone Texture","1528459105426-b9548367069b"],
        ["Concrete","1557683316094-a5986e76b4fd"],["Light Beam","1553356084-58ef4a67b2a7"],
        ["Cotton","1545239705-1564e58b9e4a"],["Fog Minimal","1494256997604-768d1f608cac"],
        ["Cloud Soft","1507003211169-0a1dd7228f2d"],["Silk","1528459801416-a5e0ad8d1a3c"],
        ["Pebbles","1520209759809-a9bcb6cb3241"],["Water Drop","1517816428104-798cad33deb3"],
        ["Snow Plain","1509515637298-b62b5ed1e38e"],["Clay","1528459105426-b9548367069b"],
        ["Pastel Geo","1557683316094-a5986e76b4fd"],["Ice White","1553356084-58ef4a67b2a7"],
        ["Brush Stroke","1545239705-1564e58b9e4a"],["Marble","1494256997604-768d1f608cac"],
        ["Zen Garden","1507003211169-0a1dd7228f2d"]
    ],
    "Dark": [
        ["Dark Gradient","1534796636912-3b95b3ab5986"],["Noir City","1516339901601-2e1b52d348a2"],
        ["Storm Cloud","1536431311719-5c5e5b8e07a9"],["Dark Forest","1557683311512-c1e4523c8f16"],
        ["Night Sky","1496715976221-ed1c0a18a6ce"],["Moody Lake","1504192010706-dd2979eb7abe"],
        ["Dark Abstract","1526374965328-7f61d4dc18c5"],["Night Road","1478760329108-5c3ed9d495a0"],
        ["Coal Texture","1533134242443-0a28b259ea2d"],["Thunderstorm","1536244636800-a3f74db0f3cf"],
        ["Dark Ocean","1534796636912-3b95b3ab5986"],["Neon City","1516339901601-2e1b52d348a2"],
        ["Fog Night","1536431311719-5c5e5b8e07a9"],["Shadow Play","1557683311512-c1e4523c8f16"],
        ["Eclipse","1496715976221-ed1c0a18a6ce"],["Deep Cave","1504192010706-dd2979eb7abe"],
        ["Lava Flow","1526374965328-7f61d4dc18c5"],["Starless","1478760329108-5c3ed9d495a0"],
        ["Void","1533134242443-0a28b259ea2d"],["Dark Matter","1536244636800-a3f74db0f3cf"],
        ["Ash","1534796636912-3b95b3ab5986"],["Black Hole","1516339901601-2e1b52d348a2"],
        ["Obsidian","1536431311719-5c5e5b8e07a9"],["Charcoal","1557683311512-c1e4523c8f16"],
        ["Midnight Rain","1496715976221-ed1c0a18a6ce"]
    ]
};

// ===================== THEMES with SUPERHERO gradient wallpapers =====================
var THEMES = {
    "default":  { name:"Default",         color1:"#333",    color2:"#58a6ff",
        wp: wpUrl("1506744038136-46273834b3fb") },
    "ironman":  { name:"Crimson Core",        color1:"#8B0000", color2:"#ffd700",
        wp: "radial-gradient(ellipse at 50% 40%, rgba(255,215,0,0.35) 0%, rgba(255,68,68,0.4) 25%, #3d0000 55%, #1a0000 80%, #0a0000 100%)" },
    "thor":     { name:"Thunder Strike",            color1:"#0B3D91", color2:"#e0e0e0",
        wp: "linear-gradient(180deg, #020b1a 0%, #0a1f4a 25%, #1a4a9a 45%, #64b5f6 50%, #1a4a9a 55%, #0a1f4a 75%, #020b1a 100%)" },
    "captain":  { name:"Liberty Shield", color1:"#002868", color2:"#BF0A30",
        wp: "radial-gradient(circle at 50% 50%, #f5f5f5 8%, #BF0A30 9%, #BF0A30 16%, #002868 17%, #002868 26%, #BF0A30 27%, #BF0A30 34%, #002868 35%, #002868 100%)" },
    "spiderman":{ name:"Neon Arachnid",      color1:"#8B0000", color2:"#1a237e",
        wp: "linear-gradient(135deg, #8B0000 0%, #4a0015 20%, #1a0030 45%, #0a1040 70%, #000520 100%)" },
    "midnight": { name:"Midnight",        color1:"#1a0030", color2:"#bb86fc",
        wp: wpUrl("1534796636912-3b95b3ab5986") },
    "ocean":    { name:"Ocean",           color1:"#003333", color2:"#26c6da",
        wp: wpUrl("1505118380757-91f5816b1189") },
    "sunset":   { name:"Sunset",          color1:"#3e1a00", color2:"#ff7043",
        wp: wpUrl("1469474968028-56623f02e42e") }
};

// ===================== MUSIC =====================
var TRACKS = [
    { title:"Midnight Drive",    artist:"Neon Coast",     genre:"electronic", src:1 },
    { title:"Digital Dreams",    artist:"Synthwave FM",   genre:"electronic", src:2 },
    { title:"Pulse Engine",      artist:"Circuit Board",  genre:"electronic", src:3 },
    { title:"Future Bass",       artist:"Neon Coast",     genre:"electronic", src:5 },
    { title:"Amber Sunrise",     artist:"Luna Wave",      genre:"chill",      src:4 },
    { title:"Drift Away",        artist:"Calm Shores",    genre:"chill",      src:6 },
    { title:"Velvet Evening",    artist:"Soft Focus",     genre:"chill",      src:8 },
    { title:"Gentle Rain",       artist:"Calm Shores",    genre:"chill",      src:10 },
    { title:"Serenade No. 7",    artist:"Chamber Ens.",   genre:"classical",  src:7 },
    { title:"Sonata in C",       artist:"Piano Collective",genre:"classical", src:9 },
    { title:"Waltz of Stars",    artist:"String Quartet", genre:"classical",  src:11 },
    { title:"Deep Focus",        artist:"Atmos Studio",   genre:"ambient",    src:12 },
    { title:"Cosmic Background", artist:"Space Ambient",  genre:"ambient",    src:13 },
    { title:"Still Water",       artist:"Atmos Studio",   genre:"ambient",    src:14 },
    { title:"Thunder Road",      artist:"Heavy Gauge",    genre:"rock",       src:15 },
    { title:"Electric Soul",     artist:"The Amplifiers", genre:"rock",       src:16 }
];
function trackUrl(n) { return 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-' + n + '.mp3'; }

// ===================== GUIDE =====================
var GUIDE_TOPICS = [
    { title:"Getting Started", body:'<h2>Welcome to CopyMac OS 2</h2><p>This is your web-based desktop OS. Everything runs in your browser.</p><p>You have a <strong>menu bar</strong> at the top, a <strong>dock</strong> at the bottom, and <strong>draggable windows</strong>.</p><div class="tip-box">Tip: Try every dock icon to discover all the apps!</div>' },
    { title:"The Dock", body:'<h2>The Dock</h2><p><strong>Notes</strong> — text editor with save/load and word count.</p><p><strong>Browser</strong> — Google search with bookmark quick links.</p><p><strong>Paint Studio</strong> — drawing canvas with pen, eraser, line tool, color presets, undo, and download.</p><p><strong>Music</strong> — full player with genres, search, and controls.</p><p><strong>YouTube</strong> — opens real youtube.com.</p><p><strong>StarDance</strong> — opens stardance.hackclub.com. A NASA &amp; Hack Club coding competition for teens ages 13-18.</p><p><strong>Calculator</strong> — full-featured calculator.</p><p><strong>User Guide</strong> — you\'re reading it!</p><p><strong>Settings</strong> — themes, wallpapers, brightness, dock position.</p><div class="tip-box">Tip: Move the dock to any edge from Settings → Layout!</div>' },
    { title:"Windows", body:'<h2>Managing Windows</h2><p><strong>Drag</strong> — click title bar to move.</p><p><strong>Close</strong> (red) — removes window.</p><p><strong>Minimize</strong> (yellow) — hides to taskbar. Hover tab for Restore/Maximize.</p><p><strong>Maximize</strong> (green) — fullscreen toggle.</p><div class="tip-box">Tip: Hover traffic lights to see ×, −, □ icons!</div>' },
    { title:"Browser", body:'<h2>Using the Browser</h2><p>Type in the search box or URL bar and press <kbd>Enter</kbd> to Google search.</p><p>Quick links: YouTube, GitHub, Wikipedia, Reddit, Twitter, Stack Overflow, StarDance, MDN Docs.</p><div class="tip-box">Tip: Full URLs starting with http:// open directly!</div>' },
    { title:"Music Player", body:'<h2>Music Player</h2><p>16 tracks across 5 genres. Click any track to play.</p><p>Controls: Play/Pause, Next, Prev, Shuffle, Repeat, Volume.</p><p>Use the search bar to find tracks by name or artist.</p><p>Music keeps playing when minimized!</p><div class="tip-box">Tip: Now Playing appears in your menu bar!</div>' },
    { title:"Settings & Themes", body:'<h2>System Preferences</h2><p><strong>8 Themes:</strong> Default, Crimson Core, Thunder Strike, Liberty Shield, Neon Arachnid, Midnight, Ocean, Sunset.</p><p>Superhero themes have custom gradient wallpapers — Crimson Core\'s arc reactor glow, Thunder Strike\'s lightning, Liberty Shield\'s rings, and Neon Arachnid\'s city web.</p><p><strong>200+ Wallpapers</strong> across 8 categories.</p><p><strong>Brightness</strong> slider and <strong>Dock Position</strong> settings.</p><div class="tip-box">Tip: All settings persist across browser sessions via localStorage!</div>' },
    { title:"Other Apps", body:'<h2>Calculator</h2><p>Full calculator with AC, +/−, %, and all standard operations.</p><h2 style="margin-top:20px">Paint Studio</h2><p>Tools: <strong>Pen</strong>, <strong>Eraser</strong>, <strong>Line</strong>. 8 color presets + picker. Undo last 10 strokes. Download as PNG.</p><h2 style="margin-top:20px">Notes</h2><p>Save notes to localStorage, load them back anytime. Insert date/time, word count display.</p>' }
];

// ===================== WINDOW MANAGEMENT =====================
function bringToFront(w) { highestZIndex++; w.style.zIndex = highestZIndex; }

function openApp(appId) {
    if (appId === 'youtube') { window.open('https://youtube.com', '_blank'); return; }
    if (appId === 'stardance') { window.open('https://stardance.hackclub.com', '_blank'); return; }
    var existing = document.querySelector('.window[data-app="' + appId + '"]');
    if (existing) { if (existing.classList.contains('minimized')) restoreFromTaskbar(appId); else bringToFront(existing); return; }
    var template = document.getElementById(appId + '-template');
    if (!template) return;
    var clone = template.content.cloneNode(true);
    var windowEl = clone.querySelector('.window');
    windowEl.dataset.app = appId;
    var offset = (highestZIndex % 10) * 20;
    windowEl.style.top = (60 + offset) + 'px'; windowEl.style.left = (80 + offset) + 'px';
    bringToFront(windowEl);
    windowEl.addEventListener('mousedown', function() { bringToFront(windowEl); });
    makeDraggable(windowEl, windowEl.querySelector('.titlebar'));
    windowEl.style.transform = 'scale(0.8)'; windowEl.style.opacity = '0';
    document.getElementById('desktop').appendChild(windowEl);
    void windowEl.offsetWidth;
    windowEl.style.transform = 'scale(1)'; windowEl.style.opacity = '1';
    if (appId === 'paint')      initPaint(windowEl);
    if (appId === 'browser')    initBrowser(windowEl);
    if (appId === 'settings')   initSettings(windowEl);
    if (appId === 'guide')      initGuide(windowEl);
    if (appId === 'music')      initMusic(windowEl);
    if (appId === 'calculator') initCalc(windowEl);
}

function closeApp(btn) {
    var w = btn.closest('.window'); if (!w) return;
    var id = w.dataset.app; if (id) removeTaskbarTab(id);
    if (id === 'music') stopMusicOnClose();
    w.classList.add('closing'); w.style.transform = 'scale(0.9)'; w.style.opacity = '0';
    setTimeout(function() { w.remove(); }, 200);
}

function toggleMinimize(btn) {
    var w = btn.closest('.window'); if (!w) return;
    var id = w.dataset.app || 'app';
    var name = w.querySelector('.window-title').textContent;
    if (w.classList.contains('minimized')) { restoreFromTaskbar(id); return; }
    w.style.transform = 'scale(0.4) translateY(60vh)'; w.style.opacity = '0';
    setTimeout(function() { w.classList.add('minimized'); w.style.transform=''; w.style.opacity=''; addTaskbarTab(id,name); }, 200);
}
function toggleMaximize(btn) { var w = btn.closest('.window'); if (w) w.classList.toggle('maximized'); }

// ===================== TASKBAR =====================
function addTaskbarTab(id, name) {
    var tb = document.getElementById('taskbar');
    if (!tb || tb.querySelector('[data-taskbar-app="'+id+'"]')) return;
    var tab = document.createElement('div'); tab.className='taskbar-tab'; tab.dataset.taskbarApp=id; tab.textContent=name;
    var popup = document.createElement('div'); popup.className='taskbar-popup';
    var rb = document.createElement('button'); rb.className='taskbar-popup-btn restore-btn'; rb.textContent='Restore';
    rb.onclick = function(e){e.stopPropagation();restoreFromTaskbar(id)};
    var mb = document.createElement('button'); mb.className='taskbar-popup-btn max-btn'; mb.textContent='Maximize';
    mb.onclick = function(e){e.stopPropagation();restoreFromTaskbar(id,true)};
    popup.appendChild(rb); popup.appendChild(mb); tab.appendChild(popup);
    tab.onclick = function(){restoreFromTaskbar(id)}; tb.appendChild(tab);
}
function restoreFromTaskbar(id, max) {
    var w = document.querySelector('.window[data-app="'+id+'"]'); if(!w) return;
    removeTaskbarTab(id); w.classList.remove('minimized'); bringToFront(w);
    if(max) w.classList.add('maximized');
    w.style.transform='scale(0.6) translateY(40vh)'; w.style.opacity='0';
    void w.offsetWidth; w.style.transform='scale(1)'; w.style.opacity='1';
}
function removeTaskbarTab(id) {
    var tb = document.getElementById('taskbar'); if(!tb) return;
    var t = tb.querySelector('[data-taskbar-app="'+id+'"]'); if(t) t.remove();
}

// ===================== CLOCK =====================
function updateClock() {
    var now=new Date(); var h=now.getHours(); var m=now.getMinutes();
    var ap=h>=12?'PM':'AM'; h=h%12; h=h?h:12; m=m<10?'0'+m:m;
    var el=document.getElementById('clock'); if(el) el.textContent=h+':'+m+' '+ap;
}
setInterval(updateClock,1000); updateClock();

// ===================== WALLPAPER =====================
function changeWallpaper(val) {
    // supports both URLs and CSS gradients
    if (val.startsWith('http')) {
        document.body.style.backgroundImage = "url('" + val + "')";
    } else {
        document.body.style.backgroundImage = val;
    }
    localStorage.setItem('copymac_wallpaper', val);
}

// ===================== NOTES (enhanced) =====================
function noteUpdateCount(textarea) {
    var wc = textarea.closest('.window').querySelector('.notes-word-count');
    var text = textarea.value.trim();
    var words = text === '' ? 0 : text.split(/\s+/).length;
    wc.textContent = words + ' word' + (words !== 1 ? 's' : '') + ' · ' + textarea.value.length + ' chars';
}
function noteSave(btn) {
    var ta = btn.closest('.window').querySelector('.notepad-area');
    localStorage.setItem('copymac_note', ta.value);
    btn.textContent = '✓ Saved!'; setTimeout(function(){ btn.textContent = '💾 Save'; }, 1200);
}
function noteLoad(btn) {
    var ta = btn.closest('.window').querySelector('.notepad-area');
    var saved = localStorage.getItem('copymac_note');
    if (saved) { ta.value = saved; noteUpdateCount(ta); }
    else { btn.textContent = 'Nothing saved'; setTimeout(function(){ btn.textContent = '📂 Load'; }, 1200); }
}
function noteInsertDate(btn) {
    var ta = btn.closest('.window').querySelector('.notepad-area');
    var now = new Date();
    ta.value += '\n[' + now.toLocaleDateString() + ' ' + now.toLocaleTimeString() + ']\n';
    noteUpdateCount(ta);
}
function noteClear(btn) {
    var ta = btn.closest('.window').querySelector('.notepad-area');
    ta.value = ''; noteUpdateCount(ta);
}

// ===================== PAINT (enhanced) =====================
var paintHistory = []; // undo stack
var paintCurrentTool = 'pen';

function initPaint(windowEl) {
    var canvas = windowEl.querySelector('.paintCanvas');
    var ctx = canvas.getContext('2d');
    var colorPicker = windowEl.querySelector('.paintColor');
    var sizePicker = windowEl.querySelector('.paintSize');
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,canvas.width,canvas.height);
    paintHistory = []; savePaintState(canvas);

    var isDrawing = false;
    var lineStart = null;

    // tool selection
    var tools = windowEl.querySelectorAll('.paint-tool');
    tools.forEach(function(t) {
        t.addEventListener('click', function() {
            tools.forEach(function(x){x.classList.remove('active')});
            t.classList.add('active');
            paintCurrentTool = t.dataset.tool;
            canvas.style.cursor = paintCurrentTool === 'eraser' ? 'cell' : 'crosshair';
        });
    });

    // color presets
    windowEl.querySelectorAll('.preset').forEach(function(p) {
        p.addEventListener('click', function() { colorPicker.value = p.dataset.color; });
    });

    canvas.addEventListener('mousedown', function(e) {
        isDrawing = true;
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left; var y = e.clientY - rect.top;
        if (paintCurrentTool === 'line') { lineStart = { x:x, y:y }; }
        else { ctx.beginPath(); ctx.moveTo(x, y); }
    });

    canvas.addEventListener('mousemove', function(e) {
        if (!isDrawing || paintCurrentTool === 'line') return;
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left; var y = e.clientY - rect.top;
        ctx.lineWidth = sizePicker.value;
        ctx.lineCap = 'round';
        ctx.strokeStyle = paintCurrentTool === 'eraser' ? '#ffffff' : colorPicker.value;
        ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
    });

    windowEl.addEventListener('mouseup', function(e) {
        if (!isDrawing) return;
        if (paintCurrentTool === 'line' && lineStart) {
            var rect = canvas.getBoundingClientRect();
            ctx.beginPath(); ctx.moveTo(lineStart.x, lineStart.y);
            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.lineWidth = sizePicker.value; ctx.lineCap = 'round';
            ctx.strokeStyle = colorPicker.value; ctx.stroke();
            lineStart = null;
        }
        isDrawing = false; ctx.beginPath();
        savePaintState(canvas);
    });
}

function savePaintState(canvas) {
    if (paintHistory.length > 15) paintHistory.shift();
    paintHistory.push(canvas.toDataURL());
}
function paintUndo(btn) {
    var canvas = btn.closest('.window').querySelector('.paintCanvas');
    if (paintHistory.length > 1) {
        paintHistory.pop(); // remove current
        var img = new Image();
        img.onload = function() { canvas.getContext('2d').drawImage(img, 0, 0); };
        img.src = paintHistory[paintHistory.length - 1];
    }
}
function clearCanvas(btn) {
    var canvas = btn.closest('.window').querySelector('.paintCanvas');
    var ctx = canvas.getContext('2d'); ctx.fillStyle = "#ffffff"; ctx.fillRect(0,0,canvas.width,canvas.height);
    savePaintState(canvas);
}
function paintDownload(btn) {
    var canvas = btn.closest('.window').querySelector('.paintCanvas');
    var link = document.createElement('a');
    link.download = 'copymac-drawing.png'; link.href = canvas.toDataURL();
    link.click();
}

// ===================== BROWSER =====================
function initBrowser(windowEl) {
    var searchInput = windowEl.querySelector('.mock-search');
    var urlBar = windowEl.querySelector('.url-bar');
    if (searchInput) searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim()) {
            var q = encodeURIComponent(searchInput.value.trim());
            window.open('https://www.google.com/search?q='+q,'_blank');
            urlBar.value = 'https://www.google.com/search?q='+q; searchInput.value = '';
        }
    });
    if (urlBar) urlBar.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && urlBar.value.trim()) {
            var v = urlBar.value.trim();
            if (v.startsWith('http://') || v.startsWith('https://')) window.open(v,'_blank');
            else { var q = encodeURIComponent(v); window.open('https://www.google.com/search?q='+q,'_blank'); urlBar.value = 'https://www.google.com/search?q='+q; }
        }
    });
}

// ===================== CALCULATOR =====================
var calcVal = '0';
var calcPrev = '';
var calcOp = '';
var calcNewNum = true;

function initCalc(windowEl) { calcVal = '0'; calcPrev = ''; calcOp = ''; calcNewNum = true; }

function calcInput(val) {
    var display = document.querySelector('.calc-window #calc-display');
    if (!display) display = document.querySelector('#calc-display');
    if (!display) return;

    if (val === 'clear') {
        calcVal = '0'; calcPrev = ''; calcOp = ''; calcNewNum = true;
    } else if (val === 'sign') {
        if (calcVal !== '0') calcVal = calcVal.startsWith('-') ? calcVal.slice(1) : '-' + calcVal;
    } else if (val === '%') {
        calcVal = String(parseFloat(calcVal) / 100);
    } else if (['+','-','*','/'].indexOf(val) > -1) {
        if (calcOp && !calcNewNum) { calcExecute(); }
        calcPrev = calcVal; calcOp = val; calcNewNum = true;
    } else if (val === '=') {
        calcExecute(); calcOp = ''; calcNewNum = true;
    } else if (val === '.') {
        if (calcNewNum) { calcVal = '0.'; calcNewNum = false; }
        else if (calcVal.indexOf('.') === -1) calcVal += '.';
    } else {
        // digit
        if (calcNewNum) { calcVal = val; calcNewNum = false; }
        else calcVal += val;
    }
    display.textContent = calcVal;
}

function calcExecute() {
    var a = parseFloat(calcPrev); var b = parseFloat(calcVal);
    if (isNaN(a) || isNaN(b)) return;
    if (calcOp === '+') calcVal = String(a + b);
    else if (calcOp === '-') calcVal = String(a - b);
    else if (calcOp === '*') calcVal = String(a * b);
    else if (calcOp === '/') calcVal = b !== 0 ? String(a / b) : 'Error';
    // clean up floating point
    if (calcVal !== 'Error' && calcVal.indexOf('.') > -1) {
        calcVal = String(parseFloat(parseFloat(calcVal).toFixed(10)));
    }
}

// ===================== SETTINGS =====================
function initSettings(windowEl) {
    var themeGrid = windowEl.querySelector('#theme-grid');
    if (themeGrid) {
        var cur = localStorage.getItem('copymac_theme') || 'default';
        Object.keys(THEMES).forEach(function(key) {
            var t = THEMES[key];
            var card = document.createElement('div');
            card.className = 'theme-card' + (key === cur ? ' selected' : '');
            card.style.background = 'linear-gradient(135deg,' + t.color1 + ',' + t.color2 + ')';
            card.textContent = t.name;
            card.addEventListener('click', function() {
                setTheme(key);
                themeGrid.querySelectorAll('.theme-card').forEach(function(c){c.classList.remove('selected')});
                card.classList.add('selected');
            });
            themeGrid.appendChild(card);
        });
    }
    var catTabs = windowEl.querySelector('#wp-cat-tabs');
    var wpGrid = windowEl.querySelector('#settings-wallpaper-grid');
    if (catTabs && wpGrid) {
        var cats = Object.keys(WALLPAPER_CATS); var first = cats[0];
        cats.forEach(function(cat) {
            var tab = document.createElement('button');
            tab.className = 'wp-cat-tab' + (cat === first ? ' active' : '');
            tab.textContent = cat;
            tab.addEventListener('click', function() {
                catTabs.querySelectorAll('.wp-cat-tab').forEach(function(t){t.classList.remove('active')});
                tab.classList.add('active'); renderWallpapers(wpGrid, cat);
            });
            catTabs.appendChild(tab);
        });
        renderWallpapers(wpGrid, first);
    }
    var navItems = windowEl.querySelectorAll('.settings-nav-item');
    var panels = windowEl.querySelectorAll('.settings-panel');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(n){n.classList.remove('active')});
            panels.forEach(function(p){p.classList.remove('active')});
            item.classList.add('active');
            windowEl.querySelector('.settings-panel[data-panel="'+item.dataset.panel+'"]').classList.add('active');
        });
    });
    var bs = windowEl.querySelector('#brightness-slider');
    var bv = windowEl.querySelector('#brightness-val');
    if (bs) {
        var saved = localStorage.getItem('copymac_brightness');
        if (saved) { bs.value = saved; applyBrightness(saved); }
        if (bv) bv.textContent = bs.value + '%';
        bs.addEventListener('input', function() {
            bv.textContent = bs.value + '%'; applyBrightness(bs.value);
            localStorage.setItem('copymac_brightness', bs.value);
        });
    }
    var posBtns = windowEl.querySelectorAll('.dock-pos-btn');
    var curPos = localStorage.getItem('copymac_dock_pos') || 'bottom';
    posBtns.forEach(function(b) { b.classList.toggle('active', b.dataset.pos === curPos); });
    var ni = windowEl.querySelector('#display-name-input');
    if (ni) { var sn = localStorage.getItem('copymac_osname'); if (sn) ni.value = sn; }
}

function renderWallpapers(grid, cat) {
    grid.innerHTML = '';
    var wps = WALLPAPER_CATS[cat] || [];
    var curWp = localStorage.getItem('copymac_wallpaper') || '';
    wps.forEach(function(wp) {
        var thumb = document.createElement('div');
        thumb.className = 'wallpaper-thumb';
        var url = wpUrl(wp[1]);
        if (curWp === url) thumb.classList.add('selected');
        thumb.style.backgroundImage = "url('" + wpThumb(wp[1]) + "')";
        thumb.title = wp[0];
        thumb.addEventListener('click', function() {
            changeWallpaper(url);
            grid.querySelectorAll('.wallpaper-thumb').forEach(function(t){t.classList.remove('selected')});
            thumb.classList.add('selected');
        });
        grid.appendChild(thumb);
    });
}

function applyBrightness(pct) { var ov=document.getElementById('brightness-overlay'); if(ov) ov.style.opacity=1-(pct/100); }
function updateDisplayName() {
    var i=document.querySelector('#display-name-input'); if(!i) return;
    var n=i.value.trim()||'CopyMac OS 2';
    document.getElementById('os-name-display').textContent=n;
    var a=document.querySelector('#about-os-name'); if(a) a.textContent=n;
    localStorage.setItem('copymac_osname',n);
}

// ===================== THEME ENGINE =====================
function setTheme(name) {
    document.body.setAttribute('data-theme', name);
    localStorage.setItem('copymac_theme', name);
    if (THEMES[name] && THEMES[name].wp) changeWallpaper(THEMES[name].wp);
}

// ===================== DOCK POSITION =====================
function setDockPosition(pos) {
    document.body.setAttribute('data-dock', pos);
    localStorage.setItem('copymac_dock_pos', pos);
    document.querySelectorAll('.dock-pos-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.pos === pos);
    });
}

// ===================== MUSIC PLAYER =====================
var audioPlayer = null; var currentTrackIdx = -1; var isShuffled = false; var isRepeating = false;
var filteredTracks = TRACKS.slice();

function initMusic(windowEl) {
    if (!audioPlayer) {
        audioPlayer = new Audio(); audioPlayer.volume = 0.8;
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', onTrackEnded);
    }
    var genres = windowEl.querySelectorAll('.music-genre');
    genres.forEach(function(g) {
        g.addEventListener('click', function() {
            genres.forEach(function(x){x.classList.remove('active')}); g.classList.add('active');
            var genre = g.dataset.genre;
            filteredTracks = genre === 'all' ? TRACKS.slice() : TRACKS.filter(function(t){return t.genre===genre});
            renderTrackList(windowEl);
        });
    });
    windowEl.querySelector('#btn-play').addEventListener('click', function(){togglePlayPause(windowEl)});
    windowEl.querySelector('#btn-next').addEventListener('click', function(){playNext(windowEl)});
    windowEl.querySelector('#btn-prev').addEventListener('click', function(){playPrev(windowEl)});
    windowEl.querySelector('#btn-shuffle').addEventListener('click', function(){isShuffled=!isShuffled;this.classList.toggle('active',isShuffled)});
    windowEl.querySelector('#btn-repeat').addEventListener('click', function(){isRepeating=!isRepeating;this.classList.toggle('active',isRepeating)});
    var vol = windowEl.querySelector('#volume-slider');
    vol.addEventListener('input', function(){if(audioPlayer)audioPlayer.volume=vol.value/100});
    var prog = windowEl.querySelector('#progress-bar');
    prog.addEventListener('input', function(){if(audioPlayer&&audioPlayer.duration)audioPlayer.currentTime=(prog.value/1000)*audioPlayer.duration});
    // search
    var search = windowEl.querySelector('#music-search');
    if (search) search.addEventListener('input', function() {
        var q = search.value.trim().toLowerCase();
        var activeGenre = windowEl.querySelector('.music-genre.active');
        var genre = activeGenre ? activeGenre.dataset.genre : 'all';
        var base = genre === 'all' ? TRACKS.slice() : TRACKS.filter(function(t){return t.genre===genre});
        filteredTracks = q ? base.filter(function(t){return t.title.toLowerCase().indexOf(q)>-1||t.artist.toLowerCase().indexOf(q)>-1}) : base;
        renderTrackList(windowEl);
    });
    renderTrackList(windowEl);
    if (currentTrackIdx >= 0) syncMusicUI(windowEl);
}
function renderTrackList(windowEl) {
    var list = windowEl.querySelector('#track-list'); if(!list) return;
    list.innerHTML = '';
    filteredTracks.forEach(function(track, i) {
        var item = document.createElement('div'); item.className='track-item';
        var gIdx = TRACKS.indexOf(track);
        if (gIdx===currentTrackIdx) item.classList.add('playing');
        item.innerHTML='<span class="t-num">'+(i+1)+'</span><div class="t-info"><div class="t-title">'+track.title+'</div><div class="t-artist">'+track.artist+'</div></div>';
        item.addEventListener('click', function(){playTrack(gIdx,windowEl)});
        list.appendChild(item);
    });
}
function playTrack(idx, windowEl) {
    currentTrackIdx=idx; var track=TRACKS[idx];
    audioPlayer.src=trackUrl(track.src); audioPlayer.play();
    if(!windowEl) windowEl=document.querySelector('.music-window');
    if(windowEl) syncMusicUI(windowEl);
    var mini=document.getElementById('now-playing-mini'); if(mini) mini.textContent='♫ '+track.title;
}
function syncMusicUI(windowEl) {
    if(!windowEl) return; var track=TRACKS[currentTrackIdx];
    var ti=windowEl.querySelector('#np-title'); var ar=windowEl.querySelector('#np-artist');
    if(ti) ti.textContent=track?track.title:'Select a track';
    if(ar) ar.textContent=track?track.artist:'—';
    var eq=windowEl.querySelector('#equalizer'); if(eq) eq.classList.toggle('playing',!audioPlayer.paused);
    var pb=windowEl.querySelector('#btn-play'); if(pb) pb.innerHTML=audioPlayer.paused?'&#x25B6;':'&#x23F8;';
    windowEl.querySelectorAll('.track-item').forEach(function(item,i){
        var gIdx=TRACKS.indexOf(filteredTracks[i]); item.classList.toggle('playing',gIdx===currentTrackIdx);
    });
}
function togglePlayPause(w){if(currentTrackIdx<0){playTrack(0,w);return}if(audioPlayer.paused)audioPlayer.play();else audioPlayer.pause();syncMusicUI(w)}
function playNext(w){if(!TRACKS.length)return;var n=isShuffled?Math.floor(Math.random()*TRACKS.length):(currentTrackIdx+1)%TRACKS.length;playTrack(n,w)}
function playPrev(w){if(!TRACKS.length)return;var p=currentTrackIdx<=0?TRACKS.length-1:currentTrackIdx-1;playTrack(p,w)}
function onTrackEnded(){if(isRepeating){audioPlayer.currentTime=0;audioPlayer.play()}else playNext(document.querySelector('.music-window'))}
function updateProgress(){var w=document.querySelector('.music-window');if(!w||!audioPlayer.duration)return;var p=w.querySelector('#progress-bar');var c=w.querySelector('#time-current');var t=w.querySelector('#time-total');if(p)p.value=(audioPlayer.currentTime/audioPlayer.duration)*1000;if(c)c.textContent=formatTime(audioPlayer.currentTime);if(t)t.textContent=formatTime(audioPlayer.duration)}
function formatTime(s){var m=Math.floor(s/60);var sec=Math.floor(s%60);return m+':'+(sec<10?'0':'')+sec}
function stopMusicOnClose(){if(audioPlayer)audioPlayer.pause();currentTrackIdx=-1;var m=document.getElementById('now-playing-mini');if(m)m.textContent=''}

// ===================== GUIDE =====================
function initGuide(windowEl) {
    var topics=windowEl.querySelectorAll('.guide-topic'); var body=windowEl.querySelector('#guide-body');
    showGuideTopic(0,body);
    topics.forEach(function(t){t.addEventListener('click',function(){
        topics.forEach(function(x){x.classList.remove('active')});t.classList.add('active');
        showGuideTopic(parseInt(t.dataset.topic),body);
    })});
}
function showGuideTopic(i,b){if(GUIDE_TOPICS[i])b.innerHTML=GUIDE_TOPICS[i].body}

// ===================== DRAGGING =====================
function makeDraggable(windowEl, titlebarEl) {
    var isDragging=false; var sx,sy,il,it;
    titlebarEl.addEventListener('mousedown', function(e) {
        if(e.target.classList.contains('dot')||e.target.classList.contains('dot-icon'))return;
        if(windowEl.classList.contains('maximized'))return;
        isDragging=true; sx=e.clientX; sy=e.clientY; il=windowEl.offsetLeft; it=windowEl.offsetTop;
        titlebarEl.style.cursor='grabbing';
        document.addEventListener('mousemove',drag); document.addEventListener('mouseup',stop);
    });
    function drag(e){if(!isDragging)return;var nl=il+(e.clientX-sx);var nt=it+(e.clientY-sy);if(nt<28)nt=28;windowEl.style.left=nl+'px';windowEl.style.top=nt+'px'}
    function stop(){if(isDragging){isDragging=false;titlebarEl.style.cursor='grab';document.removeEventListener('mousemove',drag);document.removeEventListener('mouseup',stop)}}
}

// ===================== WELCOME =====================
var welcomeStep=1; var helloTimer=null;
var helloWords=["Hello","Hola","Bonjour","Ciao","Hallo","Olá","Привет","こんにちは","안녕하세요","Namaste","Merhaba","Xin chào","مرحبا"];
var helloIndex=0;
function startHelloRotation(){var el=document.getElementById('hello-rotating');if(!el)return;helloTimer=setInterval(function(){helloIndex=(helloIndex+1)%helloWords.length;el.style.opacity='0';setTimeout(function(){el.textContent=helloWords[helloIndex];el.style.opacity='1'},300)},1800)}
function stopHelloRotation(){if(helloTimer){clearInterval(helloTimer);helloTimer=null}}
function welcomeNext(){
    var allSteps=document.querySelectorAll('.welcome-step');var allDots=document.querySelectorAll('.w-dot');
    if(welcomeStep===1)stopHelloRotation();
    if(welcomeStep===3){var ni=document.getElementById('setup-username');var un=ni?ni.value.trim():'';if(un)localStorage.setItem('copymac_user',un)}
    allSteps.forEach(function(s){s.classList.remove('active')});allDots.forEach(function(d){d.classList.remove('active')});
    welcomeStep++;
    if(welcomeStep===5){var su=localStorage.getItem('copymac_user');var fm=document.getElementById('welcome-final-msg');if(su&&fm)fm.textContent="You're all set, "+su+"!"}
    var ns=document.querySelector('.welcome-step[data-step="'+welcomeStep+'"]');var nd=document.querySelector('.w-dot[data-dot="'+welcomeStep+'"]');
    if(ns)ns.classList.add('active');if(nd)nd.classList.add('active');
}
function finishWelcome(){localStorage.setItem('copymac_welcomed','true');var o=document.getElementById('welcome-overlay');if(o){o.classList.add('hidden');setTimeout(function(){o.remove()},800)}}
function populateSetupWallpapers(){
    var c=document.getElementById('setup-wallpapers');if(!c)return;
    var picks=[WALLPAPER_CATS["Nature"][0],WALLPAPER_CATS["Space"][0],WALLPAPER_CATS["Abstract"][0],WALLPAPER_CATS["City"][0],WALLPAPER_CATS["Ocean"][0],WALLPAPER_CATS["Mountains"][0],WALLPAPER_CATS["Minimal"][0],WALLPAPER_CATS["Dark"][0]];
    picks.forEach(function(wp,i){
        var t=document.createElement('div');t.className='setup-wp-thumb';if(i===0)t.classList.add('selected');
        t.style.backgroundImage="url('"+wpThumb(wp[1])+"')";t.title=wp[0];
        t.addEventListener('click',function(){c.querySelectorAll('.setup-wp-thumb').forEach(function(x){x.classList.remove('selected')});t.classList.add('selected');changeWallpaper(wpUrl(wp[1]))});
        c.appendChild(t);
    });
}

// ===================== BOOT =====================
document.addEventListener('DOMContentLoaded', function() {
    var welcomed = localStorage.getItem('copymac_welcomed');
    if (welcomed) { var o = document.getElementById('welcome-overlay'); if(o) o.remove(); }
    else { populateSetupWallpapers(); startHelloRotation();
        var s1 = document.querySelector('.welcome-step[data-step="1"]');
        if(s1) s1.addEventListener('click', function(){welcomeNext()});
    }
    var savedWp = localStorage.getItem('copymac_wallpaper');
    if (savedWp) { if(savedWp.startsWith('http')) document.body.style.backgroundImage="url('"+savedWp+"')"; else document.body.style.backgroundImage=savedWp; }
    else changeWallpaper(wpUrl(WALLPAPER_CATS["Nature"][0][1]));
    var savedBr = localStorage.getItem('copymac_brightness'); if(savedBr) applyBrightness(savedBr);
    var savedNm = localStorage.getItem('copymac_osname'); if(savedNm){var el=document.getElementById('os-name-display');if(el)el.textContent=savedNm}
    var savedUs = localStorage.getItem('copymac_user'); var gr=document.getElementById('user-greeting'); if(savedUs&&gr)gr.textContent='Hi, '+savedUs;
    var savedTh = localStorage.getItem('copymac_theme'); if(savedTh) document.body.setAttribute('data-theme',savedTh);
    var savedDk = localStorage.getItem('copymac_dock_pos'); if(savedDk) document.body.setAttribute('data-dock',savedDk);
});
