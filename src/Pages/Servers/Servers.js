import React, { useState } from "react";
import StyledButton from "../../Components/Button/Button";
import BlockBox from "../../Components/Element/Box/Box";
import Searchbar from "../../Components/Element/Searchbar/Searchbar";
import "./server.css";
import AddIcon from "@mui/icons-material/Add";
import Table from "../../Components/Table/Table";
import SpringModal from "../../Components/Element/Modal/Modal";
import Csvtable from "./CsvTable/Csvtable"

const tableheaders = [
	{ name: "Name", type: "text" },
	{ name: "Image Tag", type: "text" },
	{ name: "Public Access", type: "text" },
	{ name: "Status", type: "status" },
];

const Servers = () => {
	const [tableData, setTableData] = useState([]);
	const [openModal, setOpenModal] = useState(false);
    const handleToggle = () =>{
        setOpenModal(!openModal)
    }
	return (
		<>
            <SpringModal styleModal={{width:"65vw",lgWidth:"80vw",mdWidth:"97vw"}} open={openModal} setOpen={setOpenModal}>
                <Csvtable/>
            </SpringModal>
			<div className="server-main">
				<div className="server-box">
					<BlockBox>
						<div className="server-block-header">
							<div className="server-box-title">All Workstation List</div>
							<div className="server-bloack-header-right">
								<div style={{ marginRight: "15px" }}>
									<Searchbar />
								</div>
								<StyledButton
									styleDetails={{
										padding: "9px 15px",
										borderRadius: "10px",
										bgcolor: "#881630",
										bghover: "#ffc000",
									}}
									name={"Create New Workstation"}
									endIcon={<AddIcon />}
                                    onClickFunc={handleToggle}
								/>
							</div>
						</div>

						<div className="server-table-cover">
							<Table columns={tableheaders} rows={tableData} />
						</div>
					</BlockBox>
				</div>
			</div>
		</>
	);
};

export default Servers;
