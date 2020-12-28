import { React, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import ViewUsers from './viewUsers';
import EditUser from "./editUser";
import Form from './form'
import '../index.css'
const Home = () => {
	const userData = [{ id: 1, username: "Surbhi18mittal", email: "surbhiii1999mittal@gmail.com", password: "Suru@09", confirm_password: "Suru@09" },
	{ id: 2, username: "Rakhi09", email: "rakhi09@gmail.com", password: "Rakhi@09", confirm_password: "Rakhi@09" }]
	const [users, setUsers] = useState(userData)
	const [editing, setEditing] = useState(false)
	const initial = { id: null, username: '', email: '', password: '', confirm_password: '' }
	const [currentUser, setCurrentUser] = useState(initial)
	const addUser = (user) => {
		user.id = users.length + 1
		setUsers([...users, user])
	}
	console.log(users)
	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id))
	}
	const editUser = (user) => {
		setEditing(true)

		setCurrentUser({ id: user.id, email: user.email, username: user.username, password: user.password, confirm_password: user.confirm_password })
	}
	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
	}
	return (
		<><span style={{
			display: "flex",
			justifyContent: "center",
			color: "DarkBlue"
		}}>
			<h1 >Authentication form</h1>
		</span>

			<Row className="start no-gutters">
				{editing ? (
					<Col >
						<h1>Edit User Account</h1>
						<EditUser currentUser={currentUser} updateUser={updateUser} setEditing={setEditing} />
					</Col>
				) :
					(<Col>
						<span style={{ display: "flex", justifyContent: "center" }}><h1>Add User Account</h1></span>
						<Form addUser={addUser} />
					</Col>)
				}
				<Col >
					<span style={{ display: "flex", justifyContent: "center" }}>	<h1>View Users</h1> </span>
					<ViewUsers users={users} deleteUser={deleteUser} editUser={editUser} />
				</Col>
			</Row>

		</>
	)
}
export default Home;