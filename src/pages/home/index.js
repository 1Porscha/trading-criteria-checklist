
import axios from 'axios';
import { set } from 'mongoose';
import React, { useState, useEffect } from "react";
// import { Trash3 } from 'bootstrap-icons-react'
// import { Routes, Route,} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Home = () => {

//Define useState
  const[criteriaText, setCriteriaText] = useState("") 
  const[displayCriteria, setDisplayCriteria] = useState([])
  const[editCriteriaValue, seteditCriteriaValue] = useState([])
// const [criteria, setCriteria] = useState("")

// create a function to add new criteria to database and await response
// exampl from class, I kept getting errors, so I used it as a reference for below

// create a function to add new criteria to database and await response
let addCriteria = async (event) => {
  event.preventDefault()
//use axios to post request  
  let response = await axios.post('/create_criteria', {
    
      criteria: criteriaText
    })
    console.log(response.data)

// Add the created criteria object to the state
    // setDisplayCriteria(prev =>[...prev, response.data])
    window.location.reload()
    // setCriteriaText("")
};

//use UseEffect hook to create a function to display all criteria in database and await response 
// Fetch criteria data from the server on component mount
//help from chatGPT


//use UseEffect hook to create a function to display all criteria in database and await response 
// Fetch criteria data from the server on component mount
useEffect(() => {
let displayAllCriteria = async () =>{
  let response = await axios('/get_criteria')
  seteditCriteriaValue(response.data);
  console.log('render')
  console.log(response)
  }
  displayAllCriteria()
  console.log(editCriteriaValue)
}, []);

// create a function to delete criteria from database and await response
//use .filter to create a new array filled with elements. The id has to pass a true or false test inside the function. 
//If the id does not match, we delete data from the the DOM 

  let deleteCriteria = async (id) => {
    console.log(id)
 
  let response = await axios({
    method: "delete",
    url: '/delete_criteria',
    data: {id}
  })
  let originalDispayCriteria = [...displayCriteria]
  let newCriteriaArray = originalDispayCriteria.filter(item => item._id !==id)
  setDisplayCriteria(newCriteriaArray)
  console.log(response.data)
  console.log(response)

  window.location.reload()
}

const handleChange = (e, id, index) => {
  const newValue = [...editCriteriaValue]
  console.log(id)
  newValue[index] = {
    _id: id,
    criteria: e.target.value} 
    // console.log(newValue[index])
  seteditCriteriaValue(newValue)
}

const handleSave = async (e, id, index) => {
  e.preventDefault()
  console.log(id)
  const updatedCriteria = {criteria: editCriteriaValue[index].criteria}
  let response = await axios({
    method: "PUT",
    url: `/edit_criteria/${id}`,
    data: updatedCriteria
    
  })
  console.log(response)
  // window.location.reload()
}
// create a function to edit criteria from database and await response
//creat new/edit values that will replace the old values in

const handleCheckBox = async (e, id, index) => {
  //change completed in datsbase
  //change completed here
  let newArray = [...editCriteriaValue]
  newArray[index].completed=e.target.checked
  seteditCriteriaValue(newArray)

  let response = await axios({
    method: "PUT",
    url: `/edit_criteria/${id}`,
    data: {completed: e.target.checked}
    
  })
  console.log(response)
}
  return (
    //create form
    //add event listener to onChange, which will trigger when user changed the value of input
    //set new value of text with setCriteriaText and use criteria text to show the current input values
    <div className="AddCriteria">
        <h1>Trading Criteria Checklist</h1>
      <form className="form" onSubmit={event => addCriteria(event)}> 
        <input type="text" placeholder="Add Criteria" onChange={event => {setCriteriaText(event.target.value)} } value={criteriaText} />
        {/* <button type="submit">Add</button> */}
        <Button variant="success" type="submit">Add</Button>
      </form>

    {/* use.map method to display an array of criteria objects  */}
    {/* set content to criteria to display the value of the content on the DOM */}
    {/* add event listener to onClick delete button, which is triggeres when clicked */}
      <div className="Display-Criteria"> 
     {
        editCriteriaValue.map((criteria, index) => (

           // <div key={criteria.id}>
          <div key={index}className="criteria-item">
    <form className="update-form" onSubmit={(e) => handleSave(e, criteria._id, index)}>
      <input type="checkbox" checked={editCriteriaValue[index].completed} onChange={(e) => handleCheckBox(e, criteria._id, index)}/> 
      <input className="update-new-input" type="text" value={editCriteriaValue[index].criteria} onChange={(event) => {handleChange(event, editCriteriaValue[index]._id, index)}}  />
      <button className="btn btn-warning" type="edit">Edit</button>
      
    </form>

          {/* <p className="criteria-content">{criteria.criteria}</p> */}
          {/* <button className="update-criteria">Submit</button> */}
          <button className="btn btn-danger" onClick={()=>{deleteCriteria(criteria._id)}}>Delete</button>
          {/* "delete-criteria" */}

        </div>
        //</div>  
        ))
       }
      </div>
    </div>
  )
}

// }
// }
// }
export default Home;