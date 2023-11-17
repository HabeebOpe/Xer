import React from 'react';
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import "./App.css";

const Computer = () => {
  const [messages, setMessages] = React.useState([])
  const fetchMessage = async () => {
    const messageCol = collection(db, "message")
    await getDocs(messageCol)
      .then((snapshot) => {
        const messageList = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
        setMessages(messageList)
      })
  }
  useEffect(() => {
    fetchMessage()
  }, [])

  const messsageItem = messages.map((message) => {
    return(
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
              <span><i className="fa fa-trash"></i></span>
              <span><i className="fa fa-edit"></i></span>
            </div>
          </li>
    )
  })


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
          {messsageItem}
        </ul>
      </div>
    </div>
  )
}

export default Computer;

/*
<li id="list">
            <h4>PC</h4>
            <div className="text-area">
              <p className="message-text">Hi, I'm sending this message from your PC</p>
              <p className="message-date-and-copy">
                <span className="date-and-time">24 Oct</span>
                <span className="copy-btn"><i className="fa fa-copy"></i></span>
              </p>
            </div>
            <div className="trash-edit">
              <span><i className="fa fa-trash"></i></span>
              <span><i className="fa fa-edit"></i></span>
            </div>
          </li>
          <li id="list">
            <h4>Mobile</h4>
            <div className="text-area">
              <p className="message-text">Hey this message was sent from your mobilr device, I hope your're good</p>
              <p className="message-date-and-copy">
                <span className="date-and-time">24 Oct</span>
                <span className="copy-btn"><i className="fa fa-copy"></i></span>
              </p>
            </div>
            <div className="trash-edit">
              <span><i className="fa fa-trash"></i></span>
              <span><i className="fa fa-edit"></i></span>
            </div>
          </li>
          <li id="list">
            <h4>PC</h4>
            <div className="text-area">
              <p className="message-text">Hi, I'm sending this message from your PC</p>
              <p className="message-date-and-copy">
                <span className="date-and-time">24 Oct</span>
                <span className="copy-btn"><i className="fa fa-copy"></i></span>
              </p>
            </div>
            <div className="trash-edit">
              <span><i className="fa fa-trash"></i></span>
              <span><i className="fa fa-edit"></i></span>
            </div>
          </li>
          <li id="list">
            <h4>Mobile</h4>
            <div className="text-area">
              <p className="message-text">Hi, I'm sending this message from your PC</p>
              <p className="message-date-and-copy">
                <span className="date-and-time">24 Oct</span>
                <span className="copy-btn"><i className="fa fa-copy"></i></span>
              </p>
            </div>
            <div className="trash-edit">
              <span><i className="fa fa-trash"></i></span>
              <span><i className="fa fa-edit"></i></span>
            </div>
          </li>
 */