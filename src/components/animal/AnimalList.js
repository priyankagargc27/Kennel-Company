import React, { Component } from 'react'
import './Animal.css'

//import OwnerList from "./owner/OwnerList"
import dog from "./DogIcon.png"
export default class AnimalList  extends Component {
    render() {


        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} alt="dog" className="icon--dog" />
                                {animal.name}
                                <a href="button"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
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
//         return (
//             <div className="animal">
//                 <h3>Animal List</h3>
//                 {
//                 this.props.animals.map(animal =>
//                     <div id={'animal--${animal.id}'} key={animal.id}>
//                        <h4> {animal.name}</h4>

//                      </div>
//         )
//     }
//     </div>
//         )
//     }

// }
//     // <OwnerList />
    // <p>{this.props.owners.name}</p>