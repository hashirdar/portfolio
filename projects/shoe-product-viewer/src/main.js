import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/RGBELoader.js';


function init() {

    const webgl = document.querySelector('#webgl');
    const side = document.querySelectorAll('.side');
    const icon = document.querySelector('#icon');
    const infoheading = document.querySelector('#info-heading');
    const infoparagraph = document.querySelector('#info-paragraph');
    const allannotation = document.querySelectorAll('.annotation');
    const preloader = document.querySelector('.preloader');
    const progressbar = document.querySelector('.progress');

    let point1data = {
        x: 0,
        y: 0,
        z: 0
    };

    let point4data = {
        x: 0,
        y: 0,
        z: 0
    };

    let point5data = {
        x: 0,
        y: 0,
        z: 0
    };

    let point6data = {
        x: 0,
        y: 0,
        z: 0
    };


    const width = webgl.offsetWidth;
    const height = webgl.offsetHeight;
    let model;
    let item1, item2, item3, item4, item5, item6;
    let point1, point2, point3;



    const items = [
        item1 = {
            heading: 'Zone Waterproofing',
            paragraph: 'Just some random stuff for you',
            img: './assets/thumbnails/Waterproof.png',
        },

        item2 = {
            heading: 'LACE KEEPER',
            paragraph: 'Elastic lace keep to secure lace loops.',
            img: './assets/thumbnails/LaceKeep.png'
        },

        item3 = {
            heading: 'BLOOM FOOTBED',
            paragraph: 'BLOOM eco-friendly algae-based EVA footbed thanks helps clean polluted water habitats.',
            img: './assets/thumbnails/Bloom.png'
        },

        item4 = {
            heading: 'BREATHABLE MESH',
            paragraph: 'Engineered mesh optimized for breathability and wear resistance.',
            img: './assets/thumbnails/BreathableMesh.png'
        },

        item5 = {
            heading: 'MULTIGRIP OUTSOLE',
            paragraph: '4mm lug depth and dual-compound rubber deliver aggressive traction without sacrificing durability.',
            img: './assets/thumbnails/MultiGrip.png'
        },

        item6 = {
            heading: 'Tpu Reinforcements',
            paragraph: 'No-sew TPU reinforces high abrasion areas for rugged durability.',
            img: './assets/thumbnails/TPS.png'
        }


    ];

    for (let i = 0; i < side.length; i++) {

        infoheading.innerText = items[i].heading;
        infoparagraph.innerText = items[i].paragraph;
    };

    for (let i = 0; i < side.length; i++) {
        side[i].addEventListener('click', (event) => {


            for (let i = 0; i < side.length; i++) {
                allannotation[i].classList.add('hide');
                side[i].classList.remove('active');
            }
            side[i].classList.add('active');
            allannotation[i].classList.remove('hide');

            icon.src = items[i].img;
            infoheading.innerText = items[i].heading;
            infoparagraph.innerText = items[i].paragraph;

        })
    }


    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#736153');
    scene.fog = new THREE.Fog('#736153', 5, 20);



    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(4, 2, 4);


    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: webgl });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio / 1.2);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;




    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.3, 0);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = 0.06;
    controls.minDistance = 1.2;
    controls.maxDistance = 5.5;
    controls.maxPolarAngle = Math.PI / 2.1;

    window.addEventListener('resize', () => {
        onWindowResize()
    });

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio / 1.2);

    };


    // LIGHTS 

    const light = new THREE.DirectionalLight('white', 0.3, 100);
    light.position.set(0, 3, 2); //default; light shining from top
    light.castShadow = true; // default false
    scene.add(light);

    light.shadow.bias = -0.0002;
    light.shadow.mapSize.width = 128; // default
    light.shadow.mapSize.height = 128; // default
    light.shadow.camera.near = 0.01; // default
    light.shadow.camera.far = 500; // default


    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    new RGBELoader().load('./assets/environment.hdr', function (texture) {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.environment = texture;


    });



    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {

    };

    manager.onLoad = function () {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = 'none';

    };

    manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        const percentage = (itemsLoaded / itemsTotal) * 100 + '%'
        progressbar.style.width = percentage;


    };

    manager.onError = function (url) {


    };

    function update() {

        for (let i = 0; i < side.length; i++) {
            side[i].addEventListener('click', (event) => {

                switch (side[i].classList[1]) {

                    case 'side1':
                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[0].position.x - 3 - point1data.x],
                            y: [camera.position.y, annotations[0].position.y + 0.2],
                            z: [camera.position.z, annotations[0].position.z + 1.2 + point1data.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[0].position.x],
                            y: [controls.target.y, annotations[0].position.y],
                            z: [controls.target.z, annotations[0].position.z + 0.4],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        break;
                    case 'side2':
                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[1].position.x],
                            y: [camera.position.y, annotations[1].position.y],
                            z: [camera.position.z, annotations[1].position.z + 2.2],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[1].position.x],
                            y: [controls.target.y, annotations[1].position.y],
                            z: [controls.target.z, annotations[1].position.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        break;

                    case 'side3':

                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[2].position.x],
                            y: [camera.position.y, annotations[2].position.y + 1.6],
                            z: [camera.position.z, annotations[2].position.z + 1.4],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[2].position.x],
                            y: [controls.target.y, annotations[2].position.y - 0.6],
                            z: [controls.target.z, annotations[2].position.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })
                        break;

                    case 'side4':

                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[3].position.x + 3.6 + point4data.x],
                            y: [camera.position.y, annotations[3].position.y],
                            z: [camera.position.z, annotations[3].position.z + 0.6 - point4data.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[3].position.x],
                            y: [controls.target.y, annotations[3].position.y],
                            z: [controls.target.z, annotations[3].position.z - 0.5],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })
                        break;

                    case 'side5':

                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[4].position.x],
                            y: [camera.position.y, annotations[4].position.y - 1.4 + point5data.y],
                            z: [camera.position.z, annotations[4].position.z - 0.85 - point5data.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[4].position.x],
                            y: [controls.target.y, annotations[4].position.y - 0.3],
                            z: [controls.target.z, annotations[4].position.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })
                        break;

                    case 'side6':

                        anime({
                            targets: camera.position,
                            x: [camera.position.x, annotations[5].position.x + 1.4 + point6data.x],
                            y: [camera.position.y, annotations[5].position.y],
                            z: [camera.position.z, annotations[5].position.z + 1.8],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })

                        anime({
                            targets: controls.target,
                            x: [controls.target.x, annotations[5].position.x],
                            y: [controls.target.y, annotations[5].position.y],
                            z: [controls.target.z, annotations[5].position.z],
                            duration: 1300,
                            easing: 'easeInOutCubic',
                            delay: 100,
                        })
                        break;
                }
            })
        };
    }

    // Model Loading
    const loader = new GLTFLoader(manager);
    loader.load('./assets/model/shoe.gltf', (gltf) => {
        model = gltf.scene;
        scene.add(model)
        model.scale.set(2, 2, 2);
        point1 = model.getObjectByName('point1');
        update();


        if (window.innerWidth < 600) {
            point1data.x = 1.5;
            point1data.y = 0;
            point1data.z = 0;

            point4data.x = 1.8;
            point4data.z = 1.5;

            point5data.x = 0;
            point5data.y = 0.2;
            point5data.z = 0.8;

            point6data.x = 1.8;
            point6data.y = 0;
            point6data.z = 0;

            if (model != undefined) {
                model.scale.set(1.8, 1.8, 1.8);
            }
        }

        model.traverse(function (child) {
            child.castShadow = true;
            child.receiveShadow = true;
        })
    });


    const raycaster = new THREE.Raycaster();

    const annotations = [
        {
            position: new THREE.Vector3(-0.55, 1.35, 0.3),
            element: document.querySelector('.anno-1'),
        },

        {
            position: new THREE.Vector3(-0.1, 2, 0.5),
            element: document.querySelector('.anno-2'),
        },

        {
            position: new THREE.Vector3(-0.1, 2.3, -0.4),
            element: document.querySelector('.anno-3'),
        },

        {
            position: new THREE.Vector3(0.38, 1.38, 0.3),
            element: document.querySelector('.anno-4'),
        },

        {
            position: new THREE.Vector3(-0.1, 1.45, -0.9),
            element: document.querySelector('.anno-5'),
        },

        {
            position: new THREE.Vector3(0.45, 1, 0.8),
            element: document.querySelector('.anno-6'),
        },
    ]

    const clock = new THREE.Clock();
    let oldtime = 0;

    function animate() {

        const elapse = clock.getElapsedTime();
        const deltatime = elapse - oldtime;
        oldtime = deltatime;
        controls.update();

        for (const annotation of annotations) {

            const screenposition = annotation.position.clone();
            screenposition.project(camera);
            raycaster.setFromCamera(screenposition, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);

            if (intersects.length === 0) { }

            else {
                const intersectiondistance = intersects[0].distance;
                const point1distance = annotations[0].position.distanceTo(camera.position);
                const point2distance = annotations[1].position.distanceTo(camera.position);
                const point3distance = annotations[2].position.distanceTo(camera.position);
                const point4distance = annotations[3].position.distanceTo(camera.position);
                const point5distance = annotations[4].position.distanceTo(camera.position);
                const point6distance = annotations[5].position.distanceTo(camera.position);
            }
            const translateX = screenposition.x * width * 0.5;
            const translateY = - screenposition.y * height * 0.5;

            annotation.element.style.transform = "translate" + "(" + translateX + "px" + "," + translateY + "px" + ")";
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();
}
init();