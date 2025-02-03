import React, { Component } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../util/Firebase';

class Collaborators extends Component {

    constructor() {
        super()

        this.state = {
            collaborators: []
        }

        this.fetchCollaborators = this.fetchCollaborators.bind(this)
    }

    componentDidMount() {
        this.fetchCollaborators()
    }

    async fetchCollaborators() {
        await getDocs(collection(db, 'collaborators'))
            .then((querySnapshot) => {
                return Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        const docData = { ...doc.data(), id: doc.id }

                        return getDocs(collection(doc.ref, 'collaborator'))
                            .then((subQuerySnapshot) => {
                                docData.collaborators = subQuerySnapshot.docs.map((subDoc) => ({
                                    id: subDoc.id,
                                    ...subDoc.data(),
                                }))

                                return docData
                            })
                    })
                );
            })
            .then((data) => {
                this.setState({ collaborators: data });
            })
    }

    render() {
        const collaboratorsCards = this.state.collaborators.map(group => {
            return (
                <div className='card card-dark dark'>
                    <div className='card-body'>
                        <h5 className='card-title'>{group.title}</h5>
                        <ul>
                            {group.collaborators.map(c => {
                                return (
                                    <li>
                                        {c.link ? (
                                            <a className='dark' href={c.link} target='_blank' rel='noopener noreferrer'><b>{c.name}</b></a>
                                        ) : (
                                            <b>{c.name}</b>
                                        )}
                                        : {c.description}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        })

        return (
            <div className='main'>
                <div className='research-interests row justify-content-center '>
                    <div className='content d-flex flex-column justify-content-center col-lg-6'>
                        {collaboratorsCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collaborators