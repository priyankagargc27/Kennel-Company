import React, { Component } from "react"
import "./location.css"
import place from "./location-512.png"




export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={place} className="icon--location" />
                            {location.name}
                        </h4>
                        <h6 className="card-title">{location.address}</h6>
                       
                        
                        <a href="#"
                            onClick={() => this.props.deleteLocation(location.id)
                                            .then(() => this.props.history.push("/locations"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}