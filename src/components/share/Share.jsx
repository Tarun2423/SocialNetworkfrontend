import React from 'react'
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/persons/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="Whats's in your mind!" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo/Vedio</span>
                        </div>
                        <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                        <EmojiEmotions htmlColor="yellow" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
