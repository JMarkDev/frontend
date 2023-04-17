import React, { useState, useEffect, useRef } from 'react';
import '../Style/Chatbot.css';
import axios from 'axios';
import Messages from './Messages';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const textQuery = async () => {
    if (!message.trim()) return; // don't send empty message
    const response = await axios.post('http://localhost:3000/chatbot/query', {
      user_query: message,
    });
    console.log('response from dialogflow', response.data);
    setConversations([...conversations, { userMessage: message, response: response.data }]);
    setMessage('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  return (
    <div className='chatbot'>
      <div className='chatbot__body'>
        {conversations.map((conversation, index) => (
          <Messages
            key={index}
            userMessage={conversation.userMessage}
            response={conversation.response}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='chatbot__footer'>
        <input
          className='chatbot__footer--input'
          type='text'
          placeholder='Ask here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && textQuery()}
        />
        <i className='fa-sharp fa-solid fa-location-arrow' onClick={textQuery} />
      </div>
    </div>
  );
};

export default Chatbot;
