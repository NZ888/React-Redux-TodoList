import React, {Suspense, lazy} from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainHeader from '../components/header/MainHeader.jsx';
import FullPageSpinner from "../components/spiner/FullPageSpinner.jsx";
const CreateTaskPage = lazy(() => import('../pages/CreateTaskPage.jsx'));
const TasksPage = lazy(() => import("../pages/TasksPage.jsx"));
const AboutPage = lazy(() => import('../pages/AboutPage.jsx'));
const { Header, Content } = Layout;

const layoutStyle = {
    borderRadius: 0,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
};

const AppLayout = () => (
    <Router>
        <Layout style={layoutStyle}>

            <Header style={{padding:0}}>
                <MainHeader />
            </Header>

            <Content style={{ minHeight: 'calc(100vh - 64px)' }}>
                <Suspense fallback={<FullPageSpinner />}>
                    <Routes>
                        {/*<Route path="/"        element={<HomePage />} />*/}
                        <Route path="/create-task"  element={<CreateTaskPage />} />
                        <Route path="/tasks"   element={<TasksPage />} />
                        <Route path="/about"   element={<AboutPage />} />
                        <Route path="*"        element={<h1>Страница не найдена</h1>} />
                    </Routes>
                </Suspense>
            </Content>
        </Layout>
    </Router>
);

export default AppLayout;
