import React from 'react';
import {Divider} from "antd";

const CategoryItem = ({id, title, description, date = null}) => {
    return (
        <>
            <h2>Title: {title}</h2>
            <p>Description: {description}</p>
            <p>{date !== null ? `${date[0]} - ${date[1]}`: null}</p>
            <Divider />
        </>
    );
};

export default CategoryItem;