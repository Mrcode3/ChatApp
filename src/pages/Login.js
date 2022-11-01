import React from "react";

export const Login = ({ isLogin }) => {
  return (
    <div className="formContainer">
      <div className="formWarpper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passward" />
          <button>Sign in</button>
        </form>
        <p>Don't hava an accout? Register Now!</p>
      </div>
    </div>
  );
};
