import React from 'react';
import Nav from "./Nav";
import {db} from "./firebase";
import { collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { useState } from "react";

const Create = () => {
  const [input, setInput] = React.useState("")
  const [sender, setSender] = React.useState(window.innerWidth)
  const updateSender = () => {
    setSender(window.innerWidth)
  }
  window.addEventListener("resize", updateSender)
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const messageCol = collection(db, "message")
      await addDoc(messageCol, {
        text: input,
        sender: sender
      })
      alert("Message sent")
    }catch (e) {
      console.log("Error adding document", e)
    }
  }

  return (
    <div className="create-section">P
      <Nav />
      <Link to="/"><div className="back-to-home">
        <i className="fa fa-arrow-left"></i>
      </div></Link>
      <form className="input-area" onSubmit={handleSubmit}>
        <textarea 
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Text"
        ></textarea>
        <input 
          type="text"
          value={sender >= "500" ? "PC" : "Mobile"}
          readOnly
        />
        <button className="post-btn">Post</button>
      </form>
    </div>
  )
}

export default Create;