import { Button, Form, Input, message } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import useAddUser from "../../query/useAddUser";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

export default function AddUserForm({ onUserAdded }) {
  const [form] = Form.useForm();
  const { mutate: addUser, isLoading } = useAddUser();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    addUser(values, {
      onSuccess: (newUser) => {
        onUserAdded(newUser);
        message.success("User added successfully!");
        form.resetFields();
        navigate("/");
      },
      onError: (error) => {
        message.error(`Error: ${error.message}`);
      },
    });
  };

  if (isLoading) return <Loader />;

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
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
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "16px" }}
              loading={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}
