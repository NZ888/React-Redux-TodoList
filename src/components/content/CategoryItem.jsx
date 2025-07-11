import React from 'react';
import {Button, Divider} from "antd";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../Redux/slices/tasksSlice.js";
const CategoryItem = ({id, title, description, date = null}) => {

    const dispatch = useDispatch();

    const onClickDelete = (value) => {
        console.log(value)
        dispatch(deleteTask(id))
    }

    const onClickEdit = () => {

    }
    return (
        <div data-id-task={id}>
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>{date !== null ? `${date[0]} - ${date[1]}`: null}</p>
            <Button type="primary">Edit</Button>
            <Button style={{marginLeft: "8px"}} onClick={()=>{onClickDelete(id)}}>Delete</Button>
            <Divider />
        </div>
    );
};

export default CategoryItem;