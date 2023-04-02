import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
display: flex;
color: #fff;
justify-content: center;
font-size: 18px;
padding: 20px;
list-style: none;
height: 60px;
text-decoration-line: none;
&:hover {
    background:#303030;
    color: #fff;
    border-left: 4px solid #F0F8FF;
    cursor: pointer;
   

}
`;

const SidebarLabel =styled.span`
 margin-left: 18px;
`;

const DropdownLink = styled(Link)`
background: #333333;
height: 50px;
padding-left: 2rem;
text-decoration:none;
color: #fff;
display: list-item;
font-size: 18px;
&:hover {
    background:#303030;
    color: #fff;
    border-left: 4px solid #F0F8FF;
    cursor: pointer;
}

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
       {subnav && item.subNav.map((item, index) => {
            return(
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        }
       )}
      </>
    )
}

export default SubMenu