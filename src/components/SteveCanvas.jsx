import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function SteveCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const aspect = mount.clientWidth / mount.clientHeight;
    const viewSize = 5;

    const camera = new THREE.OrthographicCamera(
      (-viewSize * aspect) / 2,
      (viewSize * aspect) / 2,
      viewSize / 2,
      -viewSize / 2,
      0.1,
      100,
    );

    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 5, 4);
    scene.add(directionalLight);

    let steve;
    let mixer;
    let currentAction;
    const actions = {};
    const keys = {};

    const clock = new THREE.Clock();

    function playAnimation(name) {
      const nextAction = actions[name];

      if (!nextAction || nextAction === currentAction) return;

      if (currentAction) {
        currentAction.fadeOut(0.2);
      }

      nextAction.reset().fadeIn(0.2).play();
      currentAction = nextAction;
    }

    // Load Steve model
    const loader = new GLTFLoader();

    loader.load("/models/steve.glb", (gltf) => {
      steve = gltf.scene;

      steve.scale.set(0.7, 0.7, 0.7);
      steve.position.set(0, -1, 0);

      scene.add(steve);

      mixer = new THREE.AnimationMixer(steve);

      gltf.animations.forEach((clip) => {
        actions[clip.name] = mixer.clipAction(clip);
      });

      playAnimation("Armature|Idle");
    });

    function handleKeyDown(e) {
      keys[e.key] = true;
    }

    function handleKeyUp(e) {
      keys[e.key] = false;
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      if (steve) {
        const speed = 0.04;
        let isMoving = false;

        // Lock to 2D ground
        steve.position.y = -1.1;
        steve.position.z = 0;

        if (keys["ArrowDown"]) {
          steve.rotation.y = 0;
        }

        if (keys["ArrowLeft"]) {
          steve.position.x -= speed;
          steve.rotation.y = -Math.PI / 2;
          isMoving = true;
        }

        if (keys["ArrowRight"]) {
          steve.position.x += speed;
          steve.rotation.y = Math.PI / 2;
          isMoving = true;
        }

        if (keys["ArrowUp"]) {
          playAnimation("Armature|Jump");
        } else if (isMoving) {
          playAnimation("Armature|Walk");
        } else {
          playAnimation("Armature|Idle");
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    function handleResize() {
      const aspect = mount.clientWidth / mount.clientHeight;
      const viewSize = 5;

      camera.left = (-viewSize * aspect) / 2;
      camera.right = (viewSize * aspect) / 2;
      camera.top = viewSize / 2;
      camera.bottom = -viewSize / 2;

      camera.updateProjectionMatrix();

      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);

      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="steve-canvas" />;
}

export default SteveCanvas;
