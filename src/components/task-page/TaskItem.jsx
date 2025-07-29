import React from 'react';
import styles from './taskItem.module.css';
const TaskItem = ({task}) => {
    const {id, title, description, isDone, date, categories} = task;
    return (
        <div className={styles.taskCard} data-task-id={id}>
            <h1 style={{textAlign:"center"}}>Title: {title}</h1>
            <br/>
            <h2>Description: {description}</h2>
            <h3>Categories: {categories.join(', ')}</h3>
            <p>{date !== null ? `${date[0]} up to ${date[1]}` : null}</p>
            {isDone && (
                <p>Task completed!</p>
            )}
        </div>
    );
};

export default TaskItem;