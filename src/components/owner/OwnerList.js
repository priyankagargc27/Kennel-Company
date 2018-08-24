import React, { Component } from 'react'


export default class OwnerList  extends Component {
    render() {
        return (
            <div className="owner">
                <h3>Owner List</h3>
                {
                this.props.owners.map(owner =>
                    <div id={'owner--${owner.id}'} key={owner.id}>
                       <h5> {owner.name}</h5>
                    </div>
        )
    }
    </div>
        )
}

    }