# Getting Started with Create React-Redux App

## Redux

1.  Store ==> A "store" is a container that holds your application's global state. using Reducer.
2.  Action ==> A plain action object that describes "something that happened in the application.
3.  Dispatch ==> Dispatch the action to the store to tell it what happened. (To update state by calling dispatch function | event listener)
4.  Reducer ==> Reducer is pure function that updates state object on Store.
5.  Subscribe ==> Render UI when state changed.
6.  store.getState() ==> To read current state from Store.

## React-Redux

1.  store --> createStore(Reducer_Function); | store.js
2.  action --> increment/decrement functions that returned TYPE String. | actions.js
3.  reducer --> counterReducer / "Reducer_Function" function that updates state object on Store. | counterReducer.js
4.  connect --> connect(mapStateToProps, mapDispatchToProps)(MyComponent) function connect with Store. | subscribe to store

    i. mapStateToProps --> read current state as props. | as like store.getState()

    ii. mapDispatchToProps --> get dispatch() as props. | as like dispatch() | event listener

    iii. MyComponent --> UI part that will be updated when state is changed.

### React-Redux using Hooks

1.  store --> createStore(Reducer_Function)

2.  action --> increments/decrements action creators.

3.  reducer --> counterReducer | user define function.

4.  useSelector --> to read state and useDispatch --> to update state | event listener

note: do not need connect() function to subscribe.
