import React from 'react';
import { Modal} from "antd";

const EditTaskModal = ({isModalOpen, handleOk, handleCancel, taskInfo = []}) => {
    const [taskId, taskTitle, taskDescription, taskDate] = taskInfo;
    return (
        <>
            <Modal
                title={`Edit ${taskId} Task Modal`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>task id - {taskId}</p>
                <p>title - {taskTitle}</p>
                <p>description - {taskDescription}</p>
                <p>{taskDate}</p>
            </Modal>
        </>
    );
};

export default EditTaskModal;