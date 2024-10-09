const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Add to favorites
			addToFavorites: (item) => {
				const store = getStore();
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			// Remove from favorites
			removeFromFavorites: (item) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav !== item);
				setStore({ favorites: updatedFavorites });
			}
		}
	};
};

export default getState;
