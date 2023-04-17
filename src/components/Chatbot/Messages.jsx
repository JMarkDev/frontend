import React, { useState, useEffect } from 'react';

const Messages = (props) => {
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    if (props.response) {
      const messageInterval = setInterval(() => {
        setMessageLength((prevLength) =>
          prevLength < props.response.data.length ? prevLength + 1 : prevLength
        );
      }, 50);
      return () => clearInterval(messageInterval);
    }
  }, [props.response]);

  return (
    <div className='messages'>
      {props.userMessage && (
        <div className='message__user--section'>
          <p className='messages__user'>{props.userMessage}</p>
        </div>
      )}
      {props.response && (
        <div className='messages__df--section'>
          <p className='messages__df'>{props.response.data.slice(0, messageLength)}</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
