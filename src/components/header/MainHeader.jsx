import React from 'react';
import {Layout} from "antd";
import MenuComponent from "../menu /MenuComponent.jsx";
import {GithubOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

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
    gap: 20,
    zIndex: 5,
    position: 'relative'
};

const modernHeaderStyle = {
    ...baseHeaderStyle,
    background: "rgba(255, 255, 255, 0.12)",
}

const githubLogoStyle = {
    fontSize: 30,
    color: '#fff',
}
const MainHeader = () => {
    const openGithubProfile = () => {
        window.open('https://github.com/NZ888', '_blank');
    };
    const theme = useSelector((state) => state.theme.theme);
    return (
        <>
            <Header style={theme === "modernTheme" ? modernHeaderStyle : baseHeaderStyle}>
                <MenuComponent theme={theme} />
                <GithubOutlined style={githubLogoStyle} onClick={openGithubProfile}/>
            </Header>
        </>
    );
};

export default MainHeader;