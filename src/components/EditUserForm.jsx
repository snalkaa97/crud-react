import { useState, useEffect } from "react";

const EditUserForm = (props) => {
	const [user, setUser] = useState(props.currentUser);

	const handlerEvents = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		setUser(props.currentUser);
	}, [props]);

	return (
		<div>
			<h2>Edit user</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!user.name || !user.username) return;
					props.updateUser(user.id, user);
					// setUser(initialFormState);
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
				<button>Save</button>
				<button
					className="button muted-button"
					onClick={() => props.setEditing(false)}
				>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default EditUserForm;
