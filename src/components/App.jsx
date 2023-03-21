import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const[notes,setNotes] = useState([]);

    function addNote(newNote){
        if(newNote.title==="" && newNote.content==="") return;
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        })
        
    }
    function deleteNode(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem, index)=>{
                return index !==id;
            })
        })
    }

    return(
        <>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index)=>{
                return (<Note 
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNode}
                />)
            })}
            <Footer />
        </>
    )
}

export default App;