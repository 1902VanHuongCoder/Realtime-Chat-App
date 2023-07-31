import React, { useContext, useEffect, useState } from "react";
//import database and auth
import { db, auth } from "../firebase_setup/firbase";
//import AppContext
import { AppContext } from "../context/UserContext";
//import some methods of firebase/firestore
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
const Chat = () => {
  const { room } = useContext(AppContext);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("Use effect is running...");
    const messagesRef = collection(db, "messages");
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createAt")
    );
    const unsubcrised = onSnapshot(queryMessages, (snapshot) => {
      console.log("8");
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubcrised();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    addDoc(collection(db, "messages"), {
      username: auth.currentUser.displayName,
      createAt: serverTimestamp(),
      message: newMessage,
      room: room,
    });
  };
  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, i) => {
          return <div key={i}>{message.message}</div>;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>Type something</label>
        <input onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
