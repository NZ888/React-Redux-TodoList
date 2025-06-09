import AppLayout from "./App layout/AppLayout.jsx";
import MainHeader from "./components/header/MainHeader.jsx";
import React from "react";
import {store} from "./Redux/stores/store.js";
import {Provider} from "react-redux";
const App = () => (
    <Provider store={store}>
        <AppLayout>
            <MainHeader/>
        </AppLayout>
    </Provider>
);
export default App;