import { AUTHORS } from '../../constants/common';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA"

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId: chatId,
    message: message
  }
});

export const addMessageWithSaga = (chatId, message) => ({
  type: ADD_MESSAGE_WITH_SAGA,
  payload: {
    chatId: chatId,
    message: message
  }
})

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== AUTHORS.bot) {
    const botMessage = {
      author: AUTHORS.bot,
      text: 'Привет это сообщение от Бота из redux thunk!'
    };

    setTimeout(() => {
      dispatch(addMessage(chatId, botMessage));
    }, 1000);
  }
};
