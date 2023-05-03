import { Component } from 'react';
import './App.css';
import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
      <SearchBox onChangeHandler={onSearchChange} placeholder='search Employee' ClassName='search-box' />
      <CardList Employees = { filetrEmployees } anything = {['a', 'b']}/>
    </div>
  );
  }

}

export default App;
