import React from 'react';
import {Card, message} from "antd";
import CategoryItem from "./CategoryItem.jsx";

const ContentCategoryComponent = ({category, todos = [], categoryValue}) => {

    const [messageApi, contextHolder] = message.useMessage();

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
            {contextHolder}
            <Card title={category} variant="borderless" style={cardStyle} data-value={categoryValue}>
                {Array.isArray(todos) && todos.length > 0 ? (
                    todos.map((t) => (
                        <CategoryItem
                            key={t.id}
                            title={t.title}
                            id={t.id}
                            date={t.date}
                            description={t.description}
                            categories={t.categories}
                            messageAPI={messageApi}
                        />
                    ))
                ) : (
                    <p style={{ color: '#999' }}>Empty</p>
                )}
            </Card>
        </>
    );

};

export default React.memo(ContentCategoryComponent);