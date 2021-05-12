import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

// creating useState for note object with property title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

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

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (<input className="form input" onChange={handleChange} name="title" placeholder="Title" value={note.title} />) : null }
        <textarea onClick={expand} className="form textarea" onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
