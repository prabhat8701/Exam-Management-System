import axios from 'axios'
import './Admin.css'
import React, { useEffect, useState } from 'react'
export default function Admin() {
  const[post,setPost]=useState([])
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[profile,setProfile]=useState('')
    const[age,setAge]=useState(0)
    const[role,setRole]=useState('')
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState(0)
    const[name1,setName1]=useState('')
    const[profile1,setProfile1]=useState('')
    const[role1,setRole1]=useState('')
    const[age1,setAge1]=useState(0)
    const openpopup=(datas)=>{
        setPopup(true)
        setId1(datas.id)
        setName1(datas.name)
        setAge1(datas.age)
        setRole1(datas.role)
        setProfile1(datas.profile)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3001/students/${id1}`,
        {
            "id":id1,"name":name1,"age":age1,"role":role1,"profile":profile1
        })
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    useEffect(()=>{
        axios.get("http://localhost:3001/students")
        .then(res=>{setPost(res.data)})
        .catch(err=>console.log(err))
    })
    const handleSubmit=()=>{
        axios.post("http://localhost:3001/students",{
        "id":id,"name":name,"age":age,"role":role,"profile":profile
    }
        ).then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
  return (
    <div className='container'>  
    <div className='form-cont'>
        <form onSubmit={handleSubmit}>
            <label>Id:</label><br></br>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
            <br></br>
            <label>Name:</label><br></br>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label>Age:</label><br></br>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br></br>
            <label>Exam Name:</label><br></br>
            <input type='text' value={role} onChange={(e)=>setRole(e.target.value)}/>
            <br></br>
            <label>Photo:</label><br></br>
            <input type='image' value={profile} onChange={(e)=>setProfile(e.target.value)}/>
            <br></br>
            <button type='submit'>submit</button>
        </form>
        </div>
        <div className='table-cont'>
        <table className='Admin-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>age</th>
                    <th>Exam </th>
                    <th>profile</th>            
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>112</td>
                    <td>Prabhu</td>
                    <td>21</td>
                    <td>Upsc</td>
                    <td></td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>115</td>
                    <td>naresh</td>
                    <td>20</td>
                    <td>NEET</td>
                    <td>MBBS</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>117</td>
                    <td>yogeh</td>
                    <td>9</td>
                    <td>maths</td>
                    <td></td>
                    <td>Pass</td>
                </tr>
                {post.map(x=>
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.role}</td>
                    <td><img src={x.profile} height='70px' width='70px'/></td>
                    <td>
                        <button onClick={()=>openpopup(x)}>Update</button>
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </td>
                  </tr>  
                    )}
            </tbody>
        </table>
        {popup &&  <div className='popup'><form onSubmit={handleUpdate}>        
            <button onClick={()=>setPopup(false)}>X</button><br></br><br></br><label>Id:</label>
            <input type='number' value={id1} onChange={(e)=>setId1(e.target.value)}/>
            <br></br>
            <label>Name:</label>
            <input type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <br></br>
            <label>Age:</label>
            <input type='number' value={age1} onChange={(e)=>setAge1(e.target.value)}/>
            <br></br>
            <label>Exam Name:</label>
            <input type='text' value={role1} onChange={(e)=>setRole1(e.target.value)}/>
            <br></br>
            <label>Photo:</label>
            <input type='text' value={profile1} onChange={(e)=>setProfile1(e.target.value)}/>
            <br></br>
            <button type='submit'>submit</button>
        </form></div>}
        </div>
    </div>
  )
}