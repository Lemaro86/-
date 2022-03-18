import PropTypes from 'prop-types';
import { AccountCircle, Android } from '@mui/icons-material';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { AUTHORS } from '../constants/common';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMessagesByChatIdWithFB } from '../store/middleware';

const MessageList = () => {
  const allMessages = useSelector(state => state.messages.messageList);
  const { chatId } = useParams();
  const messages = allMessages[chatId];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesByChatIdWithFB(chatId));
  }, [chatId]);

  return (
    <div className='messenger'>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        {messages?.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{item.author !== AUTHORS.bot ? <AccountCircle /> : <Android />}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} secondary={item.author} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

// MessageList.defaultProps = {
//   messages: []
// }

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string
    }))
};

export default MessageList;
