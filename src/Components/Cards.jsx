import React from 'react'

const Cards = ({name, mob, add, email}) => {
  return (
    <div>
<p className="name">Name: {name}</p>
<p className="label">Mob: {mob}</p>
<p className="label">Add: {add}</p>
<p className="label">E-mail: {email}</p>
    </div>
  )
}

export default Cards