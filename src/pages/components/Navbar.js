import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">Lama chat</div>
      <div className="user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU"
          alt="avatar"
        />
        <span className="">Jonh</span>
        <button className="logout-btn">logout</button>
      </div>
    </div>
  );
};
