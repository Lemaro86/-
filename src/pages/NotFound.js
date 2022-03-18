import ChatList from '../components/ChatList';

const NotFound = () => {

  return (
    <div style={{ display: 'flex' }}>
      <ChatList />
      <div className='chatItem'>
        Чат не найден :(<br /><br />
        Выберите чат из списка или создайте новый чат.
      </div>
    </div>
  );
};

export default NotFound;
