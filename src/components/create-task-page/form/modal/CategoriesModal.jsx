import React from 'react';
import {Modal, Tabs} from "antd";
import CreateTab from "./tabs/CreateTab.jsx";
import DeleteTab from "./tabs/DeleteTab.jsx";
const tabItems = [
    {
        key: '1',
        label: 'Create',
        children: <CreateTab/>,
    },
    {
        key: '2',
        label: 'Delete',
        children: <DeleteTab/>,
    },
];
const onChangeTab = () => {

};
const CategoriesModal = ({isModalOpen, handleOk, handleCancel}) => {
    return (
        <Modal
            title="Categories Settings"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Tabs defaultActiveKey="1" items={tabItems} onChange={onChangeTab} />
        </Modal>
    );
};

export default CategoriesModal;