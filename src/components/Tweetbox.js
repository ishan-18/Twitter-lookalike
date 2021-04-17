import React from 'react'
import './Tweetbox.css'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { Avatar, Button } from '@material-ui/core'

function Tweetbox() {
    return (
        <div className="Tweet-box">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <input placeholder="What's Happening?" />
                </div>
                <div className="tweetBox__input1">
                    <InsertPhotoIcon className="ImageIcon" />
                    <input placeholder="Enter Image Url" />
                </div>
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
