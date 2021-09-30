import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import '../updatedacc/Updatedacc'
export default function Updatedacc() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result=>{
            console.table(result);
            setTodos(result.data);
        }))
    }, []);
    return (
        <div className='container'>
            <p className='table text-center'> <piner /> &nbsp; Updated Data</p>
            
            <table className="table table-striped mt-5">
               
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item,index )=>  <>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        
                    </tr>
                    </>
                        )}
                </tbody>
            </table>
        </div>
    )
}
