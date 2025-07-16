import React, {useState, useCallback} from 'react';
import {Button, Divider} from "antd";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../Redux/slices/tasksSlice.js";
import EditTaskModal from "./modal/EditTaskModal.jsx";
const CategoryItem = ({id, title, description, date = null, categories, messageAPI}) => {

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickDelete = useCallback(() => {
        messageAPI
            .open({ type: 'success', content: `Deleted ${id}`})
        dispatch(deleteTask(id))
    }, [dispatch, id, messageAPI])

    const onClickEdit = useCallback(() => {
        setIsModalOpen(true);
    }, [])

    const handleOk = useCallback(() => {
        setIsModalOpen(false);
    }, [])

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            <EditTaskModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} taskInfo={[id, title, description, date, categories]}/>
            <div data-id-task={id}>
                <h2>Title: {title}</h2>
                <p>Description: {description}</p>
                <p>{date !== null ? `${date[0]} - ${date[1]}`: null}</p>
                <Button type="primary" onClick={onClickEdit}>Edit</Button>
                <Button style={{marginLeft: "8px"}} onClick={()=>{onClickDelete(id)}}>Delete</Button>
                <Divider />
            </div>
        </>
    );
};

export default React.memo(CategoryItem);