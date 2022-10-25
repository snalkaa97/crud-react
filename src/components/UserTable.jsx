import { useEffect, useState } from "react";
const UserTable = (props) => {
	const [currentId, setId] = useState();
	useEffect(() => {
		if (!props.editing) {
			setId("");
		}
	}, [currentId, props.editing]);
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Username</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users.length > 0 ? (
					props.users.map((user, index) => {
						return (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>
									<button
										className="button muted-button"
										onClick={() => {
											setId(user.id);
											props.editRow(user);
										}}
									>
										Edit
									</button>
									{currentId !== user.id && (
										<button
											className="button muted-button"
											onClick={() => {
												props.deleteUser(user.id);
											}}
										>
											Delete
										</button>
									)}
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan={3}>No users</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};
export default UserTable;
