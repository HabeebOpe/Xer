import React from 'react';
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { onSnapshot, collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import "./App.css";

const Computer = () => {
  const [messages, setMessages] = React.useState([])

  useEffect(() =>
    onSnapshot(collection(db, "message"), (snapshot) => 
      setMessages(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  ), [])
  const editMessage = async (id) => {
    const promptValue = prompt("propm")
    const docRef = doc(db, "message", id)
    const payLoad = {text: promptValue}
    setDoc(docRef, payLoad)
  }
 
  const openEdit = document.querySelectorAll(".open-del")
  openEdit.forEach(open => {
    open.addEventListener("click", () => {
      open.classList.add("open-edit-pop")
    })
  })
  const handleDelete = async (id) => {
    const docRef = doc(db, "message", id)
    await deleteDoc(docRef)
  }
  // const [editText, setEditText] = useState("")
  // const handleEdit = (e) => {
  //   setEditText(e.target.value)
  // }

  const listItem = document.querySelectorAll("#list")
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("appear")
    })
  })
  return (
    <div className="computer-section">
      <Nav />
      <Link to="/create">
        <div className="create-btn"><i className="fa fa-add"></i></div>
      </Link>
      <div className="computer-sec">
        <ul>
          {messages.map((message) => (
            <li id="list" key={message.id}>
            <h4>{message.sender}</h4>
            <div className="text-area">
              <p className="message-text">{message.text}</p>
              <p className="message-date-and-copy">
                <span className="date-and-time">24 Oct</span>
                <span className="copy-btn"><i className="fa fa-copy"></i></span>
              </p>
            </div>
            <div className="trash-edit">
              <span onClick={() => handleDelete(message.id)} className="open-del"><i className="fa fa-trash"></i></span>
              <span onClick={() => editMessage(message.id)}><i className="fa fa-edit"></i></span>
            </div>
          </li>
          ))   
          }
        </ul>
      </div>
    </div>
  )
}

export default Computer;


/*{<div className="edit-pop-up">
        <form onSubmit={s}>
        <textarea 
          type="text"
          value={editText}
          onChange={handleEdit}
          placeholder="Edit Text"
          required  
        ></textarea>
          <button>Edit</button>
        </form>
      </div>}*/
 