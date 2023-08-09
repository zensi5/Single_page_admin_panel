import { React, useState } from "react";
import "./Contact.scss";
import { Layout } from "antd";
import SideBar from "../../Components/SideBar/SideBar";
import HeaderSection from "../../Components/Header/HeaderSection";
import ContactSection from "../../Components/Contact/ContactSection";
const { Content } = Layout;

const Contact = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="container">
            <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout
                className={`right ${collapsed ? "contact-collapsed" : "contact-expanded"
                    }`}
            >
                <HeaderSection />
                <Content>
                    <ContactSection />
                </Content>
            </Layout>
        </Layout>
    );
};
export default Contact;
