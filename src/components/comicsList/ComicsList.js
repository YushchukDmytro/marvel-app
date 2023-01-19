import './comicsList.scss';

import xmen from '../../resources/img/x-men.png';
import uw from '../../resources/img/UW.png';



const ComicsList = () => {
	return (
		<div className="comics__list">
			<ul className="comics__grid">
				<li className="comics__item">
					<img src={xmen} alt="xmen" className="comics__item-img" />
					<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
					<div className="comics__item-price">9.99$</div>
				</li>
				<li className="comics__item">
					<img src={uw} alt="uw" className="comics__item-img" />
					<div className="comics__item-name">X-Men: Days of Future Past</div>
					<div className="comics__item-price">Not Available</div>
				</li>
				<li className="comics__item">
					<img src={xmen} alt="xmen" className="comics__item-img" />
					<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
					<div className="comics__item-price">9.99$</div>
				</li>
				<li className="comics__item">
					<img src={uw} alt="uw" className="comics__item-img" />
					<div className="comics__item-name">X-Men: Days of Future Past</div>
					<div className="comics__item-price">Not Available</div>
				</li>
				<li className="comics__item">
					<img src={xmen} alt="xmen" className="comics__item-img" />
					<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
					<div className="comics__item-price">9.99$</div>
				</li>
				<li className="comics__item">
					<img src={uw} alt="uw" className="comics__item-img" />
					<div className="comics__item-name">X-Men: Days of Future Past</div>
					<div className="comics__item-price">Not Available</div>
				</li>
				<li className="comics__item">
					<img src={xmen} alt="xmen" className="comics__item-img" />
					<div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
					<div className="comics__item-price">9.99$</div>
				</li>
				<li className="comics__item">
					<img src={uw} alt="uw" className="comics__item-img" />
					<div className="comics__item-name">X-Men: Days of Future Past</div>
					<div className="comics__item-price">Not Available</div>
				</li>
			</ul>
			<button className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList;