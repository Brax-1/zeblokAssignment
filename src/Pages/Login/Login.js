import React from "react";
import "./Login.css";
import left_image from "../../Images/mainImage.svg";
import logo from "../../Images/logo.svg";
import Input from "../../Components/Input/Input";
import { Lock, Email } from "@mui/icons-material";
import StyledButton from "../../Components/Button/Button";
import { ExitToApp } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigation = useNavigate()
	return (
		<div className="login-window">
			<div className="login-box login-left">
				<div className="login-content">
					<img src={logo} alt="Zeblok Logo" className="login-logo" />
					<div className="login-tagline">
						Zeblok is now an intel Partner Alliance member
					</div>
					<img
						src={left_image}
						alt="zeblok image"
						className="login-left-image"
					/>
				</div>
			</div>
			<div className="login-box login-right">
				<div className="login-content login-form">
					<div className="login-welcome-title">Welcome Back</div>
					<div className="login-requirement-line">
						Please enter your details below to login
					</div>
					<Input
						type={"email"}
						name={"Email"}
						id={"login-email"}
						icon={<Email />}
						placeholder={"Enter email or username"}
					/>
					<Input
						type={"password"}
						name={"Password"}
						id={"login-password"}
						icon={<Lock />}
						placeholder={"Password"}
					/>
					<div className="login-remember-section">
						<FormGroup>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label="Remember Me?"
							/>
						</FormGroup>
                        <button className="login-forgotPassword">
                            Forgot Password?
                        </button>
					</div>
					<div className="login-btn" onClick={()=>navigation('/csv')}>
						<StyledButton name={"Login"} endIcon={<ExitToApp />} />
					</div>
					<div className="login-already-account">
						Not registered yet?{" "}
						<span className="login-span">Create an Account</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
