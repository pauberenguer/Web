// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeContactForm();
    initializeScrollAnimations();
    initializeMobileMenu();
});

// Navegación suave y activa
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    // Navegación suave al hacer clic
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Destacar enlace activo al hacer scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Efecto de navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(26, 35, 50, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(26, 35, 50, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Timeline interactivo
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const details = item.querySelector('.timeline-details');
        
        content.addEventListener('click', function() {
            // Cerrar otros elementos abiertos
            timelineItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherDetails = otherItem.querySelector('.timeline-details');
                    const otherContent = otherItem.querySelector('.timeline-content');
                    otherDetails.classList.remove('expanded');
                    otherContent.classList.remove('active');
                }
            });
            
            // Toggle del elemento actual
            details.classList.toggle('expanded');
            content.classList.toggle('active');
            
            // Animación suave
            if (details.classList.contains('expanded')) {
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                details.style.maxHeight = '0px';
            }
        });
        
        // Efecto hover mejorado
        content.addEventListener('mouseenter', function() {
            if (!content.classList.contains('active')) {
                content.style.transform = 'translateY(-5px) scale(1.02)';
            }
        });
        
        content.addEventListener('mouseleave', function() {
            if (!content.classList.contains('active')) {
                content.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// Formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-primary');
    
    if (!form) {
        console.error('Formulario contactForm no encontrado');
        return;
    }
    
    if (!submitBtn) {
        console.error('Botón .btn-primary no encontrado');
        return;
    }
    
    console.log('Formulario de contacto inicializado correctamente');
    const originalBtnText = submitBtn.innerHTML;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulario interceptado por JavaScript');
        
        // Validación básica
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();
        
        if (!name || !email || !subject || !message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Por favor, introduce un email válido.', 'error');
            return;
        }
        
        // Deshabilitar botón para evitar envíos múltiples
        submitBtn.disabled = true;
        
        // Abrir Gmail con datos pre-rellenados
        const emailBody = `Hola Pau,

${message}

Saludos,
${name}
${email}`;
        
        const mailtoLink = `mailto:pauberenguerlabella@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Abrir enlace mailto
        window.location.href = mailtoLink;
        
        // Mostrar confirmación
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Abriendo Gmail!';
        showNotification('¡Perfecto! Se ha abierto Gmail con tu mensaje pre-rellenado. Solo tienes que enviarlo.', 'success');
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 3000);
    });
    
    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// Validaciones
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
    }
    
    if (isValid) {
        field.classList.remove('error');
        field.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    } else {
        field.classList.add('error');
        field.style.borderColor = '#ff6b6b';
    }
    
    return isValid;
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    if (type === 'success') {
        notification.style.background = '#4ecdc4';
    } else if (type === 'error') {
        notification.style.background = '#ff6b6b';
    } else {
        notification.style.background = '#2c3e50';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .skills-category, .stat-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Menú móvil
function initializeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animación del botón hamburguesa
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura en el héroe
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #4ecdc4';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            heroTitle.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeWriter);
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }
    
    // Contador animado para estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element) => {
        const originalText = element.textContent;
        // Remover puntos y el símbolo + para obtener el número real
        const target = parseInt(originalText.replace(/\./g, '').replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const formatNumber = (num) => {
            if (num >= 1000) {
                return num.toLocaleString('es-ES') + '+';
            } else {
                return num + '+';
            }
        };
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target);
                clearInterval(timer);
            } else {
                element.textContent = formatNumber(Math.floor(current));
            }
        }, 30);
    };
    
    // Observer para las estadísticas
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Optimización de rendimiento
window.addEventListener('load', function() {
    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// PREVENCIÓN DE ERRORES GLOBALES
window.addEventListener('error', function(e) {
    // Suprimir errores específicos de focus que vienen de scripts externos
    if (e.message && e.message.includes('focus') && 
        (e.lineno === 586 || e.message.includes('Cannot read properties of null'))) {
        console.log('Error de focus suprimido (probablemente de script externo)');
        e.preventDefault();
        return false;
    }
});

// FUNCIONES DEL MODAL NEWSLETTER
function openNewsletterModal() {
    console.log('Abriendo modal de newsletter');
    
    const modal = document.getElementById('newsletterModal');
    if (!modal) {
        console.error('Modal no encontrado');
        showNotification('Error al abrir el formulario. Inténtalo más tarde.', 'error');
        return;
    }
    
    // Mostrar modal
    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal abierto correctamente');
}

function closeNewsletterModal() {
    console.log('Cerrando modal de newsletter');
    
    const modal = document.getElementById('newsletterModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Event listeners para el modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsletterModal');
    if (!modal) return;
    
    // Cerrar con click fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeNewsletterModal();
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeNewsletterModal();
        }
    });
});

