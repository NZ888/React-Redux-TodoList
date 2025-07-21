import React, {useMemo} from 'react';
import ContentCategoryComponent from "./ContentCategoryComponent.jsx";
import {useSelector} from "react-redux";
import Masonry from 'react-masonry-css'
import "./layoutGrid.css"
const LayoutGrid = () => {
    const categories = useSelector((state) => state.category.category);
    const tasks = useSelector((state) => state.tasks.tasks);

    const tasksByCategory = useMemo(() => (
        categories.map((cat) => ({
            ...cat,
            tasks: tasks.filter((t) => t.categories.includes(cat.value)),
        }))
    ), [categories, tasks]);

    const breakpointColumnsObj = {
        default: 6,
        1600: 5,
        1400: 4,
        1200: 3,
        900: 2,
        500: 1
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                overflowY: "auto",
                // display: "flex",
                // flexWrap: "wrap",
                // gap: 8,
                // padding: 8,
                // alignContent: "flex-start",
            }}
        >
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {tasksByCategory.map((c) => (
                    <ContentCategoryComponent
                        key={c.value}
                        category={c.label}
                        todos={c.tasks}
                        categoryValue={c.value}
                    />
                ))}
            </Masonry>

        </div>
    );
};


export default LayoutGrid;