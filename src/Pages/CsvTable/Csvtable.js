import React from "react";
import StyledButton from "../../Components/Button/Button";
import Table from "../../Components/Table/Table";
import "./CsvTable.css";
const tableheaders = [
	{ name: "Os Id", type: "text" },
	{ name: "PSM Id", type: "text" },
	{ name: "Username", type: "text" },
	{ name: "Password", type: "text" },
	{ name: "Status", type: "status" },
];
const tableData = [
    {
        osid:'T980293480',
        psmid:'PS102983213',
        username:'Brax-1',
        password:'Alop123',
        status:'completed'
    },
    {
        osid:'T980293480',
        psmid:'PS102983213',
        username:'Brax-1',
        password:'Alop123',
        status:'pending'
    },
    {
        osid:'T980293480',
        psmid:'PS102983213',
        username:'Brax-1',
        password:'Alop123',
        status:'failed'
    },
    {
        osid:'T980293480',
        psmid:'PS102983213',
        username:'Brax-1',
        password:'Alop123',
        status:'completed'
    },
    {
        osid:'T980293480',
        psmid:'PS102983213',
        username:'Brax-1',
        password:'Alop123',
        status:'failed'
    },
]

const Csvtable = () => {
	return (
		<div className="csv-main">
			<div className="csv-box csv-end">
				<div className="csv-button-top">
					<StyledButton name={"Import Csv"} />
					<StyledButton name={"Add New"} />
				</div>
			</div>
			<div className="csv-box csv-table">
				<div className="csv-table-cover">
					<Table columns={tableheaders} rows={tableData}/>
				</div>
			</div>
			<div className="csv-box csv-end">
				<StyledButton name={"Validate"} />
			</div>
		</div>
	);
};

export default Csvtable;
