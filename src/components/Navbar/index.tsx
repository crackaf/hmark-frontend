import React from "react";
import { Button, Layout, Menu } from "antd";
import "./nav_style.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Header } = Layout;

function Navbar() {
  return (
    <Header className="navbar-style">
      <div className="logo" />
      <Menu className="menu" mode="horizontal">
        <Button type="link" className="menu-item" size="large">
          Features
        </Button>
        <Button type="link" className="menu-item" size="large">
          About Us
        </Button>
        <Button type="primary" className="nav-btn" size="large">
          Get Started
          <ArrowRightOutlined style={{ fontWeight: "800" }} />
        </Button>
      </Menu>
    </Header>
  );
}

export default Navbar;
