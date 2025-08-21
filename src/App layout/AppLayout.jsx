import React, {Suspense, lazy} from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from '../components/header/MainHeader.jsx';
import FullPageSpinner from "../components/spiner/FullPageSpinner.jsx";
import LavaLampBackground from "../components/task-page/LavaLampBackground.jsx";
import {useSelector} from "react-redux";
const GreetingsPage = lazy(() => import( "../pages/GreetingsPage.jsx"))
const CreateTaskPage = lazy(() => import('../pages/createTaskPage.jsx'));
const TasksPage = lazy(() => import("../pages/TasksPage.jsx"));
const AboutPage = lazy(() => import('../pages/AboutPage.jsx'));
const TaskPage = lazy(() => import('../pages/TaskPage.jsx'));
const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"));
const { Content } = Layout;

const layoutStyle = {
    position: 'relative',
    zIndex: 1,
    borderRadius: 0,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    color:"white"
};

export default function AppLayout() {
    const theme = useSelector(state => state.theme.theme);

    return (
        <Router>

            <Layout style={layoutStyle}>
                {theme === 'modernTheme' && <LavaLampBackground />}
                <MainHeader />

                <Content style={{ minHeight: 'calc(100vh - 64px)' }}>

                    <Suspense fallback={<FullPageSpinner />}>
                        <Routes>
                            <Route path="/create-task" element={<CreateTaskPage />} />
                            <Route path="/tasks"       element={<TasksPage />} />
                            <Route path="/about"            element={<AboutPage theme={theme} />} />
                            <Route path="task/:id"     element={<TaskPage theme={theme}/>} />
                            <Route path="/" element={<GreetingsPage theme={theme} />} />
                            <Route path="*"            element={<PageNotFound theme={theme} />} />
                        </Routes>
                    </Suspense>
                </Content>
            </Layout>
        </Router>
    );
}
