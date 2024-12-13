// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const handleClick = () => {
//   toast.success("Button clicked successfully!");
// };

// const EmailSection = () => {
//   return (
//     <div className="bg-gray-100 ">
//       {/* Adjusted flex styling to remove gap */}
//       <div className="flex h-[80%]">
//         <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
//           <h1 className="text-2xl font-semibold mb-3">Email</h1>
//           <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
//             Write your email here...
//           </p>
//         </div>

//         <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
//           <h1 className="text-2xl font-semibold mb-4 text-center">Response</h1>
//           <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
//             Response for the email....
//           </p>
//         </div>
//       </div>

//       <div className=" flex justify-end items-center bg-gray-100 space-x-4 pr-20 mt-4">
//         <button
//           className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//           onClick={handleClick}
//         >
//           Approve
//         </button>
//         <button
//           className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//           onClick={handleClick}
//         >
//           Disapprove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmailSection;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EmailSection = ({ selectedEmail }) => {
//   const [response, setResponse] = useState("");
//   console.log(selectedEmail);

//   useEffect(() => {
//     // Simulate fetching the ChatGPT response based on the email content
//     if (selectedEmail) {
//       setResponse("This is the ChatGPT response based on the email content...");
//     }
//   }, [selectedEmail]);

//   const handleClick = () => {
//     toast.success("Button clicked successfully!");
//   };

//   return (
//     <div className="bg-gray-100 ">
//       <div className="flex h-[80%]">
//         <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
//           <h1 className="text-2xl font-semibold mb-3">Email</h1>
//           <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
//             {selectedEmail ? selectedEmail.body : "Write your email here..."}
//           </p>
//         </div>

//         <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center border-gray-300">
//           <h1 className="text-2xl font-semibold mb-4 text-center">Response</h1>
//           <p className="w-3/4 h-1/2 p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
//             {response || "Response for the email...."}
//           </p>
//         </div>
//       </div>

//       <div className=" flex justify-end items-center bg-gray-100 space-x-4 pr-20 mt-4">
//         <button
//           className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//           onClick={handleClick}
//         >
//           Approve
//         </button>
//         <button
//           className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//           onClick={handleClick}
//         >
//           Disapprove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmailSection;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const EmailSection = ({ selectedEmail }) => {
//   console.log("Selected Email:", selectedEmail);

//   const [emailContent, setEmailContent] = useState(null);

//   useEffect(() => {
//     if (selectedEmail && selectedEmail.email_content) {
//       try {
//         const parsedContent = JSON.parse(selectedEmail.email_content);
//         setEmailContent(parsedContent);
//       } catch (error) {
//         console.error("Error parsing email content:", error);
//         setEmailContent(null); // Reset emailContent on parse error
//       }
//     } else {
//       setEmailContent(null); // Reset if selectedEmail or email_content is missing
//     }
//   }, [selectedEmail]);

//   console.log("Email Content:", emailContent);

//   const handleClick = () => {
//     toast.success("Button clicked successfully!");
//   };

//   return (
//     <>
//       <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg">
//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">Email</h1>

//           <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//             <p className="text-gray-700 text-lg">
//               {/* Check if emailContent is not null/undefined before accessing its 'body' */}
//               {emailContent && emailContent.body
//                 ? emailContent.body
//                 : "Write your email here..."}
//             </p>
//           </div>
//         </div>

//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">
//             Attachements
//           </h1>
//         </div>

//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">
//             ChatGPT Response
//           </h1>

//           <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//             <p className="text-gray-700 text-lg">
//               {/* Check if selectedEmail exists and has chat_gpt_response */}
//               {selectedEmail?.chat_gpt_response ||
//                 "Response will appear here..."}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmailSection;

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Modal, Image, Row, Col } from "antd";

// const EmailSection = ({ selectedEmail }) => {
//   const [emailContent, setEmailContent] = useState(null);
//   const [visible, setVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (selectedEmail && selectedEmail.email_content) {
//       try {
//         const parsedContent = JSON.parse(selectedEmail.email_content);
//         setEmailContent(parsedContent);
//       } catch (error) {
//         console.error("Error parsing email content:", error);
//         setEmailContent(null);
//       }
//     } else {
//       setEmailContent(null);
//     }
//   }, [selectedEmail]);

