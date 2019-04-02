import {createStore} from 'redux';

//Actions generators

//This function is destructuring the params sent and simplyfied the code
const incrementCount = ( {incrementBy = 1} = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ( {count = 0} = {} ) => ({
  type: 'SET',
  count
});

// REDUCERS
// 1. it is a pure option (it doesnt depend in nothing outside it like a variable value)
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type){
      case 'INCREMENT':
          return {
              count: state.count + action.incrementBy
          };
      case 'DECREMENT':
          return {
              count: state.count - action.decrementBy
          };
      case 'RESET':
          return {
              count: 0
          };
      case 'SET':
          return {
              count: action.count
          };
      default: 
          return state;
  }
}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



// Actions - object that get send to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
