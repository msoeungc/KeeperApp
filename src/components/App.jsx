import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea"


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // passing in new note object after the previous note objects using the spread operator
    setNotes(prevNotes => {
      // returning the array with new note added to previous notes
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

    return (<div>
        <Header />
        <CreateArea
        onAdd={addNote}
        />
        {/* mapping through notes array and creating a Note component while passing the noteItem Ojbect */}
        {notes.map((noteItem, index) => {
          return <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={noteItem.title}
          content={noteItem.content}
          />
        })}
        <Footer />
    </div>
    )
}

export default App;
