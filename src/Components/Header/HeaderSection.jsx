import {
  CaretDownOutlined,
  LogoutOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Dropdown,
  Layout,
  Popover,
  QRCode,
  Select,
  Space,
  Timeline,
} from "antd";
import React, { useState } from "react";
import { images } from "../../assets/images/images";
import { ReactComponent as Bell } from "../../assets/svgs/Bell.svg";
import { ReactComponent as Check } from "../../assets/svgs/Checkbox.svg";
import { ReactComponent as Gift } from "../../assets/svgs/Gift.svg";
import { ReactComponent as Office } from "../../assets/svgs/Office.svg";
import { ReactComponent as Moon } from "../../assets/svgs/moon.svg";
import { ReactComponent as Sun } from "../../assets/svgs/sun.svg";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderSection.scss";
const { Header } = Layout;
const { Option } = Select;

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

const timeline = (
  <Timeline
    items={[
      {
        color: "green",
        children: "Create a services site 2015-09-01",
      },
      {
        color: "green",
        children: "Solve initial network problems 2015-09-01",
      },
      {
        color: "green",
        children: "Technical testing 2015-09-01",
      },
      {
        color: "green",
        children: "Network problems being solved 2015-09-01",
      },
    ]}
  />
);

const options = [
  {
    // icon: <America className="flages" />,
    label: <span className="countryLabel">English</span>,
    value: "english",
    icon: <img src={images.English} className="flages" />,
  },
  {
    label: <span className="countryLabel">French</span>,
    value: "french",
    icon: <img src={images.France} alt="french" className="flages" />,
  },
  {
    label: <span className="countryLabel">German</span>,
    value: "german",
    icon: <img src={images.Germany} alt="german" className="flages" />,
  },
];

function HeaderSection() {
  const [theme, settheme] = useState();

  // profile
  const items = [
    {
      label: (
        <div className="profileXs">
          <h3 className="xsName">Franklin Jr.</h3>
          <p className="xsPost">Super Admin</p>
        </div>
      ),
      key: "0",
    },
    {
      icon: <UserOutlined />,
      label: <span className="profileDropdown">Profile</span>,
      key: "1",
    },
    {
      icon: <MailOutlined />,
      label: <span className="profileDropdown">Inbox</span>,
      key: "2",
    },
    {
      icon: <LogoutOutlined />,
      label: <span className="profileDropdown">Logout</span>,
      key: "3",
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function handlethemechange() {
    console.log(theme);
    if (theme === "dark") {
      settheme("");
      document.documentElement.setAttribute("data-theme", "");
    } else {
      settheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  return (
    <Header className="header">
      {/* search bar */}
      <SearchBar className="searchBar" />
      <a href="/home" className="othermenu">
        OTHER MENUS
      </a>

      {/* badge section */}
      <div className="badge-wrapper">
        <Popover
          content={content}
          trigger="click"
          overlayClassName="notificationPopover"
        >
          <Badge count={12} offset={[-3, 1]}>
            <Bell />
          </Badge>
        </Popover>

        <Popover
          content={timeline}
          trigger="click"
          overlayClassName="notificationPopover"
        >
          <Badge count={5} offset={[-3, 1]}>
            <Gift />
          </Badge>
        </Popover>

        <Popover
          content={timeline}
          trigger="click"
          overlayClassName="notificationPopover"
        >
          <Badge count={2} offset={[-3, 1]}>
            <Check />
          </Badge>
        </Popover>

        <Popover
          content={
            <QRCode value={"https://www.simform.com/"} bordered={false} />
          }
          trigger="click"
        >
          <Badge count={"!"} offset={[-3, 1]} className="warning-badge">
            <Office />
          </Badge>
        </Popover>
      </div>

      <Button
        onClick={() => handlethemechange()}
        className="themeBtn"
        ant-click-animating="false"
      >
        {theme === "dark" ? (
          <Sun className="themeIcon" />
        ) : (
          <Moon className="themeIcon" />
        )}
      </Button>
      <div className="country">
        <Select
          onChange={handleChange}
          defaultValue={options[0].value}
          suffixIcon={<CaretDownOutlined className="countryLabel" />}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.icon} {option.label}
            </Option>
          ))}
        </Select>
      </div>
      <Divider type="vertical" />

      {/* profile section */}
      <div className="HeaderProfile">
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Space>
            <img src={images.Profile} alt="" />
            <div className="Profile">
              <h3 className="ProfileName">Franklin Jr.</h3>
              <p className="ProfilePost">Super Admin</p>
            </div>
            <CaretDownOutlined className="downArrow" />
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderSection;
