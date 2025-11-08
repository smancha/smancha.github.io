import DOMPurify from "dompurify";
import './Card.css'

function Card(props) {
	const safeText = DOMPurify.sanitize(props.text)

	return (
		<div className='card card-dark dark'>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				{props.subtitle && <p className='card-subtitle mb-2 text-muted'>{props.subtitle}</p>}
				<p className="card-text" dangerouslySetInnerHTML={{ __html: safeText }} />
			</div>
		</div>
	);
}

export default Card
