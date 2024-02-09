<!-- App.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
  
    let scene, camera, renderer;
  
    onMount(() => {
      // Set up the scene
      scene = new THREE.Scene();
  
      // Set up the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Handle window resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
  
      // Render loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    });
  </script>

<canvas />
  
  <style>
    canvas {
      display: block;
    }
  </style>
  
