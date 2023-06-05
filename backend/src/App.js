// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// const API_URL = 'http://localhost:3000';

function App() {
  const [returnedData, setReturnData] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if(name === 'EmployeeID' || name === 'Age'){
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const fetchData = async (url) => {
    try {
      console.log(employee);
      const newData = await fetch('/getemp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: employee.Firstname
        })
      })
      .then(res => res.json());
      console.log('   FILE: App.js');
      console.log(newData);
      setReturnData(newData.recordset[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const createEmployee = async (url) => {
    try {
      const newData = await fetch('/createemp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...employee
        })
      })
      .then(res => res.json());
      console.log(newData);
      setReturnData(newData.recordset[0]);
    } catch (error) {
      console.log(error);
    }
  }
  
  return(
    <div className='App'>
      <input
        name='EmployeeID'
        placeholder='EmployeeID'
        type='number'
        onChange={setInput}>

      </input>

      <input
        name='Firstname'
        placeholder='Firstname'
        onChange={setInput}>

      </input>
      
      <input
        name='Lastname'
        placeholder='Lastname'
        onChange={setInput}>

      </input>
      <input
        name='Age'
        placeholder='Age'
        type='number'
        onChange={setInput}>

      </input>
      <input
        name='Gender'
        placeholder='Gender'
        onChange={setInput}>

      </input>
      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => createEmployee()}>Create</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>Firstname: {returnedData.Firstname}</p>
      <p>Lastname: {returnedData.Lastname}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>
    </div>
  )
}

export default App;
