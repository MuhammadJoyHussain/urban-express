import React from 'react';


const LoginManager = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input 
                     type="text"
                     outoFocus
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input 
                     type="password"
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Login</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        ) : (
                            <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>
    );
};

export default LoginManager;