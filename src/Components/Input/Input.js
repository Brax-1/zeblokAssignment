import React from "react";
import "./input.css";

const Input = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.name}</label>
			<div className="Input-main">
				<div className="Input-icon">{props.icon}</div>
				<input
					id={props.id}
					className="Input-field"
					type={props.type}
					placeholder={props.placeholder}
				/>
			</div>
		</>
	);
};

export default Input;
