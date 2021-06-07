import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

 const SidebarData = [
    {
        title: 'Overview',
        path:  '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpen: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Item',
                path:'/overview/item',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Email',
                path:'/overview/email',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Users',
                path:'/overview/users',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Admins',
                path: '/overview/admins',
                icon: <IoIcons.IoIosPaper/>
            }
        ] 
    },
    {
        title: 'Reports',
        path:  '/reports',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpen: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path:'/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path:'/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            }
        ] 
    },
    {
        title: 'Products',
        path:'/products',
        icon: <FaIcons.FaCartPlus/>,
    },
    {
        title: 'Messages',
        path:'/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpen: <RiIcons.RiArrowUpSLine/>,
        subNav: [
            {
                title: 'Message1',
                path: '/messages.messages1',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Message2',
                path: '/messages.messages2',
                icon: <IoIcons.IoIosPaper/>
            }
        ]
    }

]

export default SidebarData
