import React, {useState, useCallback} from 'react';
import {Button, Divider, Tooltip} from "antd";
import {useDispatch} from "react-redux";
import {deleteTask, doneTask} from "../../Redux/slices/tasksSlice.js";
import EditTaskModal from "./modal/EditTaskModal.jsx";
import { CheckOutlined } from "@ant-design/icons";
const CategoryItem = ({id, title, description, date = null, categories, messageAPI, isDone}) => {

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

    const handleDone = () =>{
        dispatch(doneTask(id))
    }
    return (
        <>
            <EditTaskModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} taskInfo={[id, title, description, date, categories, isDone]}/>
            <div data-id-task={id}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", color: isDone ? "green" : "black", gap:"1rem"}}>
                    <h2>Title: {title}</h2>
                    <Tooltip title="Done?">
                        <Button shape="circle" icon={isDone ? <CheckOutlined /> : null}  onClick={handleDone} />
                    </Tooltip>
                </div>
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