import React from 'react';
import './login.css';
import {  useNavigate, Redirect } from 'react-router-dom';
import  {useState,useEffect} from 'react'


const Login = () => {

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  
  const handelSubmit = (e) => {
    e.preventDefault();

console.log(userinfo.response)

  };
  const check = (e) => {
    e.preventDefault();

    console.log('fghjk')
    
      };

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };
 
  return (
    <>
    <div className="container-fluid top ">
      <div className="container mt-5  pb-5 pt-5">
        <h3 className="form-head-contact-h3 ">
          Your programming expertise lies in what languages?{" "}
        </h3>

        <form onSubmit={handelSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="Javascript"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    Javascript
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="Python"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    Python
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="Java"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    Java
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="PHP"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    PHP
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="C#"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    C#
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="C++"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    C++
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="C"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    C
                </label>
              </div>
              <div className="form-check m-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="languages"
                  value="Typescript"
                  id="flexCheckDefault"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                    Typescript
                </label>
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary mt-5'>Submit</button>

          <div className="form-floating mt-3 mb-3 text-center">
            <label htmlFor="exampleFormControlTextarea1">
              You're proficient in the following languages :{" "}
            </label>
            <textarea
              className="form-control text"
              name="response"
              value={userinfo.response}
              placeholder="The checkbox values will be displayed here "
              id="floatingTextarea2"
              style={{ height: "150px" }}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
        <form action="" className='mt-5 mb-5' onSubmit={check}>
      <input type="text" />
      <button type='submit' className='btn btn-primary'>btn</button>
    </form>
      </div>
    </div>

   
  </>
  )
}


export default Login