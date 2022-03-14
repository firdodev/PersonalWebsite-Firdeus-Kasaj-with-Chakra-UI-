import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true}
) {
    const { receiveShadow, castShadow } = options
    return new Promise(( reslove, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'cat'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                reslove(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}