import React from 'react'
import Name from './Name'

function Inputs() {

const [Name, setName] = useState("Type your Name")
setName()

  return (
    <div>
        <Name text={Name}/>
    </div>
  )
}

export default Inputs