import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLargeRounded';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I4MEvhya1pSoZN-3NAh4LhMoHZe4wMeLzfYZosnpg=s83-c-mo"/>
                <div className="Sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="Sidebar__search">
                <div className="Sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start a New Chat" type="text" />
                </div>
            </div>

            <div className="Sidebar__chats">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
