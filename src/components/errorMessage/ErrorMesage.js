import errorGif from './avengers_404.gif'

import './errorMessage.scss';

const ErrorMesage = () => {
	return(
		<img className='error' src={errorGif} alt="Error" />
	)
}

export default ErrorMesage;