import { Fab, TextField, useTheme } from '@mui/material';
import { Send } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/actions';
import { AUTHORS } from '../constants/common';

const ControlPanel = () => {
  const [value, setValue] = useState('');
  const theme = useTheme();
  const { chatId } = useParams();
  const { name } = useSelector(state => state.profile);
  const allMessages = useSelector(state => state.messages.messageList);
  const dispatch = useDispatch()
  const messages = allMessages?.[chatId];

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleButton = () => {
    if (value !== '') {
      const message = {
        text: value,
        author: name
      }
      dispatch(addMessage(chatId, message))
      setValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButton();
    }
  };

  useEffect(() => {
    let timer;
    if (messages?.length > 0 && messages[messages.length - 1]?.author === name) {
      timer = setInterval(() => {
        const message = {
          text: 'Привет, это сообщение от бота',
          author: AUTHORS.bot
        }
        dispatch(addMessage(chatId, message))
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, name, chatId, messages]);

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
  );
};

export default ControlPanel;
