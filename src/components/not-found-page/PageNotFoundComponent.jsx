import React from 'react';
import modernStyles from "../../pages/aboutModernPage.module.css";
import baseStyles from "../../pages/aboutPage.module.css";
import {Button} from "antd";
import {useNavigate} from "react-router";

const PageNotFoundComponent = ({theme}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={theme === "modernTheme" ? modernStyles.container : baseStyles.container}>
                <div className={theme === "modernTheme" ? modernStyles.text : baseStyles.text}>
                    <h1>Page not found 🚫</h1>
                    <div style={{display:"flex", gap:12, justifyContent:"center", alignItems:"center"}}>
                        <Button type="primary" onClick={()=>{navigate("/create-task")}} className={modernStyles.Btn}>Create Task</Button>
                        <Button type="primary" onClick={()=>{navigate("/tasks")}} className={modernStyles.Btn}>Tasks</Button>
                        <Button type="primary" onClick={()=>{navigate("/about")}} className={modernStyles.Btn}>About Project</Button>
                    </div>
                    <div style={{display:"flex", gap:12, justifyContent:"center"}}>
                        <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888', '_blank');}} className={modernStyles.Btn}>My Github</Button>
                        <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888/React-Redux-TodoList', '_blank');}} className={modernStyles.Btn}>Project Repository</Button>
                        <Button type="primary" onClick={()=>{window.open('https://github.com/NZ888/React-Redux-TodoList/commits/main/', '_blank');}} className={modernStyles.Btn}>Project Commits</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFoundComponent;