import * as THREE from 'https://cdn.skypack.dev/three@0.136'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/loaders/RGBELoader.js';

//Scene

const scene = new THREE.Scene()

//sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 25

scene.add(camera)

//hdr texture

const rgb = new RGBELoader()

rgb.load('./ASSETS/stdio.hdr', (texture) => { texture.mapping = THREE.EquirectangularReflectionMapping, scene.environment = texture; })

//texture

let texture = new THREE.TextureLoader().load('./ASSETS/globe.png')
texture.flipY = true

let alphatexture = new THREE.TextureLoader().load('./ASSETS/globe-alpha2.png')
alphatexture.flipY = true
alphatexture.anisotropy = 16

//objects

let material = new THREE.MeshPhysicalMaterial({
    map: texture,
    alphaMap: alphatexture,
    transparent: true,
    side: THREE.DoubleSide,
})

const sphere = new THREE.Mesh(new THREE.SphereGeometry(14, 80, 50), material)
sphere.position.y = -12
scene.add(sphere)

var customMaterial = new THREE.ShaderMaterial(
    {
        uniforms: {},
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
    });

var ballGeometry = new THREE.SphereGeometry(19, 80, 50);
var ball = new THREE.Mesh(ballGeometry, customMaterial);
ball.position.y = -15.5
scene.add(ball);

/*Markers*/

/* You can add multiple markers as you want by just copy the code 
   and incriment each marker by one. Like the line 35 to 38.*/

var marker1 = makeTextSprite(" North America ",
    { fontsize: 18, textColor: { r: 0, g: 0, b: 0, a: 1.0 } });
marker1.position.set(0, 0, 13);
scene.add(marker1);

var marker2 = makeTextSprite(" Africa ",
    { fontsize: 18, textColor: { r: 0, g: 0, b: 0, a: 1.0 } });

marker2.position.set(17.907266860108976, -6.807327136293614, -2.6834078863085105)
scene.add(marker2);
var marker3 = makeTextSprite(" Asia ",
    { fontsize: 18, textColor: { r: 0, g: 0, b: 0, a: 1.0 } });

marker3.position.set(6.259984749135476, -3.338638775376762, -14.991505927540887)
scene.add(marker3);

var marker4 = makeTextSprite(" South America ",
    { fontsize: 18, textColor: { r: 0, g: 0, b: 0, a: 1.0 } });
marker4.position.set(10, -13, 18);
scene.add(marker4);

// Making markers visible.

function makeTextSprite(message, parameters) {
    if (parameters === undefined) parameters = {};
    var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
    var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
    var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : { r: 255, g: 255, b: 255, a: 1.0 };
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : { r: 255, g: 255, b: 255, a: 1.0 };
    var textColor = parameters.hasOwnProperty("textColor") ? parameters["textColor"] : { r: 255, g: 255, b: 255, a: 1.0 };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;
    var metrics = context.measureText(message);
    var textWidth = metrics.width;

    context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
    context.lineWidth = borderThickness;

    roundRect(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);

    context.fillStyle = "rgba(" + textColor.r + ", " + textColor.g + ", " + textColor.b + ", 1.0)";
    context.fillText(message, borderThickness, fontsize + borderThickness);

    var texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({ map: texture, opacity: 1, depthTest: false });
    spriteMaterial.center = [0, 0];
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
    console.log(sprite.scale)
    return sprite;
}

// function for drawing rounded rectangles

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

//canvas

const canvas = document.querySelector('.webgl')

//controls

const controls = new OrbitControls(camera, canvas)
controls.autoRotate = true; // Enable automatic rotation
controls.autoRotateSpeed = 1; // Set the rotation speed
controls.enabled = false
controls.enableDamping = true

//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio * 2);

function updateOpacity() {

    /* Get the distance between the camera and the markers.In case you make more 
       markers copy line 34 and incriment the distance variable by one and change 
       marker variable you add to get it's distance.*/

    const distance1 = camera.position.distanceTo(marker1.position)
    const distance2 = camera.position.distanceTo(marker2.position);
    const distance3 = camera.position.distanceTo(marker3.position);
    const distance4 = camera.position.distanceTo(marker4.position);

    // Update the opacity based on the distance.

    var value1 = 1 - (distance1 / 40); // You can tweek the values to change opacity 
    var value2 = 1 - (distance2 / 40); // You can tweek the values to change opacity
    var value3 = 1 - (distance3 / 40); // You can tweek the values to change opacity
    var value4 = 1 - (distance4 / 40); // You can tweek the values to change opacity

    // Update the opacity of markers

    marker1.material.opacity = value1
    marker2.material.opacity = value2
    marker3.material.opacity = value3
    marker4.material.opacity = value4
}

//animation

const move = () => {
    updateOpacity()
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(move)
}
move()