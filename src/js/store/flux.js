const baseUrl = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadContacts: async () => {
				const contactsUrl = baseUrl.concat("agenda/sergio");
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(contactsUrl, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let contacts = await result;
					setStore({ contacts: contacts });
				} catch (error) {
					console.log("error", error);
				}
			},
			addOrModifyContact: async (id, info) => {
				let method = "";
				id != "" ? (method = "PUT") : (method = "POST");
				const contactsUrl = baseUrl.concat(id);
				var requestOptions = {
					method: method,
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: info.name,
						email: info.email,
						agenda_slug: "sergio",
						phone: info.phone,
						address: info.address
					}),
					redirect: "follow"
				};
				try {
					let res = await fetch(contactsUrl, requestOptions);
					let result = await res.json();
					console.log(result);
				} catch (error) {
					console.log("error", error);
				}
				getActions().loadContacts();
			},
			deleteContact: async id => {
				const contactsUrl = baseUrl.concat(id);
				var requestOptions = {
					method: "DELETE",
					redirect: "follow"
				};
				try {
					let res = await fetch(contactsUrl, requestOptions);
					let result = await res.json();
					console.log(result);
				} catch (error) {
					console.log("error", error);
				}
				getActions().loadContacts();
			}
		}
	};
};

export default getState;
