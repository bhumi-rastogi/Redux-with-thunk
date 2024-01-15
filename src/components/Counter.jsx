import { useState } from 'react';
import { applyMiddleware, createStore } from 'redux';
import Reducer from './Reducer';
import { getUsersData, displayErrors } from './Action';
import axios from 'axios';
import {thunk} from 'redux-thunk';
import '../App.css';

const store = createStore(Reducer, applyMiddleware(thunk));

const getData= () => () => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        store.dispatch(getUsersData(response.data))
    })
    .catch(error => {
        store.dispatch(displayErrors(error.message))
    });
};

const Counter = () => {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState(false);
 
  const onButtonClick = () => {
    store.dispatch(getData());
    toggle();
  }
  store.subscribe(() => {
    setUsers(store.getState().usersList);
  });

  const toggle = () => {
    setDisplayUsers(!displayUsers);
  };

  return (
    <>
      {displayUsers && (
                            <div>
                            {users.map(user => (
                                                    <div key={user.id}>
                                                    <div>
                                                        <h3>{user.name}</h3>
                                                        <h4>{user.email}</h4>
                                                    </div>
                                                    <hr/>
                                                    </div>
                                                ))}
                            </div>
                        )}

      <button className="main-button" onClick={onButtonClick}>
        {displayUsers ? 'Hide Users' : 'Display Users'}
      </button>
    </>
  );
}
  
export default Counter;