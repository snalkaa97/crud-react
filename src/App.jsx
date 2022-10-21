import { useEffect, useState } from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

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

	useEffect(() => {
		console.log(users);
	}, [users]);

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					<h2>Add user</h2>
					<AddUserForm addUser={addUser} />
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
			</div>
		</div>
	);
};

export default App;
