import React from 'react';
import firebaseDb from "firebase";
import { useState,useEffect } from 'react'
const  BudgetResult=()=> {
    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('');
    useEffect(() => {
        firebaseDb.database().ref('Budget').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount
    return (
        <div>
            <div className='table-responsive '>
                        <table class=" table table-dark ">
            {/* <table class="table table-hover"> */}
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">School Name</th>
      <th scope="col">Total Budget</th>
      <th scope="col">Spending Buget</th>
      <th scope="col">Remaining Budget</th>
     
    </tr>
  </thead>
  <tbody>
  {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{}</td>
                                        
                                        <td>{contactObjects[id].schoolNames}</td>
                                        <td>{contactObjects[id].totalBudget}</td>
                                        <td>{contactObjects[id].spendingBudget}</td>
                                        <td>{contactObjects[id].remainingBudget}</td>
                                       
                                       
                                    </tr>
                                })
                            }
  </tbody>
 
</table>

        </div>
        </div>
    )
}
export default BudgetResult;
