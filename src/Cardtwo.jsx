import React from 'react'

const Cardtwo = ({name, adds, email, number}) => {
  return (
    <div>
        <p className="Name">Name: {name} </p>
        <p className="Address">Address: {adds}</p>
        <p className="E-mail">E-mail: {email} </p>
        <p className="Number">Number: {number} </p>
    </div>
  )
}

export default Cardtwo