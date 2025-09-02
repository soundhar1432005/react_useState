import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submit, setSubmit] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  console.log({name})
  const handleCourseInput = (e) => {
    setCourse(e.target.value);
  };
  console.log({course})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted successfully:", { name, course });

    setSubmit(name);        // stores submitted name like as course also
    setSubmitted(course);   

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
        <button type="submit">Click me</button>
      </form>

      <h3>{submit}</h3>
      <h3>{submitted}</h3>
    </div>
  );
}

export default App;
