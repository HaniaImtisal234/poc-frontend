import React, { useEffect, useState } from "react";
import { Table, Pagination, Spin, message, Modal, Input, Button } from "antd";
import axios from "axios";
import Header from "../../components/Header/Header";
const { TextArea } = Input;

const Domains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDomains, setTotalDomains] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [domainName, setDomainName] = useState("");
  const [domainPrompt, setDomainPrompt] = useState("");
  const [editDomainId, setEditDomainId] = useState(null);

  const fetchDomains = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/get_domains?page=${page}&per_page=10`,
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

  const handleModalVisibility = (edit = false, domain = null) => {
    console.log(domain);
    setIsModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setDomainName(edit && domain ? domain.domain_name : "");
      setDomainPrompt(edit && domain ? domain.prompt.prompt_text : "");
      setEditDomainId(edit && domain ? domain.id : null);
    } else {
      setEditDomainId(null);
      setDomainName("");
      setDomainPrompt("");
    }
  };

  const handleAddDomain = async () => {
    if (!domainName || !domainPrompt) {
      message.error("Both Domain Name and Domain Prompt are required");
      return;
    }

    try {
      const response = await axios.post(
        `/api/domains`,
        { domain_name: domainName, prompt_text: domainPrompt },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        message.success("Domain added successfully");
        setIsModalVisible(false);
        fetchDomains(currentPage);
      } else {
        message.error("Failed to add domain");
      }
    } catch (error) {
      console.error("Error adding domain:", error);
      message.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleEdit = async () => {
    if (!domainName || !domainPrompt) {
      message.error("Both Domain Name and Domain Prompt are required");
      return;
    }

    try {
      const response = await axios.put(
        `/api/domains/${editDomainId}`,
        { domain_name: domainName, prompt_text: domainPrompt },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        message.success("Domain updated successfully");
        setIsModalVisible(false);
        fetchDomains(currentPage);
      } else {
        message.error("Failed to update domain");
      }
    } catch (error) {
      console.error("Error updating domain:", error);
      message.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/domains/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        message.success("Domain deleted successfully");
        fetchDomains(currentPage);
      } else {
        message.error("Failed to delete domain");
      }
    } catch (error) {
      console.error("Error deleting domain:", error);
      message.error("Failed to delete domain");
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
          <button
            onClick={() => {
              setDomainPrompt(record.prompt_text);
              handleModalVisibility(true, record);
            }}
            style={{
              backgroundColor: "#2a2a2a",
              padding: "5px 15px",
              color: "white",
              marginRight: 10,
            }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(record.id)}
            style={{
              backgroundColor: "#2a2a2a",
              padding: "5px 15px",
              color: "white",
            }}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchDomains(currentPage);
  }, [currentPage]);

  return (
    <div>
      {/* <Header /> */}
      <div style={{ padding: 20 }}>
        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <button
            onClick={() => handleModalVisibility(true)}
            style={{
              backgroundColor: "black",
              borderRadius: 8,
              padding: "5px 15px",
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

        <Modal
          title={editDomainId ? "Edit Domain" : "Add Domain"}
          open={isModalVisible}
          onCancel={() => handleModalVisibility()}
          footer={null}
        >
          <div>
            <label>Domain Name:</label>
            <Input
              placeholder="Enter domain name"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
            />
          </div>
          <div>
            <label>Domain Prompt:</label>
            <TextArea
              placeholder="Enter domain prompt"
              value={domainPrompt}
              onChange={(e) => setDomainPrompt(e.target.value)}
              rows={5}
              className="custom-textarea"
            />
          </div>

          <div>
            <button
              onClick={editDomainId ? handleEdit : handleAddDomain}
              style={{
                backgroundColor: "black",
                borderRadius: 8,
                padding: "5px 15px",
                color: "white",
                marginTop: 10,
              }}
            >
              {editDomainId ? "Save Changes" : "Save Domain"}
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Domains;
