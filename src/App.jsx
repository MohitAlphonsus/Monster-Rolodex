import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchTerm: '',
		};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data =>
				this.setState(() => {
					return { monsters: data };
				}),
			);
	}

	render() {
		const filteredMonsters = this.state.monsters.filter(monster =>
			monster.name.toLowerCase().includes(this.state.searchTerm),
		);

		return (
			<div className="app">
				<input
					className="search-box"
					type="search"
					placeholder="search monster"
					onChange={event => {
						const searchTerm = event.target.value.toLowerCase();

						this.setState(() => {
							return { searchTerm };
						});
					}}
				/>
				{filteredMonsters.map(monster => (
					<div key={monster.id}>
						<h1>{monster.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default App;
