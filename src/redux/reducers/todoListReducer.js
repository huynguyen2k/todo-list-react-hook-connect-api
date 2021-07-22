import { GET_TASK_LIST_API } from "../constants/ActionType"

const initialState = {
	taskList: [],
}

const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASK_LIST_API: {
			return {
				...state,
				taskList: action.taskList,
			}
		}

		default:
			return state
	}
}

export default todoListReducer
