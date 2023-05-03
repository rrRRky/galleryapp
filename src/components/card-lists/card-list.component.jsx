import { Component } from "react";

import Card from '../card/card.compnent';
import './card-list.styles.css'
class CardList extends Component {
    render(){
        const { Employees } = this.props
        const { address } = this.props
        return (
        <div className="card-list">
            {Employees.map((Employee) => {
                return <Card Employee = {Employee} address = {address}/>;
                })}
        </div>
        )
    }
}

export default CardList;