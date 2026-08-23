import React, { Component } from 'react'

function parseContacts(text) {
    const contacts = {}
    text.split('\n').forEach((line) => {
        const separatorIndex = line.indexOf(':')
        if (separatorIndex === -1) return
        const key = line.slice(0, separatorIndex).trim().toLowerCase()
        const value = line.slice(separatorIndex + 1).trim()
        if (key) contacts[key] = value
    })
    return contacts
}

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
        const response = await fetch(`${process.env.PUBLIC_URL}/content/contacts.txt`)
        const text = await response.text()
        this.setState(parseContacts(text))
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
