import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import './Searchbar.css'

const Searchbar = () => {
	return (
		<div className="searchbar-main">
			<ListItemIcon
				sx={{
					minWidth: 0,
					justifyContent: "center",
				}}
			>
				<SearchIcon />
			</ListItemIcon>
			<input placeholder="Search" />
		</div>
	);
};

export default Searchbar;
