import PropTypes from 'prop-types';
import { AccountCircle, Android } from '@mui/icons-material';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { AUTHORS } from '../constants/common';

const MessageList = (props) => {
  const { messages } = props;

  return (
    <div className='messenger'>
      <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper' }}>
        {messages?.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{item.author === AUTHORS.me ? <AccountCircle /> : <Android />}</Avatar>
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
