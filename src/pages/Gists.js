import { useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { getAllGists } from '../store/gists/action';
import { useDispatch, useSelector } from 'react-redux';

const Gists = () => {
  const { gists, request, error } = useSelector(state => state.gists);
  const dispatch = useDispatch();

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    dispatch(getAllGists());
  }, [dispatch]);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
    []);

  if (request) {
    return <CircularProgress />;
  }

  return (
    <div>
      {error && (
        <div>
          <h3>Error</h3>
          <button onClick={requestGists}>Retry</button>
        </div>
      )}
      <ul>{gists.map(renderGist)}</ul>
    </div>
  );
};

export default Gists;
