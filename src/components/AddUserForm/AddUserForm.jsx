import { Button, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export default function AddUserForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("User added:", values);
    message.success("User added successfully!");
    form.resetFields();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "left", marginBottom: "24px" }}>
          Add New User
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter the user's name!" },
            ]}
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
      </div>
    </div>
  );
}
