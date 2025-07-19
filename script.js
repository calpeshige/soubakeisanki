// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect with trading theme
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.2)';
        navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.2)';
        navbar.style.borderBottom = 'none';
    }
});

// Animated counter for trading statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 3000; // 3 seconds for trading feel
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                
                // Add golden glow effect when completed
                counter.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
                setTimeout(() => {
                    counter.style.textShadow = 'none';
                }, 1000);
            }
            
            // Format the number with trading precision
            if (target >= 1000) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else {
                counter.textContent = current.toFixed(1);
            }
        }, 16);
    });
}

// Trading signal animation effect
function createSignalEffect(element) {
    const pulse = document.createElement('div');
    pulse.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: signalPulse 2s ease-out infinite;
        pointer-events: none;
        z-index: -1;
    `;
    
    element.style.position = 'relative';
    element.appendChild(pulse);
    
    // Add CSS animation if not exists
    if (!document.getElementById('signalPulseStyle')) {
        const style = document.createElement('style');
        style.id = 'signalPulseStyle';
        style.textContent = `
            @keyframes signalPulse {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced intersection observer for trading theme
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Special effects for different sections
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
                // Add signal effects to stat items
                setTimeout(() => {
                    document.querySelectorAll('.stat-item').forEach(item => {
                        createSignalEffect(item);
                    });
                }, 1000);
            }
            
            // Enhanced feature cards animation
            if (entry.target.classList.contains('weapons-grid')) {
                const cards = entry.target.querySelectorAll('.weapon-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        
                        // Add special effect for main weapon
                        if (card.classList.contains('main-weapon')) {
                            setTimeout(() => {
                                card.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.4)';
                                setTimeout(() => {
                                    card.style.boxShadow = '';
                                }, 2000);
                            }, 500);
                        }
                    }, index * 200);
                });
            }
            
            // Problem cards with trading anxiety effect
            if (entry.target.classList.contains('problem-grid')) {
                const cards = entry.target.querySelectorAll('.problem-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        
                        // Add subtle shake effect for problem cards
                        card.style.animation = 'problemShake 0.5s ease-in-out';
                    }, index * 150);
                });
            }
            
            // Solution section golden reveal
            if (entry.target.classList.contains('product-showcase')) {
                setTimeout(() => {
                    const productTitle = entry.target.querySelector('.product-title');
                    if (productTitle) {
                        productTitle.style.textShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
                        productTitle.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            productTitle.style.textShadow = 'none';
                            productTitle.style.transform = 'scale(1)';
                        }, 2000);
                    }
                }, 500);
            }
            
            // Comparison grid with trading transition
            if (entry.target.classList.contains('comparison-grid')) {
                const items = entry.target.querySelectorAll('.comparison-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
            
            // Usage steps with progressive reveal
            if (entry.target.classList.contains('usage-steps')) {
                const steps = entry.target.querySelectorAll('.step');
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.style.opacity = '1';
                        step.style.transform = 'translateY(0)';
                        
                        // Add golden border effect for steps
                        step.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                        step.style.borderWidth = '2px';
                        step.style.borderStyle = 'solid';
                    }, index * 800);
                });
            }
            
            // Vision timeline with future glow
            if (entry.target.classList.contains('vision-timeline')) {
                const periods = entry.target.querySelectorAll('.vision-period');
                periods.forEach((period, index) => {
                    setTimeout(() => {
                        period.style.opacity = '1';
                        period.style.transform = 'translateY(0)';
                        
                        const items = period.querySelectorAll('.vision-item');
                        items.forEach((item, itemIndex) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                                item.style.boxShadow = '0 4px 15px rgba(39, 174, 96, 0.2)';
                            }, itemIndex * 100);
                        });
                    }, index * 500);
                });
            }
        }
    });
}, observerOptions);

// Setup intersection observer with trading-specific animations
function setupTradingObserver() {
    const elementsToObserve = [
        '.hero-stats',
        '.problem-grid',
        '.visible-items',
        '.product-showcase',
        '.comparison-grid',
        '.weapons-grid',
        '.usage-steps',
        '.vision-timeline',
        '.level-cards',
        '.faq-grid'
    ];
    
    elementsToObserve.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            // Initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            
            observer.observe(element);
        }
    });
    
    // Special setup for individual elements
    document.querySelectorAll('.weapon-card, .problem-card, .comparison-item, .step, .vision-period, .level-card, .faq-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
    });
}

