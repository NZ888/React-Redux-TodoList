import React from 'react';
import { Spin } from 'antd';

const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)',   // 64 — высота вашего Header
};

export default function FullPageSpinner() {
    return (
        <div style={wrapper}>
            <Spin size="large" tip="Загрузка..." />
        </div>
    );
}
