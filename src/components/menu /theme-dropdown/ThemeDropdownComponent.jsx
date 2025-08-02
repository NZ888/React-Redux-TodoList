import React from 'react';
import {AntDesignOutlined, DotChartOutlined, HighlightOutlined} from '@ant-design/icons';
import { Dropdown,  Space } from 'antd';
import {useDispatch} from 'react-redux';
import {changeTheme} from "../../../Redux/slices/themeSlice.js";

const items = [
    {
        label: 'base theme',
        key: 'baseTheme',
        icon: <AntDesignOutlined />,
    },
    {
        label: 'modern theme',
        key: 'modernTheme',
        icon: <DotChartOutlined />,
    },
];

const ThemeDropdownComponent = () => {
    const dispatch = useDispatch();

    const onClick = ({ key }) => {
        dispatch(changeTheme(key));
    };

    return (
        <div>
            <Dropdown menu={{ items, onClick }}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <HighlightOutlined style={{fontSize:"20px", marginTop:"28px", color:"white"}}/>
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default ThemeDropdownComponent;