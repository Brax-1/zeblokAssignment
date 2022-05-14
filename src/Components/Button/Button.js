import { Button } from "@mui/material";
import React from "react";
import "./Button.css";
import { styled } from "@mui/material/styles";

const StyledBtn = styled(Button)(({ theme }) => ({
    background:"#881630",
    padding:"10px 40px",
    width:"100%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    color:"#e0e0e0",
    '&:hover':{
        background:"#FFC000",
        fontWeight:"800",
    }
}));

const StyledButton = (props) => {
	return (
		<div>
			<StyledBtn variant="contained"  endIcon={props.endIcon}>
				{props.name}
			</StyledBtn>
		</div>
	);
};

export default StyledButton;
