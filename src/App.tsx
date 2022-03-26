import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RouterComponent from './routing.component';
import userService from './user/user.service';
import { getUser } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    userService.getLogin().then((user) => {
      console.log(user);
      dispatch(getUser(user));
    });
  }, [dispatch]);
  return (
    <div className="container">
      <Router>
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
