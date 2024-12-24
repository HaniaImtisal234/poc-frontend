import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FORGET_PASSWORD_FORM } from "../../constants/Routes";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const apiUrl = `${baseUrl}/users/login`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Logged in successfully!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);

        navigate("/");
      } else {
        toast.error("Failed to log in.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
      console.error("Login failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h1 style={styles.heading}>POC</h1>
      <h2 style={styles.subHeading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(FORGET_PASSWORD_FORM);
          }}
          style={styles.forgetPasswordButton}
        >
          Forget Password?
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  subHeading: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#333",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  forgetPasswordButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "transparent",
    color: "#007BFF",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
    textDecoration: "underline",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Login;
