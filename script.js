/* =============================================================
   CopyMac OS 1 — Main Script
   Original logic (window management, paint, clock) is preserved.
   New features are added below in clearly labeled sections.
=============================================================== */

// ===================== GLOBALS =====================
let highestZIndex = 100;

// wallpaper catalog — used by welcome setup + settings
// keeping the original 3 and adding 5 more
const WALLPAPERS = [
    { name: "Stealth Dark",    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1920&q=80" },
    { name: "Obsidian Flow",   url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80" },
    { name: "Neon Gradient",   url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80" },
    { name: "Mountain Lake",   url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80" },
    { name: "Forest Fog",      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80" },
    { name: "Deep Space",      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" },
    { name: "Snowy Peaks",     url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80" },
    { name: "Aurora Night",    url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80" }
];

// guide content — each topic has a title + HTML body
const GUIDE_TOPICS = [
    {
        title: "Getting Started",
        body: `
            <h2>Welcome to CopyMac OS 1</h2>
            <p>This is your web-based desktop operating system. Everything runs right inside your browser — no installs needed.</p>
            <p>The interface is designed to feel like a real desktop. You have a <strong>menu bar</strong> at the top, a <strong>dock</strong> at the bottom, and <strong>draggable windows</strong> that you can open, minimize, maximize, and close.</p>
            <div class="tip-box">Tip: If this is your first time, try clicking each icon in the dock to explore the apps!</div>
        `
    },
    {
        title: "The Dock",
        body: `
            <h2>The Dock</h2>
            <p>The dock is the bar at the bottom of your screen. It holds shortcuts to all your apps:</p>
            <p><strong>Notes</strong> — a simple text editor for quick notes.</p>
            <p><strong>Browser</strong> — search Google right from your desktop. Type a query and press <kbd>Enter</kbd> to search.</p>
            <p><strong>Paint Studio</strong> — a drawing canvas. Pick colors and brush sizes to draw anything.</p>
            <p><strong>YouTube</strong> — opens the real YouTube website in a new tab.</p>
            <p><strong>StarDance</strong> — opens the StarDance Challenge website (stardance.hackclub.com) in a new tab.</p>
            <p><strong>User Guide</strong> — you're reading it right now!</p>
            <p><strong>Settings</strong> — change your wallpaper, brightness, and display name.</p>
            <div class="tip-box">Tip: Hover over dock icons to see them bounce up — just like a real dock!</div>
        `
    },
    {
        title: "Windows",
        body: `
            <h2>Managing Windows</h2>
            <p>Every app opens in its own window. Here's how to control them:</p>
            <p><strong>Drag</strong> — click and hold the title bar to move a window around.</p>
            <p><strong>Close</strong> (red dot) — removes the window completely.</p>
            <p><strong>Minimize</strong> (yellow dot) — collapses the window down to just its title bar. Click again to restore.</p>
            <p><strong>Maximize</strong> (green dot) — expands the window to fill the entire screen. Click again to restore to normal size.</p>
            <div class="tip-box">Tip: Hover over the traffic light dots to see the ×, −, and □ icons appear!</div>
            <p>You can also open multiple windows at once and click on any window to bring it to the front.</p>
        `
    },
    {
        title: "Browser",
        body: `
            <h2>Using the Browser</h2>
            <p>The built-in browser lets you search the web directly from CopyMac OS 1.</p>
            <p>There are two ways to search:</p>
            <p><strong>1.</strong> Type your query into the big search box in the center and press <kbd>Enter</kbd>.</p>
            <p><strong>2.</strong> Type directly into the URL bar at the top of the browser window and press <kbd>Enter</kbd>.</p>
            <p>Both methods will open a real Google search in a new browser tab with your query.</p>
            <div class="tip-box">Tip: You can search for anything — "weather today", "JavaScript tutorial", "cute cats" — it all goes to Google!</div>
        `
    },
    {
        title: "Settings",
        body: `
            <h2>System Preferences</h2>
            <p>Open Settings from the dock (the gear icon) to customize your experience.</p>
            <p><strong>Wallpaper</strong> — choose from 8 beautiful desktop backgrounds. Click any thumbnail to apply it instantly.</p>
            <p><strong>Display</strong> — adjust the brightness slider to make the screen dimmer or brighter. Great for late-night browsing.</p>
            <p><strong>About</strong> — see system info and change the display name that appears in the menu bar.</p>
            <div class="tip-box">Tip: Your wallpaper choice and brightness are saved, so they'll be remembered even after you close the browser!</div>
        `
    },
    {
        title: "Other Apps",
        body: `
            <h2>YouTube & StarDance</h2>
            <p><strong>YouTube</strong> — clicking this icon will open <a href="https://youtube.com" target="_blank" style="color:#58a6ff">youtube.com</a> in a new browser tab. Watch videos, listen to music, and explore.</p>
            <p><strong>StarDance Challenge</strong> — clicking this icon will open <a href="https://stardance.hackclub.com" target="_blank" style="color:#58a6ff">stardance.hackclub.com</a> in a new browser tab. Join the dance challenge!</p>
            <h2 style="margin-top:20px;">Paint Studio</h2>
            <p>A freehand drawing canvas. Use the color picker to change your brush color, the slider to adjust brush thickness, and the Clear button to start over.</p>
            <h2 style="margin-top:20px;">Notes</h2>
            <p>A simple notepad for jotting down quick thoughts. Your notes stay as long as the window is open.</p>
        `
    }
];


// ===================== WINDOW MANAGEMENT =====================
// (original logic — preserved as-is)

function bringToFront(windowEl) {
    highestZIndex++;
    windowEl.style.zIndex = highestZIndex;
}

function openApp(appId) {
    // YouTube and StarDance redirect to real websites
    if (appId === 'youtube') {
        window.open('https://youtube.com', '_blank');
        return;
    }
    if (appId === 'stardance') {
        window.open('https://stardance.hackclub.com', '_blank');
        return;
    }

    // check if already open — bring to front instead of duplicating
    var existing = document.querySelector('.window[data-app="' + appId + '"]');
    if (existing) {
        if (existing.classList.contains('minimized')) {
            // pull it back from the taskbar
            restoreFromTaskbar(appId);
        } else {
            bringToFront(existing);
        }
        return;
    }

    var template = document.getElementById(appId + '-template');
    if (!template) return;

    var clone = template.content.cloneNode(true);
    var windowEl = clone.querySelector('.window');
    windowEl.dataset.app = appId;

    // stagger position if multiple windows are open
    var offset = (highestZIndex % 10) * 20;
    windowEl.style.top = (60 + offset) + 'px';
    windowEl.style.left = (80 + offset) + 'px';

    bringToFront(windowEl);

    // clicking anywhere on window brings it to front
    windowEl.addEventListener('mousedown', function() {
        bringToFront(windowEl);
    });

    var titlebarEl = windowEl.querySelector('.titlebar');
    makeDraggable(windowEl, titlebarEl);

    // opening animation: scale up from small
    windowEl.style.transform = 'scale(0.8)';
    windowEl.style.opacity = '0';

    document.getElementById('desktop').appendChild(windowEl);

    // force reflow so the CSS transition kicks in
    void windowEl.offsetWidth;
    windowEl.style.transform = 'scale(1)';
    windowEl.style.opacity = '1';

    // per-app initialization
    if (appId === 'paint') {
        initPaint(windowEl);
    } else if (appId === 'browser') {
        initBrowser(windowEl);
    } else if (appId === 'settings') {
        initSettings(windowEl);
    } else if (appId === 'guide') {
        initGuide(windowEl);
    }
}

function closeApp(btn) {
    var windowEl = btn.closest('.window');
    if (windowEl) {
        var appId = windowEl.dataset.app;
        if (appId) removeTaskbarTab(appId);
        windowEl.classList.add('closing');
        windowEl.style.transform = 'scale(0.9)';
        windowEl.style.opacity = '0';
        setTimeout(function() { windowEl.remove(); }, 200);
    }
}

function toggleMinimize(btn) {
    var windowEl = btn.closest('.window');
    if (!windowEl) return;

    var appId = windowEl.dataset.app || 'app';
    var title = windowEl.querySelector('.window-title');
    var appName = title ? title.textContent : appId;

    // if already minimized (shouldn't happen from button, but just in case)
    if (windowEl.classList.contains('minimized')) {
        restoreFromTaskbar(appId);
        return;
    }

    // animate window shrinking down before hiding
    windowEl.style.transform = 'scale(0.4) translateY(60vh)';
    windowEl.style.opacity = '0';

    setTimeout(function() {
        windowEl.classList.add('minimized');
        // reset inline transform so it comes back clean on restore
        windowEl.style.transform = '';
        windowEl.style.opacity = '';

        // create a tab in the taskbar
        addTaskbarTab(appId, appName);
    }, 200);
}

function toggleMaximize(btn) {
    var windowEl = btn.closest('.window');
    if (!windowEl) return;
    windowEl.classList.toggle('maximized');
}

// ===================== TASKBAR (Windows-style) =====================
// When a window is minimized it goes here as a small tab.
// Hovering the tab shows a popup with Restore and Maximize options.

function addTaskbarTab(appId, appName) {
    var taskbar = document.getElementById('taskbar');
    if (!taskbar) return;

    // don't add duplicate tabs
    if (taskbar.querySelector('[data-taskbar-app="' + appId + '"]')) return;

    var tab = document.createElement('div');
    tab.className = 'taskbar-tab';
    tab.dataset.taskbarApp = appId;
    tab.textContent = appName;

    // popup with restore/maximize actions
    var popup = document.createElement('div');
    popup.className = 'taskbar-popup';

    var restoreBtn = document.createElement('button');
    restoreBtn.className = 'taskbar-popup-btn restore-btn';
    restoreBtn.textContent = 'Restore';
    restoreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        restoreFromTaskbar(appId);
    });

    var maxBtn = document.createElement('button');
    maxBtn.className = 'taskbar-popup-btn max-btn';
    maxBtn.textContent = 'Maximize';
    maxBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        restoreFromTaskbar(appId, true);
    });

    popup.appendChild(restoreBtn);
    popup.appendChild(maxBtn);
    tab.appendChild(popup);

    // clicking the tab itself also restores
    tab.addEventListener('click', function() {
        restoreFromTaskbar(appId);
    });

    taskbar.appendChild(tab);
}

function restoreFromTaskbar(appId, maximize) {
    var windowEl = document.querySelector('.window[data-app="' + appId + '"]');
    if (!windowEl) return;

    // remove the taskbar tab
    removeTaskbarTab(appId);

    // un-hide the window
    windowEl.classList.remove('minimized');

    // bring it to front
    bringToFront(windowEl);

    // apply maximize if requested, otherwise ensure it's normal
    if (maximize) {
        windowEl.classList.add('maximized');
    }

    // smooth entrance animation
    windowEl.style.transform = 'scale(0.6) translateY(40vh)';
    windowEl.style.opacity = '0';
    void windowEl.offsetWidth; // force reflow
    windowEl.style.transform = 'scale(1)';
    windowEl.style.opacity = '1';
}

function removeTaskbarTab(appId) {
    var taskbar = document.getElementById('taskbar');
    if (!taskbar) return;
    var tab = taskbar.querySelector('[data-taskbar-app="' + appId + '"]');
    if (tab) tab.remove();
}


// ===================== CLOCK =====================
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.textContent = hours + ':' + minutes + ' ' + ampm;
    }
}
setInterval(updateClock, 1000);
updateClock();


// ===================== WALLPAPER =====================
function changeWallpaper(url) {
    document.body.style.backgroundImage = "url('" + url + "')";
    // remember choice so it persists on reload
    localStorage.setItem('copymac_wallpaper', url);
}


// ===================== PAINT =====================
function initPaint(windowEl) {
    var canvas = windowEl.querySelector('.paintCanvas');
    var ctx = canvas.getContext('2d');
    var colorPicker = windowEl.querySelector('#paintColor');
    var sizePicker = windowEl.querySelector('#paintSize');

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var isDrawing = false;

    canvas.addEventListener('mousedown', function(e) {
        isDrawing = true;
        draw(e);
    });

    canvas.addEventListener('mousemove', draw);

    windowEl.addEventListener('mouseup', function() {
        isDrawing = false;
        ctx.beginPath();
    });

    function draw(e) {
        if (!isDrawing) return;

        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        ctx.lineWidth = sizePicker.value;
        ctx.lineCap = 'round';
        ctx.strokeStyle = colorPicker.value;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
}

function clearCanvas(btn) {
    var windowEl = btn.closest('.window');
    var canvas = windowEl.querySelector('.paintCanvas');
    if (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}


// ===================== BROWSER (upgraded) =====================
// now redirects to actual Google search in a new tab
function initBrowser(windowEl) {
    var searchInput = windowEl.querySelector('.mock-search');
    var urlBar = windowEl.querySelector('.url-bar');

    // search from the center search box
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                var query = encodeURIComponent(searchInput.value.trim());
                window.open('https://www.google.com/search?q=' + query, '_blank');
                // update the url bar to show what was searched
                urlBar.value = 'https://www.google.com/search?q=' + query;
                searchInput.value = '';
            }
        });
    }

    // search from the URL bar too
    if (urlBar) {
        urlBar.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && urlBar.value.trim() !== '') {
                var val = urlBar.value.trim();
                // if it looks like a URL, open it directly
                if (val.startsWith('http://') || val.startsWith('https://')) {
                    window.open(val, '_blank');
                } else {
                    // otherwise treat it as a google search
                    var query = encodeURIComponent(val);
                    window.open('https://www.google.com/search?q=' + query, '_blank');
                    urlBar.value = 'https://www.google.com/search?q=' + query;
                }
            }
        });
    }
}


