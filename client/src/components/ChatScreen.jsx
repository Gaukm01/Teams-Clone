import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageGroup,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const ChatScreen = () => {
  const { name, call, sendMessage, recieveMessage, callAccepted } = useContext(SocketContext);

  const [messageList, setMessageList] = useState([]);

  const [messageRecieved, setMessageRecieved] = useState({});

  useEffect(() => {
    console.log('calling reciever1',)
    recieveMessage(setMessageRecieved)
  }, [])

  const handleSendButton = function (text) {
    const message = {
      id: Math.floor(Math.random()*1000),
      message: text,
      sentTime: "Abhi",
      sender: "Pika",
      direction: 'outgoing'
    }
    console.log(message);
    setMessageList([...messageList, message])
    sendMessage(JSON.stringify(message))
  }

  console.log(messageRecieved, 'rececerfvfv')

  useEffect(() => {
    if(typeof messageRecieved === 'object' && messageRecieved['message']){
      let flag = true;
      //const messageIds = messageList.map(m => m.id)
      for ( let message of messageList ){
        if (message.id == messageRecieved.id ) {
           flag = false;
        }
      }
      if (flag) setMessageList([...messageList, {...messageRecieved, direction: 'incoming'}])    
    }
  }, [messageRecieved])

  return (

    <>
      { callAccepted && 
        <div style={{ position: "relative", height: "500px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList>
                {
                  messageList.map((m, i) =>
                    <MessageGroup key={i} direction={m.direction}>
                      <MessageGroup.Messages>
                          <Message
                            key={i}
                            model={m}
                          />
                      </MessageGroup.Messages>
                    </MessageGroup>
                  )
                }
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSendButton} />
            </ChatContainer>
          </MainContainer>
        </div>
      }
    </>
  );

};
export default ChatScreen;

