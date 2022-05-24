import React from "react";
import "./Table.css";

const Table = (props) => {
	return (
		<table className="table-main">
			<thead>
				{props.columns.map((val) => (
					<th>{val.name}</th>
				))}
			</thead>
			<tbody>
				{props.rows.map((row) => (
					<tr>
						<td>{row.osid}</td>
						<td>{row.psmid}</td>
						<td>{row.username}</td>
						<td>{row.password}</td>
						<td>
							{row.status === "completed" && (
								<p className={`table-status table-status-success`}>Completed</p>
							)}
							{row.status === "pending" && (
								<p className={`table-status table-status-warning`}>Pending</p>
							)}
							{row.status === "failed" && (
								<p className={`table-status table-status-danger`}>Failed</p>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
