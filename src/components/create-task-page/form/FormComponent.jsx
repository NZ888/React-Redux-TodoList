import React, {useEffect, useState} from 'react';
import {Button, Col, DatePicker, Form, Input, message, Row, Select, Space} from 'antd';
import SubmitButton from "./SubmitButton.jsx";
import {useSelector, useDispatch} from "react-redux";
import {addTask, editTask} from "../../../Redux/slices/tasksSlice.js";
import CategoriesModal from "./modal/CategoriesModal.jsx";
const { RangePicker } = DatePicker;
import dayjs from 'dayjs';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const FormComponent = ({existableTaskInfo = null}) => {
    const [isEditMode, setIsEditMode] = useState(() => existableTaskInfo !== null);
    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);
    const rawCategories = useSelector(state => state.category.category);
    const categories = rawCategories.filter((cat)=> cat.value !== "completedtasks")
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const TECH_TAG = 'completedtasks';

    useEffect(() => {
        setIsEditMode(existableTaskInfo !== null);
        if (existableTaskInfo) {
            const { title, description, categories, date } = existableTaskInfo;
            const userCats = (categories || []).filter(cat =>
                (typeof cat === "string" ? cat : cat.value) !== TECH_TAG
            );
            form.setFieldsValue({
                title,
                description,
                category: userCats,
                date: date ? [dayjs(date[0]), dayjs(date[1])] : undefined,
            });
        } else {
            form.resetFields();
        }
    }, [existableTaskInfo, form])

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleSubmit = values => {

        const dateRange = values.date
            ? values.date.map(d => d.format('YYYY-MM-DD HH:mm'))
            : null;

        const catsToSave = [...values.category];

        if (isEditMode && existableTaskInfo.isDone) {
            if (!catsToSave.includes(TECH_TAG)) {
                catsToSave.push(TECH_TAG);
            }
        }
        const task = {
            id: isEditMode ? existableTaskInfo.id : Date.now(),
            title: values.title,
            description: values.description,
            categories: catsToSave,
            date: dateRange,
            isDone: isEditMode ? existableTaskInfo.isDone : false,
        }

        if (isEditMode) {
            dispatch(editTask(task));
        }
        else {
            dispatch(addTask(task))
        }
        form.resetFields();
        messageApi.open({
            type: 'success',
            content: isEditMode ? `Successful edited task ${existableTaskInfo.id}` : `Created new task` ,
        });
    };
    return (
        <>
            {contextHolder}
            <CategoriesModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
            <h1>{isEditMode ? 'Edit task' : 'Let’s make the task!'}</h1>
            <Form {...formItemLayout} form={form} variant={variant || 'outlined'} initialValues={{ variant: 'outlined' }} onFinish={handleSubmit}>

                <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input!'}]}

                >
                    <Input.TextArea style={{ height: '200px', resize: 'none' }} />
                </Form.Item>

                <Form.Item label="Category" required>
                    <Row gutter={8} wrap={false}>
                        <Col flex="70%">
                            <Form.Item
                                name="category"
                                noStyle
                                rules={[{ required: true, message: 'Please choose!' }]}
                            >
                                <Select
                                    mode="multiple"
                                    options={categories}
                                    style={{ width: '100%' }}
                                />
                            </Form.Item>
                        </Col>

                        <Col flex="30%">
                            <Button onClick={showModal}>Edit categories</Button>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="date"
                    rules={[{ required: false, message: 'Please input!' }]}
                >
                    <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"/>
                </Form.Item>

                <Form.Item name="submit" label="The end of the form">
                    <Space>
                        <SubmitButton form={form}>
                            {isEditMode ? 'Save' : 'Submit'}
                        </SubmitButton>
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>

    );
};

export default FormComponent;