import { Menu, ConfigProvider } from 'antd';
import { AppstoreOutlined, ContactsOutlined, EditOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import "./menu.css"
import SearchModalComponent from "./search-modal/SearchModalComponent.jsx";
import ThemeDropdownComponent from "./theme-dropdown/ThemeDropdownComponent.jsx";
const rawItems = [
    {
        key: 'create',
        icon: <EditOutlined />,
        label: 'Create Task',
        path: '/create-task',
    },
    {
        key: 'tasks',
        icon: <AppstoreOutlined />,
        label: 'Tasks',
        path: '/tasks',
    },
    {
        key: 'about',
        icon: <ContactsOutlined />,
        label: 'About us',
        path: '/',
    },
];


const menuItems = rawItems.map((it) => ({
    key: it.key,
    icon: it.icon,
    label: (
        <NavLink
            to={it.path}
            style={( ) => ({
                color: 'inherit',
                textDecoration: 'none',

            })}
        >
            {it.label}
        </NavLink>
    ),
}));

const baseMenuStyes = {
    flex: 1,
    minWidth: 0,
    lineHeight: '64px',
    background: '#4096ff',
}
const modernMenuStyles = {
    ...baseMenuStyes,
    background: "inherit",
}
export default function MenuComponent({theme}) {
    const { pathname } = useLocation();
    const selectedKey = rawItems.find(i => pathname.startsWith(i.path))?.key;

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        horizontalItemColor:          '#000',
                        horizontalItemHoverColor:     '#fff',
                        horizontalItemSelectedColor:  '#fff',
                    },
                },
            }}
        >
            <nav style={{width:'100%'}}>
                <Menu
                    mode="horizontal"
                    items={menuItems}
                    selectedKeys={[selectedKey]}
                    style={theme === "modernTheme" ? modernMenuStyles : baseMenuStyes}
                />
            </nav>
            <ThemeDropdownComponent />
            {pathname.includes('tasks') && (
                <SearchModalComponent/>
            )}
        </ConfigProvider>
    );
}
