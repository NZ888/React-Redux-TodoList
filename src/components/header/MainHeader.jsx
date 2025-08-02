import React from 'react';
import {Layout} from "antd";
import MenuComponent from "../menu /MenuComponent.jsx";
import {GithubOutlined} from "@ant-design/icons";
const { Header} = Layout;

const baseHeaderStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: "10px",
    alignItems: 'center',
    gap: 20
};

const githubLogoStyle = {
    fontSize: 30,
    color: '#fff',
}
const MainHeader = () => {
    const openGithubProfile = () => {
        window.open('https://github.com/NZ888', '_blank');
    };
    return (
        <>
            <Header style={baseHeaderStyle}>
                <MenuComponent/>
                <GithubOutlined style={githubLogoStyle} onClick={openGithubProfile}/>
            </Header>
        </>
    );
};

export default MainHeader;