import React from 'react'
import "./Chat.css"
import MoreVert from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import MicIcon from '@material-ui/icons/Mic';
import AttachmentIcon from '@material-ui/icons/Attachment';

function Chat({ messages }) {
    return (
        <div className="Chat">
            <div className="Chat__header">
                <Avatar />

                <div className="Chat__headerInfo">
                    <h4>Room Name</h4>
                    <p>Last Seen at..</p>
                </div>

                <div className="Chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="Chat__body">
                {messages.map(messages => (
                <p className={`Chat__message ${messages.received && "Chat__reciever"}`}>
                    <span className="Chat__name">{messages.name}</span>
                    {messages.message}
                    <span className="Chat__timestamp">
                        {messages.timestamp}
                    </span>
                </p>
                ))}
            </div>

            <div className="Chat__footer">
                <IconButton>
                    <InsertEmotionIcon />
                </IconButton>
                <IconButton>
                    <AttachmentIcon />
                </IconButton>
                <form>
                    <input
                        placeholder='Type a message'type="text"
                    />
                    <IconButton type="submit">
                        <SendRoundedIcon />
                    </IconButton>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
