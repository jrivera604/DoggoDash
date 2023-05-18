import { useRouter } from 'next/router';
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../../styles/chat.module.css';


export default function Chat() {
  const [socket, setSocket] = useState(null);
  const { user, error, isLoading } = useUser();
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    const socketInitializer = async () => {
      // We just call it because we don't need anything else out of it
      await fetch("/api/socket");

      const newSocket = io();
      setSocket(newSocket);
    };

    socketInitializer();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("newIncomingMessage", handleNewIncomingMessage);

      return () => {
        socket.off("newIncomingMessage", handleNewIncomingMessage);
      };
    }
  }, [socket]);

  const handleNewIncomingMessage = (msg) => {
    setMessages((currentMsg) => {
      const author = msg.author.split("@")[0];
      const newMsg = { author, message: msg.message };
      return [...currentMsg, newMsg];
    });
  };
  
  

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { author: username, message };
      setMessages((currentMessages) => [...currentMessages, newMessage]);
      socket.emit("createdMessage", newMessage);
      setMessage("");
    }
  };
  
  
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  useEffect(() => {
    if (!isLoading && user) {
      setChosenUsername(user.email);
    }
  }, [user, isLoading]);

  const username = chosenUsername.split("@")[0];

  console.log(messages);

  return (
    <div className={styles['chat-container']}>
      <main className={styles['chat-messages']}>
        <p className="font-bold text-white text-xl">
          Your username: {username}
        </p>
        <div className={styles['chat-message-container']}>
          {messages.map((msg, i) => {
            return (
              <div
                className={styles['chat-message']}
                key={i}
              >
                {msg.author} : {msg.message}
              </div>
            );
          })}
        </div>
        <div className={styles['chat-form']}>
          <input
            type="text"
            placeholder="New message..."
            value={message}
            className={styles['chat-input']}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={handleKeypress}
          />
          <div className={styles['chat-send-button']} onClick={() => sendMessage()}>
            Send
          </div>
        </div>
      </main>
    </div>
  );
}   