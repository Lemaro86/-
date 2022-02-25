import { useParams, Link } from 'react-router-dom';
import { Dialog, List, ListItem, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../store/chats/actions';

const ChatList = () => {
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState('');
  const chats = useSelector(state => state.chats.chatList);

  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleOpen = () => setVisible(true);

  const handleChange = (event) => setChatName(event.target.value);

  const onAddChat = () => {
    dispatch(addChat(chatName));
    setChatName('');
    setVisible(false);
  }

  return (
    <>
      <List>
        {chats?.map((chat, index) => (
          <ListItem key={index}>
            <Link to={`/chats/${chat.id}`}>
              <b style={{ color: chat.id === chatId ? '#000000' : 'grey' }}>
                {chat.name}
              </b>
            </Link>
          </ListItem>
        ))}
      </List>
      <button onClick={handleOpen}>Add Chat</button>
      <Dialog open={visible} onClose={() => setVisible(false)}>
        <TextField value={chatName} onChange={handleChange} />
        <Button onClick={onAddChat}>Submit</Button>
      </Dialog>
    </>
  );
};

export default ChatList


