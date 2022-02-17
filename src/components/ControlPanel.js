import { Fab, TextField, useTheme } from '@mui/material';
import { Send } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { AUTHORS } from '../constants/common';
import { useParams } from 'react-router-dom';

const ControlPanel = (props) => {
  const { chats, setChats } = props;
  const [value, setValue] = useState('');
  const theme = useTheme();
  const { chatId } = useParams();


  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleButton = () => {
    if (value !== '') {
      const newObject = {
        ...chats,
        [chatId]: {
          name: chats[chatId].name,
          messages: [...chats[chatId].messages, {
            text: value,
            author: AUTHORS.me
          }]
        }
      }
      setChats(newObject)
      setValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButton();
    }
  };

  // useEffect(() => {
  //   let timer;
  //   if (messageList.length > 0 && messageList[messageList.length - 1]?.author === AUTHORS.me) {
  //     timer = setInterval(() => setMessageList([
  //       ...messageList,
  //       {
  //         text: 'Привет, это сообщение от бота',
  //         author: AUTHORS.bot
  //       }
  //     ]), 1500);
  //   }
  //
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [messageList]);

  return (
    <div className={'controlPlace'}>
      <TextField
        style={{ margin: '20px' }}
        id='outlined-basic'
        label='Введите сообщение'
        variant='outlined'
        type='text'
        value={value}
        autoFocus
        onChange={handleInput}
      />
      <Fab
        color='primary'
        onClick={handleButton}
        onKeyDown={handleKeyDown}
        style={{
          borderColor: theme.palette.secondary
        }}
      >
        <Send />
      </Fab>
    </div>
  )
}

export default ControlPanel
