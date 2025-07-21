import React from 'react';
import {Card, message} from "antd";
import CategoryItem from "./CategoryItem.jsx";
import {useDrop} from "react-dnd";
import {useDispatch} from "react-redux";
import {moveTask} from "../../Redux/slices/tasksSlice.js";

const ContentCategoryComponent = ({category, todos = [], categoryValue}) => {

    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const cardStyle = {
        width: "auto",
        margin: 8,
        wordBreak: "break-word",
        maxWidth: 370,
        ...(todos.length === 0 && { minHeight: 200 }),
        alignSelf: "flex-start",
    };
    const [, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: ({ id }) => dispatch(moveTask({ id, targetCategory: categoryValue })),
    }));
    return (
        <>
            {contextHolder}
            <Card title={category} variant="borderless" style={cardStyle} data-value={categoryValue} ref={drop}>
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
                            isDone={t.isDone}
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