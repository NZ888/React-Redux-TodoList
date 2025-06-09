import React from 'react';
import style from "./createTaskPage.module.css"
import FormComponent from "./form/FormComponent.jsx";
const CreateTaskPageComponent = () => {
    return (
        <div className={style.container}>
            <main className={style.main}>
                <div className={style.createTaskContainer}>
                    <div className={style.makeTaskCard}>
                        <FormComponent/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateTaskPageComponent;