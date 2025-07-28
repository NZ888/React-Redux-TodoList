import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
const TaskPage = () => {
    let params = useParams();
    const tasks = useSelector((state) => state.tasks.tasks);
    const task = tasks.filter((task) => task.id === parseInt(params.id))[0];
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            {task.categories.map((category, index) => (

                <p key={index}>{category}</p>
            ))}
            <p>{task.date}</p>
            <p>{task.isDone}</p>

        </div>
    );
};

export default TaskPage;