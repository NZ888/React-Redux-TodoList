import React from 'react';
import {Card} from "antd";
import CategoryItem from "./CategoryItem.jsx";

const ContentCategoryComponent = ({category, todos = [], categoryValue}) => {
    console.log(todos)
    return (
        <>
            <Card title={category} variant="borderless" style={{ width: "auto", height: "500px", margin: "8px", wordBreak: "break-word", wordWrap:"break-word", maxWidth: "370px"}} data-value={categoryValue}>
                {Array.isArray(todos) && todos.length > 0 ? (
                    todos.map((t) => (
                        <CategoryItem
                            key={t.id}
                            title={t.title}
                            id={t.id}
                            date={t.date}
                            description={t.description}
                        />
                    ))
                ) : (
                    <p style={{ color: '#999' }}>Пусто</p>
                )}
            </Card>
        </>
    );

};

export default ContentCategoryComponent;