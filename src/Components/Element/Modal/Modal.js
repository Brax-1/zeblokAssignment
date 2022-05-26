import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { height } from "@mui/system";
import { styled } from "@mui/material/styles";

export default function SpringModal(props) {
	const StyledBox = styled(Box)(({ theme }) => ({
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: `${props.styleModal ? props.styleModal.width : 400}`,
		background: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		height: "fit-content",
		maxHeight: "85vh",
        minHeight:"400px",
		[theme.breakpoints.down("lg")]: {
            width: `${props.styleModal ? props.styleModal.lgWidth : 400}`,
		},
		[theme.breakpoints.down("md")]: {
            width: `${props.styleModal ? props.styleModal.mdWidth : 200}`,
		}
	}));
	const handleToggle = () => props.setOpen(!props.open);
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={handleToggle}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={props.open}>
					<StyledBox>{props.children}</StyledBox>
				</Fade>
			</Modal>
		</div>
	);
}
