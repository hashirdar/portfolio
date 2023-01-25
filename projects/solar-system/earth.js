import * as THREE from 'https://cdn.skypack.dev/three@0.136'
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/GLTFLoader.js'

//scene

const scene = new THREE.Scene()

//size

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

//camera

const camera = new THREE.PerspectiveCamera(65, size.width / size.height, 1, 3800)
camera.position.set(-260, 101.39, 416)
camera.rotation.set(0, -0.56, 0)
scene.add(camera)

//canvas

const canvas = document.querySelector('.webgl')

//light

const light = new THREE.DirectionalLight(0x3388FF, 15);
light.position.set(-4.7, 6, 1)
scene.add(light);

//model
let model = 0;

let earth;
const loader = new GLTFLoader()
loader.load(
    './ASSETS/MODELS/earth.glb',
    (gltf) => {
        earth = gltf.scene;
        earth.scale.set(1,1,1);
        earth.position.set(-176.33906187483, 2.0253736833543522e-14, 279.8435596840632)
        scene.add(earth)
        model++
    }
)
let mercury;
const loader1 = new GLTFLoader()
loader1.load(
    './ASSETS/MODELS/mercury.glb',
    (gltf) => {
        mercury = gltf.scene;
        mercury.scale.set(0.8, 0.8, 0.8);
        mercury.position.set(1734.97, 80, -3000)
        // mercury.position.set(-280, 0, -150)
        scene.add(mercury)
        model++
    }
)

let jupiter;
const loader2 = new GLTFLoader()
loader2.load(
    './ASSETS/MODELS/jupiter.glb',
    (gltf) => {
        jupiter = gltf.scene;
        jupiter.scale.set(1.2,1.2,1.2);
        jupiter.position.set(1734.97, 80, -3000)
        // jupiter.position.set(290.64251966882324, 2.0970767684172966e-14, 181.15886770916433)
        scene.add(jupiter)
        model++
    }
)

let uranus;
const loader3 = new GLTFLoader()
loader3.load(
    './ASSETS/MODELS/uranus.glb',
    (gltf) => {
        uranus = gltf.scene;
        uranus.scale.set(1,1,1);
        uranus.position.set(1734.97, 80, -3000)
        // uranus.position.set(159.62891363424632,1.9241049991866458e-14,-270.66441216779685)
        scene.add(uranus)
        model++
    }
)

let mars;
const loader4 = new GLTFLoader()
loader4.load(
    './ASSETS/MODELS/mars.glb',
    (gltf) => {
        mars = gltf.scene;
        mars.scale.set(1.5,1.5,1.5);
        mars.position.set(357.67697560529547, 80, 221.1165034816064)
        // mars.position.set(78.46440881248945, 2.2441813665976374e-14, 358.0049087824055)
        scene.add(mars)
        model++
    }
)


let saturn;
const loader5 = new GLTFLoader()
loader5.load(
    './ASSETS/MODELS/saturn.glb',
    (gltf) => {
        saturn = gltf.scene;
        saturn.scale.set(48,48,48);
        saturn.position.set(1734.97, 80, -3000)
        // saturn.position.set(333.3806450782728, 2.1319722982677394e-14, -100.42368385461722);
        scene.add(saturn)
        model++
    }
)

let venus;
const loader6 = new GLTFLoader()
loader6.load(
    './ASSETS/MODELS/venus.glb',
    (gltf) => {
        venus = gltf.scene;
        venus.scale.set(0.8,0.8,0.8);
        venus.position.set(-348.4108236994611, 80, -195.4347858944525)
        // venus.position.set(-322.0227683689151, 2.0253736833543563e-14, 75.55937593418506);
        scene.add(venus)
        model++
    }
)

let neptune;
const loader7 = new GLTFLoader()
loader7.load(
    './ASSETS/MODELS/neptune.glb',
    (gltf) => {
        neptune = gltf.scene;
        neptune.scale.set(1.2,1.2,1.2);
        neptune.position.set(1734.97, 80, -3000)
        // neptune.position.set(-86.72051185091338, 2.1319722982677265e-14, -337.20486890917147);
        scene.add(neptune)
        model++
    }
)

//GSAP Animations

let count = 0;
let obchi = 0;

const next = document.querySelector('#next')
const previous = document.querySelector('#previous');

next.addEventListener('click', () => {
    if (count == 7) {
        count = 0
    } else {
        count++;
    }
})

previous.addEventListener('click', () => {
    if (count == 0) {
        count = 7
    } else {
        count--
    }
})

let value = 'earth';

