import React, { useState } from 'react'

const Form3 = () => {

    const [Form, setForm] = useState({
        inpFName: '',
        inpLName: '',
        inpEmail: '',
        inpPass: '',
        inpCnfPass: '',
        inpDob: '',
        inpCity: '',
        inpPinCode: '',
        selectState: '',

    })
    console.log(Form);
    
    const handleFormElement = (event) => {
        setForm(prev => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })
    }

    return (
        <div>
            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={Form.inpFName}
                onChange={handleFormElement}
            />
            <label id="errFName"
            >First Name is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={Form.inpLName}
                onChange={handleFormElement}
            />
            <label id="errLName"
            >Last Name is required</label>
            <br /><br />
            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={Form.inpEmail}
                onChange={handleFormElement}
            />
            <label id="errEmail"
            >Email is required</label>
            <label id="errEmailFormat"
            >Email is not valid</label>
            <br /><br />
            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={Form.inpPass}
                onChange={handleFormElement}
            />
            <label id="errPass"
            >Password is required</label>
            <br /><br />
            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={Form.inpCnfPass}
                onChange={handleFormElement}
            />
            <label id="errCnfPass"
            >Confirm Password is required</label>
            <label id="errMatch"
            >Password and Confirm Password not matching</label>
            <br /><br />
            <input
                type="date"
                id="inpDob"
                value={Form.inpDob}
                onChange={handleFormElement}
            />
            <label id="errDob"
            >Date of Birth is required</label>
            <br /><br />
            <input
                type="text"
                placeholder="city"
                id="inpCity"
                value={Form.inpCity}
                onChange={handleFormElement}
            />

            <br /><br />
            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={Form.inpPinCode}
                onChange={handleFormElement}
            />
            <br /><br />

            <select
                id="selectState"
                value={Form.selectState}
                onChange={handleFormElement}
            >
                <option value="MH">MH</option>
                <option value="Goa">Goa</option>
                <option value="MP">MP</option>
                <option value="Gujrat">Gujrat</option>
                <option value="HP">HP</option>
            </select>
            <br /><br />

            <button>Submit</button>
        </div>
    )
}

export default Form3