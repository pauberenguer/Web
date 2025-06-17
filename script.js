// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTimeline();
    initializeProjects();
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

// Proyectos interactivos
function initializeProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const image = card.querySelector('.project-image img');
        
        // Efecto parallax sutil en las imágenes
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        // Animación de entrada del overlay
        card.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
            overlay.style.transform = 'scale(1)';
        });
        
        card.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
            overlay.style.transform = 'scale(0.95)';
        });
        
        // Click en botón de caso de estudio
        const caseStudyBtn = card.querySelector('.btn-case-study');
        if (caseStudyBtn) {
            caseStudyBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showProjectModal(card.dataset.project);
            });
        }
    });
}

// Modal para casos de estudio (simulado)
function showProjectModal(projectId) {
    const projectTitles = {
        '1': 'App de Trading Móvil',
        '2': 'Wallet Digital',
        '3': 'Dashboard Financiero',
        '4': 'Banca Online'
    };
    
    const projectDescriptions = {
        '1': 'Diseño completo de una aplicación de trading móvil que simplifica las inversiones para usuarios principiantes y avanzados.',
        '2': 'Sistema de pagos móviles con enfoque en seguridad y experiencia de usuario fluida.',
        '3': 'Panel de control intuitivo para gestión de finanzas personales con visualizaciones de datos claras.',
        '4': 'Rediseño completo de plataforma bancaria mejorando la usabilidad y accesibilidad.'
    };
    
    // Crear modal dinámicamente
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${projectTitles[projectId]}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${projectDescriptions[projectId]}</p>
                <p><strong>Nota:</strong> Este es un proyecto de demostración. En un portafolio real, aquí se mostraría el caso de estudio completo con imágenes, proceso de diseño, resultados y métricas.</p>
            </div>
        </div>
    `;
    
    // Estilos del modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        transform: scale(0.7);
        transition: transform 0.3s ease;
    `;
    
    const modalHeader = modal.querySelector('.modal-header');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        transition: color 0.2s ease;
    `;
    
    document.body.appendChild(modal);
    
    // Animación de entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Cerrar modal
    function closeModal() {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.7)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Formulario de contacto
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerHTML;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
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
        
        // Simular envío
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
            showNotification('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);
        }, 2000);
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
        const target = parseInt(element.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
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

