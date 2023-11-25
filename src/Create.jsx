import React from 'react';
import { useState, useEffect } from "react";
import Nav from "./Nav";
import {db} from "./firebase";
import { collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";

const Create = () => {
  const [input, setInput] = React.useState("")
  const [sender, setSender] = React.useState(getSenderType())

  const handleResize = () => {
    setSender(getSenderType())
  }
  window.addEventListener("resize", handleResize)
  function getSenderType() {
    return window.innerWidth >= 550 ? "PC" : "Mobile"
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const messageCol = collection(db, "message")
      const docRef = await addDoc(messageCol, {
        text: input,
        sender: sender
      })
      const pop = document.querySelector(".pop-up")
      pop.classList.add("pop")
      setInput("")
      setTimeout(() => {
        pop.classList.remove("pop")
      }, 5000)
    }catch (e) {
      console.log("Error adding document", e)
    }
  }


  return (
    <div className="create-section">
      <Nav />
      <Link to="/"><div className="back-to-home">
        <i className="fa fa-arrow-left"></i>
      </div></Link>
      <div className="pop-up"><p>Message Sent!</p></div>
      <form className="input-area" onSubmit={handleSubmit}>
        <textarea 
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Text"
          required  
        ></textarea>
        <input 
          type="text"
          value={getSenderType()}
          readOnly
        />
        <button className="post-btn">Post</button>
      </form>
    </div>
  )
}

export default Create;