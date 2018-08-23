import React, { Component } from 'react'


export default class AnimalList  extends Component {
    render() {
        return (
            <div className="animal">
                <h1>Animal List</h1>
                {
                this.props.animals.map(animal =>
                    <div id={'animal--${animal.id}'} key={animal.id}>
                       <h4> {animal.name}</h4>
                    </div>
        )
    }
    </div>
        )
}

    }