import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  className?: string;
  intensity?: 'subtle' | 'hero';
  isRtl?: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ 
  className = '', 
  intensity = 'hero',
  isRtl = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability defensively
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLAvailable(false);
        return;
      }
    } catch {
      setWebGLAvailable(false);
      return;
    }

    const isMobile = window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const particleCount = isMobile ? 450 : (intensity === 'hero' ? 850 : 500);
    const connectionDistance = isMobile ? 55 : 70;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.z = 230;

    // Shift scene origin for editorial balance:
    // When LTR: shift to the right (+55) so the network blooms where there is open space
    // When RTL: shift to the left (-55) so the network blooms where there is open space
    const originOffsetX = isMobile ? 0 : (isRtl ? -55 : 55);
    scene.position.x = originOffsetX;

    // 2. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 3. Create a soft round particle texture (prevents harsh blocky square particles)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(100, 110, 120, 1)');
      gradient.addColorStop(0.5, 'rgba(120, 130, 140, 0.6)');
      gradient.addColorStop(1, 'rgba(140, 150, 160, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const circleTexture = createCircleTexture();

    // 4. Geometry & Particles
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const spreadX = isMobile ? 280 : 420;
    const spreadY = isMobile ? 240 : 300;
    const spreadZ = 140;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      velocities.push({
        x: (Math.random() - 0.5) * 0.14,
        y: (Math.random() - 0.5) * 0.14,
        z: (Math.random() - 0.5) * 0.08,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Refined, softer mineral slate styling
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(0x8a8a98),
      size: isMobile ? 2.5 : 3.2,
      map: circleTexture || undefined,
      transparent: true,
      opacity: intensity === 'hero' ? 0.32 : 0.18,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Dynamic Line Mesh for Neural / Enterprise Nodes
    const maxLineSegments = isMobile ? 300 : 600;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0xa8a8b6),
      transparent: true,
      opacity: 0.12,
      linewidth: 1,
    });

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // 6. Interaction Tracking (smooth mouse parallax)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 28;
      targetMouseY = -y * 28;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // 7. Animation Loop (60fps target with dampening)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(originOffsetX * 0.3, 0, 0);

      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      // Update particles
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y + Math.sin(elapsedTime * 0.4 + posArray[i3] * 0.01) * 0.05;
        posArray[i3 + 2] += velocities[i].z;

        // Boundary reflection
        if (Math.abs(posArray[i3]) > spreadX / 2) velocities[i].x *= -1;
        if (Math.abs(posArray[i3 + 1]) > spreadY / 2) velocities[i].y *= -1;
        if (Math.abs(posArray[i3 + 2]) > spreadZ / 2) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update lines between nearby nodes
      let lineVertexIndex = 0;
      let connectedPairs = 0;
      const step = isMobile ? 3 : 2;

      for (let i = 0; i < particleCount; i += step) {
        if (connectedPairs >= maxLineSegments) break;
        const i3 = i * 3;
        const xi = posArray[i3];
        const yi = posArray[i3 + 1];
        const zi = posArray[i3 + 2];

        for (let j = i + step; j < particleCount; j += step * 2) {
          if (connectedPairs >= maxLineSegments) break;
          const j3 = j * 3;
          const dx = xi - posArray[j3];
          const dy = yi - posArray[j3 + 1];
          const dz = zi - posArray[j3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectionDistance * connectionDistance) {
            linePositions[lineVertexIndex++] = xi;
            linePositions[lineVertexIndex++] = yi;
            linePositions[lineVertexIndex++] = zi;
            linePositions[lineVertexIndex++] = posArray[j3];
            linePositions[lineVertexIndex++] = posArray[j3 + 1];
            linePositions[lineVertexIndex++] = posArray[j3 + 2];
            connectedPairs++;
          }
        }
      }

      lineGeometry.setDrawRange(0, connectedPairs * 2);
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Slow organic rotation of entire scene
      scene.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      circleTexture?.dispose();
      renderer.dispose();
    };
  }, [intensity, isRtl]);

  if (!webGLAvailable) {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eeece7_1px,transparent_1px),linear-gradient(to_bottom,#eeece7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_70%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>
    );
  }

  const maskStyle = isRtl
    ? '[mask-image:radial-gradient(ellipse_75%_85%_at_28%_45%,#000_35%,transparent_85%)]'
    : '[mask-image:radial-gradient(ellipse_75%_85%_at_72%_45%,#000_35%,transparent_85%)]';

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${maskStyle} ${className}`}
      aria-hidden="true"
    />
  );
};
