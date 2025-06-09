import React from 'react';
import {Button, Form} from "antd";

const SubmitButton = ({form, children, ...props}) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);

    React.useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button type="primary" htmlType="submit" disabled={!submittable} {...props}>
            {children}
        </Button>
    );
};

export default SubmitButton;