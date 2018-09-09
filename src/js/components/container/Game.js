import React, { Component } from "react";
import Board from "./Board.js";
import GameGUI from "../presentation/GameGUI.js";

class Game extends Component {
	constructor(props){
		super(props);
		
		this.state = props;
	}
	
	render(){
		return (
			<div>
				<GameGUI />
				<Board />
			</div>
		);
	}
}

export default Game;