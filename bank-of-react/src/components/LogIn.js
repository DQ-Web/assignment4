import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'

const LogIn = props => {
    const [user, setUser] = useState({
        userName: '',
        password: ''
    });
    const [redirect, setRedirect] = useState(false);

    const handleChange = e => {
        const updatedUser = { ...user };
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        setUser(updatedUser);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.mockLogIn(user);
        setRedirect(true);
    }

    return (
        <Fragment>
            {redirect ?
                <Redirect to="/userProfile" />
                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" onChange={handleChange} value={user.userName} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            }
        </Fragment>
    )
}

export default LogIn
