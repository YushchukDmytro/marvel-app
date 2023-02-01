import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';

import './charList.scss';

// import abyss from '../../resources/img/abyss.jpg'


class CharList extends Component {

	state = {
		charList: [],
		loading: true,
		error: false
	}

	marvelService = new MarvelService();

	componentDidMount(){
		this.marvelService
			.getAllCharacters()
			.then(this.onCharListLoaded)
			.catch(this.onError)
	}

	onCharListLoaded = (charList) =>{
		this.setState({
			charList,
			loading: false
		})
	}

	onError = () =>{
		this.setState({
			loading: false,
			error: true
		})
	}

	renderItem(arr){

		const items = arr.map(item =>{
			let imageStyle = {'objectFit': 'cover'};
			if(item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
				imageStyle = {'objectFit': 'contain'}
			}

			return(
				<li className="char__item"
					key={item.id}
					onClick={() => this.props.onSelectedChar(item.id)}>
					<img src={item.thumbnail} alt={item.name} style ={imageStyle}/>
					<div className="char__name">{item.name}</div>
				</li>
			)
		})

		return(
			<ul className="char__grid">
				{items}
			</ul>
		)
	}

	render(){
		const{charList, loading, error}= this.state;

		const listItems = this.renderItem(charList)

		const spinner = loading ? <Spinner/> : null;
		const errorMessage = error ? <ErrorMesage/> : null;
		const items = !(spinner || errorMessage) ? listItems : null;

		return (
			<div className="char__list">
				{spinner}
				{errorMessage}
				{items}
				<button className="button button__main button__long">
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

export default CharList;