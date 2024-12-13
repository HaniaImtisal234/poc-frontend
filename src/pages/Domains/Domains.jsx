import React, { useEffect, useState } from "react";
import { Table, Pagination, Spin, message, Modal, Input, Button } from "antd";
import axios from "axios";

const Domains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDomains, setTotalDomains] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [domainName, setDomainName] = useState("");
  const [editDomainId, setEditDomainId] = useState(null);

  const fetchDomains = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/get_domains?page=${page}&per_page=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data && response.data.data) {
        setDomains(response.data.data);
        setTotalDomains(response.data.total);
      } else {
        message.error("Failed to load domains");
      }
    } catch (error) {
      console.error("Error fetching domains:", error);
      message.error("An error occurred while fetching domains");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchDomains(page);
  };

  useEffect(() => {
    fetchDomains(currentPage);
  }, [currentPage]);

  const handleEdit = (record) => {
    setEditDomainId(record.id);
    setDomainName(record.domain_name);
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/domains/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      message.success("Domain deleted successfully");
      fetchDomains(currentPage); // Refresh the domains list
    } catch (error) {
      console.error("Error deleting domain:", error);
      message.error("Failed to delete domain");
    }
  };

  const handleSave = async () => {
    if (!domainName) {
      message.error("Domain name is required");
      return;
    }

    try {
      let response;
      if (editDomainId) {
        // Edit existing domain
        response = await axios.put(
          `/domains/${editDomainId}`,
          { domain_name: domainName },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        // Add new domain
        response = await axios.post(
          `/domains`,
          { domain_name: domainName },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }

      if (response.status === 200) {
        message.success(
          editDomainId
            ? "Domain updated successfully"
            : "Domain added successfully"
        );
        setIsModalVisible(false); // Close modal
        fetchDomains(currentPage); // Refresh domains list
        setDomainName(""); // Clear domain name field
        setEditDomainId(null); // Reset edit domain ID
      } else {
        message.error("Failed to save domain");
      }
    } catch (error) {
      console.error("Error saving domain:", error);
      message.error("An error occurred while saving the domain");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Domain Name",
      dataIndex: "domain_name",
      key: "domain_name",
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
        <>
          <Button
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
            type="primary"
          >
            Edit
          </Button>
          <Button onClick={() => handleDelete(record.id)} type="danger">
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <button
          type="primary"
          onClick={() => {
            setDomainName("");
            setEditDomainId(null);
            setIsModalVisible(true);
          }}
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
          Add Domain
        </button>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: 20 }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Table
            dataSource={domains}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={false}
          />
          <Pagination
            current={currentPage}
            total={totalDomains}
            pageSize={10}
            onChange={handlePageChange}
            style={{ marginTop: 20, textAlign: "right" }}
          />
        </>
      )}

      {isModalVisible && (
        <Modal
          title={editDomainId ? "Edit Domain" : "Add Domain"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={handleSave}
          okText="Save"
          cancelText="Cancel"
        >
          <div>
            <label>Domain Name:</label>
            <Input
              placeholder="Enter domain name"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Domains;
