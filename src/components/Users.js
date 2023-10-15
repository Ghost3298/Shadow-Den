import React, { useState } from 'react';
import ReturnButton from './ReturnButton';
import users from './UserData';  // Importing users array from the userData.js file
import Search from '../images/search.png';

const Users = () => {
    const [searchedUser, setSearchedUser] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleGoClick = () => {
        const foundUser = users.find(u => u.username === inputValue);

        if (foundUser) {
            setSearchedUser(foundUser);
        } else {
            setSearchedUser(null);
        }
    };

    return (
        <div className='App'>
            <h2>SHADOW <span style={{ color: 'red' }}>DEN</span></h2>
            <input
                type="text"
                name="User"
                id="User"
                placeholder="Enter User Name"
                className="userinput"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleGoClick} className="GO"><img src={Search} alt="GO" style={{ height: "15px" , top : "-2.5px" , position: "relative" }} /></button>

            <div>
                {searchedUser ? (
                    <div className='UserResult'>
                        <h3 id='usernameH'>{searchedUser.username}</h3>
                        <p id='statusP'>Status: {searchedUser.status}</p>
                        <table style={{ width: '100%' }}>
                            <tr>
                                <td style={{ width: '50%' }}>
                                <h4 id='rankH'>Rank:</h4>
                                </td>
                                <td style={{ width: '50%' }}>
                                <h4>{searchedUser.rank}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%' }}>
                                <h4 id='levelH'>Level:</h4>
                                </td>
                                <td style={{ width: '50%' }}>
                                <h4>{searchedUser.level}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%' }}>
                                <h4 id="balanceH">Balance:</h4>
                                </td>
                                <td style={{ width: '50%' }}>
                                <h4>{searchedUser.balance} LBP</h4>
                                </td>
                            </tr>
                        </table>

                    </div>
                ) : (
                    <p>User not found. Please enter a valid username.</p>
                )}
            </div>

            <ReturnButton />
        </div>
    );
};

export default Users;
