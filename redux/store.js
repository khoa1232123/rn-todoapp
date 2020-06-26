import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(rootReducer);

export default store;
