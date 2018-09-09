import React, { Component } from 'react';
import Canvas from "../presentation/Canvas.js";

class Board extends Component {
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

export default Board;