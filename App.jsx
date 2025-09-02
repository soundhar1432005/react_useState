import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [marks,setmarks]=useState("")
  const [submit, setSubmit] = useState("");
 

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  console.log({name})
  const handleCourseInput = (e) => {
    setCourse(e.target.value);
  };
  console.log({course})
    const handlemarksInput = (e) => {
    setCourse(e.target.value);
  };
  console.log({marks})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted successfully:", { name,course });

    setSubmit({name,course});        // stores submitted name like as course also
     

    setName("");            
    setCourse("");          // clears input after submited so ("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameInput}
        />
        
        <input 
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={handleCourseInput}
        />
         <input 
          type="text"
          placeholder="Enter course"
          value={marks}
          onChange={handlemarksInput}
        />
        <button type="submit">Click me</button>
      </form>

      <h3>{submit.name}{submit.course} {submit.marks}</h3>
      
    </div>
  );
}

export default App;
