import React, { useState } from 'react'

const Todo = () => {
    const [add, Setadd]=useState([]);
    const [item,setItem]=useState("");

    const addItem=()=>{
       add.push(item)
       Setadd([...add]);
    }

    const remove=(elemwnt)=>{
    add.splice(elemwnt,1)
    Setadd([...add])
    }
  return (
 

    <>
    <div className='div container'>

        <input onChange={(e)=>setItem(e.target.value)} className='input' placeholder='Enter your Text'/>
        <button onClick={addItem} type="button" class="btn btn-success btn">Add</button>
        <table className='tbl'>
            <tbody>
                {
                    add.length !==0 ?(
                        add.map((idex,elemwnt)=>{
                       return(
                        <tr>
                            <h1 className='text'>{idex}</h1>
                            <td><button type="button" class="btn btn-danger" onClick={()=> remove(elemwnt)}>Rmove</button>
</td>
                        </tr>
                       )
                        },)

                    ):(<tr/>)
                }
            </tbody>
        </table>
        
    </div>
    </>
  )
}

export default Todo