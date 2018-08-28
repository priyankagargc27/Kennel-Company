import React, { Component } from 'react'
import './location.css'
import place from "./location-512.png"
import {Link} from 'react-router-dom'


export default class LocationList  extends Component {

    render() {
//         return (
//             <div className="location">
//             <h3>Location Name</h3>
//             {
//             this.props.locations.map(location =>
//                     <div  key={location.id}>
//                        <h4> {location.name}</h4>
//                         <section>{location.address}</section>
//                     </div>
//         )
//             }
//     </div>
//         )
// }
// }
return (
    <section className="location">
    {
        this.props.locations.map(location =>
            <div key={location.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={place} alt="location" className="icon--location" />
                        {location.name}
                        <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>

                        <a href="#"
                            onClick={() => this.props.deleteLocation(location.id)}
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