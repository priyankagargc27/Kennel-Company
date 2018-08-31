import React, { Component } from 'react'
import './Animal.css'
import AnimalCard from "./AnimalCard"
import {Link} from 'react-router-dom'
//import OwnerList from "./owner/OwnerList"
import dog from "./DogIcon.png"
export default class AnimalList  extends Component {
    render() {


        return (


            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
            <section className="animals">
            


                   {
                     this.props.animals.map(animal =>
                              <AnimalCard key={animal.id} animal={animal} {...this.props} />
                               )
                               }



                {/* // this.props.animals.map(animal =>
                //     <div key={animal.id} className="card">
                //         <div className="card-body">
                //             <h5 className="card-title">
                //                 <img src={dog} alt="dog" className="icon--dog" />
                //                 {animal.name}
                //                 <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                //                 <a href="button"
                //                     onClick={() => this.props.deleteAnimal(animal.id)}
                //                     className="card-link">Delete</a>
                //             </h5>
                //         </div>
                //     </div> */}
                
            
            </section>
            </React.Fragment>
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