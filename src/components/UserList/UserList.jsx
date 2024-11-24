import React from "react";
import useUsers from "../../query/useUsers";
import { Button, Modal, Table } from "antd";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlice";
import { addfavourite, removefavourite } from "../../redux/favSlice";

export default function UserList({ localUsers }) {
  const { data: users, isLoading, isError, error } = useUsers();
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const favourites = useSelector((state) => state.favourites.favourites);

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

  const handleRowClick = (user) => {
    dispatch(setSelectedUser(user));
  };

  const togglefavourite = (user) => {
    if (isfavourite(user)) {
      dispatch(removefavourite(user));
    } else {
      dispatch(addfavourite(user));
    }
  };

  const isfavourite = (user) => {
    return favourites.some((fav) => fav.id === user.id);
  };

  const showModal = () => {
    if (selectedUser) {
      Modal.info({
        title: `User Details: ${selectedUser.name}`,
        content: (
          <div>
            <p>Email: {selectedUser?.email}</p>
            <p>Phone: {selectedUser?.phone}</p>
            <p>
              Address: {selectedUser?.address?.street},
              {selectedUser?.address?.city}
            </p>
            <p>Company: {selectedUser?.company?.name}</p>
          </div>
        ),
        onOk() {},
      });
    }
  };

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
    {
      title: "favourite",
      key: "favourite",
      render: (text, record) => (
        <Button onClick={() => togglefavourite(record)}>
          {isfavourite(record) ? "Remove from favourites" : "Add to favourites"}
        </Button>
      ),
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
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      {selectedUser && showModal()}
    </>
  );
}
