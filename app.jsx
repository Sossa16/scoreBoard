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


/*Componente sin estado*/

var Counter = React.createClass ({
	propTypes : {
		initialScore: React.PropTypes.number.isRequired 
	},

	incrementScore : function(){
		this.setState({
			score: (this.state.score + 1)
		})
	},

	decrementScore : function(){
		this.setState({
			score: (this.state.score - 1)
		})
	},

	getInitialState: function (){
		return{ score: this.props.initialScore} /*actualizando los datos*/
	},

	render: function (){
	return(
		<div className = "counter">
			<button className = "counter-action decrement" onClick = {this.decrementScore}>-</button>
			<div className = "counter-score">
				{this.state.score} {/*Refencia en componente de clase*/}
			</div>
			<button className = "counter-action increment" onClick = {this.incrementScore}>+</button>
		</div>
		);
	}
});

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
				<Counter initialScore = {props.score}/>
			</div>	
		</div>
		);
};

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