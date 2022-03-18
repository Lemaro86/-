import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../services/firebase';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const auth = getAuth(firebase);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Регистрация пользователя</h1>
        <p>Введите логин и пароль для регистрации.</p>
        <div>
          <TextField
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
            placeholder={'Введите ваш Email'}
            fullWidth
          />
        </div>
        <br />
        <div>
          <TextField
            type={'password'}
            name='password'
            value={password}
            onChange={handlePassword}
            placeholder={'Введите пароль'}
            fullWidth
          />
          <br/>
        </div>
        {error && <div>{error}</div>}
        <Button variant='outlined' type='submit'>Зарегистрировать пользователя</Button>
        <p>Если у вас уже есть аккаунт, то перейдите по ссылке <Link to='/login'>Логин</Link></p>
      </form>
    </div>
  );
};

export default Registration;
