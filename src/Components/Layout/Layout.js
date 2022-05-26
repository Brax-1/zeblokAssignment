import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import zeblockLogo from "../../Images/logo.svg";
import toggleIcon from "../../Images/toggle.svg";
import zeblockIcon from "../../Images/zeblocklogo.png";
import { Language, Workspaces } from "@mui/icons-material";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { LayoutBarOptions } from "./LayoutConstants";
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	background: "white",
	boxShadow: "none",
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
    width: `calc(100% - 65px)`,
	boxShadow: "none",
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function MainLayout() {
    const location = useLocation();
	const [open, setOpen] = React.useState(false);
	const navigation = useNavigate();
	const handleDrawer = () => {
		setOpen(!open);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<StyledToolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawer}
						edge="start"
						sx={{
							marginRight: 1,
						}}
					>
						<img src={toggleIcon} alt={"Toggle button"} />
					</IconButton>
					<Typography
						variant="h6"
						sx={{ color: "black" }}
						noWrap
						component="div"
					>
                        {location.pathname === '/welcome/servers' && "Servers"}
                        {location.pathname === '/welcome' && "Welcome To Zeblock"}
					</Typography>
				</StyledToolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					{open ? (
						<img src={zeblockLogo} alt={"Zeblock Logo"} />
					) : (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawer}
						>
							<img src={zeblockIcon} alt={"Toggle button"} width={'40px'} />
						</IconButton>
					)}
				</DrawerHeader>
				<List>
					{LayoutBarOptions.map((text, index) => (
						<ListItem
							key={text}
							disablePadding
							onClick={() => navigation(text.link)}
							sx={{ display: "block" }}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{text.name === "Servers" && <Language />}
									{text.name === "Kubernetes Clusters" && <Workspaces />}
								</ListItemIcon>
								<ListItemText
									primary={text.name}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: open ? `calc(100vw - ${drawerWidth}px)` : "95vw" }}>
				<DrawerHeader />
                <Outlet/>
			</Box>
		</Box>
	);
}
