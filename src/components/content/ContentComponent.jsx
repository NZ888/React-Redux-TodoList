
import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const ContentComponent = () => (
    <Content style={contentStyle}>
        <Outlet />
    </Content>
);

export default ContentComponent;