// ===================== SETTINGS (upgraded) =====================
function initSettings(windowEl) {
    // populate wallpaper thumbnails
    var grid = windowEl.querySelector('#settings-wallpaper-grid');
    if (grid) {
        var currentWp = localStorage.getItem('copymac_wallpaper') || WALLPAPERS[0].url;
        WALLPAPERS.forEach(function(wp) {
            var thumb = document.createElement('div');
            thumb.className = 'wallpaper-thumb';
            if (wp.url === currentWp) thumb.classList.add('selected');
            thumb.style.backgroundImage = "url('" + wp.url + "')";
            thumb.title = wp.name;
            thumb.addEventListener('click', function() {
                changeWallpaper(wp.url);
                // update selected state
                grid.querySelectorAll('.wallpaper-thumb').forEach(function(t) {
                    t.classList.remove('selected');
                });
                thumb.classList.add('selected');
            });
            grid.appendChild(thumb);
        });
    }

    // sidebar navigation between panels
    var navItems = windowEl.querySelectorAll('.settings-nav-item');
    var panels = windowEl.querySelectorAll('.settings-panel');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var target = item.dataset.panel;
            navItems.forEach(function(n) { n.classList.remove('active'); });
            panels.forEach(function(p) { p.classList.remove('active'); });
            item.classList.add('active');
            windowEl.querySelector('.settings-panel[data-panel="' + target + '"]').classList.add('active');
        });
    });

    // brightness slider
    var brightnessSlider = windowEl.querySelector('#brightness-slider');
    var brightnessVal = windowEl.querySelector('#brightness-val');
    if (brightnessSlider) {
        // load saved brightness
        var savedBright = localStorage.getItem('copymac_brightness');
        if (savedBright) {
            brightnessSlider.value = savedBright;
            applyBrightness(savedBright);
        }
        if (brightnessVal) {
            brightnessVal.textContent = brightnessSlider.value + '%';
        }

        brightnessSlider.addEventListener('input', function() {
            var val = brightnessSlider.value;
            brightnessVal.textContent = val + '%';
            applyBrightness(val);
            localStorage.setItem('copymac_brightness', val);
        });
    }

    // display name input — pre-fill if already set
    var nameInput = windowEl.querySelector('#display-name-input');
    if (nameInput) {
        var savedName = localStorage.getItem('copymac_osname');
        if (savedName) nameInput.value = savedName;
    }
}

