import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";

const App = () => {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({
    userName: "joe_shmo",
    memberSince: "07/23/96",
  });
  const [debitTransactions, setDebitTransactions] = useState([]);

  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  const HomeComponent = () => <Home accountBalance={accountBalance} />;

  const UserProfileComponent = () => (
    <UserProfile
      userName={currentUser.userName}
      memberSince={currentUser.memberSince}
    />
  );

  const LogInComponent = () => (
    <LogIn user={currentUser} mockLogIn={mockLogIn} />
  );

  const DebitsCompenent = () => (
    <Debits
      transactions={debitTransactions}
      setTransactions={setDebitTransactions}
      accountBalance={accountBalance}
      setAccountBalance={setAccountBalance}
    />
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/userProfile" render={UserProfileComponent} />
        <Route exact path="/login" render={LogInComponent} />
        <Route exact path="/debits" render={DebitsCompenent} />
      </Switch>
    </Router>
  );
};

export default App;
