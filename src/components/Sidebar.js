import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from "react-icons/fi";
import SidebarData from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


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

`;

const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ns;
z-index: 10;
`;


const SidebarWrap = styled.div`
width:100%;
`;

const Sidebar = (backgroundColor , iconColor) => {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 


  return (
    <>
    <IconContext.Provider value={{color:'white'}}>
    <Nav style={backgroundColor}>
      <NavIcon to='#'>
        <FiIcons.FiAlignCenter onClick={showSidebar} />
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
      <NavIcon to={SidebarData}>
        <AiIcons.AiOutlineClose onClick={showSidebar}/>
      </NavIcon>
      {SidebarData.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      } )}
      </SidebarWrap>
    </SidebarNav>
    </IconContext.Provider>
    </>
  );
};
 


export default Sidebar
