import React from 'react';
import baseStyles from './aboutPage.module.css';
import modernStyles from "./aboutModernPage.module.css"
import {Button} from "antd";
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
                <div style={{display:"flex", gap:12, justifyContent:"center"}}>
                    <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888', '_blank');}} className={modernStyles.Btn}>My Github</Button>
                    <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888/React-Redux-TodoList', '_blank');}} className={modernStyles.Btn}>Project Repository</Button>
                    <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888/React-Redux-TodoList/commits/main/', '_blank');}} className={modernStyles.Btn}>Project Commits</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;