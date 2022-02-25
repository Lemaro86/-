import React, { useCallback, useState } from 'react';
import { changeName, exampleAction } from '../store/profile/actions';
import { Checkbox, Fab, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Send } from '@mui/icons-material';
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
      <h1> Profile </h1>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={showName} onChange={toggleShowName} />
          }
          label='Toggle Name'
        />
      </FormGroup>

      {showName && <div>
        <TextField
          value={value}
          onChange={handleInput}
        />

        <Fab
          color='primary'
          onClick={handleButton}
        >
          <Send />
        </Fab>
      </div>}
    </div>
  );
};

export default Profile;
