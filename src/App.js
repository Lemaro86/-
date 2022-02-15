import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AUTHORS } from './constants/common';
import { Fab, Paper, TextField, useTheme } from '@mui/material';
import { Send } from '@mui/icons-material';
import MessageList from './components/MessageList';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const theme = useTheme();

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleButton = () => {
    if (value !== '') {
      setMessageList([...messageList, {
        text: value,
        author: AUTHORS.me
      }]);
      setValue('');
    }
  };

  useEffect(() => {
    let timer;
    if (messageList.length > 0 && messageList[messageList.length - 1]?.author === AUTHORS.me) {
      timer = setInterval(() => setMessageList([
        ...messageList,
        {
          text: 'Привет, это сообщение от бота',
          author: AUTHORS.bot
        }
      ]), 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <>
      <header className='App-header'>
        My SUPER puper app!
        <Paper elevation={1}>Наш массив:
          <MessageList messages={messageList} />
        </Paper>
        <div className={'controlPlace'}>
          <TextField
            style={{ margin: '20px' }}
            id='outlined-basic'
            label='Введите сообщение'
            variant='outlined'
            type='text'
            value={value}
            onChange={handleInput}
          />
          <Fab
            color='primary'
            onClick={handleButton}
            style={{
              borderColor: theme.palette.secondary
            }}
          >
            <Send />
          </Fab>
        </div>

      </header>
    </>
  );
}

export default App;
