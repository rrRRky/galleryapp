import { Component } from "react";
import './card.styles.css';
class Card extends Component {
    render(){
        const {name, email, address,id} = this.props.Employee;
        const {street, suite,city,zipcode} = address
        return(
            <div className="card-container" key={id}>
                <img alt={`Employee ${name}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`} />  
                <h2>{name}</h2>
                <h5>{email}</h5>
                <p>{street} {suite}</p>
                <p>{city} ,{zipcode}</p>
            </div>
        )
    }
}
export default Card;