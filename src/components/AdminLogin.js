import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const predefinedAdmins = [
        { email: "ForestDept@gmail.com", password: "@ForestDept111" },
        { email: "sakshi@gmail.com", password: "Sakshi@5555" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAdminValid = predefinedAdmins.some(
            admin => admin.email === email && admin.password === password
        );

        if (isAdminValid) {
            alert("Login successful");
            navigate('/admin-dashboard');
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="content-box">
                <h3>Admin Sign-In</h3>
                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="/sign-up">SignUp</a>
                </p>
                <p className="forgot-password text-right">
                    <a href="/login">User Login</a>
                </p>
            </div>
        </form>
    );
}
