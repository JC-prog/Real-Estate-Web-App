import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Logo from "../Components/Logo";
import "./Login.css"
import api from '../api/loginApi'
import { useCookies } from 'react-cookie';

interface User {
    username: string;
    password: string;
}

interface ApiResponse {
    data: User[];
    status: number;
}

interface ApiError {
    message: string;
    status: number;
}

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleApiResponse = async () => {

        const userData = { username, password };

        try {
            const response: AxiosResponse = await api.post('/api/auth/login', userData);

            if (response.data == 'No Data') {

                toast.error("Login Failed. Please check your credentials.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

                return;

            } else {

                toast.success("Login Successful!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });

                const token = response.data.token;
                setCookie('token', token, { path: '/' });

                console.log(response.data.role);
                if (response.data.role == "admin") {
                    navigate("/admin");
                }

                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);

            toast.error("Login Failed. Please check your credentials", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            // Handle error, such as displaying an error message to the user
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const testReceived = handleApiResponse();
            console.log(testReceived);
            // Call function to handle response and redirect
            //handleApiResponse(testReceived);

            // Handle success response here, such as redirecting to another page
        } catch (error) {
            console.error('Error:', error);
            // Handle error, such as displaying an error message to the user
        }
    };

    return (
        <div className='login-card-container'>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="logo-div">
                        <Logo />
                    </div>
                    <h2>Login</h2>
                    <p>Enter your credentials to access your account</p>
                    <div>
                        <label htmlFor="username">Username</label><br />
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className='button-div'>
                        <button type="submit">Continue</button>
                    </div>
                </form>
                <div className="new-user-div">
                    <p>Dont have an account? <a href="/register">Create an account</a></p>
                    <p>Forget your password? <a href="/register">Click</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
