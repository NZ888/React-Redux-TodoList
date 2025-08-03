+23
-13

import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import LayoutGrid from './LayoutGrid.jsx';
import { useSelector } from 'react-redux';

const { Content } = Layout;

const ContentComponent = () => {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <Layout
            style={{
                minHeight: '100vh',
                background: theme === 'modernTheme' ? 'transparent' : undefined,
            }}
        >
            <Content
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    color: '#fff',
                    background: theme === 'modernTheme' ? 'transparent' : '#0958d9',
                }}
            >
                <LayoutGrid />
                <Outlet />
            </Content>
        </Layout>
    );
};

export default ContentComponent;