import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export const MenuItems = [
  {
    key: "first",
    label: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        9/10/2024
      </div>
    ),
    title: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        9/10/2024
      </div>
    ),
    route: "/backoffice/users",
    icon: <CalendarMonthIcon style={{ fontSize: "20px", color: "white" }} />,
    subItems: [
      {
        key: "second",
        label: <div className="text-white">Email 1</div>,
        title: "Email 1",
        route: "/backoffice/users",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
      {
        key: "third",
        label: <div className="text-white">Email 2</div>,
        title: "Email 2",
        route: "/backoffice/users/therapists",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
    ],
  },
  {
    key: "fourth",
    label: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        10/10/2024
      </div>
    ),
    title: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        10/10/2024
      </div>
    ),
    route: "/backoffice/users",
    icon: <CalendarMonthIcon style={{ fontSize: "20px", color: "white" }} />,
    subItems: [
      {
        key: "fifth",
        label: <div className="text-white">Email 1</div>,
        title: "Email 1",
        route: "/backoffice/users",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
      {
        key: "sixth",
        label: <div className="text-white">Email 2</div>,
        title: "Email 2",
        route: "/backoffice/users/therapists",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
    ],
  },
  {
    key: "seventh",
    label: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        11/10/2024
      </div>
    ),
    title: (
      <div
        className="text-white"
        style={{
          fontSize: "16px",
          padding: "10px",
          lineHeight: "24px",
          color: "white",
        }}
      >
        11/10/2024
      </div>
    ),
    route: "/backoffice/users",
    icon: <CalendarMonthIcon style={{ fontSize: "20px", color: "white" }} />,
    subItems: [
      {
        key: "eighth",
        label: <div className="text-white">Email 1</div>,
        title: "Email 1",
        route: "/backoffice/users",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
      {
        key: "ninth",
        label: <div className="text-white">Email 2</div>,
        title: "Email 2",
        route: "/backoffice/users/therapists",
        icon: <EmailIcon style={{ fontSize: "20px", color: "white" }} />,
      },
    ],
  },
];
