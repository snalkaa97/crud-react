import { useEffect, useState } from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

const App = () => {
	const usersData = [
		{ id: 1, name: "Tania", username: "floppydiskette" },
		{ id: 2, name: "Craig", username: "siliconeidolon" },
		{ id: 3, name: "Ben", username: "benisphere" },
	];

	const [users, setUsers] = useState(usersData);

	const addUser = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const deleteUser = (id) => {
		setUsers(users.filter((user) => user.id !== id));
	};

	const [editing, setEditing] = useState(false);

	const initialFormState = { id: null, name: "", username: "" };

	const [currentUser, setCurrentUser] = useState(initialFormState);

	const editRow = (user) => {
		setEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);
		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	useEffect(() => {
		console.log(users);
	}, [users]);

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<EditUserForm
							currentUser={currentUser}
							updateUser={updateUser}
							setEditing={setEditing}
						/>
					) : (
						<AddUserForm addUser={addUser} />
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
				</div>
			</div>
		</div>
	);
};

export default App;
