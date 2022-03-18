import { List, ListItem } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Gists from './Gists';
import Chats from './Chats';
import NotFound from './NotFound';
import React from 'react';
import Registration from './Registration';
import Login from './Login';
import RequireAuth from '../hocs/RequireAuth';

export const MyThemeContext = React.createContext({ theme: 'dark' });
export const DataContext = React.createContext({ messages: ['hello', 'buy'] });
export const LocalizationContext = React.createContext('en');

const Routers = () => {
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
              <ListItem>
                <Link to='/registration' className='link'>Рега</Link>
              </ListItem>
              <ListItem>
                <Link to='/login' className='link'>Войти</Link>
              </ListItem>
            </List>
            <br />
            <br />

            <Routes>
              <Route path={'/'} exact element={<Home />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/registration' exact element={<Registration />} />

              <Route element={<RequireAuth />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/gists' element={<Gists />} />
                <Route path='/chats/:chatId' element={<Chats />} />
              </Route>

              <Route path='*' element={<NotFound />} />
            </Routes>

          </header>
        </MyThemeContext.Provider>
      </DataContext.Provider>
    </LocalizationContext.Provider>
  )
}

export default Routers;