//   console.log(emailContent);
//   const handleClick = () => {
//     toast.success("Button clicked successfully!");
//   };

//   const handleImageClick = (uri) => {
//     setSelectedImage(uri);
//     setVisible(true); // Open modal with the selected image
//   };

//   const handleCancel = () => {
//     setVisible(false);
//     setSelectedImage(null);
//   };

//   return (
//     <>
//       <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg">
//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">Email</h1>
//           <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//             <p className="text-gray-700 text-lg">
//               {emailContent && emailContent.body
//                 ? emailContent.body
//                 : "Write your email here..."}
//             </p>
//           </div>
//         </div>

//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">
//             Attachments
//           </h1>
//           <Row gutter={16}>
//             {emailContent.parsed_attachments &&
//             emailContent.parsed_attachments.length > 0 ? (
//               emailContent.parsed_attachments.map((attachment, index) => (
//                 <Col span={8} key={index}>
//                   <Image
//                     width={100}
//                     src={attachment.data_uri} // Assuming 'data_uri' is the image source
//                     alt={`Attachment ${index + 1}`}
//                     preview={false}
//                     onClick={() => handleImageClick(attachment.data_uri)} // Open image in modal
//                   />
//                 </Col>
//               ))
//             ) : (
//               <p>No attachments available</p>
//             )}
//           </Row>
//         </div>

//         <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
//           <h1 className="text-3xl font-semibold mb-4 text-gray-800">
//             ChatGPT Response
//           </h1>
//           <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//             <p className="text-gray-700 text-lg">
//               {emailContent?.chat_gpt_response ||
//                 "Response will appear here..."}
//             </p>
//           </div>
//         </div>
//         {/*
//         <div className="flex justify-end items-center bg-gray-100 space-x-4 pr-20 mt-4">
//           <button
//             className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//             onClick={handleClick}
//           >
//             Approve
//           </button>
//           <button
//             className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
//             onClick={handleClick}
//           >
//             Disapprove
//           </button>
//         </div> */}
//       </div>

//       <Modal
//         visible={visible}
//         footer={null}
//         onCancel={handleCancel}
//         centered
//         width="80%"
//       >
//         <Image
//           src={selectedImage}
//           alt="Attachment"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </Modal>
//     </>
//   );
// };

// export default EmailSection;

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Image, Row, Col } from "antd";
import CustomButton from "../../components/CustomButton/CustomButton";

const EmailSection = ({ selectedEmail }) => {
  const [emailContent, setEmailContent] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
console.log(selectedEmail)
  useEffect(() => {
    if (selectedEmail && selectedEmail.email_content) {
      try {
        const parsedContent = JSON.parse(selectedEmail.email_content);
        console.log(`${parsedContent}`)
        setEmailContent(parsedContent);
      } catch (error) {
        console.error("Error parsing email content:", error);
        setEmailContent(null);
      }
    }
  }, [selectedEmail]);

  console.log("Email Content:", emailContent.body);

  const handleClick = () => {
    toast.success("Button clicked successfully!");
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
    <div className="max-w-7xl w-full mx-auto p-8 pl-24">
      <div className="flex flex-col bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold mt-8 mb-8">
          {emailContent?.subject}
        </h1>

        <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-300 mb-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">Prompt</h1>
          <div className="w-full bg-gray-50 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-x-auto break-words">
            <p className="text-gray-700 text-lg">
              {"Write your prompt here..."}
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
              parsedAttachments?.map((attachment, index) => (
                <Col span={8} key={index}>
                  <Image
                    width={100}
                    src={attachment.data_uri}
                    alt={`Attachment ${index + 1}`}
                    preview={false}
                    onClick={() => handleImageClick(attachment.data_uri)}
                  />
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
              {emailContent?.chat_gpt_response ||
                "Response will appear here..."}
            </p>
          </div>
        </div>

        <div className="w-full p-6 rounded-lg mb-4 text-left">
          <CustomButton
            buttonLabel="Approve"
            className="bg-yale-blue text-white"
            size="large"
            onClick={handleClick}
          />
          <CustomButton
            buttonLabel="Disapprove"
            className="bg-yale-blue text-white ml-4"
            size="large"
            onClick={handleClick}
          />
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
