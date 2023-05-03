import { Component } from 'react';
import './App.css';
import CardList from './components/card-lists/card-list.component';

class App extends Component {

  constructor(){
    super(); 
      
    this.state = {
      Employees: [], 
      searchFeild: ''     
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => this.setState(() => {
      return{Employees: users}
    },
    () => {
      console.log(this.state);
    }
    ));
  }   

  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchFeild};
    })
  }

  render(){

const { Employees, searchFeild} = this.state;
const { onSearchChange} =this;

    const filetrEmployees = Employees.filter((Employee)=>{
      return Employee.username.toLocaleLowerCase().includes(searchFeild);
    });
  return (
    <div className="App">
      <input 
      className='search-box' 
      type='search' 
      placeholder='Search Employee' 
      onChange={onSearchChange} 
      />
      {/* {
        filetrEmployees.map((Employee) => {
          return( <div key={Employee.id}>
                    <h1>{Employee.username}</h1>
                  </div>);
        })
      } */}
      <CardList Employees = { filetrEmployees } anything = {['a', 'b']}/>
    </div>
  );
  }

}

export default App;
