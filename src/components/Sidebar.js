import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from "react-icons/fi";

const Nav = styled.div`
background: black; 
height: 70px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left:2rem;
font-size: 2.5rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
color: white;
`;

const SidebarNav = styled.nav`

`

const Sidebar = ({backgroundColor}) => {

  return (
    <>
    <Nav style={{ backgroundColor}}>
      <NavIcon to='#'>
        <FiIcons.FiAlignCenter />
      </NavIcon>
    </Nav>
    </>
  );
};
 


export default Sidebar
