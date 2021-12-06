import {useState} from "react"

const Local = () => {
    const [info,setInfo]=useState("")
    
    const setData = () => {
        let obj = {name:"john",age:12,email:"mymail@mail.com"}
        localStorage.setItem("myData",JSON.stringify(obj))
    }
    const getData = () => {
        let data = localStorage.getItem("myData")
        data = JSON.parse(data)
        console.log(data)
    }
    const deleteData = () => {
        localStorage.clear()
    }

    const handleChange = (e) => {
        setInfo(e.target.value)
    }

    return (
        <div>
            <span>{info}</span>
            <br/>
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <button onClick={()=>setData()}>Set Data</button>
            <button onClick={()=>getData()}>Get Data</button>
            <button onClick={()=>deleteData()}>Delete Data</button>
        </div>
    )
}

export default Local