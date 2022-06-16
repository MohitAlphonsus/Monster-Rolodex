import './card.styles.css';

const Card = props => {
	console.log(props);
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
				alt={`monster ${props.monster.name}`}
			/>
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
};

// class Card extends Component {
// 	render() {
// 		const { id, name, email } = this.props.monster;

// 		return (
// 			<div className="card-container">
// 				<img
// 					src={`https://robohash.org/${id}?set=set2&size=180x180`}
// 					alt={`monster ${name}`}
// 				/>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		);
// 	}
// }

export default Card;
