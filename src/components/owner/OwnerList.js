import React, { Component } from 'react'


export default class OwnerList  extends Component {
    render() {
        return (
            <div className="owner">
                <h1>Owner List</h1>
                {
                this.props.owners.map(owner =>
                    <div id={'owner--${owner.id}'} key={owner.id}>
                       <h4> {owner.name}</h4>
                    </div>
        )
    }
    </div>
        )
}

    }