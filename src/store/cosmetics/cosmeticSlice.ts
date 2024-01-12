import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	cosmetic: undefined
};

const cosmeticSlice = createSlice({
	name: 'cosmetic',
	initialState: initialState,
	reducers: {
		updateCosmetic(state, action) {
			state.cosmetic = action.payload
		},
		updateName(state, action) {
			state.cosmetic.name = action.payload
		},
		updateDescription(state, action) {
			state.cosmetic.description = action.payload
		}
	}
})

export const {
	updateCosmetic,
	updateName,
	updateDescription
} = cosmeticSlice.actions;

export default cosmeticSlice.reducer;