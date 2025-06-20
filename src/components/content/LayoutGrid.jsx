import React from 'react';
import ContentCategoryComponent from "./ContentCategoryComponent.jsx";
import {useSelector} from "react-redux";
const LayoutGrid = () => {
    const categories = useSelector((state) => state.category.category);
    const tasks = useSelector((state) => state.tasks.tasks);

    const tasksByCategory = categories.map((cat) => ({
        ...cat,
        tasks: tasks.filter((t) => t.categories.includes(cat.value)),
    }));
    console.log(tasksByCategory);
    return (
        <>
            {tasksByCategory.map((category) => (
                <ContentCategoryComponent key={category.value} category={category.label} todos={category.tasks} categoryValue={category.value} />
            ))}
        </>
    );
};

export default LayoutGrid;