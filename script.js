let highestZIndex = 100;

function bringToFront(windowEl) {
    highestZIndex++;
    windowEl.style.zIndex = highestZIndex;
}

function openApp(appId) {
    // Check if already open
    const existing = document.querySelector(`.window[data-app="${appId}"]`);
    if (existing) {
        bringToFront(existing);
        if (existing.classList.contains('minimized')) {
            existing.classList.remove('minimized');
        }
        return;
    }

    const template = document.getElementById(`${appId}-template`);
    if (!template) return;
    
    const clone = template.content.cloneNode(true);
    const windowEl = clone.querySelector('.window');
    windowEl.dataset.app = appId;
    
    // Initial Position (offset a bit if multiple windows open)
    const offset = (highestZIndex % 10) * 20;
    windowEl.style.top = `${60 + offset}px`;
    windowEl.style.left = `${80 + offset}px`;
    
    bringToFront(windowEl);
    
    // Bring to front on click
    windowEl.addEventListener('mousedown', () => bringToFront(windowEl));
    
    const titlebarEl = windowEl.querySelector('.titlebar');
    makeDraggable(windowEl, titlebarEl);
    
    // Add opening animation effect class if needed
    windowEl.style.transform = 'scale(0.8)';
    windowEl.style.opacity = '0';
    
    document.getElementById('desktop').appendChild(windowEl);
    
    // Trigger reflow to apply CSS transition
    void windowEl.offsetWidth;
    windowEl.style.transform = 'scale(1)';
    windowEl.style.opacity = '1';
    
    // App specific initializations
    if (appId === 'paint') {
        initPaint(windowEl);
    } else if (appId === 'browser') {
        initBrowser(windowEl);
    }
}

function closeApp(btn) {
    const windowEl = btn.closest('.window');
    if (windowEl) {
        windowEl.classList.add('closing');
        // The inline styles might override the class, so we force it:
        windowEl.style.transform = 'scale(0.9)';
        windowEl.style.opacity = '0';
        setTimeout(() => windowEl.remove(), 200); // Wait for transition
    }
}

function toggleMinimize(btn) {
    const windowEl = btn.closest('.window');
    if (windowEl) {
        windowEl.classList.toggle('minimized');
    }
}

function toggleMaximize(btn) {
    const windowEl = btn.closest('.window');
    if (windowEl) {
        windowEl.classList.toggle('maximized');
    }
}

// Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const clockEl = document.getElementById('clock');
    if(clockEl) {
        clockEl.textContent = `${hours}:${minutes} ${ampm}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

// Wallpaper
function changeWallpaper(url) {
    document.body.style.backgroundImage = `url('${url}')`;
}

// Paint logic
function initPaint(windowEl) {
    const canvas = windowEl.querySelector('.paintCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = windowEl.querySelector('#paintColor');
    const sizePicker = windowEl.querySelector('#paintSize');
    
    // Set default background to white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    let isDrawing = false;
    
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        draw(e);
    });
    
    canvas.addEventListener('mousemove', draw);
    
    windowEl.addEventListener('mouseup', () => {
        isDrawing = false;
        ctx.beginPath(); // Reset path
    });
    
    function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
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
    const windowEl = btn.closest('.window');
    const canvas = windowEl.querySelector('.paintCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// Browser Mock
function initBrowser(windowEl) {
    const searchInput = windowEl.querySelector('.mock-search');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                alert(`Searching network for: ${searchInput.value}`);
                searchInput.value = '';
            }
        });
    }
}

// Draggable Logic
function makeDraggable(windowEl, titlebarEl) {
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    titlebarEl.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('dot')) return; // don't drag if button
        if (windowEl.classList.contains('maximized')) return; // don't drag if maximized
        
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
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        let newLeft = initialLeft + dx;
        let newTop = initialTop + dy;
        
        // Basic boundary clamping
        const desktop = document.getElementById('desktop');
        const maxX = desktop.clientWidth - windowEl.clientWidth;
        
        // Don't drag above the menubar (28px height)
        if (newTop < 28) newTop = 28;
        
        // Optional: keep within left/right bounds
        // if (newLeft < 0) newLeft = 0;
        // if (newLeft > maxX) newLeft = maxX;
        
        windowEl.style.left = `${newLeft}px`;
        windowEl.style.top = `${newTop}px`;
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
