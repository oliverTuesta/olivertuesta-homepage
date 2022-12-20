import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const loadGLTFModel = (
    scene,
    modelPath,
    options = { receiveShadow: true, castShadow: true }
) => {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            modelPath,
            (gltf) => {
                const obj = gltf.scene;
                obj.name = 'avocado';
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = receiveShadow;
                obj.castShadow = castShadow;
                scene.add(obj);

                obj.traverse((child) => {
                    if (child.isMesh) {
                        child.receiveShadow = receiveShadow;
                        child.castShadow = castShadow;
                    }
                });

                resolve(obj);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
};
