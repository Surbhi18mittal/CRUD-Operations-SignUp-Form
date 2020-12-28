import React from "react";
import { Button, Table } from 'reactstrap';
const viewUsers = (props) => {
	return (
		<Table bordered>
			<thead>
				<tr>
					<th>Username</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users.length > 0 ? (
					props.users.map((user) => (
						<tr key={user.id}>
							<td style={{ padding: "10px !important" }}>{user.username}</td>
							<td style={{ padding: "10px !important" }}>{user.email}</td>
							<td style={{ padding: "10px !important" }}>
								<Button color="success" onClick={() => props.editUser(user)} >Edit</Button>{' '}
								<Button color="success" onClick={() => props.deleteUser(user.id)}>Delete</Button>
							</td>
						</tr>))) : (<tr>

							<td colspan={3} >No users</td>
						</tr>)
				}
			</tbody>
		</Table>

	)
}
export default viewUsers;