// import React from "react";
// import { Layout, Menu } from "antd";

// const { Sider } = Layout;

// const RightSidebar = ({ className = "bg-yale-blue", emails, onClose }) => {
//   const handleEmailClick = (emailId) => {
//     console.log(`Selected email ID: ${emailId}`);
//   };
//   console.log(emails);

//   return (
//     <Sider
//       collapsible
//       breakpoint="md"
//       className={className}
//       width={300}
//       style={{ position: "sticky", top: 0, zIndex: 10 }}
//     >
//       <div className="flex items-center justify-center bg-yale-blue h-14">
//         <h1 className="text-white font-bold text-lg">Email</h1>
//       </div>

//       <div className="bg-black text-white p-2">
//         {emails.length > 0 ? (
//           <Menu
//             mode="inline"
//             className="bg-black text-white"
//             style={{ width: "100%" }}
//           >
//             {emails.map((email) => (
//               <Menu.Item
//                 key={email.id}
//                 className="bg-black text-white hover:bg-gray-400"
//                 onClick={() => handleEmailClick(email.id)}
//                 style={{ color: "white" }}
//               >
//                 {email.subject}
//               </Menu.Item>
//             ))}
//           </Menu>
//         ) : (
//           <p>No emails available for this date.</p>
//         )}
//       </div>
//     </Sider>
//   );
// };

// export default RightSidebar;
import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const RightSidebar = ({
  className = "bg-yale-blue",
  emails,
  onEmailClick,
  onClose,
}) => {
  return (
    <Sider
      collapsible
      breakpoint="md"
      className={className}
      width={300}
      style={{ position: "sticky", top: 0, zIndex: 10, height: "100vh" }}
    >
      <div className="flex items-center justify-center bg-yale-blue h-14">
        <h1 className="text-white font-bold text-lg">Email</h1>
      </div>

      <div className="bg-black text-white p-2">
        {emails.length > 0 ? (
          <Menu
            mode="inline"
            className="bg-black text-white"
            style={{ width: "100%" }}
          >
            {emails.map((email) => (
              <Menu.Item
                key={email.id}
                className="bg-black text-white hover:bg-gray-400"
                onClick={() => onEmailClick(email.id)}
                style={{ color: "white" }}
              >
                {email.subject}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <p>No emails available for this date.</p>
        )}
      </div>
    </Sider>
  );
};

export default RightSidebar;
