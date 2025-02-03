import React, { Component } from 'react'
import { doc, getDoc } from "firebase/firestore";

import { db } from '../util/Firebase';

class Contacts extends Component {

    constructor() {
        super()

        this.state = {
            email: "",
            linkedin: "",
            bluesky: "",
            location: ""
        }

        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        await getDoc(doc(db, "personal-information", "smancha"))
            .then((querySnapshot) => {
                const data = querySnapshot.data()
                this.setState(
                    {
                        email: data.email,
                        linkedin: data.linkedin,
                        bluesky: data.bluesky,
                        location: data.location.city + ", " + data.location.state
                    }
                )
            })
    }

    render() {
        return (
            <div className='contact-info text-left'>
                <div>
                    <i className="fa-solid fa-envelope icon"></i>
                    <b>Email: </b>
                    <span className="dark">{this.state.email}</span>
                </div>
                <div>
                    <a className='dark text-decoration-none' target='_blank' rel="noreferrer noopener" href={this.state.linkedin}><i className="fa-brands fa-linkedin icon"></i></a>
                    <b>LinkedIn: </b>
                    <a className='dark' target='_blank' rel="noreferrer noopener" href={this.state.linkedin}>{this.state.linkedin}</a>
                </div>
                <div>
                    <i className="fa-brands fa-bluesky icon"></i>
                    <b>Bluesky: </b>
                    <span className="dark">{this.state.bluesky}</span>
                </div>
                <div>
                    <i className="fa-solid fa-location-dot icon"></i>
                    <b>Location: </b>
                    <span className='dark'>{this.state.location} </span>
                </div>
            </div>

        )
    }
}

export default Contacts