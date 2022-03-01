import { ADD_MESSAGE, addMessage } from './messages/actions';
import { AUTHORS } from '../constants/common';

const middleware = store => next => action => {
  if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHORS.bot){
    const botMessage = {
      author: AUTHORS.bot,
      text: 'Привет это сообщение от Бота из миддлвары!'
    }

    setTimeout(()=>{
      store.dispatch(addMessage(action.payload.chatId, botMessage))
    }, 1000);
  }

  return next(action);
}

export default middleware
