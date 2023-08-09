import React from "react";
import "./SideBar.scss";
import { ReactComponent as Icon } from "../../assets/svgs/Icon.svg";
import { ReactComponent as Arrow } from "../../assets/svgs/Arrow.svg";
import { ReactComponent as Dots } from "../../assets/svgs/Dots.svg";
import { ReactComponent as Kleon } from "../../assets/svgs/Kleon.svg";
import { ReactComponent as Hamburger } from "../../assets/svgs/Hamburger.svg";
import { ReactComponent as Calender } from "../../assets/svgs/Calendar.svg";
import { ReactComponent as Comment } from "../../assets/svgs/Comment.svg";
import { ReactComponent as Contacticon } from "../../assets/svgs/Contact.svg";
import { ReactComponent as Dashboard } from "../../assets/svgs/Dashboard.svg";
import { ReactComponent as Email } from "../../assets/svgs/Email.svg";
import { ReactComponent as Invoice } from "../../assets/svgs/Invoice.svg";
import { ReactComponent as Setting } from "../../assets/svgs/Setting.svg";
import { ReactComponent as Thumbnail } from "../../assets/svgs/Thumbnail.svg";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
function SideBar({ collapsed, setCollapsed }) {
  return (
    <Sider width={345} theme="light" className="sidebar" collapsed={collapsed}>
      <div className={`logo ${collapsed ? "collapsed" : ""}`}>
        <a href="/home" className="iconWrapper">
          {collapsed ? (
            <Icon className="icon" width={40} height={40} />
          ) : (
            <>
              <Icon className="icon" />
              <Kleon className="iconText" />
            </>
          )}
        </a>
        <button className="hamburgerControls">
          <Hamburger
            onClick={() => setCollapsed(!collapsed)}
            className={`hamburger${collapsed ? "collapsed " : ""}`}
          />
        </button>
      </div>
      <Menu
        theme="light"
        mode="inline"
        items={[
          {
            label: (
              <span className={collapsed ? "menuHidden" : "mainmenu"}>
                MAIN MENU
              </span>
            ),

            // hidden: collapsed,
            key: "mainmenu",
          },
          {
            label: "Dashboard",
            key: "dashboard",
            icon: <Dashboard />,
          },
          {
            label: <span className="menu-label">Email</span>,
            key: "email",
            icon: <Email />,
            children: [
              {
                label: "email1",
                key: "email1",
              },
              {
                label: "email2",
                key: "email2",
              },
            ],
          },
          {
            label: "Chat",
            key: "chat",
            icon: <Comment />,
          },
          {
            label: "Kanban",
            key: "Kanban",
            icon: <Thumbnail />,
            children: [
              {
                label: "kanban1",
                key: "kanban1",
              },
              {
                label: "kanban2",
                key: "kanban2",
              },
            ],
          },
          {
            label: "Contact",
            key: "contact",
            icon: <Contacticon />,
          },
          {
            label: "Calender",
            key: "calender",
            icon: <Calender />,
          },
          {
            label: "Invoices",
            key: "invoices",
            icon: <Invoice />,
            children: [
              {
                label: "invoice1",
                key: "invoice1",
              },
              {
                label: "invoice2",
                key: "invoice2",
              },
            ],
          },
          {
            label: "Settings",
            key: "Settings",
            icon: <Setting />,
          },
        ]}
      />
      {collapsed ? (
        <></>
      ) : (
        <>
          <div className="banner">
            <Dots />
            <p className="bannerText">Increase your work with kanban</p>
            <Arrow />
          </div>

          <div className="footerSidebar">
            <p className="footerName">Kleon Clean Admin Dashboard</p>
            <p className="footerRef">
              Made with <span className="redHeart"> ♥</span> by Peterdraw
            </p>
          </div>
        </>
      )}
    </Sider>
  );
}

export default SideBar;
