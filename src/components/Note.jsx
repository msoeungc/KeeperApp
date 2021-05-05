import React from "react";

function Note(props) {
    return (
        <div className="note">
            <h1 className="h1">{props.title}</h1>
            <p className="p">{props.content}</p>
        </div>
    )
}

export default Note;
