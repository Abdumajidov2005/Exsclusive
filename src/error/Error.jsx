import React from 'react'
import "./Error.css"
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="errorPage">
        <div className="container">
          <div className='visit'>
              <NavLink to={"/"}>
                Home
              </NavLink>
              <span>
                /
              </span>
              <p>
                404 Error
              </p>
          </div>
           <img src="/imgs/error.gif" alt="" />
            <NavLink className="bac-home" to={"/"}>Back to home page</NavLink>
        </div>
      </div>  
    </>
  )
}

export default Error