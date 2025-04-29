import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateNote from "./components/createNote";
import Notes from "./components/data";
import { useState } from "react";

function App() {
    const [notes, setNotes] = useState(Notes);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(noteID) {
        setNotes((prevNotes) => {
            return prevNotes.filter((_, index) => index !== noteID);
        });
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <CreateNote onAdd={addNote} />
            <Note notes={notes} onDelete={deleteNote} />
            <Footer />
        </div>
    );
}

export default App;
