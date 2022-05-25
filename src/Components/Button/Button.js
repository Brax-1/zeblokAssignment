import { Button } from "@mui/material";
import React from "react";
import "./Button.css";
import { styled } from "@mui/material/styles";

const StyledButton = (props) => {
	const StyledBtn = styled(Button)(({ theme }) => ({
		background: `${
			props.styleDetails
				? props.styleDetails.bgcolor
				: theme.palette.primary.main
		}`,
		padding: "10px 40px",
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		color: `${props.styleDetails ? props.styleDetails.color : "white"}`,
		"&:hover": {
			background: `${
				props.styleDetails
					? props.styleDetails.bghover
					: theme.palette.primary.dark
			}`,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "10px",
			padding: "5px 20px",
		},
	}));
	return (
		<div onClick={() => props.onClickFunc()}>
			<StyledBtn variant="contained" endIcon={props.endIcon}>
				{props.name}
			</StyledBtn>
		</div>
	);
};

export default StyledButton;
