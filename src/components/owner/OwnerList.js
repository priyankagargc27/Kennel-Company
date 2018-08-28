import React, { Component } from 'react'
import './owner.css'
import Owner from "./about_icon.png"
import {Link} from 'react-router-dom'

export default class OwnerList  extends Component {
    render() {
        return (
            <section className="owner">
    {
        this.props.owners.map(owner =>
            <div key={owner.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={Owner} alt="owner" className="icon--owner" />
                        {owner.name}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                        <a href="#"
                            onClick={() => this.props.deleteOwner(owner.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
    </section>
        )
}

    }