import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import profileReducer from './profile/reducer';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
// import middleware from './middleware';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import gistsReducer from './gists/reducer';

const reducers = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
  gists: gistsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
   key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
