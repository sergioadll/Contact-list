const baseUrl = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
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
			}
		}
	};
};

export default getState;
