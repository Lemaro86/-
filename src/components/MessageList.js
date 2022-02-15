import PropTypes from 'prop-types';

const MessageList = (props) => {
  const { messages } = props;

  return (
    <ul className='messenger'>
      {messages.map((item, index) => (
        <li className='messageBox' key={index}>
          <div className='message'>{item.text}</div>
          <div className='author'>{item.author}</div>
        </li>
      ))}
    </ul>
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
