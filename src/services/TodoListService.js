import axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem"

export default class TodoListService {
	static getTaskListApi() {
		const url = `${DOMAIN}ToDoList/GetAllTask`
		return axios.get(url)
	}

	static addTaskApi(newTask) {
		const url = `${DOMAIN}ToDoList/AddTask`
		return axios.post(url, newTask)
	}

	static deleteTaskApi(taskName) {
		const url = `${DOMAIN}ToDoList/deleteTask?taskName=${taskName}`
		return axios.delete(url)
	}

	static doneTaskApi(taskName) {
		const url = `${DOMAIN}ToDoList/doneTask?taskName=${taskName}`
		return axios.put(url)
	}

	static rejectTaskApi(taskName) {
		const url = `${DOMAIN}ToDoList/rejectTask?taskName=${taskName}`
		return axios.put(url)
	}
}
