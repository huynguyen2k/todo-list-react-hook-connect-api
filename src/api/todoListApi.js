import axiosClient from "./axiosClient"

export const todoListApi = {
	getTaskListApi: () => {
		return axiosClient.get("/ToDoList/GetAllTask")
	},

	addTaskApi: newTask => {
		return axiosClient.post("/ToDoList/AddTask", newTask)
	},

	deleteTaskApi: taskName => {
		return axiosClient.delete("/ToDoList/deleteTask", {
			params: {
				taskName,
			},
		})
	},

	doneTaskApi: taskName => {
		return axiosClient.put("/ToDoList/doneTask", null, {
			params: {
				taskName,
			},
		})
	},

	rejectTaskApi: taskName => {
		return axiosClient.put("/ToDoList/rejectTask", null, {
			params: {
				taskName,
			},
		})
	},
}
