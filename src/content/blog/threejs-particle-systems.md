---
title: 'Building Particle Systems with Three.js'
description: 'A deep dive into creating beautiful particle effects for web backgrounds'
pubDate: 2025-12-20
tags: ['three.js', 'webgl', 'particles', 'tutorial']
---

# Building Particle Systems with Three.js

Particle systems are one of the most visually striking effects you can add to a website. Let's explore how to create them using Three.js.

## The Basics

A particle system consists of many small elements (particles) that move and behave according to specific rules. In Three.js, we use `Points` geometry for optimal performance.

## Setting Up

First, create a geometry to hold particle positions:

```javascript
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
```

## Adding Color

Particles become more interesting with varied colors:

```javascript
const colorArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i += 3) {
  const colorType = Math.random();
  if (colorType < 0.33) {
    // Purple
    colorArray[i] = 0.66;
    colorArray[i + 1] = 0.33;
    colorArray[i + 2] = 0.97;
  } else if (colorType < 0.66) {
    // Pink
    colorArray[i] = 0.93;
    colorArray[i + 1] = 0.28;
    colorArray[i + 2] = 0.60;
  } else {
    // Blue
    colorArray[i] = 0.23;
    colorArray[i + 1] = 0.51;
    colorArray[i + 2] = 0.96;
  }
}
```

## Animation

The magic happens in the animation loop:

```javascript
function animate() {
  requestAnimationFrame(animate);

  particlesMesh.rotation.y += 0.001;
  particlesMesh.rotation.x = Math.sin(time) * 0.1;

  renderer.render(scene, camera);
}
```

## Performance Tips

- Limit particle count for mobile devices
- Use `AdditiveBlending` for glowing effects
- Consider using instanced meshes for very large systems

Happy coding in the darkness! 🌌
