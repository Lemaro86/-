import ChatList from '../components/ChatList';

const NotFound = (props) => {
  return (
    <div>
      <ChatList chats={props.chats} />
      <div>Not Found</div>
    </div>
  );
};

export default NotFound;
