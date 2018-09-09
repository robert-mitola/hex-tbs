import React, { Component } from 'react';
import Scene from "./Scene.js";

class Board extends Component {
	constructor(props){
		super(props);
		
		this.state = props;
	}
	
	render(){
		return (
			<Scene />
		);
	}
}

export default Board;