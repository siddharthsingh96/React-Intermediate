import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const[firstName,setFirstName]=useState("");
  // const[LastName,setLastName]=useState("");
  // console.log(firstName);
  // console.log(LastName);
  // function changeFirstHandler(event){
  //   // console.log("on first changes",event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastHandler(event){
  //   // console.log("on second changes",event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",comments:"",isvisible:true,mode:"",favCar:""});
  // console.log(formData.email);
  // console.log(formData.firstName);
  console.log(formData);
  function changeHandler(event){
    const {name,value,checked,type}=event.target;
setFormData(prevFormData=>{
  return{
    ...prevFormData,
    [name]:type==="checkbox"?checked:value
  }
});
  }
  function submitHandler(event){
event.preventDefault();

console.log("Finally printing the entire form ka data.....")
console.log(formData);
  }
  return (
    <div className="App">
      App
      <form onSubmit={submitHandler}>
      <br/>
        <input type='text' placeholder='firstName'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}/>
       
        <br/>
        <br/>
          <input type='text' placeholder='last Name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}/>
     
         <br/>
         <br/>
          <input type='email' placeholder='Enter your Email adrress'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>
         <br/>
         <br/>
         <textarea placeholder='Enter your comments here'
         onChange={changeHandler}
         name='comments'
         value={formData.comments}/>
          
           <input type='checkbox'
           onChange={changeHandler}
           name='isvisible'
           id='isvisible'
           checked={formData.isvisible

           }
          //  value={formData.isvisible}
/>  <label htmlFor='isvisible'>AM i visible?</label>
<br/>
<br/>
<fieldset>
  <legend>Mode:</legend>
  <input type='radio'
onChange={changeHandler}
name='mode'
value="Online-Mode"
id='Online-Mode'
checked={formData.mode==="Online-Mode"}
/>
<label htmlFor='Online-Mode'>Online Mode</label>
<input type='radio'
onChange={changeHandler}
name='mode'
value="offline-Mode"
id='Offline-Mode'
checked={formData.mode==="offline-Mode"}
/>
<label htmlFor='Offline-Mode'>Offline Mode</label>  
</fieldset>

<label htmlFor='favCar'>Tell me the Favourite Car</label>
<select onChange={changeHandler} name='favCar' value={formData.value} id='favCar'>
 <option  value="scorpio">Scorpio</option>
 <option  value="Thar">Thar</option>
 <option  value="swift">swift</option>
 <option  value="fortuner">fortuner</option>
</select>

{/* <input type='submit' value='submit'/> */}
<br/>
<br/>
<button>submit</button>
    </form>
    </div>
  );
}

export default App;
