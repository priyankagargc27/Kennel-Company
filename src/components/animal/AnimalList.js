import React, { Component } from 'react'
//import OwnerList from "./owner/OwnerList"


export default class AnimalList  extends Component {
    render() {
        return (
            <div className="animal">
                <h3>Animal List</h3>
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
    // <OwnerList />
    // <p>{this.props.owners.name}</p>