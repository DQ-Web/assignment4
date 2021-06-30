import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';

const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: 'joe_shmo',
    memberSince: '07/23/96',
  });

  const mockLogIn = logInInfo => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  }

  const HomeComponent = () => (<Home accountBalance={accountBalance} />);

  const UserProfileComponent = () => (
    <UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />
  );

  const LogInComponent = () => (<LogIn user={currentUser} mockLogIn={mockLogIn} />);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
        <Route exact path="/login" render={LogInComponent} />
      </Switch>
    </Router>
  );
}

export default App;
