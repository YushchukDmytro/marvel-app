import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";

// import decoration from '../../resources/img/vision.png'

const App=() => {
	return (
		<div className='app'>
			<AppHeader/>
			<main>
				<RandomChar/>
				<div className="char__content">

				</div>
				{/* <img src={decoration} alt="vision" className="bg-decoration" /> */}
			</main>
		</div>
	);
}

export default App;
