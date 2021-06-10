import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, logger]
const store = createStore(
	persistedReducer,
	composeWithDevTools(
		applyMiddleware(...middleware),
	),
);
const persistor = persistStore(store)


export { store, persistor };
