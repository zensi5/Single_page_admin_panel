import React from 'react'
import { Layout, Space, Divider, Dropdown, Menu, Button, Badge, Popover, Avatar, Timeline, Drawer, Select, QRCode } from "antd";
import { ReactComponent as GiftIcon } from "../../assets/svgs/Gift.svg";

const timeline = (
    <Timeline
        items={[
            {
                color: 'green',
                children: 'Create a services site 2015-09-01',
            },
            {
                color: 'green',
                children: 'Solve initial network problems 2015-09-01',
            },
            {
                color: 'green',
                children: 'Technical testing 2015-09-01',
            },
            {
                color: 'green',
                children: 'Network problems being solved 2015-09-01',
            },
        ]}
    />
)

function Gift() {
    return (

        <Popover content={timeline} trigger="click" overlayClassName="notificationPopover">
            <Badge count={5} offset={[-3, 1]}>
                <GiftIcon />
            </Badge>
        </Popover>
    )
}

export default Gift