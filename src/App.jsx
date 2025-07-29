import AppLayout from "./App layout/AppLayout.jsx";
import MainHeader from "./components/header/MainHeader.jsx";
import React from "react";
import {store, persistor} from "./Redux/stores/store.js";
import {Provider} from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <DndProvider backend={HTML5Backend}>
                <AppLayout>
                    <MainHeader/>
                </AppLayout>
            </DndProvider>
        </PersistGate>
    </Provider>
);
export default App;