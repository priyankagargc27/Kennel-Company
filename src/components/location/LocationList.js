import React, { Component } from 'react'

export default class LocationList  extends Component {

    render() {
        return (
            <div className="location">
            <h2>Location Name</h2>
            {
            this.props.locations.map(location =>
                    <div id={'location--${location.id}'} key={location.id}>
                       <h4> {location.name}</h4>
                        <section>{location.address}</section>
                    </div>
        )
            }
    </div>
        )
}
}