import { call, delay, put, takeLatest } from "redux-saga/effects"
import {
	ADD_TASK_SAGA,
	DELETE_TASK_SAGA,
	DISPLAY_LOADING,
	DONE_TASK_SAGA,
	GET_TASK_LIST_API,
	GET_TASK_LIST_SAGA,
	HIDE_LOADING,
	REJECT_TASK_SAGA,
} from "../constants/ActionType"
import { todoListApi } from "../../api/todoListApi"

function* getTaskListApiAction() {
	yield put({
		type: DISPLAY_LOADING,
	})

	yield delay(2000)

	try {
		const data = yield call(todoListApi.getTaskListApi)

		yield put({
			type: GET_TASK_LIST_API,
			taskList: data,
		})
	} catch (error) {
		console.log("Failed: " + error)
	}

	yield put({
		type: HIDE_LOADING,
	})
}

function* addTaskApiAction(action) {
	try {
		yield call(todoListApi.addTaskApi, action.newTask)

		yield put({
			type: GET_TASK_LIST_SAGA,
		})
	} catch (error) {
		console.log("Failed: " + error)
	}
}

function* deleteTaskApiAction(action) {
	try {
		yield call(todoListApi.deleteTaskApi, action.taskName)

		yield put({
			type: GET_TASK_LIST_SAGA,
		})
	} catch (error) {
		console.log("Failed: " + error)
	}
}

function* doneTaskApiAction(action) {
	try {
		yield call(todoListApi.doneTaskApi, action.taskName)

		yield put({
			type: GET_TASK_LIST_SAGA,
		})
	} catch (error) {
		console.log("Failed: " + error)
	}
}

function* rejectTaskApiAction(action) {
	try {
		yield call(todoListApi.rejectTaskApi, action.taskName)

		yield put({
			type: GET_TASK_LIST_SAGA,
		})
	} catch (error) {
		console.log("Failed: " + error)
	}
}

export function* takeGetTaskListApiAction() {
	yield takeLatest(GET_TASK_LIST_SAGA, getTaskListApiAction)
}

export function* takeAddTaskApiAction() {
	yield takeLatest(ADD_TASK_SAGA, addTaskApiAction)
}

export function* takeDoneTaskApiAction() {
	yield takeLatest(DONE_TASK_SAGA, doneTaskApiAction)
}

export function* takeDeleteTaskApiAction() {
	yield takeLatest(DELETE_TASK_SAGA, deleteTaskApiAction)
}

export function* takeRejectTaskApiAction() {
	yield takeLatest(REJECT_TASK_SAGA, rejectTaskApiAction)
}
