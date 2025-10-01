
// ================================================================================
//  This code is part of the HacxGPT project.  Repo: hacx-gpt/hacx-gpt.github.io
//  Copyright (c) 2025-26 HacxGPT. All Rights Reserved.
//
//  This project is open-source. Please see the 'LICENSE' file in the root
//  directory of this repository for the full license terms and conditions
//  before copying, modifying, or distributing this code.
//  ================================================================================


// --- JavaScript for dynamic and interactive elements ---

        const clockElement = document.getElementById('live-clock');
        function updateClock() {
            if (!clockElement) return;
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
        setInterval(updateClock, 1000);
        updateClock();

        document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });

        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        });

        const animatedElements = document.querySelectorAll('.fade-in-up');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px'
        });
        animatedElements.forEach(el => observer.observe(el));
