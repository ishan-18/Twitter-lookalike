import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="Post">
            <div className="Post__avatar">
                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
            <div className="Post__body">
                <div className="Post__header">
                    <div className="Post__headerText">
                        <h3>Ishan Gawali {""} <span className="Post__headerSpecial"><VerifiedUserIcon className="Post__badge"/>@ishangawali02</span></h3>
                    </div>
                    <div className="Post__headerDescription">
                        <p>Hi Everyone!! I hope Y'll are enjoying my clone build. Thanks :)</p>
                    </div>
                </div>    
                <img className="Post__image" src="https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> 
                <div className="Post__footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
