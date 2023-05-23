const Input = ({updateParamValue}) =>
    (
    <div className="inputDiv">
        <div className="inputField input-group input-group-lg mb-3 mt-3">
            <span className="input-group-text" id="basic-addon1">#</span>
            <input type="number"
            className="form-control"
            placeholder="Id"
            aria-label="Id"
            aria-describedby="basic-addon1"
            onChange={updateParamValue}/>
         </div>
    </div>
)
export default Input