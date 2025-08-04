import React from 'react';
import {Modal, Tabs} from "antd";
import CreateTab from "./tabs/CreateTab.jsx";
import DeleteTab from "./tabs/DeleteTab.jsx";

const onChangeTab = () => {
  
}
const modernCatModalStyles = {
    mask: {
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(3px)',
    },

    content: {
        background: 'rgba(255,255,255,0.56)',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    },

    header: { background: 'transparent', borderBottom: 'none' },
    body:   { background: 'transparent' },
    footer: { background: 'transparent', borderTop: 'none' },
}
const CategoriesModal = ({isModalOpen, handleOk, handleCancel, theme}) => {
    const tabItems = [
        {
            key: '1',
            label: 'Create',
            children: <CreateTab theme={theme} />,
        },
        {
            key: '2',
            label: 'Delete',
            children: <DeleteTab/>,
        },
    ];
    return (
        <Modal
            title="Categories Settings"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            styles={theme === "modernTheme" ? modernCatModalStyles : null}
        >
            <Tabs defaultActiveKey="1" items={tabItems} onChange={onChangeTab} />
        </Modal>

    );
};

export default CategoriesModal;