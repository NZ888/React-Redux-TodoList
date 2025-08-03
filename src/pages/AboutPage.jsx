import React from 'react';
import baseStyles from './aboutPage.module.css';
import modernStyles from "./aboutModernPage.module.css"
const AboutPage = ({theme}) => {

    return (
        <div className={theme === "modernTheme" ? modernStyles.container : baseStyles.container}>
            <div className={theme === "modernTheme" ? modernStyles.text : baseStyles.text}>
                <h1>About the project</h1>
                <p>
                    TodoList is a lightweight task manager built with React and Redux Toolkit.
                    Quickly create tasks, group them into categories and edit or mark them as done.
                    Drag and drop support lets you reorganize tasks with ease while the interface stays minimalistic.
                    All data is stored locally so your list persists between sessions.
                </p>
                <p>
                    Add categories, manage your to-do list and stay productive every day!
                </p>
            </div>
        </div>
    );
};

export default AboutPage;