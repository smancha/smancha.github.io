import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import React, { Component } from 'react'

import { db } from '../util/Firebase';
import Card from '../util/Card/Card'
import './Projects.css'

class Teaching extends Component {

    constructor() {
        super()

        this.state = {
            projects: []
        }

        this.fetchProjects = this.fetchProjects.bind(this)
    }

    componentDidMount() {
        this.fetchProjects()
    }

    async fetchProjects() {
        await getDocs(query(collection(db, "teaching",), orderBy("display_order", "desc")))
            .then((querySnapshot) => {
                const data = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                this.setState({ projects: data })
            })

    }

    render() {
        const teachingCards = this.state.projects.map(p => {
            return (
                <Card
                    title={p.title}
                    text={p.description}>
                </Card>
            )
        })

        return (
            <div className='main'>
                <div className='teaching row justify-content-center '>
                    <div className='content d-flex flex-column justify-content-center col-lg-6'>
                        {teachingCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Teaching