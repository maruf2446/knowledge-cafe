import React from 'react';
import './SIdebar.css';

const Sidebar = (props) => {
    const { Blog_title } = props.carts;
    return (
        <>
          <div className="title-element">
              <h1>{Blog_title}</h1>
          </div>
        </>
    );
};

export default Sidebar;