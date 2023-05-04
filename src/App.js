// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  
  const[searchFeild, setSearchField] = useState('a');   // [value, detValue]
  const [Employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(Employees);
  
  console.log('rendered');
  
  useEffect (()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => setEmployees(users));
  }, []);

  useEffect (()=> {
    const newFilteredEmployees = Employees.filter((Employee)=>{
      return Employee.name.toLocaleLowerCase().includes(searchFeild);
    });
  
      setFilteredEmployees(newFilteredEmployees);
    }, [Employees,searchFeild]);


  const onSearchChange =(event)=>{
    const searchFeildString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFeildString);
  };

  return(
    <div className="App">
        <h1 className='app-title'>DECO-WINDOW</h1>
        
         <SearchBox 
          className='employees-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search Employee'
        />
        <CardList 
          Employees = { filteredEmployees } 
        />

      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();    
//     this.state = {
//       Employees: [], 
//       searchFeild: ''     
//     };
//   }
//   componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) =>  response.json())
    // .then((users) => this.setState(() => {
    //   return{Employees: users}
    // },
    // () => {
    //   console.log(this.state);
    // }
    // ));
//   }   
//   onSearchChange = (event) => {
//     const searchFeild = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchFeild};
//     })
//   }
//   render(){
//       const { Employees, searchFeild} = this.state;
//       const { onSearchChange} =this;
//       const filetrEmployees = Employees.filter((Employee)=>{
//       return Employee.name.toLocaleLowerCase().includes(searchFeild);
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>DECO-WINDOW</h1>
//         <SearchBox 
//           className='employees-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search Employee'
//         />
//         <CardList 
//           Employees = { filetrEmployees } 
//         />
//       </div>
//     );
//   }
// }

export default App;