// brightness: overlay opacity goes from 0 (100% bright) to 0.8 (20% bright)
function applyBrightness(percent) {
    var overlay = document.getElementById('brightness-overlay');
    if (!overlay) return;
    // invert: 100% brightness = 0 opacity, 20% brightness = 0.8 opacity
    var darkness = 1 - (percent / 100);
    overlay.style.opacity = darkness;
}

// called from the "Apply" button in settings
function updateDisplayName() {
    var input = document.querySelector('#display-name-input');
    if (!input) return;
    var name = input.value.trim();
    if (name === '') name = 'CopyMac OS 1';
    document.getElementById('os-name-display').textContent = name;
    // also update the about panel heading if visible
    var aboutName = document.querySelector('#about-os-name');
    if (aboutName) aboutName.textContent = name;
    localStorage.setItem('copymac_osname', name);
}


// ===================== GUIDE APP =====================
function initGuide(windowEl) {
    var topics = windowEl.querySelectorAll('.guide-topic');
    var body = windowEl.querySelector('#guide-body');

    // show first topic by default
    showGuideTopic(0, body);

    topics.forEach(function(topic) {
        topic.addEventListener('click', function() {
            var idx = parseInt(topic.dataset.topic);
            topics.forEach(function(t) { t.classList.remove('active'); });
            topic.classList.add('active');
            showGuideTopic(idx, body);
        });
    });
}

