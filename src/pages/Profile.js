import { useCallback } from 'react';
import { exampleAction } from '../store/profile/actions';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { showName, name } = useSelector(state => state)
  const dispatch = useDispatch();

  const toggleShowName = useCallback(() => {
    dispatch(exampleAction);
  }, [dispatch]);

  return (
    <div>
      <h1> Profile </h1>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={showName} onChange={toggleShowName} />
          }
          label='Toggle Name'
        />
      </FormGroup>

      <div>Name: {showName ? name : 'No Name'}</div>
    </div>
  );
};

export default Profile;
