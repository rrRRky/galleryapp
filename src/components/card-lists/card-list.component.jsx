import { Component } from "react";

class CardList extends Component {
    render(){

        const { Employees } = this.props

        console.log(this.props)
        return (
        <div>
            {Employees.map((Employee) => (
                <h1 key={Employee.id}>{Employee.username}</h1>
            ))}
        </div>
        )
    }
}

export default CardList;