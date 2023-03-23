import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
display: flex;
color: #fff;
justify-content: center;
font-size: 30px;
padding: 20px;
list-style: none;
height: 60px;
&:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
}
`;

const SidebarLabel =styled.span`
 margin-left: 18px;
`;

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (
      <>
       <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
       </SidebarLink>
      </>
    )
}

export default SubMenu