function showGuideTopic(index, bodyEl) {
    if (GUIDE_TOPICS[index]) {
        bodyEl.innerHTML = GUIDE_TOPICS[index].body;
    }
}


// ===================== DRAGGING =====================
function makeDraggable(windowEl, titlebarEl) {
    var isDragging = false;
    var startX, startY, initialLeft, initialTop;

    titlebarEl.addEventListener('mousedown', function(e) {
        // don't drag when clicking traffic light buttons
        if (e.target.classList.contains('dot') || e.target.classList.contains('dot-icon')) return;
        // don't drag if window is maximized
        if (windowEl.classList.contains('maximized')) return;

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = windowEl.offsetLeft;
        initialTop = windowEl.offsetTop;

        titlebarEl.style.cursor = 'grabbing';

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    });

    function drag(e) {
        if (!isDragging) return;

        var dx = e.clientX - startX;
        var dy = e.clientY - startY;

        var newLeft = initialLeft + dx;
        var newTop = initialTop + dy;

        // keep window from going above the menu bar
        if (newTop < 28) newTop = 28;

        windowEl.style.left = newLeft + 'px';
        windowEl.style.top = newTop + 'px';
    }

    function stopDrag() {
        if (isDragging) {
            isDragging = false;
            titlebarEl.style.cursor = 'grab';
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }
    }
}


