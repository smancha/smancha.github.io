import React, { Component } from 'react'
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { db } from '../../util/Firebase';
import Card from '../../util/Card/Card';
import './Blog.css'


function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Blog extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: "",
			blog: {},
			comments: [],
			newComment: "",
			newCommentFirstName: "",
			newCommentLastName: "",
			isNewCommentAnonymous: false,
			commentText: "comments",
			isSubmitDisabled: true
		}

		this.getBlog = this.getBlog.bind(this)
		this.handleOnTextChange = this.handleOnTextChange.bind(this)
		this.handleOnCheckBoxChange = this.handleOnCheckBoxChange.bind(this)
		this.checkCanSubmit = this.checkCanSubmit.bind(this)
	}

	componentDidMount() {
		let { id } = this.props.params;
		this.fetchData(id);
		this.getBlog(id)
		this.getComments(id)
		if (this.state.comments.length <= 1) {
			this.setState({ commentText: "comment" })
		}
	}

	fetchData = id => {
		this.setState({ id: id })
	};

	async getBlog(id) {
		await getDoc(doc(db, 'blogs', id))
			.then((querySnapshot) => {
				const data = querySnapshot.data()
				this.setState({ blog: data })
			})
	}

	async getComments(id) {
		await getDocs(collection(db, 'comments'), where("blog-id", "==", id))
			.then((querySnapshot) => {
				const comments = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				this.setState({ comments: comments })
			})
	}

	handleOnTextChange(e) {
		const { name, value } = e.target
		this.setState({ [name]: value }, () => {
			if (this.checkCanSubmit()) {
				this.setState({ isSubmitDisabled: false });
			} else {
				this.setState({ isSubmitDisabled: true });
			}
		});
	}

	handleOnCheckBoxChange() {
		this.setState({ isNewCommentAnonymous: !this.state.isNewCommentAnonymous }, () => {
			if (this.checkCanSubmit()) {
				this.setState({ isSubmitDisabled: false });
			} else {
				this.setState({ isSubmitDisabled: true });
			}
		});
	}

	checkCanSubmit() {
		var haveName = false
		if (this.state.isNewCommentAnonymous) {
			haveName = true
		} else if (this.state.newCommentFirstName.length > 0 && this.state.newCommentLastName.length > 0) {
			haveName = true
		}
		return this.state.newComment.length > 0 && haveName
	}

	render() {
		return (
			<div className='main content blog'>
				<Link to={"/blogs"}>
					<FontAwesomeIcon icon={faChevronLeft} className='back-icon' />
				</Link>
				<Card title={this.state.blog.title} text={this.state.blog.article} />
				<div className='comment-section'>
					<div className='dark'>
						<p className="h5">{this.state.comments.length} {this.state.commentText}</p>
						<div>
							<textarea
								className="form-comment form-control"
								placeholder="Leave a comment here"
								id="floatingTextarea"
								name="newComment"
								value={this.state.newComment}
								onChange={(e) => this.handleOnTextChange(e)} />
							<div className="form-name row">
								<div className="col">
									<input
										type="text"
										class="form-control"
										placeholder="First name"
										aria-label="First name"
										name="newCommentFirstName"
										value={this.state.newCommentFirstName}
										onChange={(e) => this.handleOnTextChange(e)} />
								</div>
								<div className="col">
									<input
										type="text"
										class="form-control"
										placeholder="Last name"
										aria-label="Last name"
										name="newCommentLastName"
										value={this.state.newCommentLastName}
										onChange={(e) => this.handleOnTextChange(e)} />
								</div>
								<div className='col'>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" id="flexCheckDefault" value={this.state.isNewCommentAnonymous} onChange={this.handleOnCheckBoxChange} />
										<label className="form-check-label" for="flexCheckDefault">
											Anonymous
										</label>
									</div>
								</div>
								<div className='col-auto form-submit'>
									<button type="button" className="btn btn-outline-light" disabled={this.state.isSubmitDisabled}>Submit</button>
								</div>
							</div>
						</div>
						<div className='comments'>
							{this.state.comments.length > 0 &&
								this.state.comments.map((comment) => {
									const capitalizedFirstName = comment.firstname.charAt(0).toUpperCase() + comment.firstname.slice(1);
									const capitalizedInitialLastName = comment.lastname.charAt(0).toUpperCase();

									const formattedName = `${capitalizedFirstName} ${capitalizedInitialLastName}`;

									return (<Card title={formattedName}
										subtitle={comment.creation_date.toDate().toDateString()}
										text={comment.comment}
									/>)
								})
							}
						</div>
					</div >
				</div>
			</div>
		)
	}
}

export default withParams(Blog);
