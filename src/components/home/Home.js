import React from 'react'
import BudgetData from '../../School Status/BugdetData'
import Contacts from '../../School Status/Contacts'
import SchoolBudgetForm from '../../School Status/SchoolBudgetForm'


 const Home=()=> {
    return (
        <div>
           <Contacts/>
           {/* <SchoolBudgetForm/> */}
           <BudgetData/>
        </div>
    )
}
export default Home;