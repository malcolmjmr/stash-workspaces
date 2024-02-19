<!-- App.svelte -->
<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { CSS3DRenderer, CSS3DObject, } from 'three/addons/renderers/CSS3DRenderer.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  
    let scene, camera, webGLRenderer, css3DRenderer;

    let canvas;
  

    onMount(() => {
        initThree();
        addEventListeners();
        animate();
    });

    function initThree() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.set(0, 0, 1000);

        scene = new THREE.Scene();
        var cube = new THREE.Mesh(
            new THREE.BoxGeometry(50,50,50),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        scene.add(cube);

        // Light (with specified intensity and color)
        const light = new THREE.SpotLight(0xffffff, 1); // White light with full intensity
        light.position.set(170, 330, -160);
        scene.add(light);


        var planeGeo = new THREE.PlaneGeometry(400, 200, 10, 10);
        var planeMat = new THREE.MeshLambertMaterial({color: 'lightgray'} );
        var plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.x = -Math.PI/2;
        plane.position.y = -25;
        plane.receiveShadow = true;
        scene.add(plane);

  
        // Set up the camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 1000;
    
        webGLRenderer = new THREE.WebGLRenderer();
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(webGLRenderer.domElement);
    
        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            webGLRenderer.setSize(window.innerWidth, window.innerHeight);
        });

        const controls = new OrbitControls(camera, webGLRenderer.domElement);
        controls.addEventListener('change', webGLRenderer); // use if there is no animation loop
        controls.minDistance = 100;
        controls.maxDistance = 500;
        controls.enablePan = true;


        css3DRenderer = new CSS3DRenderer();
        css3DRenderer.setSize(window.innerWidth, window.innerHeight);
        css3DRenderer.domElement.style.position = 'absolute';
        css3DRenderer.domElement.style.top = '0px';
        document.body.appendChild(css3DRenderer.domElement);


    }

    function animate() {
        requestAnimationFrame(animate);
        css3DRenderer.render(scene, camera);
        webGLRenderer.render(scene, camera);
    }

    function addIframe() {

        console.log('adding iframe');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://exa.ai';
        iframe.style.width = '640px';
        iframe.style.height = '360px';
        iframe.style.border = '0px';
        const object = new CSS3DObject(iframe);
        object.position.set(0, 0, 0);
        scene.add(object);

        // Make the iframe draggable (simple example)
        iframe.draggable = true;
        iframe.ondragstart = (event) => {
            event.dataTransfer.setData('text/plain', null); // Required for Firefox
        };
    }

    let selectedObject = null;

    function onDocumentMouseDown(event) {
        event.preventDefault();

        const rect = webGLRenderer.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const vector = new THREE.Vector3(x, y, 0.5);
        vector.unproject(camera);

        const ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

        const intersects = ray.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            selectedObject = intersects[0].object;
            console.log('object selected');
            console.log(selectedObject);
            // Add logic to mark the object as selected or to start dragging
        }
    }

    function onDocumentMouseMove(event) {
        if (selectedObject) {
            const rect = webGLRenderer.domElement.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            const vector = new THREE.Vector3(x, y, selectedObject.position.z);
            vector.unproject(camera);
            selectedObject.position.copy(vector);
            // Update the position of the selectedObject based on the mouse movement
        }
    }

    function onDocumentMouseUp(event) {
        selectedObject = null; // Deselect the object when mouse is released
    }
    const addEventListeners = () => {
        document.addEventListener('mousedown', onDocumentMouseDown, false);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);
    };
   
  </script>

<button on:click={addIframe}>Add Draggable Iframe</button>
  
  <style>
    canvas {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    button {
        z-index: 900000;
        position: fixed;
    }
  </style>
  
