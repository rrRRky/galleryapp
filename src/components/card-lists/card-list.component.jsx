import { Component } from "react";

class CardList extends Component {
    render(){
        console.log(this.props.Employees);
        console.log('render from CardList');
        const { Employees } = this.props
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