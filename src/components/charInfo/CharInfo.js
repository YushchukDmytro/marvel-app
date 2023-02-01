import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

// import thor from '../../resources/img/thor.jpeg'

class CharInfo extends Component {

	state = {
		char: null,
		loading: false,
		error: false,
	}

	marvelService = new MarvelService();

	componentDidMount(){
		this.updateChar();
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.charId !== prevProps.charId){
			this.updateChar();
		}
	}

	updateChar(){
		const {charId} = this.props;
		if(!charId){
			return;
		}

		this.onCharLoading();
		this.marvelService
			.getCharacter(charId)
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	onCharLoaded = (char) => {
		this.setState({
			char, 
			loading: false
		});
	}



	onCharLoading = () =>{
		this.setState({
			loading: true
		});
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		})
	}


	render(){
		const{char, loading, error} = this.state;

		const skelet = loading || error || char ? null : <Skeleton/>;
		const errorMessage = error ? <ErrorMesage/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = !(spinner || errorMessage || !char) ? <View char = {char}/> : null;

		return (
			<div className="char__info">
				{skelet}
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const View = ({char}) => {
	const{name, thumbnail, descr, homepage, wiki, comics} = char;

	let imgStyle = {'objectFit': 'cover'};
	if(thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
		imgStyle = {'objectFit': 'contain'}
	}


	return(
		<>
			<div className="char__basic">
				<img src={thumbnail} alt={name} style={imgStyle}/>
				<div>
					<div className="char__name">{name}</div>
					<div className="char__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
					</div>
				</div>
			</div>
			<p className="char__descr">
				{descr}
			</p>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comics.length > 0 ? null : "There is not comics on this char"}
				{
					comics.map((item, i) => {
						return(
							<li className="char__comics-item"
								key={i}>
								{item.name}
							</li>
						)
					})
				}
			</ul>
		</>
	)
}

export default CharInfo;