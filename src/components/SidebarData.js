import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
    {
    title: 'Home' ,
    path: '/home' ,
    icon: <RiIcons.RiHomeHeartLine/> ,
    iconClosed: <RiIcons.RiArrowDownSLine/> ,
    subNav: [
        {
            title: 'Users' ,
            path: '/overview/users' ,
            icon: <IoIcons.IoIosPaper/> ,
        } ,
        {
            title: 'Revenue' ,
            path: '/overview/revenue' ,
            icon: <IoIcons.IoIosPaper/> ,
        } ,
    ]
 } ,
 {
    title: 'Reports' ,
    path: '/reports' ,
    icon: <IoIcons.IoIosPaper/> ,
    iconClosed: <RiIcons.RiArrowDownSLine/> ,
    subNav: [
        {
            title: 'Reports' ,
            path: '/reports/reports1' ,
            icon: <IoIcons.IoIosPaper/> ,
        } ,
        {
            title: 'Reports 2' ,
            path: '/reports/reports2' ,
            icon: <IoIcons.IoIosPaper/> ,
        } ,
        {
            title: 'Reports 3' ,
            path: '/reports/reports3' ,
            icon: <IoIcons.IoIosPaper/> ,
        } ,
    ]
 } ,
 {
    title:'Products' ,
    path:'/products' ,
    icon: <FaIcons.FaOpencart/>
 },
 {
    title: 'Messages' ,
    path: '/messages' ,
    icon: <TbIcons.TbMessageCircle2/> ,
    iconClosed: <TbIcons.TbMessageCircle2/> 
 },
 {
    title: 'Team' ,
    path: '/team' ,
    icon: <AiIcons.AiOutlineTeam/> ,
    iconClosed: <AiIcons.AiOutlineTeam/> 
 }
]



export default SidebarData