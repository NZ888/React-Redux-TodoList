import React from 'react';
import { Col, Form, Input, message, Row} from "antd";
import SubmitButton from "../../SubmitButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addCategory} from "../../../../../Redux/slices/categorySlice.js";

const CreateTab = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.category);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const handleSubmit = values => {

        const isDuplicate = categories.some(
            cat => cat.value.trim().toLowerCase() === values.NameOfCategory.trim().toLowerCase()
        );

        if (isDuplicate) {
            messageApi.open({
                type: 'error',
                content: `Category "${values.NameOfCategory}" already exists`,
            });

        }
        else if(values.NameOfCategory === "Unsorted Tasks" || values.NameOfCategory === "UnsortedTasks" || values.NameOfCategory === "completedtasks" || values.NameOfCategory === "Completed Tasks"){
            messageApi.warning('This category cannot be created')
        }
        else if(!isDuplicate) {
            const category = {
                label: values.NameOfCategory,
                value: values.NameOfCategory
            }
            dispatch(addCategory(category))
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: `Created new category - "${category.label}"`,
            });
        }
    };

    return (

        <>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 5}}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
                form={form}
            >
                <Row gutter={0} wrap={false}>
                    <Col flex="70%">
                        <Form.Item
                            label="Name"
                            name="NameOfCategory"
                            noStyle
                            rules={[{ required: true, message: 'Please input category name!' }]}
                        >
                            <Input  placeholder="Name of Category" />
                        </Form.Item>
                    </Col>
                    <Col flex="30%">
                        <Form.Item label={null}  style={{marginLeft: '-20px'}}>
                            <SubmitButton type="default" htmlType="submit" form={form} >
                                Submit
                            </SubmitButton>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default CreateTab;