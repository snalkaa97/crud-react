import { useState } from "react";

const AddUserForm = (props) => {
	const initialFormState = { id: null, name: "", username: "" };
	const [user, setUser] = useState(initialFormState);

	const handlerEvents = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (!user.name || !user.username) return;
				props.addUser(user);
				setUser(initialFormState);
			}}
		>
			<label>Name</label>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handlerEvents}
			/>
			<label>Username</label>
			<input
				type="text"
				name="username"
				value={user.username}
				onChange={handlerEvents}
			/>
			<button>Add new user</button>
		</form>
	);
};

export default AddUserForm;
