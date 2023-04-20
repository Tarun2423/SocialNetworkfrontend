import React from 'react'
import "./sidebar.css"
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline, } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Vedios</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/persons/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">John</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
