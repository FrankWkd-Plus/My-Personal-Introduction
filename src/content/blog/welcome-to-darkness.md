---
title: 'Welcome to the Darkness'
description: 'Exploring the depths of dark-themed web design with Three.js and modern animations'
pubDate: 2025-12-15
tags: ['astro', 'three.js', 'dark-theme', 'animations']
---

# Welcome to the Darkness

This is the first post on my new dark-themed blog. Built with Astro and powered by intense animations, this blog explores the intersection of design and motion.

## What Makes This Theme Special?

The Darkness theme pushes the boundaries of web animation:

- **5000 Three.js particles** creating an immersive 3D background
- **Glitch effects** that bring cyberpunk aesthetics to life
- **Custom cursor** that responds to your every move
- **View Transitions** for buttery smooth page navigation

## The Technology

This theme is built on cutting-edge web technologies:

```javascript
// Example: Creating particles in Three.js
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i += 3) {
  posArray[i] = (Math.random() - 0.5) * 100;
  posArray[i + 1] = (Math.random() - 0.5) * 100;
  posArray[i + 2] = (Math.random() - 0.5) * 100;
}
```

## Motion and Beauty

Every element on this site is designed to move. From the floating background shapes to the pulsing glow effects, motion is at the core of the experience.

Stay tuned for more posts about web animation, Three.js techniques, and dark design patterns!
