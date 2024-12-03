import React, { useState } from "react";
import "../../styles/PopUps/StickyNotes.css";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { text: note, completed: false }]);
      setNote("");
    }
  };

  const toggleComplete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="stickyNotes-popup">
      <h2>My Books</h2>
      <div className="note-input">
        <textarea
          placeholder="Write your note here..."
          rows="2"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={addNote} className="add-btn">
          Add Note
        </button>
      </div>
      <ul className="note-list">
        {notes.map((n, index) => (
          <li key={index} className={`note-item ${n.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={n.completed}
              onChange={() => toggleComplete(index)}
            />
            <span>{n.text}</span>
            <button className="delete-btn" onClick={() => deleteNote(index)}>
              &#x2716;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StickyNotes;