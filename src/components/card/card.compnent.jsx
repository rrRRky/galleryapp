// import { Component } from "react";
import './card.styles.css';

const Card = ({Employee}) => {
    const {name,city,age,id} = Employee;
    return(
        <div className="card-container" key={id}>
            <img alt={`Employee ${name}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`} />  
            <h2>{name}</h2>
            <h5>{city}</h5>
            <p>{age}</p>
            {/* <p>{city} ,{zipcode}</p> */}
        </div>
    );
};


// class Card extends Component {
//     render(){
//         const {name, email, address,id} = this.props.Employee;
//         const {street, suite,city,zipcode} = address
//         return(
//             <div className="card-container" key={id}>
//                 <img alt={`Employee ${name}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`} />  
//                 <h2>{name}</h2>
//                 <h5>{email}</h5>
//                 <p>{street} {suite}</p>
//                 <p>{city} ,{zipcode}</p>
//             </div>
//         )
//     }
// }
export default Card;