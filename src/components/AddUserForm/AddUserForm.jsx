import { Button, Form, Input, message } from "antd";
import React from "react";

export default function AddUserForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("User added:", values);
    message.success("User added successfully!");
    form.resetFields();
  };

  return (
    <>
      <h1>Add New User</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the user's name!" }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter the user's email!" },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter the user's phone number!",
            },
          ]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add User
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
