import Employee from './Employee';

const ListOfEmployees = ({data}) => {
  return (
    <div id="table-employees">
     <table className='table table-striped'>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Month Salary</th>
                <th scope="col">Anual Salary</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => <Employee key={item.id} id={item.id} name={item.employee_name} age={item.employee_age} anualSalary={item.employee_anual_salary} salary={item.employee_salary}/>)}
        </tbody>
    </table>
    </div>
  );
};

export default ListOfEmployees;