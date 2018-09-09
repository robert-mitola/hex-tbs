import React, { Component } from "React";
import Canvas from "../presentation/Canvas.js";

class Scene extends Component {
	constructor(props){
		super(props);
		
		this.state = props;
	}
	
	render(){
		return (
			<Canvas />
		);
	}
}

export default Scene;