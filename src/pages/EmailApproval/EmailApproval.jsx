import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Image, Row, Col } from "antd";
import Header from "../../components/Header/Header";
import axios from "axios";

const EmailSection = ({ selectedEmail }) => {
  const [emailContent, setEmailContent] = useState();
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedEmail && selectedEmail.email_content) {
      setTimeout(() => {
        try {
          const parsedContent = JSON.parse(selectedEmail.email_content);
          setEmailContent(parsedContent);
        } catch (error) {
          console.error("Error parsing email content:", error);
          setEmailContent(null);
        }
      }, 0);
    }
  }, [selectedEmail]);

  const handleAccept = async () => {
    try {
      const emailId = selectedEmail?.id;

      const response = await axios.put(
        `/api/emails/${emailId}`,
        { status: "accepted" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Email accepted successfully!");
      } else {
        toast.error("Failed to accept the email.");
      }
    } catch (error) {
      console.error("Error accepting email:", error);
      toast.error("Error accepting the email.");
    }
  };

  const handleReject = async () => {
    try {
      const emailId = selectedEmail?.id;

      const response = await axios.put(
        `/emails/${emailId}`,
        { status: "rejected" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Email rejected successfully!");
      } else {
        toast.error("Failed to reject the email.");
      }
    } catch (error) {
      console.error("Error rejecting email:", error);
      toast.error("Error rejecting the email.");
    }
  };

  const handleImageClick = (uri) => {
    setSelectedImage(uri);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedImage(null);
  };

  const parsedAttachments = emailContent?.parsed_attachments || [];

  if (!selectedEmail) {
    return <div>No email selected</div>;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold mt-8 mb-8 break-words max-w-lg mx-auto">
          {emailContent ? emailContent?.subject : "No Subject"}
        </h1>

        <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">Prompt</h1>
          <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-x-auto break-words">
            <p className="text-gray-700 text-lg">
              {selectedEmail
                ? selectedEmail.domain_prompt
                : "Write your prompt here..."}
            </p>
          </div>
        </div>

        <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Email Body
          </h1>
          <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-x-auto break-words">
            <p className="text-gray-700 text-lg">
              {emailContent && emailContent?.body
                ? emailContent.body
                : "Write your email here..."}
            </p>
          </div>
        </div>

        <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Attachments
          </h1>
          <Row gutter={16}>
            {parsedAttachments.length > 0 ? (
              parsedAttachments.map((attachment, index) => (
                <Col span={8} key={index}>
                  <div className="attachment-item">
                    <Image
                      width={100}
                      src={attachment.data_uri}
                      alt={`Attachment ${index + 1}`}
                      preview={false}
                      onClick={() => handleImageClick(attachment.data_uri)}
                    />

                    {attachment?.document_text && (
                      <div
                        className="attachment-text mt-2 text-gray-600 overflow-auto max-h-40 p-4 border border-black-400 rounded-md"
                        style={{ maxHeight: "150px" }}
                      >
                        <p>{attachment?.document_text}</p>
                      </div>
                    )}
                  </div>
                </Col>
              ))
            ) : (
              <p>No attachments available</p>
            )}
          </Row>
        </div>

        <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            ChatGPT Response
          </h1>
          <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <p className="text-gray-700 text-lg">
              {selectedEmail
                ? selectedEmail?.chat_gpt_response
                : "Response will appear here..."}
            </p>
          </div>
        </div>

        <div className="w-full p-6 rounded-lg mb-4 text-left">
          <button
            className="bg-yale-blue text-white text-lg px-6 py-2 rounded-lg"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="bg-yale-blue text-white text-lg px-6 py-2 rounded-lg ml-4"
            onClick={handleReject}
          >
            Reject
          </button>
        </div>
      </div>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        centered
        width="80%"
      >
        <Image
          src={selectedImage}
          alt="Attachment"
          style={{ width: "100%", height: "auto" }}
        />
      </Modal>
    </div>
  );
};

export default EmailSection;
