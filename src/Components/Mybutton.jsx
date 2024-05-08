import React from 'react'

const Mybutton = ({text, btnFunction}) => {
        return (
                <>
                      
                        <button onClick={btnFunction}>{text}</button>
                </>
        )
}

export default Mybutton