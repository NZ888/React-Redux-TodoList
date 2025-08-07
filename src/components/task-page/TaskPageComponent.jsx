
import TaskItem from './TaskItem';
import './taskPage.css';
import {message} from "antd";

export default function TaskPageComponent({ task, theme}) {

    const [messageApi, contextHolder] = message.useMessage();

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {contextHolder}
            <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80vh' }}>
                <TaskItem task={task} messageAPI={messageApi} theme={theme}/>
            </div>
        </div>
    );
}
