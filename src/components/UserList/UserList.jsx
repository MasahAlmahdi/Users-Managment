import React, { useState } from "react";
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
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    setIsModalVisible(true);
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

  const closeModal = () => {
    setIsModalVisible(false);
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
      title: "Favourite",
      key: "favourite",
      render: (text, record) => (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            togglefavourite(record);
          }}
        >
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
      <Modal
        title={`User Details: ${selectedUser?.name}`}
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedUser ? (
          <div>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser.address?.street},{" "}
              {selectedUser.address?.city}
            </p>
            <p>
              <strong>Company:</strong> {selectedUser.company?.name}
            </p>
          </div>
        ) : (
          <p>No user selected</p>
        )}
      </Modal>
    </>
  );
}
