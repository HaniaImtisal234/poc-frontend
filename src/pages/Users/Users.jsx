import React, { useEffect, useState } from "react";
import { Table, Pagination, Spin, message, Modal, Input } from "antd";
import axios from "axios";
import Header from "../../components/Header/Header";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState("");
  const [userToDelete, setUserToDelete] = useState(null);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/users?page=${page}&per_page=10`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data && response.data.data) {
        setUsers(response.data.data);
        setTotalUsers(response.data.total);
      } else {
        message.error("Failed to load users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      message.error("An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchUsers(page);
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handleAddUser = async () => {
    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/api/users",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("User added successfully");
        setIsModalVisible(false);
        fetchUsers(currentPage);
        clearForm();
      } else {
        toast.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error adding user:", error);

      if (!error.response) {
        toast.error("Network error. Please try again later.");
        return;
      }

      const errorMessage = error.response.data?.error || "An error occurred";
      toast.error(errorMessage);
    }
  };

  const handleEditUser = async () => {
    if (!email) {
      message.error("Email is required");
      return;
    }

    try {
      const response = await axios.put(
        `/api/users/${editUserId}`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        message.success("User updated successfully");
        setIsModalVisible(false);
        fetchUsers(currentPage);
        clearForm();
      } else {
        message.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      message.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleDeleteUser = async () => {
    if (!userToDelete) return;

    try {
      const response = await axios.delete(`/api/users/${userToDelete.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        toast.success("User deleted successfully");
        setIsDeleteModalVisible(false);

        setTimeout(() => {
          fetchUsers(currentPage);
        }, 1500);
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("An error occurred while deleting the user");
    }
  };

  const handleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
    if (!isModalVisible) {
      clearForm();
    }
  };

  const handleDeleteModalVisibility = () => {
    setIsDeleteModalVisible(!isDeleteModalVisible);
    if (!isDeleteModalVisible) {
      clearForm();
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEditUserId(null);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <button
            onClick={() => {
              setEditUserId(record.id);
              setEmail(record.email);
              setIsModalVisible(true);
            }}
            style={{
              backgroundColor: "#2a2a2a",
              borderRadius: 8,
              padding: "5px 15px",
              color: "white",
              marginRight: 10,
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setUserToDelete(record);
              setIsDeleteModalVisible(true);
            }}
            style={{
              backgroundColor: "#2a2a2a",
              borderRadius: 8,
              padding: "5px 15px",
              color: "white",
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div style={{ padding: 20 }}>
        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <button
            onClick={handleModalVisibility}
            style={{
              backgroundColor: "black",
              borderRadius: 8,
              paddingRight: "15px",
              paddingLeft: "15px",
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "white",
            }}
          >
            Add User
          </button>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", padding: 20 }}>
            <Spin size="large" />
          </div>
        ) : (
          <>
            <Table
              dataSource={users}
              columns={columns}
              rowKey={(record) => record.id}
              pagination={false}
            />
            <Pagination
              current={currentPage}
              total={totalUsers}
              pageSize={10}
              onChange={handlePageChange}
              style={{ marginTop: 20, textAlign: "right" }}
            />
          </>
        )}
        {isDeleteModalVisible && (
          <Modal
            title="Confirm Deletion"
            open={isDeleteModalVisible}
            onCancel={handleDeleteModalVisibility}
            onOk={() => {
              handleDeleteUser();
              handleDeleteModalVisibility();
            }}
            destroyOnClose={true}
          >
            <p>Are you sure you want to delete this user?</p>
          </Modal>
        )}

        {isModalVisible && (
          <Modal
            title={editUserId ? "Edit User" : "Add User"}
            open={isModalVisible}
            onCancel={handleModalVisibility}
            footer={null}
          >
            <div>
              <label>Email:</label>
              <Input
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: 10 }}
              />
              {!editUserId && (
                <>
                  <label>Password:</label>
                  <Input.Password
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: 10 }}
                  />
                  <label>Confirm Password:</label>
                  <Input.Password
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ marginBottom: 20 }}
                  />
                </>
              )}
              <div>
                <button
                  onClick={editUserId ? handleEditUser : handleAddUser}
                  style={{
                    backgroundColor: "black",
                    borderRadius: 8,
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    color: "white",
                  }}
                >
                  {editUserId ? "Save Changes" : "Save User"}
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Users;
