(function () {
    'use strict';

    // ===== Mobile Nav Toggle =====
    var mobileNavToggle = document.getElementById('mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.toggle('mobile-nav-active');
            this.classList.toggle('active');
            
            // Toggle overlay
            var overlay = document.getElementById('mobile-body-overly');
            if (overlay) {
                if (document.body.classList.contains('mobile-nav-active')) {
                    overlay.classList.add('show');
                } else {
                    overlay.classList.remove('show');
                }
            }
        });
    }

    var mobileBodyOverly = document.getElementById('mobile-body-overly');
    if (mobileBodyOverly) {
        mobileBodyOverly.addEventListener('click', function () {
            document.body.classList.remove('mobile-nav-active');
            var toggle = document.getElementById('mobile-nav-toggle');
            if (toggle) toggle.classList.remove('active');
            this.classList.remove('show');
        });
    }

    // ===== Sticky Nav on Scroll =====
    var nav = document.getElementById('nav');
    if (nav) {
        var lastScroll = 0;
        window.addEventListener('scroll', function () {
            var currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.classList.add('header-scrolled');
            } else {
                nav.classList.remove('header-scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // ===== Back to Top =====
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Active Nav Link Highlight =====
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.parentElement.classList.add('menu-active');
        } else {
            link.parentElement.classList.remove('menu-active');
        }
    });

    // ===== Smooth Scroll for In-Page Links =====
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId.length > 1 && document.querySelector(targetId)) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    // ===== Equipment Filter =====
    var filterButtons = document.querySelectorAll('.filter-btn');
    var equipmentCards = document.querySelectorAll('.equipment-card');

    if (filterButtons.length && equipmentCards.length) {
        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var filter = this.getAttribute('data-filter');

                filterButtons.forEach(function (btn) {
                    btn.classList.remove('active');
                });
                this.classList.add('active');

                equipmentCards.forEach(function (card) {
                    var categories = card.getAttribute('data-category');
                    if (filter === 'all' || categories.indexOf(filter) !== -1) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }

    // ===== Floating WhatsApp Widget =====
    function initWhatsAppWidget() {
        if (document.getElementById('whatsapp-widget')) return;

        var whatsappHTML = '<div id="whatsapp-widget">' +
            '<div class="whatsapp-popup" id="whatsapp-popup">' +
                '<div class="whatsapp-header">' +
                    '<div class="header-info">' +
                        '<div class="agent-avatar"><i class="fa fa-headset"></i></div>' +
                        '<div class="agent-details">' +
                            '<h4>Aromansa Support</h4>' +
                            '<span class="status-badge"><i class="fa fa-circle"></i> Online</span>' +
                        '</div>' +
                    '</div>' +
                    '<button class="close-popup" id="close-whatsapp" aria-label="Close chat">' +
                        '<i class="fa fa-times"></i>' +
                    '</button>' +
                '</div>' +
                '<div class="whatsapp-body">' +
                    '<div class="chat-message">' +
                        '<div class="message-bubble">' +
                            '<p>👋 Hi there! Welcome to Aromansa!</p>' +
                            '<p>How can we help you today? Ask about:</p>' +
                            '<ul>' +
                                '<li>🎵 Equipment rental</li>' +
                                '<li>💡 Pricing & packages</li>' +
                                '<li>📅 Event planning</li>' +
                                '<li>🚚 Delivery & setup</li>' +
                            '</ul>' +
                            '<span class="message-time">Just now</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="whatsapp-footer">' +
                    '<a href="https://wa.me/6281234567890?text=Hi%20Aromansa!%20I%27m%20interested%20in%20your%20event%20equipment%20rental%20services." class="whatsapp-cta-btn" target="_blank" rel="noopener noreferrer">' +
                        '<i class="fab fa-whatsapp"></i> Start Chat' +
                    '</a>' +
                '</div>' +
            '</div>' +
            '<button class="whatsapp-float-btn" id="whatsapp-btn" aria-label="Chat on WhatsApp">' +
                '<span class="notification-badge"></span>' +
                '<i class="fab fa-whatsapp"></i>' +
                '<span class="tooltip-text">Chat with us!</span>' +
            '</button>' +
        '</div>';

        document.body.insertAdjacentHTML('beforeend', whatsappHTML);

        var whatsappBtn = document.getElementById('whatsapp-btn');
        var whatsappPopup = document.getElementById('whatsapp-popup');
        var closeBtn = document.getElementById('close-whatsapp');

        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                whatsappPopup.classList.toggle('show');
                var badge = this.querySelector('.notification-badge');
                if (badge) badge.style.display = 'none';
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                whatsappPopup.classList.remove('show');
            });
        }

        document.addEventListener('click', function(e) {
            if (!e.target.closest('#whatsapp-widget')) {
                whatsappPopup.classList.remove('show');
            }
        });
    }

    initWhatsAppWidget();

    // ===== Games Modal =====
    function initGames() {
        var gamesModal = document.getElementById('gamesModal');
        var gamesOverlay = document.getElementById('gamesOverlay');
        var gamesClose = document.getElementById('gamesClose');
        var gameLinks = document.querySelectorAll('.game-link');
        var eventSimulator = document.getElementById('eventSimulator');
        var memoryGame = document.getElementById('memoryGame');

        function openModal(gameType) {
            if (gamesModal) {
                gamesModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Show/hide games based on selection
                if (gameType === 'event-simulator') {
                    eventSimulator.style.display = 'flex';
                    memoryGame.style.display = 'none';
                } else if (gameType === 'memory-game') {
                    eventSimulator.style.display = 'none';
                    memoryGame.style.display = 'flex';
                    initMemoryGame();
                }
            }
        }

        function closeModal() {
            if (gamesModal) {
                gamesModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        // Game link clicks
        if (gameLinks) {
            gameLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var gameType = this.getAttribute('data-game');
                    openModal(gameType);
                });
            });
        }

        // Close button
        if (gamesClose) {
            gamesClose.addEventListener('click', closeModal);
        }

        // Overlay click
        if (gamesOverlay) {
            gamesOverlay.addEventListener('click', closeModal);
        }

        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    initGames();

    // ===== Event Simulator =====
    function initEventSimulator() {
        var checkboxes = document.querySelectorAll('.sim-checkbox');
        var totalElement = document.getElementById('simulatorTotal');
        var resetButton = document.getElementById('resetSimulator');

        function formatRupiah(amount) {
            return 'Rp ' + amount.toLocaleString('id-ID');
        }

        function updateTotal() {
            var total = 0;
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    total += parseInt(checkbox.getAttribute('data-price'));
                }
            });
            if (totalElement) {
                totalElement.textContent = formatRupiah(total);
            }
        }

        // Checkbox changes
        if (checkboxes) {
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener('change', updateTotal);
            });
        }

        // Reset button
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                checkboxes.forEach(function(checkbox) {
                    checkbox.checked = false;
                });
                updateTotal();
            });
        }
    }

    initEventSimulator();

    // ===== Memory Card Game =====
    var memoryGameInitialized = false;
    function initMemoryGame() {
        if (memoryGameInitialized) return;
        
        var memoryGrid = document.getElementById('memoryGrid');
        var movesElement = document.getElementById('memoryMoves');
        var pairsElement = document.getElementById('memoryPairs');
        var timeElement = document.getElementById('memoryTime');
        var resetButton = document.getElementById('resetMemory');

        if (!memoryGrid) return;

        memoryGameInitialized = true;

        var cards = [
            { emoji: '🔊', name: 'Speaker' },
            { emoji: '🎤', name: 'Microphone' },
            { emoji: '💡', name: 'Light' },
            { emoji: '⛺', name: 'Tent' },
            { emoji: '🎸', name: 'Guitar' },
            { emoji: '📸', name: 'Camera' },
            { emoji: '🪑', name: 'Chair' },
            { emoji: '🎉', name: 'Party' }
        ];

        var gameCards = [];
        cards.forEach(function(card) {
            gameCards.push({ ...card });
            gameCards.push({ ...card });
        });

        // Shuffle cards
        for (var i = gameCards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = gameCards[i];
            gameCards[i] = gameCards[j];
            gameCards[j] = temp;
        }

        // Game state
        var flippedCards = [];
        var matchedPairs = 0;
        var moves = 0;
        var gameStarted = false;
        var timerInterval = null;
        var seconds = 0;

        function createCard(card, index) {
            var cardElement = document.createElement('div');
            cardElement.className = 'memory-card';
            cardElement.setAttribute('data-name', card.name);
            cardElement.setAttribute('data-index', index);

            cardElement.innerHTML = 
                '<div class="memory-card-inner">' +
                    '<div class="memory-card-front">?</div>' +
                    '<div class="memory-card-back">' + card.emoji + '</div>' +
                '</div>';

            cardElement.addEventListener('click', function() {
                if (flippedCards.length >= 2) return;
                if (this.classList.contains('flipped')) return;
                if (this.classList.contains('matched')) return;

                if (!gameStarted) {
                    gameStarted = true;
                    startTimer();
                }

                this.classList.add('flipped');
                flippedCards.push(this);

                if (flippedCards.length === 2) {
                    moves++;
                    if (movesElement) {
                        movesElement.textContent = moves;
                    }
                    checkMatch();
                }
            });

            return cardElement;
        }

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            seconds = 0;
            timerInterval = setInterval(function() {
                seconds++;
                var minutes = Math.floor(seconds / 60);
                var secs = seconds % 60;
                if (timeElement) {
                    timeElement.textContent = minutes + ':' + (secs < 10 ? '0' : '') + secs;
                }
            }, 1000);
        }

        function checkMatch() {
            var card1 = flippedCards[0];
            var card2 = flippedCards[1];
            var name1 = card1.getAttribute('data-name');
            var name2 = card2.getAttribute('data-name');

            if (name1 === name2) {
                setTimeout(function() {
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    matchedPairs++;
                    if (pairsElement) {
                        pairsElement.textContent = matchedPairs + '/8';
                    }
                    flippedCards = [];

                    if (matchedPairs === 8) {
                        clearInterval(timerInterval);
                        setTimeout(function() {
                            alert('🎉 Congratulations! You won in ' + moves + ' moves!');
                        }, 500);
                    }
                }, 500);
            } else {
                setTimeout(function() {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }

        // Build grid
        memoryGrid.innerHTML = '';
        gameCards.forEach(function(card, index) {
            memoryGrid.appendChild(createCard(card, index));
        });

        // Reset button
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                memoryGameInitialized = false;
                if (timerInterval) clearInterval(timerInterval);
                if (movesElement) movesElement.textContent = '0';
                if (pairsElement) pairsElement.textContent = '0/8';
                if (timeElement) timeElement.textContent = '0:00';
                initMemoryGame();
            });
        }
    }

    // ===== Simple Typewriter Effect =====
    function initTypewriter() {
        var textElement = document.getElementById('typewriterTextSimple');
        if (!textElement) return;

        var words = ['Peralatan Pesta', 'Sound System', 'Lighting Keren', 'Dekorasi Elegan', 'Tenda & Outdoor'];
        var currentWordIndex = 0;
        var currentCharIndex = 0;
        var isDeleting = false;

        function type() {
            var currentWord = words[currentWordIndex];

            if (isDeleting) {
                currentCharIndex--;
                textElement.textContent = currentWord.substring(0, currentCharIndex);

                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    setTimeout(type, 300);
                } else {
                    setTimeout(type, 30);
                }
            } else {
                currentCharIndex++;
                textElement.textContent = currentWord.substring(0, currentCharIndex);

                if (currentCharIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                } else {
                    setTimeout(type, 80);
                }
            }
        }

        setTimeout(type, 1000);
    }

    initTypewriter();

    // ===== Counter Animation =====
    function animateCounter(element) {
        var target = parseInt(element.getAttribute('data-target'));
        var duration = 1500;
        var increment = target / (duration / 16);
        var current = 0;

        function updateCounter() {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // Intersection Observer for counters
    var statsSection = document.querySelector('.stats-clean');
    if (statsSection) {
        var countersAnimated = false;
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    var counters = document.querySelectorAll('.counter');
                    counters.forEach(function(counter) {
                        animateCounter(counter);
                    });
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // ===== Smooth Scroll for Anchor Links =====
    function initSmoothScroll() {
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId.length > 1 && document.querySelector(targetId)) {
                    e.preventDefault();
                    var target = document.querySelector(targetId);
                    var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 100;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initSmoothScroll();

    // ===== Instant Navbar Home Click =====
    function initNavbarHomeClick() {
        var homeLinks = document.querySelectorAll('.nav-menu a[href="index.html"], #mobile-nav a[href="index.html"]');
        homeLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                }
            });
        });
    }

    initNavbarHomeClick();

})();
