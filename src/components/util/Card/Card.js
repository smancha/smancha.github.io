import ReactMarkdown from "react-markdown";
import './Card.css'

function Card(props) {
	return (
		<div className='card card-dark dark'>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				{props.subtitle && <p className='card-subtitle mb-2 text-muted'>{props.subtitle}</p>}
				<div className="card-text">
					<ReactMarkdown>{props.text}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}

export default Card
