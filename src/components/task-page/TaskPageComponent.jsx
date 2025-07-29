import LavaLampBackground from './LavaLampBackground';
import TaskItem from './TaskItem';
import './taskPage.css';

export default function TaskPageComponent({ task }) {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <LavaLampBackground />
            <div style={{ position: 'relative', zIndex: 2, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80vh' }}>
                <TaskItem task={task} />
            </div>
        </div>
    );
}
