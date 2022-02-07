import { createStore } from 'redux';
import { counterReducer } from './reducers.js/counterReducer';

const store = createStore(counterReducer);

export default store;