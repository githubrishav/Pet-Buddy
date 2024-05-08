import React from 'react'

const Card = ({name, email, mob, address}) => {
  return (
    <div>
        <p className="label">Name : {name}</p>
        <p className="label">Email : {email}</p>
        <p className="label">Mob : {mob}</p>
        <p className="label">Address : {address}</p>
    </div>
  )
}

export default Card