import MessageList from '../components/MessageList';
import { Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';

const Chats = () => {
  return (
    <div className='workplace'>
      <div className='chatList'>
        <ChatList />
      </div>

      <div className='chatItem'>
        <Paper elevation={1}>
          <MessageList />
          <ControlPanel />
        </Paper>
      </div>
    </div>
  );
};

export default Chats;
