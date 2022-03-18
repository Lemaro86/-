import React, { useCallback, useState } from 'react';
import { changeName, exampleAction } from '../store/profile/actions';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { showName, name } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);

  const toggleShowName = useCallback(() => {
    dispatch(exampleAction);
  }, [dispatch]);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleButton = () => {
    dispatch(changeName(value));
    toast.success('Name has been changed');
  };

  return (
    <div>
      <ToastContainer />
      <h1>Профиль</h1>
      <span>Введите свои имя для использования его в чатах </span>
      <br />
      <br />
      <br />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={showName} onChange={toggleShowName} />
          }
          label='Показать/Скрыть форму для ввода имени'
        />
      </FormGroup>
      <br />
      <br />
      <br />

      {showName && <div style={{ display: 'flex' }}>
        <TextField
          value={value}
          onChange={handleInput}
          placeholder={'Введите ваше имя'}
        />

        <div style={{ width: 20 }} />

        <Button
          size='large'
          color='primary'
          onClick={handleButton}
        >
          Сохранить
        </Button>
      </div>}
    </div>
  );
};

export default Profile;
