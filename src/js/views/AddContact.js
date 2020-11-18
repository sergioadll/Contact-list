import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({ name: null, email: null, phone: null, address: null });
	let id = "";
	if (props.location.state != undefined) {
		id = props.location.state.id;
	}

	const contactInfo = () => {
		if (contact.email != null && contact.name != null && contact.phone != null && contact.address != null) {
			actions.addOrModifyContact(id, contact);
			window.history.back();
		}
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							required
							autoFocus
							onChange={e => {
								let newName = e.target.value;
								setContact(contact => {
									return { ...contact, name: newName };
								});
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							required
							autoFocus
							onChange={e => {
								let newEmail = e.target.value;
								setContact(contact => {
									return { ...contact, email: newEmail };
								});
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							required
							autoFocus
							onChange={e => {
								let newPhone = e.target.value;
								setContact(contact => {
									return { ...contact, phone: newPhone };
								});
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							required
							autoFocus
							onChange={e => {
								let newAddress = e.target.value;
								setContact(contact => {
									return { ...contact, address: newAddress };
								});
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							contactInfo();
						}}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
AddContact.propTypes = {
	location: PropTypes.object
};

AddContact.defaultProps = {
	id: ""
};
