//https://dev.to/gautham495/how-to-persist-data-to-localstorage-in-react-with-hooks-6ma
//https://blog.logrocket.com/using-localstorage-react-hooks/

import React, { useState,useEffect } from 'react';

const Local2 = () => {
    const [name, setname] = useState('')
    const [price,setprice]=useState('')
    const [item,setitem]=useState([]) 

    const handleSubmit = (e) => {
        e.preventDefault();
        setitem([...item,{name:name,price:price}])
        setname('')
        setprice('')    
      };

      useEffect(()=>{
        const data = localStorage.getItem('data')        
        if(data){
          setitem(JSON.parse(data))
         }        
        },[])
        
        useEffect(()=>{        
          localStorage.setItem('data',JSON.stringify(item))        
        })
        
        const getLocal = () => {
            let data = localStorage.getItem("data")
            data = JSON.parse(data)
            console.log(data)
        }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type = "text" name="name" value={name} onChange={(e) => setname(e.target.value)}/>
            <input type = "number" name="price" value={price} onChange={(e) => setprice(e.target.value)}/>
            <input type = "submit"/>
        </form>
        <button onClick={()=>getLocal()}>Get Local</button>
        {item.map(i=>{            
            return <pre>{i.name +  i.price}  </pre>
        })}
        </>
    )
}

export default Local2


