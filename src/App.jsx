import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => setMonsters(data));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchTerm);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchTerm]);

	const onSearchChange = event => {
		const searchString = event.target.value.toLocaleLowerCase();
		setSearchTerm(searchString);
	};

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
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchTerm: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(res => res.json())
// 			.then(data =>
// 				this.setState(() => {
// 					return { monsters: data };
// 				}),
// 			);
// 	}

// 	onSearchChange = event => {
// 		const searchTerm = event.target.value.toLowerCase();

// 		this.setState(() => {
// 			return { searchTerm };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchTerm } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter(monster =>
// 			monster.name.toLowerCase().includes(searchTerm),
// 		);

// 		return (
// 			<div className="app">
// 				<h1 className="app-title">Monster Rolodex</h1>
// 				<SearchBox
// 					className="monster-search-box"
// 					onChangeHandler={onSearchChange}
// 					placeholder="search monster"
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
