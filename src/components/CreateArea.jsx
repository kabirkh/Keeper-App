import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab,Zoom } from '@mui/material';

function CreateArea(props) {

    const [isExpand,setExpand] = useState(false) 

    const [note,setNote] = useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const{name,value} = event.target;
        setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            }
        });
    }

    function submitNote(event){

        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
        setExpand(true);
    }


  return (
    <div>
      <form className="create-note">
        {isExpand && <input 
        name="title" 
        placeholder="Title" 
        onChange={handleChange} 
        value={note.title}
        />}

        <textarea 
        name="content" 
        onClick={expand}
        placeholder="Take a note..." 
        rows= {isExpand?3:1}
        onChange={handleChange}
        value={note.content}
        />
        <Zoom in={isExpand}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;