import React from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import SubmitButton from "../../SubmitButton.jsx";
import {useDispatch} from "react-redux";
import {addCategory} from "../../../../../Redux/slices/categorySlice.js";

const CreateTab = () => {

    const dispatch = useDispatch();

    const handleSubmit = values => {

        const category = {
            label: values.NameOfCategory,
            value: values.NameOfCategory
        }
        dispatch(addCategory(category))
        form.resetFields();
    };
    const [form] = Form.useForm();
    return (

        <>
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