import React from 'react';
import GreetingsPageComponent from "../components/greetings-page/GreetingsPageComponent.jsx";

const GreetingsPage = ({theme}) => {
    return (
        <div>
            <GreetingsPageComponent theme={theme} />
        </div>
    );
};

export default GreetingsPage;