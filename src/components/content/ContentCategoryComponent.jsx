import React from 'react';
import {Card} from "antd";
import CategoryItem from "./CategoryItem.jsx";

const ContentCategoryComponent = ({category, todos = [], categoryValue}) => {


    const cardStyle = {
        width: "auto",
        margin: 8,
        wordBreak: "break-word",
        maxWidth: 370,
        ...(todos.length === 0 && { minHeight: 200 }),
        alignSelf: "flex-start",
    };
    return (
        <>
            <Card title={category} variant="borderless" style={cardStyle} data-value={categoryValue}>
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