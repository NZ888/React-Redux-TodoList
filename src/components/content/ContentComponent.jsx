import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import LayoutGrid from './LayoutGrid.jsx';

const { Content } = Layout;

const ContentComponent = () => (
    <Layout style={{ minHeight: '100vh' }}>
        <Content
            style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                color: '#fff',
                background: '#0958d9'
            }}
        >
            <LayoutGrid />
            <Outlet />
        </Content>
    </Layout>
);

export default ContentComponent;
