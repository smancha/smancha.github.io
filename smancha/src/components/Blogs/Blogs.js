import React, { Component } from 'react'

import { collection, getDocs } from 'firebase/firestore';
import Card from '../util/Card/Card'
import { db } from '../util/Firebase';
import './Blogs.css'
import { Link } from 'react-router-dom';

class Blogs extends Component {

	constructor() {
		super()

		this.state = {
			blogs: [],
			blogLinks: [{
				url: "",
				text: ""
			}]
		}

		this.getBlogs = this.getBlogs.bind(this)
	}

	componentDidMount() {
		this.getBlogs()
	}

	async getBlogs() {
		await getDocs(collection(db, 'blogs'))
			.then((querySnapshot) => {
				const blogs = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				const blogLinks = blogs.map((blog) => ({ url: blog.id, text: "Read More" }))

				this.setState({ blogs: blogs, blogLinks: blogLinks })
			})
	}

	render() {
		return (
			<div className='main'>
				{this.state.blogs.map((blog) => {
					return (
						<div>
							{/* {blog.image && <img id={blog.id} className='center' />} */}
							<Card title={blog.title} subtitle={"Last edit: " + blog.last_edited_date.toDate().toDateString()} text={blog.summary === "" ? blog.article.substr(0, 300) + "..." : blog.summary} />
							<Link to={"/blog/" + blog.id}>
								<button class="btn btn-sm btn-outline-info">Click to read more</button>
							</Link>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Blogs