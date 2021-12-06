import {useState, useEffect} from "react"

const UseEf = () => {
    const [resourceType,setResourceType]=useState("users")
    const[items, setItem] = useState([])
   
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res=>res.json())
        .then(json=>setItem(json))
    }, [resourceType])

    return (
        <>            
            <button onClick={()=>setResourceType("posts")}>Post</button>
            <button onClick={()=>setResourceType("users")}>Users</button>
            <button onClick={()=>setResourceType("comments")}>Comments</button>
            <div>
            <h1>{resourceType}</h1>
            {items.map(item=>{                
                return (                
                <li key={item.id}>{JSON.stringify(item.name)}</li>                
                
                )
            })}
            </div>
        </>
    )
}

export default UseEf