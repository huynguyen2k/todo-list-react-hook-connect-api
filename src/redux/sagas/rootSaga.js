import { all } from "redux-saga/effects"
import {
	takeAddTaskApiAction,
	takeDeleteTaskApiAction,
	takeDoneTaskApiAction,
	takeGetTaskListApiAction,
	takeRejectTaskApiAction,
} from "./todoListSaga"

export default function* rootSaga() {
	yield all([
		takeGetTaskListApiAction(),
		takeAddTaskApiAction(),
		takeDoneTaskApiAction(),
		takeDeleteTaskApiAction(),
		takeRejectTaskApiAction(),
	])
}
