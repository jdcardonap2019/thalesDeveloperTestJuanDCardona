import ListOfEmployees from './components/ListOfEmployees';
import Input from './components/Input';
import SearchButton from './components/SearchButton';
import { useState, useEffect } from 'react';
import EmployeeDataService from './services/EmployeeDataService.js'
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  const [param, setParam] = useState({id: 0})
  const [data, setData] = useState([]);
  const employeeService = new EmployeeDataService()
  const URLBase = "http://localhost:8000/employees"

  useEffect(() => {
    fetchData(0);
  }, []);

  const fetchData = async (id) => {
    try {
      const fetchedData = id === 0? await employeeService.fetchEmployeeData(URLBase) : 
      await employeeService.fetchEmployeeData(URLBase+"/"+id)
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="App">
      <Banner/>
      <div>
        <Input updateParamValue={(event) =>{
          setParam({ ...param, id: Number(event.target.value) })
        }}
        />
        <SearchButton buttonClicked={() =>{
          fetchData(param.id)
        }}/>
        <ListOfEmployees data={data}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
