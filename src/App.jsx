import AppLayout from "./App layout/AppLayout.jsx";
import MainHeader from "./components/header/MainHeader.jsx";
import React from "react";
import {store, persistor} from "./Redux/stores/store.js";
import {Provider} from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
window.__TANSTACK_QUERY_CLIENT__ = queryClient;
const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <QueryClientProvider client={queryClient}>
                <DndProvider backend={HTML5Backend}>
                    <AppLayout>
                        <MainHeader/>
                    </AppLayout>
                </DndProvider>
            </QueryClientProvider>
        </PersistGate>
    </Provider>
);
export default App;