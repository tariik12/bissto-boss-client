import { useEffect, useState } from "react";

export const UseMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/menu')
        .then(res =>res.json())
        .then(data =>{
           
            setMenu(data)
            setLoading(false)
        })
    },[])

    return [menu,loading]
}

