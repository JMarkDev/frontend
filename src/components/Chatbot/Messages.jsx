import React, { useState, useEffect } from 'react';

const Messages = (props) => {
  const [messageLength, setMessageLength] = useState(0);
  const [formattedResponse, setFormattedResponse] = useState('');

  useEffect(() => {
    if (props.response) {
      setFormattedResponse(props.response.data.replace(/\n/g, '<br>'));
    }
  }, [props.response]);

  useEffect(() => {
    if (formattedResponse) {
      const messageInterval = setInterval(() => {
        setMessageLength((prevLength) =>
          prevLength < formattedResponse.length ? prevLength + 1 : prevLength
        );
      }, 20);
      return () => clearInterval(messageInterval);
    }
  }, [formattedResponse]);

  return (
    <div className='messages'>
      {props.userMessage && (
        <div className='message__user--section'>
          <p className='messages__user'>{props.userMessage}</p>
        </div>
      )}
      {props.response && (
        <div className='messages__df--section'>
          <p
            className='messages__df'
            dangerouslySetInnerHTML={{ __html: formattedResponse.slice(0, messageLength) }}
          />
        </div>
      )}
    </div>
  );
};

export default Messages;
