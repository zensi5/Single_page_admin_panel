import React from 'react';
import { ReactComponent as BellIcon } from "../../assets/svgs/Bell.svg";
import { Layout, Space, Divider, Dropdown, Menu, Button, Badge, Popover, Avatar, Timeline, Drawer, Select, QRCode } from "antd";
import { images } from "../../assets/images/images";

const content = (
    <ul class="notificationContent">
        <li className="notiWrapper">
            <Avatar size={50} src={<img src={images.Profile1} alt="avatar" />} />
            <div className="notiContent">
                <h6 class="notiTitle">Angela Joined the Team!</h6>
                <p class="notiDescription">Congratulate her</p>
            </div>
        </li>

        <li className="notiWrapper">
            <Avatar size={50} src={<img src={images.Profile2} alt="avatar" />} />
            <div className="notiContent">
                <h6 class="notiTitle">Ahmed completed tasks</h6>
                <p class="notiDescription">Assign him new tasks</p>
            </div>
        </li>

        <li className="notiWrapper">
            <Avatar size={50} src={<img src={images.Profile3} alt="avatar" />} />
            <div className="notiContent">
                <h6 class="notiTitle">New Payment received</h6>
                <p class="notiDescription">Check your earnings</p>
            </div>
        </li>

        <li className="notiWrapper">
            <Avatar size={50} src={<img src={images.Profile4} alt="avatar" />} />
            <div className="notiContent">
                <h6 class="notiTitle">Courtney Joined the Team!</h6>
                <p class="notiDescription">Congratulate her</p>
            </div>
        </li>
    </ul>
);
function Bell() {
    return (
        <Popover content={content} trigger="click" overlayClassName="notificationPopover">
            <Badge count={12} offset={[-3, 1]}>
                < BellIcon />
            </Badge>
        </Popover>
    )
}

export default Bell