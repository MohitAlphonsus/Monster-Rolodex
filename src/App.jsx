import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchTerm: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data =>
				this.setState(() => {
					return { monsters: data };
				}),
			);
	}

	onSearchChange = event => {
		const searchTerm = event.target.value.toLowerCase();

		this.setState(() => {
			return { searchTerm };
		});
	};

	render() {
		const { monsters, searchTerm } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchTerm),
		);

		return (
			<div className="app">
				<h1 className="app-title">Monster Rolodex</h1>
				<SearchBox
					className="monster-search-box"
					onChangeHandler={onSearchChange}
					placeholder="search monster"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
