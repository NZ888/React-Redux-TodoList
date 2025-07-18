import React from 'react';
import {Tag} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import {deleteCategory} from "../../../../Redux/slices/categorySlice.js";
import {useDispatch} from "react-redux";
const CategoryModalCard = ({title, value, messageApi}) => {
    const dispatch = useDispatch();
    const closeFunc = e => {
        if (value === 'UnsortedTasks' || value === "completedtasks") {
            e.preventDefault();
            messageApi.warning('This category cannot be deleted');
            return;
        }
        messageApi
            .open({ type: 'success', content: `Deleted ${title}`, duration: 1 })
            .then(() => dispatch(deleteCategory(value)));
    };

    return (
        <>
            <Tag closeIcon={<CloseCircleOutlined />} onClose={closeFunc} value={value}>
                {title}
            </Tag>
        </>
    );
};

export default CategoryModalCard;