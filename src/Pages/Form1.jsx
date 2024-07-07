import React from 'react'
import { useState } from 'react'

const Form1 = () => {

    const [fName, setfName] = useState('')
    const handaleFName = (event) => {
        // console.log(event); // returns  an event object
        // console.log(event.target); // returns an html elememt where that
        // console.log(event.target.value);// returns value attribute of that html element
        setfName(event.target.value)
    }
    // console.log('fName', fName);


    const [lName, setlName] = useState('')
    const handleLName = (event) => {
        // console.log(e.target.value);
        setlName(event.target.value)
    }
    // console.log('lName', lName);

    const [email, setemail] = useState('')
    const handleEmail = (event) => {
        setemail(event.target.value)
    }


    const [pwd, setpwd] = useState('')
    const handlePwd = (event) => {
        setpwd(event.target.value)
    }

    const [cnfPwd, setcnfPwd] = useState('')
    const handleCnfPwd = (event) => {
        setcnfPwd(event.target.value)
    }

    const [dob, setdob] = useState('')
    const handleDob = (event) => {
        setdob(event.target.value)
    }

    const [city, setcity] = useState('')
    const handleCity = (event) => {
        setcity(event.target.value)
    }

    const [pinCode, setpinCode] = useState('')
    const handlePinCode = (event) => {
        setpinCode(event.target.value)
    }

    const [state, setstate] = useState('')
    const handleState = (event) => {
        setstate(event.target.value)
    }

    const [gender, setgender] = useState('')
    const handleGender = (event) => {
        setgender(event.target.value)
    }

    const [courses, setcourses] = useState([])
    const handleCourses = (event) => {
        if (event.target.checked) {
            setcourses([...courses, event.target.value])
        } else {
            // setcourses(courses.filter((course) => course !== event.target.value))

            const index = courses.indexOf(event.target.value)
            courses.splice(index, 1)
        }
    }

    return (
        <div>

            <input
                type="text"
                placeholder="first name"
                id="inpFName"
                value={fName}
                onChange={handaleFName}
            />
            <label id="errFName">First Name is required</label><br /><br />

            <input
                type="text"
                placeholder="last name"
                id="inpLName"
                value={lName}
                onChange={handleLName}
            />
            <label id="errLName">Last Name is required</label><br /><br />

            <input
                type="email"
                placeholder="email"
                id="inpEmail"
                value={email}
                onChange={handleEmail}
            />
            <label id="errEmail">Email is required</label>
            <label id="errEmailFormat">Email is not Vaild</label><br /><br />

            <input
                type="password"
                placeholder="password"
                id="inpPass"
                value={pwd}
                onClick={handlePwd}
            />
            <label id="errPass">password is required</label><br /><br />

            <input
                type="password"
                placeholder="confirm password"
                id="inpCnfPass"
                value={cnfPwd}
                onClick={handleCnfPwd}
            />
            <label id="errCnfPass">Confirm Password is required</label>
            <label id="errMatch">Password and Confirm Password not matching</label><br /><br />

            <input
                type="date"
                id="inpDob"
                value={dob}
                onClick={handleDob}
            />
            <label id="errDob">Date of Birth is required</label><br /><br />

            <input
                type="text "
                placeholder="city"
                id="inpCity"
                value={city}
                onClick={handleCity}
            /><br /><br />
            <input type="number" placeholder="pin code" id="inpPinCode" /><br /><br />

            <input
                type="number"
                placeholder="pin code"
                id="inpPinCode"
                value={pinCode}
                onChange={handlePinCode}
            />
            <br /><br />

            <select
                id="selectState"
                value={state}
                onClick={handleState}
            >
                <option value="MH">MH</option>
                <option value="UP">UP</option>
                <option value="MP">MP</option>
                <option value="Goa">Goa</option>
                <option value="Gujrat">Gujrat</option>
            </select><br /><br />

            <input
                type="radio"
                value="male"
                name="gender"
                id="radioMale"
                onClick={handleGender}
            />
            <label>male</label><br />

            <input
                type="radio"
                value="female"
                name="gender"
                id="readioFemale"
                onClick={handleGender}
            />
            <label>female</label><br />

            <input
                type="radio"
                value="others"
                name="gender"
                id="radioOthers"
                onClick={handleGender}
            />
            <label >others</label><br />

            <label id="errGender">please select your Gender</label>
            <br /><br />


            <input
                type="checkbox"
                id="chkHTML"
            />
            <label>HTML</label><br />

            <input type="checkbox" id="chkCSS" />
            <label>CSS</label><br />

            <input type="checkbox" id="chkJS" />
            <label>JS</label><br />

            <input type="checkbox" id="chkReact" />
            <label>React</label>
            <br />
            <label id="errCourses">please select your Courses</label>
            <br /><br />

            <button>Submit</button>

        </div>
    )

}
export default Form1