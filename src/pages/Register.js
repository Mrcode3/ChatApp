import React from "react";
import Add from "../img/AddAvatar.jpg";
export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWarpper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="passward" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Have an accout? Login</p>
      </div>
    </div>
  );
};