window.addEventListener("click", () => {
    if (obchi != count) {
        obchi = count;
        TweenMax.to(".planets", 4, { opacity: 0, display: "none" });
        TweenMax.to(".button", 0.7, { opacity: 0, display: "none" });
        if (count == 0) {
            TweenMax.to("#earth", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'earth'
            gsap.to(mercury.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(venus.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(earth.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mars.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(jupiter.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 1) {
            TweenMax.to("#mars", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'mars'
            gsap.to(venus.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(earth.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mars.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(jupiter.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(saturn.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 2) {
            TweenMax.to("#jupiter", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'jupiter'
            gsap.to(earth.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mars.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(jupiter.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(saturn.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(uranus.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 3) {
            TweenMax.to("#saturn", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'saturn'
            gsap.to(mars.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(jupiter.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(saturn.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(uranus.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                duration: 3,
            }); gsap.to(neptune.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 4) {
            TweenMax.to("#uranus", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'uranus'
            gsap.to(jupiter.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(saturn.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(uranus.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                duration: 3,
            }); gsap.to(neptune.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mercury.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 5) {
            TweenMax.to("#neptune", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'neptune'
            gsap.to(saturn.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(uranus.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                duration: 3,
            }); gsap.to(neptune.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mercury.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(venus.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 6) {
            TweenMax.to("#mercury", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'mercury'
            gsap.to(uranus.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                duration: 3,
            }); gsap.to(neptune.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mercury.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(venus.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(earth.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        } else if (count == 7) {
            TweenMax.to("#venus", 4, { opacity: 1, display: "block" });
            setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 3000);
            value = 'venus'
            gsap.to(neptune.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mercury.position, {
                x: -348.4108236994611,
                y: 80,
                z: -195.4347858944525,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(venus.position, {
                x: -176.33906187483,
                y: 2.0253736833543522e-14,
                z: 279.8435596840632,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(earth.position, {
                x: 357.67697560529547,
                y: 80,
                z: 221.1165034816064,
                ease: "power1.inOut",
                duration: 3,
            }); gsap.to(mars.position, {
                x: 1734.97,
                y: 80,
                z: -3000,
                ease: "power1.inOut",
                duration: 3,
            })
        }
    }
});

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    TweenMax.to(".arrow", 0.1, { opacity: 0, display: "none" });
    TweenMax.to(".button", 0.1, { opacity: 0, display: "none" });
    setTimeout(function () { TweenMax.to(".description", 3, { opacity: 1, display: "block" }); }, 1000);
    setTimeout(function () { TweenMax.to(".b-button", 3, { opacity: 1, display: "block" }); }, 2000);
    if (value == 'mercury') {
        document.getElementById("ds-font").innerHTML = "Mercury is the smallest planet in our solar system. It's a little bigger than Earth's Moon. It is the closest planet to the Sun, but it's actually not the hottest. Venus is hotter.";
        gsap.to(mercury.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'venus') {
        document.getElementById("ds-font").innerHTML = "Venus is the second planet from the Sun and Earth's closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system. Its thick atmosphere is full of the greenhouse gas carbon dioxide, and it has clouds of sulfuric acid.";
        gsap.to(venus.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'earth') {
        document.getElementById("ds-font").innerHTML = "Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.";
        gsap.to(earth.position, {
            x: -94,
            y: -640,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'mars') {
        document.getElementById("ds-font").innerHTML = "Mars is the fourth planet from the Sun - a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.";
        gsap.to(mars.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'jupiter') {
        document.getElementById("ds-font").innerHTML = "Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth. Jupiter also has rings, but they're too faint to see very well.";
        gsap.to(jupiter.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'saturn') {
        document.getElementById("ds-font").innerHTML = "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.";
        gsap.to(saturn.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'uranus') {
        document.getElementById("ds-font").innerHTML = "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.";
        gsap.to(uranus.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'neptune') {
        document.getElementById("ds-font").innerHTML = "Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus.";
        gsap.to(neptune.position, {
            x: -94,
            y: -650,
            z: 318,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: -620,
            ease: "power2.inOut",
            duration: 2,
        })
    }
})

const b_button = document.querySelector('.b-button');
b_button.addEventListener('click', () => {
    TweenMax.to(".b-button", 0.6, { opacity: 0, display: "none" });
    TweenMax.to(".description", 0.6, { opacity: 0, display: "none" });
    setTimeout(function () { TweenMax.to(".button", 3, { opacity: 1, display: "block" }); }, 2000);
    setTimeout(function () { TweenMax.to(".arrow", 3, { opacity: 1, display: "block" }); }, 2000);
    if (value == 'mercury') {
        gsap.to(mercury.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'venus') {
        gsap.to(venus.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'earth') {
        gsap.to(earth.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'mars') {
        gsap.to(mars.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'jupiter') {
        gsap.to(jupiter.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'saturn') {
        gsap.to(saturn.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'uranus') {
        gsap.to(uranus.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    } else if (value == 'neptune') {
        gsap.to(neptune.position, {
            x: -176.33906187483,
            y: 2.0253736833543522e-14,
            z: 279.8435596840632,
            ease: "power2.inOut",
            duration: 2,
        }); gsap.to(camera.position, {
            y: 101.39,
            ease: "power2.inOut",
            duration: 2,
        })
    }
})

//stars

const starcounts = 2000
const positions = new Float32Array(starcounts * 3)

for (let i = 0; i < starcounts; i++) {
    positions[i + 2] = (Math.random() - 0.5) * 4000
    positions[i + 4] = Math.random()
    positions[i + 8] = (Math.random() - 0.5) * 4000
}

const stargeometry = new THREE.BufferGeometry()
stargeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

const starmaterial = new THREE.PointsMaterial({
    color: "#FFFDFA",
    sizeAttenuation: true,
    size: 0.3
})

const stars = new THREE.Points(stargeometry, starmaterial)
scene.add(stars)

//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(window.devicePixelRatio / 1.3);
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;

//windo resizer

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

//clock7

const clock = new THREE.Clock()

//animation per frame

let checker = 0;

const tick = () => {
    if (model == 8 && checker == 0) {
        TweenMax.to("#earth", 2.5, { opacity: 1, display: "block" });
        setTimeout(function () { TweenMax.to("#preloader", 2.5, { opacity: 0, display: "none" }); }, 4000);
        checker = 1;
    }
    const elipsed = clock.getElapsedTime()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
    mercury.rotation.y = elipsed * 0.2
    venus.rotation.y = elipsed * 0.2
    earth.rotation.y = elipsed * 0.2
    mars.rotation.y = elipsed * 0.2
    jupiter.rotation.y = elipsed * 0.2
    saturn.rotation.y = elipsed * 0.2
    uranus.rotation.y = elipsed * 0.2
    neptune.rotation.y = elipsed * 0.2
}
tick()