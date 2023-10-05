// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ThreeAnimation = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Configurar la escena
//     const scene = new THREE.Scene();

//     // Configurar la cámara
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Configurar el renderizador
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     // Crear un cubo
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Animación
//     const animate = () => {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       // Limpieza
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default ThreeAnimation;


// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ParticleAnimation = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Configurar la escena
//     const scene = new THREE.Scene();

//     // Configurar la cámara
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Configurar el renderizador
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     // Crear partículas
//     const particles = new THREE.Group();
//     scene.add(particles);

//     const particleCount = 1000;
//     for (let i = 0; i < particleCount; i++) {
//       const particle = new THREE.Mesh(
//         new THREE.SphereGeometry(0.05, 8, 8),
//         new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
//       );

//       particle.position.x = (Math.random() - 0.5) * 10;
//       particle.position.y = (Math.random() - 0.5) * 10;
//       particle.position.z = (Math.random() - 0.5) * 10;

//       particles.add(particle);
//     }

//     // Animación
//     const animate = () => {
//       requestAnimationFrame(animate);

//       particles.rotation.x += 0.001;
//       particles.rotation.y += 0.001;

//       for (const particle of particles.children) {
//         particle.position.x += (Math.random() - 0.5) * 0.01;
//         particle.position.y += (Math.random() - 0.5) * 0.01;
//         particle.position.z += (Math.random() - 0.5) * 0.01;
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       // Limpieza
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default ParticleAnimation;



// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const MouseInteractiveAnimation = () => {
//   const canvasRef = useRef();
//   const mouse = new THREE.Vector2();

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     const particles = new THREE.Group();
//     scene.add(particles);

//     const particleCount = 1000;
//     for (let i = 0; i < particleCount; i++) {
//       const particle = new THREE.Mesh(
//         new THREE.SphereGeometry(0.05, 8, 8),
//         new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff })
//       );

//       particle.position.x = (Math.random() - 0.5) * 10;
//       particle.position.y = (Math.random() - 0.5) * 10;
//       particle.position.z = (Math.random() - 0.5) * 10;

//       particles.add(particle);
//     }

//     scene.add(particles);

//     Capturar eventos de ratón
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       mouse.x = (clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     Animación
//     const animate = () => {
//       requestAnimationFrame(animate);

//       particles.rotation.x += 0.001;
//       particles.rotation.y += 0.001;

//       particles.children.forEach((particle) => {
//         const distance = mouse.distanceTo(particle.position);
//         if (distance < 2) {
//           particle.scale.set(1.5, 1.5, 1.5);
//         } else {
//           particle.scale.set(1, 1, 1);
//         }
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default MouseInteractiveAnimation;


// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const ParticleGlowAnimation = () => {
//   const canvasRef = useRef();
//   const mouse = new THREE.Vector2();

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     canvasRef.current.appendChild(renderer.domElement);

//     const particles = new THREE.Group();
//     scene.add(particles);

//     const particleCount = 1000;
//     for (let i = 0; i < particleCount; i++) {
//       const particle = new THREE.Mesh(
//         new THREE.SphereGeometry(0.05, 8, 8),
//         new THREE.MeshBasicMaterial({ color: 0xffffff })
//       );

//       particle.position.x = (Math.random() - 0.5) * 10;
//       particle.position.y = (Math.random() - 0.5) * 10;
//       particle.position.z = (Math.random() - 0.5) * 10;

//       particles.add(particle);
//     }

//     scene.add(particles);

//     // Capturar eventos de ratón
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       mouse.x = (clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Animación
//     const animate = () => {
//       requestAnimationFrame(animate);

//       particles.rotation.x += 0.001;
//       particles.rotation.y += 0.001;

//       particles.children.forEach((particle) => {
//         const distance = mouse.distanceTo(particle.position);
//         const maxDistance = 2;
//         const intensity = Math.max(0, (maxDistance - distance) / maxDistance);
//         particle.material.color.setRGB(intensity, intensity, intensity);
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default ParticleGlowAnimation;



import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleGlowAnimation = () => {
  const canvasRef = useRef();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const particles = new THREE.Group();
    scene.add(particles);

    const particleCount = 10000;
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );

      particle.position.x = (Math.random() - 0.5) * 10;
      particle.position.y = (Math.random() - 0.5) * 10;
      particle.position.z = (Math.random() - 0.5) * 10;

      particles.add(particle);
    }

    scene.add(particles);

    // Capturar eventos de ratón
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      particles.children.forEach((particle) => {
        const distance = mouse.distanceTo(particle.position);
        const maxDistance = 2;
        const intensity = Math.max(0, (maxDistance - distance) / maxDistance);
        particle.material.color.setRGB(intensity, intensity, intensity);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ParticleGlowAnimation;


