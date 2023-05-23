import PropTypes from 'prop-types'

const Employee = ({id, name, age, salary, anualSalary}) => {
    const fixedSalary = (numberToFormat) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(numberToFormat);
    return(<tr>
        <th key={id}>{id}</th>
        <th>{name}</th>
        <th>{age}</th>
        <th>{fixedSalary(salary)} USD</th>
        <th>{fixedSalary(anualSalary)} USD</th>
    </tr> )
}
Employee.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    anualSalary: PropTypes.number.isRequired
}
Employee.defaultProps = {
    id: null,
    name: "",
    age: 0,
    salary: PropTypes.number.isRequired,
    anualSalary: PropTypes.number.isRequired
}
export default Employee