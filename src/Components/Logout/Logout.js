import React from 'react';

const Logout = ({handleLogout}) => {
    return (
        <section className="logout">
            <button onClick={handleLogout}>Logout</button>
        </section>
    );
};

export default Logout;