// Trading chart-like parallax effect
function tradingParallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg, .animated-particles');
    
    parallaxElements.forEach(element => {
        const speed = scrolled * 0.3;
        element.style.transform = `translateY(${speed}px)`;
    });
    
    // Add trading chart movement to visible items
    const visibleItems = document.querySelectorAll('.visible-item');
    visibleItems.forEach((item, index) => {
        const speed = scrolled * (0.1 + index * 0.02);
        item.style.transform = `translateY(${Math.sin(speed / 100) * 5}px)`;
    });
}

// Enhanced form handling with trading validation
function setupTradingForm() {
    const demoForm = document.querySelector('.demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = demoForm.querySelector('.email-input');
            
            if (email && isValidEmail(email.value)) {
                // Trading-style success animation
                const button = demoForm.querySelector('.btn');
                const originalText = button.textContent;
                
                button.textContent = '🎯 分析中...';
                button.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)';
                button.disabled = true;
                
                // Simulate AI processing
                setTimeout(() => {
                    button.textContent = '✅ 登録完了！';
                    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
                    button.style.boxShadow = '0 4px 20px rgba(39, 174, 96, 0.4)';
                    
                    // Create success signal effect
                    createSignalEffect(button);
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.background = '';
                        button.style.boxShadow = '';
                        email.value = '';
                    }, 3000);
                }, 2000);
            } else {
                showTradingError('正しいメールアドレスを入力してください');
            }
        });
    }
}

// Trading-themed error message
function showTradingError(message) {
    const existingError = document.querySelector('.trading-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'trading-error';
    errorDiv.style.cssText = `
        color: #e74c3c;
        background: rgba(231, 76, 60, 0.1);
        border: 1px solid rgba(231, 76, 60, 0.3);
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        margin-top: 1rem;
        text-align: center;
        animation: errorPulse 0.5s ease-in-out;
    `;
    errorDiv.textContent = message;
    
    const form = document.querySelector('.demo-form');
    form.parentNode.insertBefore(errorDiv, form.nextSibling);
    
    // Add error animation
    if (!document.getElementById('errorPulseStyle')) {
        const style = document.createElement('style');
        style.id = 'errorPulseStyle';
        style.textContent = `
            @keyframes errorPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            @keyframes problemShake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        errorDiv.remove();
    }, 4000);
}

// Email validation with trading precision
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Trading signal hover effects
function initTradingHoverEffects() {
    // Weapon cards with signal effects
    document.querySelectorAll('.weapon-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(255, 215, 0, 0.2)';
            
            if (card.classList.contains('main-weapon')) {
                card.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.4)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
    
    // Problem cards with anxiety effect
    document.querySelectorAll('.problem-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(231, 76, 60, 0.4)';
            card.style.backgroundColor = 'rgba(231, 76, 60, 0.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 215, 0, 0.1)';
            card.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
    
    // Vision items with success glow
    document.querySelectorAll('.vision-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(39, 174, 96, 0.1)';
            item.style.borderColor = 'rgba(39, 174, 96, 0.3)';
            item.style.transform = 'translateX(15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            item.style.borderColor = 'rgba(255, 215, 0, 0.1)';
            item.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // CTA buttons with trading pulse
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.5)';
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '0 4px 14px 0 rgba(255, 215, 0, 0.3)';
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Real-time trading clock effect (optional enhancement)
function initTradingClock() {
    const clockContainer = document.createElement('div');
    clockContainer.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(26, 26, 46, 0.9);
        color: #ffd700;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 215, 0, 0.2);
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        z-index: 999;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `;
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour12: false });
        clockContainer.textContent = `⏰ ${timeString}`;
    }
    
    clockContainer.addEventListener('mouseenter', () => {
        clockContainer.style.opacity = '1';
    });
    
    clockContainer.addEventListener('mouseleave', () => {
        clockContainer.style.opacity = '0.7';
    });
    
    document.body.appendChild(clockContainer);
    updateClock();
    setInterval(updateClock, 1000);
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization for mobile trading
function optimizeForMobileTrading() {
    if (window.innerWidth <= 768) {
        // Disable heavy animations on mobile
        const style = document.createElement('style');
        style.textContent = `
            .animated-particles::before,
            .animated-particles::after {
                display: none;
            }
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }
        `;
        document.head.appendChild(style);
        
        // Simplify parallax for mobile
        window.removeEventListener('scroll', throttle(tradingParallaxEffect, 16));
    }
}

