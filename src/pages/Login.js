import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let from = location.state?.from?.pathname || '/';

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
      await auth.signin({ email, password }, () => {
        setTimeout(()=> navigate(from, { replace: true }), 2000);
      });
      toast.success('Вы успешно залогинены!');
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Логин</h1>
        <p>Введите почту и пароль для авторизации.</p>
        <div>
          <TextField
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
            placeholder={'Введите Email'}
            fullWidth
          />
        </div>
        <br />
        <div>
          <TextField
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
            placeholder={'Введите пароль'}
            fullWidth
          />
        </div>
        <br />
        {error && <div>{error}</div>}
        <Button variant='outlined' type='submit'>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
