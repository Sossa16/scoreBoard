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
				<Player name ={props.name}/>
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
	score: React.PropTypes.number.isRequired
};


//Asociando valores a las propiedades
Header.defaultProps = {
	title: "Score Board"
};

Player.defaultProps = {
	name: "Santiago Bedoya",
	score : 3
};


ReactDOM.render(<Application />, document.getElementById('container'));