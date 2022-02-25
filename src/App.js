import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import { AUTHORS } from './constants/common';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';

const initialChats = {
  id1: {
    name: 'Chat1',
    messages: [{ text: 'firstMessage', author: AUTHORS.bot }]
  },
  id2: {
    name: 'Chat2',
    messages: [{ text: 'Second chat by Me', author: AUTHORS.me }]
  },
  id3: {
    name: 'Chat3',
    messages: [{ text: 'Second chat by Me 3333', author: AUTHORS.me }]
  },
  id4: {
    name: 'Chat4',
    messages: [{ text: 'Second chat by Me 4444', author: AUTHORS.me }]
  }
};

export const MyThemeContext = React.createContext({ theme: 'dark' });
export const DataContext = React.createContext({ messages: ['hello', 'buy'] });
export const LocalizationContext = React.createContext('en');

function App() {
  const [chats, setChats] = useState(initialChats);

  return (
    <LocalizationContext.Provider value={'en'}>
      <DataContext.Provider value={{ messages: ['hello', 'buy'] }}>
        <MyThemeContext.Provider value={{ theme: 'dark' }}>
          <header className='App-header'>
            <List sx={{
              width: '100%',
              maxWidth: 350,
              bgcolor: 'background.paper',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <ListItem>
                <Link to='/' className='link'>Home</Link>
              </ListItem>
              <ListItem>
                <Link to='/profile' className='link'>Profile</Link>
              </ListItem>
              <ListItem>
                <Link to='/chats' className='link'>Chats</Link>
              </ListItem>
            </List>
            <br />
            <br />

            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/chats/:chatId' element={
                <Chats chats={chats} setChats={(chat) => setChats(chat)} />}
              />
              <Route path='*' element={<NotFound chats={chats} />} />
            </Routes>

          </header>
        </MyThemeContext.Provider>
      </DataContext.Provider>
    </LocalizationContext.Provider>
  );
}

export default App;
