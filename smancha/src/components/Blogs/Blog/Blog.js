import React, { Component } from 'react'
import { ref, getDownloadURL } from "firebase/storage";
import { collection, doc, addDoc, getDoc, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { db } from '../../util/Firebase';
import './Blog.css'
import Card from '../../util/Card/Card';


function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Blog extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: "",
			blog: {},
			comments: []
		}

		this.getBlog = this.getBlog.bind(this)
	}

	componentDidMount() {
		let { id } = this.props.params;
		this.fetchData(id);
		this.getBlog(id)
		this.getComments(id)
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

	render() {
		return (
			<div className='main'>
				<Card title={this.state.blog.title} text={this.state.blog.article} />
			</div>
		)
	}
}

export default withParams(Blog);
