import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import TaskPageComponent from "../components/task-page/TaskPageComponent.jsx";
const TaskPage = () => {
    let params = useParams();
    const tasks = useSelector((state) => state.tasks.tasks);
    const task = tasks.filter((task) => task.id === parseInt(params.id))[0];
    return (
        <>

            <TaskPageComponent task={task} />
        </>
    );
};

export default TaskPage;