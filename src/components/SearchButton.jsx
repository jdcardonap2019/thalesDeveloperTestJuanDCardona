import PropTypes from 'prop-types'
const SearchButton = ({buttonClicked}) =>{
    return(
    <div className="div-button">
        <button onClick={buttonClicked} className="button-64"><span className="text">Search for an employee</span></button>
    </div>
)}
SearchButton.propTypes = {
    buttonClicked: PropTypes.func.isRequired
}
export default SearchButton