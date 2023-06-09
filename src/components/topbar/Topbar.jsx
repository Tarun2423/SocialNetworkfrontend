import React from 'react'
import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">BuddySpot</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend,post" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">5</span>
                    </div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">4</span>
                    </div>
                </div>
                <img src="/assets/persons/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
