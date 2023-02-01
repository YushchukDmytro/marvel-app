class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=f7f66d138dce6b9d83cb3c67d4986d55';
	getResourse = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = async() => {
		const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
		return res.data.results.map(this._transformChar);
	}
	getCharacter = async(id) => {
		const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformChar(res.data.results[0]);
	}

	_transformChar = (char) => {

		// if(char.description.lengt > 230){
		// 	char.description = char.description.slice(0, 230) + '...';
		// } if(!char.description){
		// 	char.description = 'No description'
		// }


		return {
			name: char.name,
			descr: char.description ? char.description.length > 230 ? char.description.slice(0, 230) + '...' : char.description : 'No description',
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id:char.id,
			comics: char.comics.items.length < 10 ? char.comics.items : char.comics.items.slice(0, 10)
			// comics: char.comics.items
		}
	}
}

export default MarvelService;