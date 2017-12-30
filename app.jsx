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

function Counter(props){
	return(
		<div className = "counter">
			<button className = "counter-action decrement">-</button>
			<div className = "counter-score">
				{props.score} {/*Refencia en componente de clase*/}
			</div>
			<button className = "counter-action increment">+</button>
		</div>
	);
}

Counter.PropTypes={
	Score: React.PropTypes.number.isRequired
}
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
				<Counter score = {props.score}/>
			</div>	
		</div>
		);
};

var Application = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
				name: React.PropTypes.string.isRequired,
				score: React.PropTypes.number.isRequired,
				id: React.PropTypes.number.isRequired
		})).isRequired
	},

//Asociando valores a las propiedades
	getDefaultProps: function(){
		return{
			title: "ScoreBoard"
		};
	},

	getInitialState: function() {
		return{ 
			players: this.props.initialPlayers
		};i
	},

	render: function(){
		return(
			<div className = "scoreboard ">
				<Header title={this.props.title}/> {/*agregando un componente dentro de otro*/}
				<div className = "players">
					{this.state.players.map(function(player){
						return <Player name={player.name} score={player.score} key={player.id}/>
					})}
				</div>
			</div>
		);
	}
});


//Configurando la propiedades
Header.propTypes = {
	title: React.PropTypes.string.isRequired
};

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
};


ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));