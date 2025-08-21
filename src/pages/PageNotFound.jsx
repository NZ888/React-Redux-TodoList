import React from 'react';
import PageNotFoundComponent from "../components/not-found-page/PageNotFoundComponent.jsx";

const PageNotFound = ({theme}) => {
    return (
        <div>
            <PageNotFoundComponent theme={theme} />
        </div>
    );
};

export default PageNotFound;