// ===========================================================
//  WELCOME / FIRST-BOOT FLOW
//  Only runs on the very first visit. After that, localStorage
//  remembers that the user completed setup.
// ===========================================================

var welcomeStep = 1;
var helloTimer = null;

// the rotating "Hello" greetings in different languages
var helloWords = [
    "Hello", "Hola", "Bonjour", "Ciao", "Hallo",
    "Olá", "Привет", "こんにちは", "안녕하세요",
    "مرحبا", "Namaste", "Merhaba", "Xin chào"
];
var helloIndex = 0;

function startHelloRotation() {
    var el = document.getElementById('hello-rotating');
    if (!el) return;
    helloTimer = setInterval(function() {
        helloIndex = (helloIndex + 1) % helloWords.length;
        el.style.opacity = '0';
        setTimeout(function() {
            el.textContent = helloWords[helloIndex];
            el.style.opacity = '1';
        }, 300);
    }, 1800);
}

function stopHelloRotation() {
    if (helloTimer) {
        clearInterval(helloTimer);
        helloTimer = null;
    }
}

function welcomeNext() {
    var allSteps = document.querySelectorAll('.welcome-step');
    var allDots = document.querySelectorAll('.w-dot');

    // leaving step 1 — stop hello rotation
    if (welcomeStep === 1) {
        stopHelloRotation();
    }

    // save name on step 3
    if (welcomeStep === 3) {
        var nameInput = document.getElementById('setup-username');
        var userName = nameInput ? nameInput.value.trim() : '';
        if (userName) {
            localStorage.setItem('copymac_user', userName);
        }
    }

    // hide current step
    allSteps.forEach(function(s) { s.classList.remove('active'); });
    allDots.forEach(function(d) { d.classList.remove('active'); });

    welcomeStep++;

    // update the "You're all set" message with name if they entered one
    if (welcomeStep === 5) {
        var savedUser = localStorage.getItem('copymac_user');
        var finalMsg = document.getElementById('welcome-final-msg');
        if (savedUser && finalMsg) {
            finalMsg.textContent = "You're all set, " + savedUser + "!";
        }
    }

    // show next step
    var nextStep = document.querySelector('.welcome-step[data-step="' + welcomeStep + '"]');
    var nextDot = document.querySelector('.w-dot[data-dot="' + welcomeStep + '"]');
    if (nextStep) nextStep.classList.add('active');
    if (nextDot) nextDot.classList.add('active');
}

