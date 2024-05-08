import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const Axios = () => {
        const [udata, setUdata] = useState([])



        useEffect(() => {
                axios.get("https://jsonplaceholder.typicode.com/albums")
                        .then((response) => {
                                console.log(response);
                                setUdata(response.data)
                        })
        }, [])

        return (
                <>
                        <div className="flex flex-col gap-10">Axios
                                {udata.map((data) => {
                                        return (
                                                <div className="flex flex-row gap-10">
                                                        <div className="cont">{data.userId}</div>
                                                        <div className="cont">{data.id}</div>
                                                        <div className="cont"> {data.title}</div>
                                                </div>
                                        )
                                })}
                        </div>

                </>
        )
}

export default Axios