// FAQ Accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
                
                // Add trading signal effect when opened
                setTimeout(() => {
                    createSignalEffect(item);
                }, 200);
            }
            
            // Add subtle vibration effect
            question.style.animation = 'questionClick 0.3s ease-in-out';
            setTimeout(() => {
                question.style.animation = '';
            }, 300);
        });
        
        // Add hover effects
        question.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                item.style.transform = 'translateX(5px)';
            }
        });
        
        question.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                item.style.transform = 'translateX(0)';
            }
        });
    });
    
    // Add CSS for question click animation
    if (!document.getElementById('questionClickStyle')) {
        const style = document.createElement('style');
        style.id = 'questionClickStyle';
        style.textContent = `
            @keyframes questionClick {
                0% { transform: scale(1); }
                50% { transform: scale(1.02); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced level card animations
function initLevelCardAnimations() {
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach((card, index) => {
        // Progressive reveal animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(15deg)';
        card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.level-icon');
            const transformation = card.querySelector('.level-transformation');
            
            // Icon animation
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.background = 'rgba(255, 215, 0, 0.3)';
            }
            
            // Transformation animation
            if (transformation) {
                const from = transformation.querySelector('.from');
                const arrow = transformation.querySelector('.arrow');
                const to = transformation.querySelector('.to');
                
                if (from) from.style.transform = 'scale(0.95)';
                if (arrow) arrow.style.transform = 'scale(1.3) rotate(10deg)';
                if (to) to.style.transform = 'scale(1.05)';
            }
            
            // Add glow effect based on card type
            const colors = [
                'rgba(52, 152, 219, 0.3)',
                'rgba(155, 89, 182, 0.3)',
                'rgba(230, 126, 34, 0.3)'
            ];
            card.style.boxShadow = `0 25px 50px ${colors[index] || colors[0]}`;
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.level-icon');
            const transformation = card.querySelector('.level-transformation');
            
            // Reset icon
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = 'rgba(255, 215, 0, 0.1)';
            }
            
            // Reset transformation
            if (transformation) {
                const from = transformation.querySelector('.from');
                const arrow = transformation.querySelector('.arrow');
                const to = transformation.querySelector('.to');
                
                if (from) from.style.transform = 'scale(1)';
                if (arrow) arrow.style.transform = 'scale(1) rotate(0deg)';
                if (to) to.style.transform = 'scale(1)';
            }
            
            // Reset glow
            card.style.boxShadow = '';
        });
    });
}

// Enhanced trading statistics animation
function enhancedTradingStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach((item, index) => {
        const number = item.querySelector('.stat-number');
        const label = item.querySelector('.stat-label');
        
        // Add pulsing effect for important stats
        setTimeout(() => {
            if (number) {
                number.style.animation = 'statPulse 3s ease-in-out infinite';
                number.style.animationDelay = `${index * 0.5}s`;
            }
            
            // Add subtle movement to labels
            if (label) {
                label.style.animation = 'labelFloat 4s ease-in-out infinite';
                label.style.animationDelay = `${index * 0.3}s`;
            }
        }, 2000);
    });
    
    // Add stat animations CSS
    if (!document.getElementById('statAnimationsStyle')) {
        const style = document.createElement('style');
        style.id = 'statAnimationsStyle';
        style.textContent = `
            @keyframes statPulse {
                0%, 100% { transform: scale(1); text-shadow: none; }
                50% { transform: scale(1.05); text-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
            }
            @keyframes labelFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Level card reveal animation with intersection observer
function setupLevelCardObserver() {
    const levelGuideSection = document.querySelector('.level-guide');
    
    if (levelGuideSection) {
        const levelObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.level-card');
                    
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) rotateX(0deg)';
                            
                            // Add entrance signal effect
                            setTimeout(() => {
                                createSignalEffect(card);
                            }, 300);
                        }, index * 300);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        levelObserver.observe(levelGuideSection);
    }
}

// FAQ reveal animation
function setupFAQObserver() {
    const faqSection = document.querySelector('.faq');
    
    if (faqSection) {
        const faqObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.faq-item');
                    
                    items.forEach((item, index) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(30px)';
                        item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        faqObserver.observe(faqSection);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupTradingObserver();
    setupTradingForm();
    initTradingHoverEffects();
    optimizeForMobileTrading();
    
    // Initialize new features
    initFAQAccordion();
    initLevelCardAnimations();
    setupLevelCardObserver();
    setupFAQObserver();
    enhancedTradingStats();
    
    // Add trading clock (optional)
    // initTradingClock();
    
    // Add scroll listeners
    window.addEventListener('scroll', throttle(tradingParallaxEffect, 16));
    
    // Add golden particles effect on page load
    setTimeout(() => {
        document.querySelectorAll('.gradient-text').forEach(element => {
            element.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
            setTimeout(() => {
                element.style.textShadow = 'none';
            }, 2000);
        });
    }, 1000);
});

// Re-optimize on resize
window.addEventListener('resize', throttle(optimizeForMobileTrading, 250));