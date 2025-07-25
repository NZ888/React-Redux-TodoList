import AppLayout from "./App layout/AppLayout.jsx";
import MainHeader from "./components/header/MainHeader.jsx";
import React from "react";
import {store} from "./Redux/stores/store.js";
import {Provider} from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const App = () => (
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <AppLayout>
                <MainHeader/>
            </AppLayout>
        </DndProvider>
    </Provider>
);
export default App;