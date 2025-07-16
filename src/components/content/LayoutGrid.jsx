import React, {useMemo} from 'react';
import ContentCategoryComponent from "./ContentCategoryComponent.jsx";
import {useSelector} from "react-redux";

const LayoutGrid = () => {
    const categories = useSelector((state) => state.category.category);
    const tasks = useSelector((state) => state.tasks.tasks);

    const tasksByCategory = useMemo(() => (
        categories.map((cat) => ({
            ...cat,
            tasks: tasks.filter((t) => t.categories.includes(cat.value)),
        }))
    ), [categories, tasks]);


    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                overflowY: "auto",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                padding: 8,
                alignContent: "flex-start",
            }}
        >
            {tasksByCategory.map((c) => (
                <ContentCategoryComponent
                    key={c.value}
                    category={c.label}
                    todos={c.tasks}
                    categoryValue={c.value}
                />
            ))}
        </div>
    );
};


export default LayoutGrid;