import React from 'react';
import modernStyles from "../../pages/aboutModernPage.module.css";
import baseStyles from "../../pages/aboutPage.module.css";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import FullPageSpinner from "../spiner/FullPageSpinner.jsx";
import {useCity} from "../../hooks /useCity.jsx";

const GreetingsPageComponent = ({theme}) => {
    const {isSuccess, data, isError, isLoading} = useCity()
    return (
        <div>
            {isSuccess && (
                <div className={theme === "modernTheme" ? modernStyles.container : baseStyles.container}>
                    <div className={theme === "modernTheme" ? modernStyles.text : baseStyles.text}>
                        <h1>Hello!</h1>
                        <h2>How's the weather in {data.city} {data.flag.emoji}?</h2>
                        <p>Ready to manage your tasks properly and comfortably?</p>
                    </div>
                </div>
            )}
            {isError && (
                <div className={theme === "modernTheme" ? modernStyles.container : baseStyles.container}>
                    <div className={theme === "modernTheme" ? modernStyles.text : baseStyles.text}>
                        <h1>Hello!</h1>
                        <p>Ready to manage your tasks properly and comfortably?</p>
                    </div>
                </div>
            )}
            {isLoading && (
                <FullPageSpinner/>
            )}
        </div>
    );
};

export default GreetingsPageComponent;