import React from 'react';
import {Layout} from "antd";
const {Sider } = Layout;
import { Button } from 'antd';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};
const SiderComponent = () => {
    return (
        <>
            <Sider width="8%" style={siderStyle}>
                    <Button type="primary">Primary Button</Button>
            </Sider>
        </>
    );
};

export default SiderComponent;