/**
 * Three.js
 * https://threejs.org/
 */
// import * as THREE from "three";

// 初期コード
const W_WIDTH  = window.innerWidth; // ブラウザの横サイズ
const W_HEIGHT = window.innerHeight;// ブラウザの縦サイズ
const W_ASPECT = window.innerWidth / window.innerHeight;// アスペクト比
const W_RATIO  = window.devicePixelRatio;// ピクセル比
let camera, scene, renderer, cube;// カメラ、シーン、レンダラー、立方体

window.onload = ()=>{
	// ここに初期化コードを記述します
}

function animate(){
	// ここに描画処理を記述します
}

// カメラの作成
camera = new THREE.PerspectiveCamera(50, W_ASPECT, 1, 1000);
camera.position.set(0, 0, 600);


// シーンの作成
scene = new THREE.Scene();


// ライトの作成
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5,3,5);// 光の向き
scene.add(dirLight);
let ambLight = new THREE.AmbientLight(0x333333);
scene.add(ambLight);


// レンダラーの作成
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(W_RATIO);// ピクセル比
renderer.setSize(W_WIDTH, W_HEIGHT);


// HTMLに配置する
let div = document.getElementById("three");
div.appendChild(renderer.domElement);


// 立方体の配置
let geometry = new THREE.BoxGeometry(200, 200, 200);// 立方体
let material = new THREE.MeshLambertMaterial({color: 0x00ddff});// 影が表示される
cube = new THREE.Mesh(geometry, material);// それらをまとめて3Dオブジェクトにします
scene.add(cube);


// アニメーションの開始
function animate(){
	cube.rotation.x += 0.002;// 立方体を回転
	cube.rotation.y += 0.002;
	cube.rotation.z += 0.002;
	renderer.render(scene, camera);// レンダリング
	requestAnimationFrame(animate);// 更新
}