import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
 display:flex;
 color: #e1e7fc;
 justify-content:center;
 align-items:center;
 ${'' /* padding: 20px; */}
 list-style: none;
 height: 60px;
 text-decoration: none;
 font-size: 18px;


 &:hover{
     background: #252831;
     border-left: 4px solid #fff;
     cursor: pointer;
 }
`;
const SidebarLabel = styled.span`
margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background:#414757;
height:50
px;
padding-left: 3rem;
display: flex;
padding-top:1rem;
align-item:center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;
&:hover{
    background: #fff;
    cursor:pointer;
}
`;
const Submenu = ({item}) => {
    const [subNav ,setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subNav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                 {item.icon}
                 <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                {
                    item.subNav && subNav ? item.iconOpen :item.subNav ? item.iconClosed :null
                }
                </div>
            </SidebarLink>
            { subNav && item.subNav.map((item,index)=>{
                return (
                    <DropdownLink to={item.path} kay={item.index}>
                     {item.icon}
                     <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu