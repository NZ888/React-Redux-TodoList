import React from 'react';
import {Input, message, Select} from "antd";
import {useSelector} from "react-redux";
import {useTasksFilter} from "../../../hooks /useTasksFilter.js";
import CategoryItem from "../../content/CategoryItem.jsx";
const SearchFieldsComponent = ({theme}) => {

    const tasks = useSelector(state => state.tasks.tasks);
    const [filter, setFilter] = React.useState({sort:"", query:""});
    const sortedAndSearchedTasks = useTasksFilter(tasks, filter.sort, filter.query);
    const [messageApi, contextHolder] = message.useMessage();

    const handleChangeSelect = value => {
        setFilter(prev => ({ ...prev, sort: value }));
    };
    const handleChangeInput = e => {
        const value = e.target.value;
        setFilter(prev => ({ ...prev, query: value }));
    };

    return (
        <>
            <div style={{ padding: '10px', display:"flex", gap: '10px'}}>
                <Select
                    placeholder="Filter by"
                    style={{ width: 120 }}
                    onChange={handleChangeSelect}
                    options={[
                        { value: 'title', label: 'Title' },
                        { value: 'description', label: 'Description' },
                        { value: 'isDone', label: 'Done', disabled: true },

                    ]}
                />
                <Input placeholder="Search" onChange={handleChangeInput} />
            </div>
            <div
                style={{
                    width: "100%",
                    overflowY: "auto",
                    wordBreak: "break-word",
                }}
            >
                {contextHolder}
                {Array.isArray(sortedAndSearchedTasks) && sortedAndSearchedTasks.length > 0 ? (
                    sortedAndSearchedTasks.map((t) => (
                        <CategoryItem
                            key={t.id}
                            title={t.title}
                            id={t.id}
                            date={t.date}
                            description={t.description}
                            categories={t.categories}
                            messageAPI={messageApi}
                            isDone={t.isDone}
                            theme={theme}
                        />
                    ))
                ) : (
                    <p style={{ color: '#999' }}>Empty</p>
                )}
            </div>
        </>
    );
};

export default SearchFieldsComponent;