import React, {useState} from 'react';
import {Button, Col, DatePicker, Form, Input, Modal, Row, Select, Space, Tabs} from 'antd';
import SubmitButton from "./SubmitButton.jsx";
import {useSelector, useDispatch} from "react-redux";
import {addTask} from "../../../Redux/slices/tasksSlice.js";
import CategoriesModal from "./modal/CategoriesModal.jsx";
const { RangePicker } = DatePicker;

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

const FormComponent = () => {
    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);
    const categories = useSelector(state => state.category.category);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
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
        const task = {
            id:Date.now(),
            title: values.title,
            description: values.description,
            categories: [...values.category],
            date: values.date ? values.date : null,
        }
        console.log(task);
        form.resetFields();
        dispatch(addTask(task))
    };
    return (
        <>
            <CategoriesModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
            <h1>Lets make the task!</h1>
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
                        <SubmitButton form={form}>Submit</SubmitButton>
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>

    );
};

export default FormComponent;