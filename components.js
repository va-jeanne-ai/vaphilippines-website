/**
 * components.js
 * Universal navigation and footer for Virtual Assistants Philippines.
 * Include this script (with defer) in every page's <head>.
 * No external dependencies required.
 */
(function () {
    'use strict';

    // ── Shared CSS ────────────────────────────────────────────────────────────────
    const css = `
/* ── Site Navigation ──────────────────────────────────────────────── */
.site-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 1.2rem 2rem;
    background: rgba(0, 0, 0, 0.80);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 2px solid rgba(20, 184, 166, 0.35);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-nav .nav-logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    background: linear-gradient(135deg, #14B8A6, #00FFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    letter-spacing: 1px;
}

.site-nav .nav-logo:hover {
    transform: scale(1.04);
}

.site-nav .nav-logo img {
    height: 44px;
    width: auto;
    flex-shrink: 0;
}

.site-nav .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
}

.site-nav .nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.75rem;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    position: relative;
}

.site-nav .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #14B8A6, #00FFFF);
    transition: width 0.3s ease;
}

.site-nav .nav-links a:hover {
    color: #00FFFF;
}

.site-nav .nav-links a:hover::after,
.site-nav .nav-links a.active::after {
    width: 100%;
}

.site-nav .nav-links a.active {
    color: #00FFFF;
}

.site-nav .get-started-btn {
    background: linear-gradient(135deg, #FFFF00, #00FFFF) !important;
    color: #000000 !important;
    -webkit-text-fill-color: #000000 !important;
    padding: 0.6rem 1.4rem;
    border-radius: 4px;
    font-weight: 700 !important;
    font-size: 0.9rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.site-nav .get-started-btn::after {
    display: none !important;
}

.site-nav .get-started-btn:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5) !important;
    color: #000000 !important;
    -webkit-text-fill-color: #000000 !important;
}

.site-nav .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    background: none;
    border: none;
    padding: 10px;
    margin: -10px;
}

.site-nav .hamburger span {
    width: 24px;
    height: 2px;
    background: #00FFFF;
    border-radius: 2px;
    transition: all 0.3s ease;
    display: block;
}

.site-nav .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.site-nav .hamburger.active span:nth-child(2) {
    opacity: 0;
}

.site-nav .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
    .site-nav {
        padding: 1rem 1.5rem;
    }

    .site-nav .nav-logo img {
        height: 36px;
    }

    .site-nav .hamburger {
        display: flex;
    }

    .site-nav .nav-links {
        position: fixed;
        top: 68px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.97);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem 1.5rem;
        gap: 0;
        border-bottom: 2px solid rgba(20, 184, 166, 0.3);
        transform: translateY(-120%);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.3s ease, opacity 0.25s ease;
        z-index: 999;
    }

    .site-nav .nav-links.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .site-nav .nav-links li {
        width: 100%;
    }

    .site-nav .nav-links a {
        display: block;
        padding: 0.85rem 0;
        border-bottom: 1px solid rgba(20, 184, 166, 0.15);
        font-size: 1rem;
    }

    .site-nav .nav-links li:last-child a {
        border-bottom: none;
        margin-top: 0.5rem;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .site-nav {
        padding: 0.9rem 1.2rem;
    }

    .site-nav .nav-logo {
        font-size: 0.95rem;
    }

    .site-nav .nav-logo img {
        height: 32px;
    }
}

/* ── Site Footer ───────────────────────────────────────────────────── */
.site-footer {
    background: #000000;
    border-top: 2px solid rgba(20, 184, 166, 0.3);
    padding: 3.5rem 2rem 2rem;
    position: relative;
    z-index: 9995;
    margin-top: 0;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    min-height: 320px;
}

#ballpit-canvas {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    display: block;
    z-index: 0;
    touch-action: none;
}

.site-footer .footer-grid {
    max-width: 1200px;
    margin: 0 auto 2.5rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2.5rem;
    position: relative;
    z-index: 1;
}

.site-footer .footer-col h4 {
    font-family: 'Orbitron', sans-serif;
    color: #00FFFF;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.site-footer .footer-col p {
    color: #999;
    font-size: 0.9rem;
    line-height: 1.7;
}

.site-footer .footer-col a {
    display: block;
    color: #cccccc;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 2.1;
    transition: color 0.3s ease;
}

.site-footer .footer-col a:hover {
    color: #00FFFF;
}

.site-footer .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(20, 184, 166, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    z-index: 1;
}

.site-footer .footer-bottom p {
    color: #666;
    font-size: 0.85rem;
}

.site-footer .footer-bottom-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
}

.site-footer .footer-bottom-links a {
    color: #14B8A6;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.site-footer .footer-bottom-links a:hover {
    color: #00FFFF;
}

/* ── Tablet (2-column grid) ────────────────────────────────────────── */
@media (max-width: 900px) {
    .site-footer .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
}

/* ── Small tablet / large phone ────────────────────────────────────── */
@media (max-width: 768px) {
    .site-footer {
        padding: 2.5rem 1.5rem 1.5rem;
        margin-top: 0;
    }

    .site-footer .footer-grid {
        gap: 1.75rem;
    }

    .site-footer .footer-bottom {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.75rem;
    }

    .site-footer .footer-bottom-links {
        justify-content: center;
    }

    .site-footer .footer-bottom p {
        font-size: 0.8rem;
    }
}

/* ── Mobile (single column) ────────────────────────────────────────── */
@media (max-width: 480px) {
    .site-footer {
        padding: 2rem 1.25rem 1.25rem;
        margin-top: 0;
    }

    .site-footer .footer-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        text-align: center;
    }

    .site-footer .footer-col a {
        display: inline-block;
    }

    .site-footer .footer-bottom-links {
        gap: 0.4rem 1rem;
        font-size: 0.8rem;
    }
}

/* ── Footer Social Icons ───────────────────────────────────────────── */
.footer-social {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;
}

.footer-social a {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    transition: transform 0.2s ease !important;
    line-height: 1 !important;
}

.footer-social a:hover {
    background: transparent !important;
    transform: translateY(-2px) !important;
}

.footer-social img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    opacity: 0.75;
    transition: opacity 0.3s ease;
    flex-shrink: 0;
}

.footer-social a:hover img {
    opacity: 1;
}

.site-footer .footer-col-social {
    text-align: center;
}

.site-footer .footer-col-social .footer-social {
    justify-content: center;
    margin-top: 1.25rem;
}

/* ── Back to Top Button ────────────────────────────────────────────── */
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(20, 184, 166, 0.4);
    color: #00FFFF;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9990;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}
.back-to-top.visible {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
}
.back-to-top:hover {
    border-color: #00FFFF;
    box-shadow: 0 0 16px rgba(0, 255, 255, 0.35);
    background: rgba(0, 0, 0, 0.85);
}

/* ── Custom Cursor ──────────────────────────────────────────────────── */
@media (hover: hover) { * { cursor: none !important; } }
.cursor-dot {
    position: fixed; width: 8px; height: 8px; border-radius: 50%;
    background: #00FFFF; pointer-events: none; z-index: 99999;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #00FFFF, 0 0 22px rgba(0,255,255,0.5);
    transition: width 0.18s ease, height 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
}
.cursor-ring {
    position: fixed; width: 36px; height: 36px; border-radius: 50%;
    border: 1.5px solid rgba(0,255,255,0.55); pointer-events: none;
    z-index: 99998; transform: translate(-50%,-50%);
    transition: width 0.28s ease, height 0.28s ease, border-color 0.28s ease;
}
.cursor-dot.hovering { width: 14px; height: 14px; background: #FFD700; box-shadow: 0 0 14px #FFD700, 0 0 30px rgba(255,215,0,0.5); }
.cursor-ring.hovering { width: 54px; height: 54px; border-color: rgba(255,215,0,0.65); }
.cursor-glow {
    position: fixed; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(0,255,255,0.055) 0%, transparent 68%);
    pointer-events: none; z-index: 6; transform: translate(-50%,-50%);
}
`;

    // ── Inject CSS ────────────────────────────────────────────────────────────────
    var styleEl = document.createElement('style');
    styleEl.id = 'va-components-css';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // ── Determine active page ─────────────────────────────────────────────────────
    var currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // ── Nav HTML ──────────────────────────────────────────────────────────────────
    var navHTML = [
        '<nav class="site-nav" id="siteNav">',
        '    <a href="index.html" class="nav-logo">',
        '        <img src="va-philippines-logo.png" alt="VA Philippines Logo">',
        '        Virtual Assistants Philippines',
        '    </a>',
        '    <ul class="nav-links" id="siteNavLinks">',
        '        <li><a href="services.html">Services</a></li>',
        '        <li><a href="pricing.html">Pricing</a></li>',
        '        <li><a href="case-studies.html">Case Studies</a></li>',
        '        <li><a href="about.html">About</a></li>',
        '        <li><a href="contact.html" class="get-started-btn">Book a Strategy Call</a></li>',
        '    </ul>',
        '    <div class="hamburger" id="siteHamburger" role="button" aria-label="Toggle navigation menu">',
        '        <span></span><span></span><span></span>',
        '    </div>',
        '</nav>'
    ].join('\n');

    // ── Footer HTML ───────────────────────────────────────────────────────────────
    var footerHTML = [
        '<footer class="site-footer">',
        '    <canvas id="ballpit-canvas"></canvas>',
        '    <div class="footer-grid">',
        '        <div class="footer-col">',
        '            <h4>Virtual Assistants Philippines</h4>',
        '            <p>The operational backbone for scaling SEO agencies. Trained Filipino VAs + custom AI automation, fully managed. Automate and Delegate.</p>',
        '        </div>',
        '        <div class="footer-col footer-col-social">',
        '            <h4>Let\'s Get Social</h4>',
        '            <div class="footer-social">',
        '                <a href="https://www.linkedin.com/company/virtual-assistants-philippines-llc/" target="_blank" rel="noopener" aria-label="LinkedIn">',
        '                    <img src="images/linkedin.png" alt="LinkedIn">',
        '                </a>',
        '                <a href="https://www.instagram.com/virtualassistants.philippines/" target="_blank" rel="noopener" aria-label="Instagram">',
        '                    <img src="images/instagram.png" alt="Instagram">',
        '                </a>',
        '                <a href="https://www.facebook.com/profile.php?id=61576105093918" target="_blank" rel="noopener" aria-label="Facebook">',
        '                    <img src="images/facebook.png" alt="Facebook">',
        '                </a>',
        '                <a href="https://x.com/autodelegate_ph" target="_blank" rel="noopener" aria-label="X (Twitter)">',
        '                    <img src="images/x.png" alt="X">',
        '                </a>',
        '            </div>',
        '        </div>',
        '        <div class="footer-col">',
        '            <h4>Company</h4>',
        '            <a href="about.html">About Us</a>',
        '            <a href="case-studies.html">Case Studies</a>',
        '            <a href="pricing.html">Pricing</a>',
        '        </div>',
        '        <div class="footer-col">',
        '            <h4>Contact</h4>',
        '            <a href="contact.html">Book a Strategy Call</a>',
        '            <a href="services.html">Our Services</a>',
        '        </div>',
        '    </div>',
        '    <div class="footer-bottom">',
        '        <p>&copy; 2026 Virtual Assistants Philippines | AI Automation Powered 😉</p>',
        '        <div class="footer-bottom-links">',
        '            <a href="privacy-policy.html">Privacy Policy</a>',
        '            <a href="terms-of-service.html">Terms of Service</a>',
        '            <a href="disclaimer.html">Disclaimer</a>',
        '            <a href="contact.html">Contact Us</a>',
        '        </div>',
        '    </div>',
        '</footer>'
    ].join('\n');

    // ── Scroll to top on page load/refresh ────────────────────────────────────────
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // ── Insert nav, cursor elements & footer ─────────────────────────────────────
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('afterbegin',
        '<div class="cursor-dot" id="cursorDot"></div>' +
        '<div class="cursor-ring" id="cursorRing"></div>' +
        '<div class="cursor-glow" id="cursorGlow"></div>'
    );
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // ── Back to Top button ─────────────────────────────────────────────────────────
    document.body.insertAdjacentHTML('beforeend',
        '<button class="back-to-top" id="backToTop" aria-label="Back to top">&#8593;</button>'
    );
    var bttBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            bttBtn.classList.add('visible');
        } else {
            bttBtn.classList.remove('visible');
        }
    }, { passive: true });
    bttBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ── Set active nav link ───────────────────────────────────────────────────────
    var links = document.querySelectorAll('#siteNavLinks a');
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href === currentFile || (currentFile === '' && href === 'index.html')) {
            links[i].classList.add('active');
        }
    }

    // ── Hamburger toggle ──────────────────────────────────────────────────────────
    var hamburger = document.getElementById('siteHamburger');
    var navLinks  = document.getElementById('siteNavLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    var menuLinks = navLinks.querySelectorAll('a');
    for (var j = 0; j < menuLinks.length; j++) {
        menuLinks[j].addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    }

    document.addEventListener('click', function (e) {
        if (!e.target.closest('#siteNav')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });

    // ── Custom Cursor (desktop only) ───────────────────────────────────────────────
    if (window.matchMedia('(hover: hover)').matches) {
        (function () {
            var dot  = document.getElementById('cursorDot');
            var ring = document.getElementById('cursorRing');
            var glow = document.getElementById('cursorGlow');
            var mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

            document.addEventListener('mousemove', function (e) {
                mouseX = e.clientX; mouseY = e.clientY;
                dot.style.left  = mouseX + 'px'; dot.style.top  = mouseY + 'px';
                glow.style.left = mouseX + 'px'; glow.style.top = mouseY + 'px';
            });

            (function tickRing() {
                ringX += (mouseX - ringX) * 0.25;
                ringY += (mouseY - ringY) * 0.25;
                ring.style.left = ringX + 'px';
                ring.style.top  = ringY + 'px';
                requestAnimationFrame(tickRing);
            })();

            document.querySelectorAll('a, button, .btn, .faq-question, .feature-card').forEach(function (el) {
                el.addEventListener('mouseenter', function () { dot.classList.add('hovering');    ring.classList.add('hovering');    });
                el.addEventListener('mouseleave', function () { dot.classList.remove('hovering'); ring.classList.remove('hovering'); });
            });
        })();
    } else {
        // Hide cursor elements on touch devices
        var cursorEls = document.querySelectorAll('.cursor-dot, .cursor-ring, .cursor-glow');
        cursorEls.forEach(function (el) { el.style.display = 'none'; });
    }

    // ── Ballpit Footer Background ─────────────────────────────────────────────────
    (async function () {
        var footerCanvas = document.getElementById('ballpit-canvas');
        if (!footerCanvas) return;

        try {
            const {
                Scene, OrthographicCamera, WebGLRenderer, SRGBColorSpace,
                ACESFilmicToneMapping, AmbientLight, PointLight,
                SphereGeometry, InstancedMesh, MeshPhysicalMaterial, Object3D,
                Color, Vector2, Vector3, Raycaster, Plane, MathUtils, Clock
            } = await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js');

            class PhysicsWorld {
                constructor(config) {
                    this.config       = config;
                    const n           = config.count || 200;
                    this.positionData = new Float32Array(3 * n).fill(0);
                    this.velocityData = new Float32Array(3 * n).fill(0);
                    this.sizeData     = new Float32Array(n).fill(1);
                    this.center       = new Vector3();
                    this._init();
                }
                _init() {
                    const { count=200, maxX=5, maxY=5, maxZ=2, minSize=0.5, maxSize=1 } = this.config;
                    for (let i = 0; i < count; i++) {
                        const idx = 3 * i;
                        this.positionData[idx]     = MathUtils.randFloatSpread(2 * maxX);
                        this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * maxY);
                        this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * maxZ);
                        this.sizeData[i] = MathUtils.randFloat(minSize, maxSize);
                    }
                }
                update(delta) {
                    const { count=200, gravity=0.5, friction=0.9975, wallBounce=0.85,
                            maxVelocity=0.15, maxX=5, maxY=5, maxZ=2, followCursor=true } = this.config;
                    let start = 0;
                    if (followCursor) {
                        start = 1;
                        const p0 = new Vector3().fromArray(this.positionData, 0);
                        p0.lerp(this.center, 0.1).toArray(this.positionData, 0);
                        new Vector3(0,0,0).toArray(this.velocityData, 0);
                    }
                    for (let i = start; i < count; i++) {
                        const base   = 3 * i;
                        const pos    = new Vector3().fromArray(this.positionData, base);
                        const vel    = new Vector3().fromArray(this.velocityData, base);
                        const radius = this.sizeData[i];
                        vel.y -= delta * gravity * radius;
                        vel.multiplyScalar(friction);
                        vel.clampLength(0, maxVelocity);
                        pos.add(vel);
                        for (let j = i + 1; j < count; j++) {
                            const ob   = 3 * j;
                            const oPos = new Vector3().fromArray(this.positionData, ob);
                            const diff = new Vector3().subVectors(oPos, pos);
                            const dist = diff.length();
                            const sumR = radius + this.sizeData[j];
                            if (dist > 0 && dist < sumR) {
                                const corr = diff.clone().normalize().multiplyScalar(0.5 * (sumR - dist));
                                pos.sub(corr); oPos.add(corr);
                                const oVel = new Vector3().fromArray(this.velocityData, ob);
                                const rv   = oVel.clone().sub(vel);
                                const n2   = corr.clone().normalize();
                                const imp  = rv.dot(n2);
                                if (imp < 0) {
                                    vel.addScaledVector(n2,  imp * 0.5);
                                    oVel.addScaledVector(n2, -imp * 0.5);
                                    oVel.toArray(this.velocityData, ob);
                                }
                                oPos.toArray(this.positionData, ob);
                            }
                        }
                        if (followCursor) {
                            const fPos = new Vector3().fromArray(this.positionData, 0);
                            const diff = new Vector3().subVectors(fPos, pos);
                            const d    = diff.length();
                            const sumR = radius + this.sizeData[0];
                            if (d > 0 && d < sumR) {
                                const corr = diff.clone().normalize().multiplyScalar(sumR - d);
                                pos.sub(corr);
                                vel.addScaledVector(corr.normalize(), -Math.abs(vel.dot(corr.normalize())) * 0.3);
                            }
                        }
                        if (pos.x - radius < -maxX) { pos.x = -maxX + radius; vel.x =  Math.abs(vel.x) * wallBounce; }
                        if (pos.x + radius >  maxX) { pos.x =  maxX - radius; vel.x = -Math.abs(vel.x) * wallBounce; }
                        if (pos.y - radius < -maxY) { pos.y = -maxY + radius; vel.y =  Math.abs(vel.y) * wallBounce; }
                        if (pos.y + radius >  maxY) { pos.y =  maxY - radius; vel.y = -Math.abs(vel.y) * wallBounce; }
                        if (pos.z - radius < -maxZ) { pos.z = -maxZ + radius; vel.z =  Math.abs(vel.z) * wallBounce; }
                        if (pos.z + radius >  maxZ) { pos.z =  maxZ - radius; vel.z = -Math.abs(vel.z) * wallBounce; }
                        pos.toArray(this.positionData, base);
                        vel.toArray(this.velocityData, base);
                    }
                }
            }

            const parent = footerCanvas.parentElement;
            const COUNT  = 150;
            const COLORS = ['#14B8A6', '#00FFFF', '#FFD700', '#FFFF00'];

            const renderer = new WebGLRenderer({ canvas: footerCanvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
            renderer.outputColorSpace = SRGBColorSpace;
            renderer.toneMapping      = ACESFilmicToneMapping;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            const scene  = new Scene();
            const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
            camera.position.z = 20;

            scene.add(new AmbientLight(0xffffff, 0.6));
            const lights = COLORS.map((c, i) => {
                const pl = new PointLight(c, 80, 40);
                pl.position.set(Math.cos(i * Math.PI / 2) * 8, Math.sin(i * Math.PI / 2) * 8, 5);
                scene.add(pl);
                return pl;
            });

            const geometry = new SphereGeometry(1, 32, 32);
            const material = new MeshPhysicalMaterial({
                metalness: 0.1, roughness: 0.05,
                clearcoat: 1.0, clearcoatRoughness: 0.05,
                transparent: true, opacity: 0.92
            });
            const imesh = new InstancedMesh(geometry, material, COUNT);
            imesh.castShadow = false;
            scene.add(imesh);

            const threeColors = COLORS.map(c => new Color(c));
            for (let i = 0; i < COUNT; i++) imesh.setColorAt(i, threeColors[i % threeColors.length]);
            imesh.instanceColor.needsUpdate = true;

            const physics = new PhysicsWorld({
                count: COUNT, minSize: 0.3, maxSize: 0.9,
                gravity: 0.3, friction: 0.998, wallBounce: 0.85,
                maxVelocity: 0.15, followCursor: true, maxX: 5, maxY: 5, maxZ: 2
            });

            const bpPlane   = new Plane(new Vector3(0, 0, 1), 0);
            const bpHit     = new Vector3();
            const bpPtr     = new Vector2();
            const raycaster = new Raycaster();
            const onPtr = (e) => {
                const cx = e.touches ? e.touches[0].clientX : e.clientX;
                const cy = e.touches ? e.touches[0].clientY : e.clientY;
                const r  = footerCanvas.getBoundingClientRect();
                bpPtr.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
                raycaster.setFromCamera(bpPtr, camera);
                raycaster.ray.intersectPlane(bpPlane, bpHit);
                physics.center.copy(bpHit);
            };
            window.addEventListener('mousemove', onPtr);
            window.addEventListener('touchmove', onPtr, { passive: true });

            const FRUSTUM_H = 12;
            const resize = () => {
                const w = parent.offsetWidth || window.innerWidth;
                const h = parent.offsetHeight || 320;
                renderer.setSize(w, h);
                const aspect = w / h;
                const halfH  = FRUSTUM_H / 2;
                const halfW  = halfH * aspect;
                camera.left   = -halfW; camera.right  =  halfW;
                camera.top    =  halfH; camera.bottom = -halfH;
                camera.updateProjectionMatrix();
                physics.config.maxX = halfW;
                physics.config.maxY = halfH;
            };
            new ResizeObserver(resize).observe(parent);
            resize();

            const clock = new Clock();
            const dummy = new Object3D();
            let lightAngle = 0, rafId = null, running = false;

            function tick() {
                if (!running) return;
                rafId = requestAnimationFrame(tick);
                const delta = Math.min(clock.getDelta(), 0.05);
                physics.update(delta);
                lightAngle += delta * 0.4;
                lights.forEach((pl, i) => {
                    const a = lightAngle + i * (Math.PI / 2);
                    pl.position.set(Math.cos(a) * 10, Math.sin(a) * 6, 5);
                });
                for (let i = 0; i < COUNT; i++) {
                    dummy.position.fromArray(physics.positionData, i * 3);
                    dummy.scale.setScalar(physics.sizeData[i]);
                    dummy.updateMatrix();
                    imesh.setMatrixAt(i, dummy.matrix);
                }
                imesh.instanceMatrix.needsUpdate = true;
                renderer.render(scene, camera);
            }

            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !running) {
                        running = true; clock.start(); tick();
                    } else if (!entry.isIntersecting && running) {
                        running = false; cancelAnimationFrame(rafId);
                    }
                });
            }, { threshold: 0.9 }).observe(parent);

        } catch (e) {
            console.error('Ballpit background error:', e);
        }
    })();

})();
