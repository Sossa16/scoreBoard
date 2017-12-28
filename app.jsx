var PLAYERS = [
	{
		name: "Santiago",
		score: 3,
		id: 1 //key props
	},
	{
		name: "Bedoya",
		score: 32,
		id: 2
	}
]

function Header(props){
	return(
		<div className = "header">
				<h1>{props.title} </h1>
		</div>
		);
}

function Player(props){
	return(
		<div className = "player">
			<div className = "player-name">
				{props.name}
			</div>
			<div className = "player-score">
				<Counter score= {props.score} />
			</div>	
		</div>
		);
};

function Counter(props){
	return(
		<div className = "counter">
			<button className = "counter-action decrement">-</button>
			<div className = "counter-score">
				{props.score}
			</div>
			<button className = "counter-action increment">+</button>
		</div>
		);
}


function Application(props) {
	return(
		<div className = "scoreboard ">
			<Header title={props.title}/> {/*agregando un componente dentro de otro*/}
			<div className = "players">
			{props.players.map(function(player){
				return <Player name={player.name} score={player.score} key={player.id}/>
			})}
			</div>
		</div>
	);
}

//Configurando la propiedades
Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
};

Counter.propTypes = {
	score: React.PropTypes.number.isRequired
}
Application.propTypes ={
	players: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			score: React.PropTypes.number.isRequired,
			id: React.PropTypes.number.isRequired
		})).isRequired
}


//Asociando valores a las propiedades
Application.defaultProps = {
	title: "Score Board"
};


ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));