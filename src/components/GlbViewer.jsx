import React, { useEffect, useMemo, useRef } from "react";

const defaultSettings = {
  autoRotate: true,
  autoRotateSpeed: 0.55,
  background:
    "radial-gradient(circle at 30% 18%, rgba(255,255,255,0.92), transparent 34%), linear-gradient(135deg, #fffaf1 0%, #e8e0d2 100%)",
  cameraPosition: [3.8, 2.2, 4.4],
  maxDistance: 7,
  minDistance: 2.1,
  position: [0, 0, 0],
  scale: 2.7,
  target: [0, 0, 0],
};

export function GlbViewer({ hint, src, title, settings = {} }) {
  const containerRef = useRef(null);
  const viewerSettings = useMemo(() => ({ ...defaultSettings, ...settings }), [settings]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let animationId = 0;
    let cleanupScene = () => {};
    let cancelled = false;

    Promise.all([
      import("three"),
      import("three/examples/jsm/loaders/GLTFLoader.js"),
      import("three/examples/jsm/controls/OrbitControls.js"),
    ]).then(([THREE, { GLTFLoader }, { OrbitControls }]) => {
      if (cancelled || !containerRef.current) return;

      const scene = new THREE.Scene();
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 1000);
      camera.position.set(...viewerSettings.cameraPosition);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.08;
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.autoRotate = viewerSettings.autoRotate;
      controls.autoRotateSpeed = viewerSettings.autoRotateSpeed;
      controls.minDistance = viewerSettings.minDistance;
      controls.maxDistance = viewerSettings.maxDistance;

      scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8177, 2.4));

      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(4, 5, 6);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 1.4);
      fillLight.position.set(-5, 2, -3);
      scene.add(fillLight);

      const modelGroup = new THREE.Group();
      scene.add(modelGroup);

      const loader = new GLTFLoader();
      loader.load(src, (gltf) => {
        if (cancelled) return;

        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxAxis = Math.max(size.x, size.y, size.z) || 1;

        model.position.sub(center);
        model.scale.setScalar(viewerSettings.scale / maxAxis);
        model.position.add(new THREE.Vector3(...viewerSettings.position));
        modelGroup.add(model);

        controls.target.set(...viewerSettings.target);
        controls.update();
      });

      const resize = () => {
        const width = container.clientWidth || 1;
        const height = container.clientHeight || 1;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      resize();
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      const animate = () => {
        controls.update();
        renderer.render(scene, camera);
        animationId = window.requestAnimationFrame(animate);
      };
      animate();

      cleanupScene = () => {
        window.cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        controls.dispose();
        renderer.dispose();
        renderer.domElement.remove();
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material.dispose());
          }
        });
      };
    });

    return () => {
      cancelled = true;
      cleanupScene();
    };
  }, [src, viewerSettings]);

  return (
    <div
      className="glb-viewer"
      ref={containerRef}
      role="img"
      aria-label={`Modelo 3D de ${title}`}
      style={{ "--model-background": viewerSettings.background }}
    >
      <span className="glb-viewer-hint">{hint}</span>
    </div>
  );
}
