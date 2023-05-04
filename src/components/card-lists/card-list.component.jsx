// import { Component } from "react";

import Card from '../card/card.compnent';
import './card-list.styles.css'
const CardList =({ Employees, address }) => (
    <div className="card-list">
        {Employees.map((Employee) => {
            return <Card Employee = {Employee} address = {address}/>;
            })}
    </div>
);

export default CardList;