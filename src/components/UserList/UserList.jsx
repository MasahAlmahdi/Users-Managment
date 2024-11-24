import React from "react";
import useUsers from "../../query/useUsers";
import { Table } from "antd";
import Loader from "../Loader";

export default function UserList({ localUsers }) {
  const { data: users, isLoading, isError, error } = useUsers();

  if (isError) return <p>{error.message}</p>;
  if (isLoading) return <Loader />;
  if (!users || users.length === 0) {
    return <p>No users found</p>;
  }

  const combinedUsers = [...(users || []), ...localUsers];
  const dataSource = combinedUsers.map((user, index) => ({
    ...user,
    uniqueKey: `${user.id}-${index}`,
  }));
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  return (
    <>
      <h1>Users List</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="uniqueKey"
        pagination={false}
      />
    </>
  );
}
