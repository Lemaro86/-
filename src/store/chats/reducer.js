import { ADD_CHAT } from './actions';

const initialState = {
  chatList: []
};

/**
 * type chatList = chatListItem[];
 * type chatListItem = {
 *   id: string;
 *   name: string;
 * }
 * */

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      const newChat = {
        id: `id${state.chatList.length}`,
        name: action.payload
      };

      return {
        ...state,
        chatList: [...state.chatList, newChat]
      };

    default:
      return state;
  }
};

export default chatsReducer;
