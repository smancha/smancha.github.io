import './Card.css'

function Card(props) {
	return (
		<div className='card card-dark dark'>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				{props.subtitle && <p className='card-subtitle mb-2 text-muted'>{props.subtitle}</p>}
				<p className="card-text">{props.text}</p>
			</div>
		</div>
	);
}

export default Card
