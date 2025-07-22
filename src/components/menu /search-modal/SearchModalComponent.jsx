import React, {useState} from 'react';
import {Button, Modal} from "antd";
import SearchFieldsComponent from "./SearchFieldsComponent.jsx";

const SearchModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="dashed" onClick={showModal} style={{backgroundColor:"inherit", color:'white'}}>
                Search Tasks
            </Button>
            <Modal
                title="Search Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <SearchFieldsComponent/>
            </Modal>
        </>
    );
};

export default SearchModalComponent;