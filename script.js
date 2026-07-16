// Variables de control
let currentScreen = 'welcome';
let unlockedActivities = 0;
const totalActivities = 5;

// Iniciar la aventura
function startJourney() {
    hideScreen('welcome');
    showScreen('timeline');
    setupTimeline();
}

// Abrir la carta
function openLetter() {
    hideScreen('timeline');
    showScreen('letter');
    setTimeout(() => {
        const envelope = document.getElementById('envelope');
        const letterContent = document.getElementById('letterContent');
        envelope.classList.add('open');
        letterContent.classList.add('open');
    }, 500);
}

// Cerrar la carta y mostrar celebración
function closeLetter() {
    hideScreen('letter');
    showScreen('celebration');
    startConfetti();
}

// Reiniciar
function restart() {
    location.reload();
}

// Cambiar pantalla
function showScreen(screenId) {
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    currentScreen = screenId;
}

function hideScreen(screenId) {
    const screen = document.getElementById(screenId);
    screen.classList.remove('active');
}

// Setup del timeline
function setupTimeline() {
    const timeline = document.querySelector('.timeline');
    const items = timeline.querySelectorAll('.timeline-item');
    
    // Detectar scroll para desbloquear actividades
    window.addEventListener('scroll', () => {
        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.7;
            
            if (isInView && !item.classList.contains('active')) {
                item.classList.add('active');
                unlockedActivities = Math.max(unlockedActivities, index + 1);
                playUnlockAnimation(item);
            }
        });
    });
    
    // Desbloquear primera actividad automáticamente
    setTimeout(() => {
        items[0].classList.add('active');
        unlockedActivities = 1;
        playUnlockAnimation(items[0]);
    }, 300);
}

// Animación de desbloqueo
function playUnlockAnimation(element) {
    const icon = element.querySelector('.activity-icon');
    if (icon) {
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'bounce 0.6s ease';
        }, 10);
    }
}

// Confeti
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff1493', '#ff69b4', '#ffd700', '#ffffff', '#00ff88'];
    
    // Crear partículas de confeti
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: Math.random() * 0.2 - 0.1,
            type: Math.random() > 0.5 ? 'square' : 'circle'
        });
    }
    
    // Animar confeti
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.rotation += particle.rotationSpeed;
            particle.speedY += 0.1; // gravedad
            
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation);
            ctx.fillStyle = particle.color;
            
            if (particle.type === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
            }
            
            ctx.restore();
            
            // Remover partículas que salen de la pantalla
            if (particle.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }
    
    animateConfetti();
}

// Crear más confeti continuamente en celebración
setInterval(() => {
    if (currentScreen === 'celebration') {
        const canvas = document.getElementById('confetti');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const colors = ['#ff1493', '#ff69b4', '#ffd700', '#ffffff', '#00ff88'];
            
            for (let i = 0; i < 10; i++) {
                const x = Math.random() * canvas.width;
                const y = 0;
                const size = Math.random() * 5 + 2;
                const speedX = Math.random() * 4 - 2;
                const speedY = Math.random() * 3 + 2;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Crear partícula
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = size * 2 + 'px';
                particle.style.height = size * 2 + 'px';
                particle.style.background = color;
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '5';
                document.body.appendChild(particle);
                
                // Animar
                let posX = x;
                let posY = y;
                let velocityY = speedY;
                
                const anim = setInterval(() => {
                    posX += speedX;
                    posY += velocityY;
                    velocityY += 0.1;
                    
                    particle.style.left = posX + 'px';
                    particle.style.top = posY + 'px';
                    
                    if (posY > window.innerHeight) {
                        clearInterval(anim);
                        particle.remove();
                    }
                }, 30);
            }
        }
    }
}, 500);

// Agregar corazones flotantes
function createFloatingHearts() {
    if (currentScreen === 'welcome' || currentScreen === 'celebration') {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = '30px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100vh';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '0';
        heart.style.animation = 'floatHearts 6s linear forwards';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// Crear corazones cada 1.5 segundos
setInterval(createFloatingHearts, 1500);

// Event listeners para responsive
window.addEventListener('resize', () => {
    if (currentScreen === 'celebration') {
        const canvas = document.getElementById('confetti');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }
});

// Inicializar stars background con más estrellas
function initStarsBackground() {
    const backgrounds = document.querySelectorAll('.stars-background');
    backgrounds.forEach(bg => {
        // Ya están creadas en CSS, aquí podríamos agregar más interactividad si es necesario
    });
}

// Llamar inicialización
initStarsBackground();

// Log de eventos para debugging
console.log('🎉 Anniversary Web Page Loaded!');
console.log('Aitor & Cristina - 1 Year Anniversary');
console.log('Happy Anniversary! 💕');