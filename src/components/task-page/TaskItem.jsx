import React, {useCallback, useState} from 'react';
import styles from './taskItem.module.css';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {deleteTask} from "../../Redux/slices/tasksSlice.js";
import EditTaskModal from "../content/modal/EditTaskModal.jsx";
const TaskItem = ({task, messageAPI}) => {
    const {id, title, description, isDone, date, categories} = task;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onClickDelete =  useCallback(async () => {
        messageAPI
            .open({ type: 'success', content: `Deleted ${id}`})
        setTimeout(()=>{
            dispatch(deleteTask(id))
            navigate("/tasks")
        }, 2000)

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

    const onClickBack = useCallback(() => {
        navigate("/tasks")
    }, [])

    return (
        <>
            <EditTaskModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} taskInfo={[id, title, description, date, categories, isDone]}/>
            <div className={styles.taskCard} data-task-id={id} style={{overflowY: "auto"}}>
                <h1 style={{textAlign:"center"}}>Title: {title}</h1>
                <br/>
                <h2>Description: {description}</h2>
                <h3>Categories: {categories.join(', ')}</h3>
                <p>{date !== null ? `${date[0]} up to ${date[1]}` : null}</p>
                {isDone && (
                    <p>Task completed!</p>
                )}
                <Button type="primary" onClick={onClickBack} className={styles.taskBtn}>Back</Button>
                <Button type="primary" style={{marginLeft: "8px"}} onClick={onClickEdit} className={styles.taskBtn}>Edit</Button>
                <Button style={{marginLeft: "8px", color:"red"}} onClick={()=>{onClickDelete(id)}} className={styles.taskBtn}>Delete</Button>
            </div>
        </>
    );
};

export default TaskItem;