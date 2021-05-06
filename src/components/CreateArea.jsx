import React, { useState } from "react";

function CreateArea(props) {

// creating useState for note object with property title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

// function to handle input and textarea change
  function handleChange(event) {
    // destructure event to name and value
    const {name, value} = event.target;
    // setNote function passing previous note value
    setNote(prevNote => {
      // return spread operator with previous note value
      return {
        ...prevNote,
        // key value pair of event name and event value being set to new note object
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    // prevent submit button refresh
    event.preventDefault();

  }

  return (
    <div>
      <form className="form">
        <input className="form input" onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea className="form textarea" onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button className="form button" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
