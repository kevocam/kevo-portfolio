import React from "react";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
const Contact = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const areas = [
    { label: "Beijing", value: "Beijing" },
    { label: "Shanghai", value: "Shanghai" },
  ];

  const sights = {
    Beijing: ["Tiananmen", "Great Wall"],
    Shanghai: ["Oriental Pearl", "The Bund"],
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item label="Nombre">
        <Input />
      </Form.Item>
      <Form.Item label="Mensaje">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
