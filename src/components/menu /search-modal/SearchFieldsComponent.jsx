import React, {useEffect} from 'react';
import {Input, Select} from "antd";
import {useSelector} from "react-redux";
import {useTasksFilter} from "../../../hooks /useTasksFilter.js";
const SearchFieldsComponent = () => {

    const tasks = useSelector(state => state.tasks.tasks);
    const [filter, setFilter] = React.useState({sort:"", query:""});
    const sortedAndSearchedTasks = useTasksFilter(tasks, filter.sort, filter.query);

    const handleChangeSelect = value => {
        setFilter(prev => ({ ...prev, sort: value }));
    };
    const handleChangeInput = e => {
        const value = e.target.value;
        setFilter(prev => ({ ...prev, query: value }));
    };
    useEffect(() => {
        console.log(sortedAndSearchedTasks);
    }, [sortedAndSearchedTasks]);
    const containerStyle = {}
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
                        { value: 'date', label: 'Date', disabled: true },
                        { value: 'isDone', label: 'Done', disabled: true },

                    ]}
                />
                <Input placeholder="Search" onChange={handleChangeInput} />
            </div>
            <div>
                {sortedAndSearchedTasks.map((task, index) => (
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        <p>{task.date}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SearchFieldsComponent;