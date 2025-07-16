import React from 'react';
import styles from './aboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>About the project</h1>
                <p>
                    TodoList is a simple and easy-to-use task manager based on React and Redux.
                    With its help you can quickly schedule tasks, categorize them, set deadlines and edit already created records.
                    . The interface is as lightweight as possible
                    and doesn't distract from the most important thing - your tasks.
                </p>
                <p>
                    Add categories, manage your to-do list and stay productive every day!
                </p>
            </div>
        </div>
    );
};

export default AboutPage;