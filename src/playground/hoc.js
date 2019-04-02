// Higher Order Component (HOC) - Component (HOC) to render other component  
// Goal: reuse code
// reder hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This: {props.info}</p>
    </div>
);

// HOC 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>Admin warning</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Auth</p>}
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAdminInfo(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="Holaaa"/>, document.getElementById('app'));