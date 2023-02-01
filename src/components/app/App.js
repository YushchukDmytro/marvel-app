import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png'

class App extends Component {

	state = {
		selectedChar: null
	}

	onSelectedChar = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render(){
		return (
			<div className='app'>
				<AppHeader/>
				<main>
					<RandomChar/>
					<div className="char__content">
						<CharList onSelectedChar = {this.onSelectedChar}/>
						<CharInfo charId={this.state.selectedChar}/>
					</div>
					<img src={decoration} alt="vision" className="bg-decoration" />
				</main>
			</div>
		);
	}
}

export default App;
