// import React, { useState } from 'react';
import React from 'react';
import '../App.css'
import { FaTh,FaBars, FaCalculator, FaMagnet, FaLaptop, FaTeamspeak, FaAddressCard } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: '/computer',
      name: 'Computer',
      icon: <FaLaptop />
    },
    {
      path: '/chemistry',
      name: 'Chemistry',
      icon: <FaTh />
    },
    {
      path: '/english',
      name: 'English',
      icon: <FaAddressCard />
    },
    {
      path: '/maths',
      name: 'Maths',
      icon: <FaCalculator />
    },
    {
      path: '/physics',
      name: 'Physics',
      icon: <FaMagnet />
    },
    {
      path: '/tamil',
      name: 'Tamil',
      icon: <FaTeamspeak />
    },
  ];

  return (
    <div className='container'>
      <div className="sidebar">
      {/* <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar"> */}
        <div className="top_section">
          {/* <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1> */}
          <h1 className='logo'>Logo</h1>
          {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"> */}
          <div className="bars">
            {/* <FaBars onClick={toggle}/> */}
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active">
            <div className="icon">{item.icon}</div>
            {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
