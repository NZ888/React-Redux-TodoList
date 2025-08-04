import React, {useState} from 'react';
import {Button, Modal} from "antd";
import SearchFieldsComponent from "./SearchFieldsComponent.jsx";

const SearchModalComponent = ({theme}) => {
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
    const modernSearchModalStyles = {
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
                footer={null}
                styles={theme === "modernTheme" ? modernSearchModalStyles : null}
            >
                <SearchFieldsComponent theme={theme}/>
            </Modal>
        </>
    );
};

export default SearchModalComponent;