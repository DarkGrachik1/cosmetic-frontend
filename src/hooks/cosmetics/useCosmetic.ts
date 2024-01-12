import {useDispatch, useSelector} from 'react-redux';
import {
	updateDescription,
	updateName,
	updateCosmetic
} from "../../store/cosmetics/cosmeticSlice";
import {useToken} from "../users/useToken";
import {api} from "../../utils/api";

export function useCosmetic() {

	const {access_token} = useToken()

	const cosmetic = useSelector(state => state.cosmetic.cosmetic)

	const is_draft = cosmetic?.status == 1

	const dispatch = useDispatch()

	const setCosmetic = (value) => {
		dispatch(updateCosmetic(value))
	}

	const setName = (value) => {
		dispatch(updateName(value))
	}

	const setDescription = (value) => {
		dispatch(updateDescription(value))
	}

	const sendCosmetic = async () => {

		const response = await api.put(`cosmetics/${cosmetic.id}/update_status_user/`, {}, {
			headers: {
				'authorization': access_token
			}
		})

		if (response.status == 200)
		{
			setCosmetic(undefined)
		}
	}

	const deleteCosmetic = async () => {

		const response = await api.delete(`cosmetics/${cosmetic.id}/delete/`, {
			headers: {
				'authorization': access_token
			}
		})

		if (response.status == 200)
		{
			setCosmetic(undefined)
		}

	}

	const saveCosmetic = async () => {

		const form_data = new FormData()

		form_data.append('name', cosmetic.name)
		form_data.append('description', cosmetic.description)

		await api.put(`cosmetics/${cosmetic.id}/update/`, form_data, {
			headers: {
				'authorization': access_token
			}
		})

	}

	const fetchCosmetic = async (cosmetic_id) => {

		const {data} = await api.get(`cosmetics/${cosmetic_id}/`, {
			headers: {
				'authorization': access_token
			},
		})

		setCosmetic(data)
	}

	const addSubstanceToCosmetic = async (substance) => {

		const response = await api.post(`substances/${substance.id}/add_to_cosmetic/`, {}, {
			headers: {
				'authorization': access_token
			},
		});

		if (response.status == 200) {
			setCosmetic(response.data)
		}
	}

	const deleteSubstanceFromCosmetic = async (substance) => {
		const response = await api.delete(`cosmetics/${cosmetic.id}/delete_substance/${substance.id}/`, {
			headers: {
				'authorization': access_token
			},
		});

		if (response.status == 200) {
			setCosmetic(response.data)
		}
	}

	return {
		cosmetic,
		is_draft,
		setCosmetic,
		setName,
		setDescription,
		saveCosmetic,
		sendCosmetic,
		deleteCosmetic,
		fetchCosmetic,
		addSubstanceToCosmetic,
		deleteSubstanceFromCosmetic
	};
}