function finishWelcome() {
    localStorage.setItem('copymac_welcomed', 'true');
    var overlay = document.getElementById('welcome-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(function() { overlay.remove(); }, 800);
    }
}

function populateSetupWallpapers() {
    var container = document.getElementById('setup-wallpapers');
    if (!container) return;
    WALLPAPERS.forEach(function(wp, i) {
        var thumb = document.createElement('div');
        thumb.className = 'setup-wp-thumb';
        if (i === 0) thumb.classList.add('selected'); // default selection
        thumb.style.backgroundImage = "url('" + wp.url + "')";
        thumb.title = wp.name;
        thumb.addEventListener('click', function() {
            container.querySelectorAll('.setup-wp-thumb').forEach(function(t) {
                t.classList.remove('selected');
            });
            thumb.classList.add('selected');
            changeWallpaper(wp.url);
        });
        container.appendChild(thumb);
    });
}


// ===========================================================
//  BOOT SEQUENCE — runs when DOM is ready
// ===========================================================
document.addEventListener('DOMContentLoaded', function() {
    var alreadyWelcomed = localStorage.getItem('copymac_welcomed');

    if (alreadyWelcomed) {
        // skip welcome, jump straight to desktop
        var overlay = document.getElementById('welcome-overlay');
        if (overlay) overlay.remove();
    } else {
        // first visit — show welcome flow
        populateSetupWallpapers();
        startHelloRotation();

        // step 1: clicking anywhere advances past the hello screen
        var step1 = document.querySelector('.welcome-step[data-step="1"]');
        if (step1) {
            step1.addEventListener('click', function() {
                welcomeNext();
            });
        }
    }

    // restore saved wallpaper
    var savedWp = localStorage.getItem('copymac_wallpaper');
    if (savedWp) {
        document.body.style.backgroundImage = "url('" + savedWp + "')";
    }

    // restore saved brightness
    var savedBright = localStorage.getItem('copymac_brightness');
    if (savedBright) {
        applyBrightness(savedBright);
    }

    // restore saved OS name
    var savedOsName = localStorage.getItem('copymac_osname');
    if (savedOsName) {
        var nameEl = document.getElementById('os-name-display');
        if (nameEl) nameEl.textContent = savedOsName;
    }

    // show user greeting in menu bar
    var savedUser = localStorage.getItem('copymac_user');
    var greetEl = document.getElementById('user-greeting');
    if (savedUser && greetEl) {
        greetEl.textContent = 'Hi, ' + savedUser;
    }
});
