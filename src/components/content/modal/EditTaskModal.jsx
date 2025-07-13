import React from 'react';
import { Modal} from "antd";
import FormComponent from "../../create-task-page/form/FormComponent.jsx";

const EditTaskModal = ({isModalOpen, handleCancel, taskInfo = []}) => {
    const [taskId, taskTitle, taskDescription, taskDate, categories] = taskInfo;
    const task = {
        id:taskId,
        title: taskTitle,
        description: taskDescription,
        categories: categories,
        date: taskDate,
    }
    return (
        <>
            <Modal
                title={`Edit ${taskId} Task Modal`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormComponent existableTaskInfo={task}/>
            </Modal>
        </>
    );
};

export default EditTaskModal;