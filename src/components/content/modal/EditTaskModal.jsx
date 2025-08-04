import React from 'react';
import { Modal} from "antd";
import FormComponent from "../../create-task-page/form/FormComponent.jsx";

const EditTaskModal = ({isModalOpen, handleCancel, taskInfo = [], theme}) => {
    const [taskId, taskTitle, taskDescription, taskDate, categories, isDone] = taskInfo;
    const task = {
        id:taskId,
        title: taskTitle,
        description: taskDescription,
        categories: categories,
        date: taskDate,
        isDone: isDone,
    }
    const modernEditTaskModalStyles = {
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
            <Modal
                title={`Edit ${taskId} Task Modal`}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                styles={theme === "modernTheme" ? modernEditTaskModalStyles : null}
            >
                <FormComponent existableTaskInfo={task}/>
            </Modal>
        </>
    );
};

export default EditTaskModal;