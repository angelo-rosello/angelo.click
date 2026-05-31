// Wait a bit before starting this script

window.addEventListener("load", () => {

    setTimeout(() => {

        initBackground();

    }, 10);

});


function initBackground() {

    const bg = document.querySelector('.background-pattern');

    const particles = [];

    const COUNT = 600;  // Number of particles
    const max_opacity = 0.3;

    for (let i = 0; i < COUNT; i++) {

        const span = document.createElement('span');

        span.textContent = '\u00F8';  // (Barred O)

        bg.appendChild(span);

        particles.push({

            el: span,

            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            vx: (Math.random() - 0.5) * 0.3,
            vy: -0.3 - Math.random() * 0.4,

            size: 12 + Math.random() * 30,

            opacity: max_opacity * Math.random()
        });
    }

    let mouseX = -9999;
    let mouseY = -9999;

    document.addEventListener('mousemove', (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {

        particles.forEach(p => {

            const dx = p.x - mouseX;
            const dy = p.y - mouseY;

            const dist = Math.sqrt(dx * dx + dy * dy);
            const max_dist = 50; // interaction distance
            const force = 0.4; // repulsion force
            const upward_mvmt = 0.3; // Updward movement
            const horizontal_shift = 0.2;

            if (dist < max_dist) {

                const ratio = (max_dist - dist) / max_dist;

                p.vx += (dx / dist) * ratio * force * force;
                p.vy += (dy / dist) * ratio * force * force;
            }

            p.vx += (Math.random() - 0.5) * horizontal_shift;

            p.vx *= 0.98;
            p.vy *= 0.98;

            p.y += p.vy - upward_mvmt;
            p.x += p.vx;

            if (p.y < -50) {
                p.y = window.innerHeight + 50;
                p.x = Math.random() * window.innerWidth;
            }

            if (p.x < -50) p.x = window.innerWidth + 50;
            if (p.x > window.innerWidth + 50) p.x = -50;

            p.el.style.transform =
                `translate(${p.x}px, ${p.y}px)`;

            p.el.style.fontSize =
                `${p.size}px`;


            // ---------- OPACITY ----------

            // Base particle opacity
            let opacity = p.opacity;


            // Mouse glow
            if (dist < max_dist) {

                const glow =
                    (max_dist - dist) / max_dist;

                opacity += glow * 0.25;
            }


            // ---------- CENTER FADE ----------

            // Distance from center of screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const centerDX = p.x - centerX;
            const centerDY = p.y - centerY;

            const centerDist =
                Math.sqrt(
                    centerDX * centerDX +
                    centerDY * centerDY
                );


            // Radius of protected reading zone
            const fadeRadius = 1500;


            // Fade particles near center
            if (centerDist < fadeRadius) {

                const fade =
                    centerDist / fadeRadius;

                opacity *= fade;
            }


            // Final opacity
            p.el.style.opacity =
                Math.min(opacity, 0.35);

        });

        requestAnimationFrame(animate);
    }

    animate();



}

