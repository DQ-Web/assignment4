import React from 'react'
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            <img src="https://innicanow.com/wp-content/uploads/2012/02/money-clip-art1.jpg" alt="bank" />
            <h1>Bank of React</h1>

            <ul>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/userProfile">User Profile</Link></li>
            </ul>

            <AccountBalance accountBalance={props.accountBalance} />
        </div>
    )
}

export default Home
