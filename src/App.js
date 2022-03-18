import React from 'react';
import { List, ListItem } from '@mui/material';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';
import Gists from './pages/Gists';

export const MyThemeContext = React.createContext({ theme: 'dark' });
export const DataContext = React.createContext({ messages: ['hello', 'buy'] });
export const LocalizationContext = React.createContext('en');

function App() {

  return (
    <LocalizationContext.Provider value={'en'}>
      <DataContext.Provider value={{ messages: ['hello', 'buy'] }}>
        <MyThemeContext.Provider value={{ theme: 'dark' }}>
          <header className='App-header'>
            <List sx={{
              width: '100%',
              maxWidth: 600,
              bgcolor: 'background.paper',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <ListItem>
                <Link to='/' className='link'>Главная</Link>
              </ListItem>
              <ListItem>
                <Link to='/profile' className='link'>Профиль</Link>
              </ListItem>
              <ListItem>
                <Link to='/chats' className='link'>Чаты</Link>
              </ListItem>
              <ListItem>
                <Link to='/gists' className='link'>Репы</Link>
              </ListItem>
            </List>
            <br />
            <br />

            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/gists' element={<Gists />} />
              <Route path='/chats/:chatId' element={<Chats />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

          </header>
        </MyThemeContext.Provider>
      </DataContext.Provider>
    </LocalizationContext.Provider>
  );
}

export default App;
