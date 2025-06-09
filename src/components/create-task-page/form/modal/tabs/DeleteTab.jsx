import React from 'react';
import CategoryModalCard from "../CategoryModalCard.jsx";
import {useSelector} from "react-redux";
const DeleteTab = () => {
    const categories = useSelector(state => state.category.category);
    return (
        <>
            {categories.length === 0 && (
                <h1>There isn't no one categorize</h1>
            )}
            {categories.map(category => (
                <CategoryModalCard
                    key={category.value}
                    value={category.value}
                    title={category.label}
                />
            ))}
        </>
    );
};

export default DeleteTab;