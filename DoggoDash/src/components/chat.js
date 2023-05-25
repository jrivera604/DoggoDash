import { useRouter } from 'next/router';
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from '../../styles/message.module.css';

export default function Chat() {
  const [socket, setSocket] = useState(null);
  const { user, error, isLoading } = useUser();
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
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
      socket.on("activeUsers", setActiveUsers);

      return () => {
        socket.off("newIncomingMessage", handleNewIncomingMessage);
        socket.off("activeUsers", setActiveUsers);
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
      const newMessage = { author: chosenUsername, message };
      setMessages((currentMessages) => [...currentMessages, newMessage]);
      socket.emit("createdMessage", newMessage);
      setMessage("");
    }
  };

  const handleKeypress = (e) => {
    // It triggers by pressing the enter key
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

  const handleUserClick = (username) => {
    setChosenUsername(username);
  };

  return (
    <div className={styles['chat-container']}>
      <div className={styles['online-users']}>
        <div className={styles['online-users-header']}>
          Active Users
        </div>
        <div className={styles['online-users-body']}>
          {activeUsers.map((username) => (
            <div
              className={styles['user-item']}
              key={username}
              onClick={() => handleUserClick(username)}
            >
              {username}
            </div>
          ))}
        </div>
      </div>
      <div className={styles['chat-area']}>
        <div className={styles['chat-header']}>
          <div className={styles['chat-name']}>
            Conversation Name: {chosenUsername}
          </div>
          <button className={styles['leave-btn']}>
            Leave Chat
          </button>
        </div>
        <div className={styles['chat-box']}>
          {messages.map((msg, i) => (
            <div className={styles['message-row']} key={`messageRowItem${i}`}>
              {msg.author !== chosenUsername ? (
                <div className={styles['bubble-receive']}>{msg.message}</div>
              ) : (
                <div className={styles['bubble-sent']}>{msg.message}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles['chat-footer']}>
          <div className={styles['chat-input']}>
            <input
              type="text"
              placeholder="New message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={handleKeypress}
            />
          </div>
          <button className={styles['send-btn']} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
