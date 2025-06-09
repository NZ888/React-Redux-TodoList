import React from 'react';
import {Tag} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";
import {deleteCategory} from "../../../../Redux/slices/categorySlice.js";
import {useDispatch} from "react-redux";
const CategoryModalCard = ({title, value}) => {
    const dispatch = useDispatch();
    const closeFunc = () =>{
        dispatch(deleteCategory(value))
    }
    return (
        <Tag closeIcon={<CloseCircleOutlined />} onClose={closeFunc} value={value}>
            {title}
        </Tag>
    );
};

export default CategoryModalCard;