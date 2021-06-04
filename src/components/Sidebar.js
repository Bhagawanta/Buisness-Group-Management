import React , { useState } from 'react'
import  { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'
import SidebarData from './SidebarData'
import Submenu from './SubMenu'

const Nav = styled.div`
background: #15171c;
height:80px;
${'' /* width:100%; */}
display:flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left:2rem;
font-size: 2rem;
display:flex;
justify-content:flex-start;
align-items:center;
color:white;
`;

const SidebarNav = styled.div`
background: #15171c;
width: 250px;
height:100vh;
display:flex;
justify-content: center;
position: absolute;
top:20;
left: ${({sidebar}) => (sidebar ? '0' : '-100%') };
transition: 350ms;
z-index:10;
`;

const SidebarWrap = styled.div`
width:100%;
`;
const Sidebar = () => {
    const [sidebar ,setSidebar] = useState(true);

    const showsidebar = () =>{ 
        // alert("OK")
        setSidebar(!sidebar);}
    return (
      <>
            <Nav>
             <NavIcon to='#'>
             <FaIcons.FaBars onClick = {showsidebar}/>
              {/* <Header>
              Buisness Group Management
              </Header> */}
             </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
             <SidebarWrap>
             {/* <NavIcon to='#'>
                 <AiIcons.AiOutlineClose onClick = {showsidebar}/>
             </NavIcon> */}
             {SidebarData.map((item,index)=>{
                     return <Submenu item={item} key={index}/>
                 })
             }
             </SidebarWrap>
            </SidebarNav>
      </>
    )
}

export default Sidebar
