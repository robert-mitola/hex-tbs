import React, { Component } from "react";
import THREELib from "three-js";

class Scene extends Component {
	constructor(props){
		super(props);
		
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
		// this.state = props;
	}
    
    componentDidMount(){
        // camera constants
        const FOV = 75;
        const NEAR = 0.1;
        const FAR = 1000;
        const CAM_Z_POS = 4;
        // renderer constants
        const ANTIALIAS = true;
        const CLEAR = "#000000";
        
        const THREE = THREELib();
        
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        const aspect = width / height;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(FOV, aspect, NEAR, FAR);
        const renderer = new THREE.WebGLRenderer({ antialias: ANTIALIAS });
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
        const cube = new THREE.Mesh(geometry, material);
        
        camera.position.z = CAM_Z_POS;
        scene.add(cube);
        renderer.setClearColor(CLEAR);
        renderer.setSize(width, height);
        
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material = material;
        this.cube = cube;
        
        this.mount.appendChild(this.renderer.domElement);
        this.start();
    }
    
    componentWillUnmount(){
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }
	
    start(){
        if(!this.frameId){
            this.frameId = requestAnimationFrame(this.animate);
        }
    }
    
    stop(){
        cancelAnimationFrame(this.frameId);
    }
    
    animate(){
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }
    
    renderScene(){
        this.renderer.render(this.scene, this.camera);
    }
    
	render(){
		return (
			<div 
                style = {{ width: "400px", height: "400px" }}
                ref = {(mount) => { this.mount = mount; }}
            />
		);
	}
}

export default Scene;