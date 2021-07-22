import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./style.scss"

import {
	ADD_TASK_SAGA,
	DELETE_TASK_SAGA,
	DONE_TASK_SAGA,
	GET_TASK_LIST_SAGA,
	REJECT_TASK_SAGA,
} from "../../redux/constants/ActionType"

export default function TodoList() {
	const dispatch = useDispatch()
	const taskList = useSelector(state => state.todoListReducer.taskList)

	const [task, setTask] = useState({
		taskName: "",
		errorMessage: "",
	})

	useEffect(handleGetTaskList, [dispatch])

	function resetTaskState() {
		setTask({
			taskName: "",
			errorMessage: "",
		})
	}

	// HANDLE FUNCTIONS
	function handleGetTaskList() {
		dispatch({
			type: GET_TASK_LIST_SAGA,
		})
	}

	function handleAddTask(newTask) {
		dispatch({
			type: ADD_TASK_SAGA,
			newTask,
		})
	}

	function handleDoneTask(taskName) {
		dispatch({
			type: DONE_TASK_SAGA,
			taskName,
		})
	}

	function handleDeleteTask(taskName) {
		dispatch({
			type: DELETE_TASK_SAGA,
			taskName,
		})
	}

	function handleRejectTask(taskName) {
		dispatch({
			type: REJECT_TASK_SAGA,
			taskName,
		})
	}

	// HANDLE FUNCTIONS
	function handleTaskNameChange(e) {
		const { value } = e.target
		let errorMessage = ""

		if (value.trim() === "") {
			errorMessage = "Your task is not valid!"
		}

		setTask({
			...task,
			taskName: value,
			errorMessage,
		})
	}

	function handleTaskSubmit(e) {
		e.preventDefault()

		if (task.errorMessage === "" && task.taskName.trim() !== "") {
			const newTask = {
				taskName: task.taskName,
			}
			handleAddTask(newTask)
			resetTaskState()
		} else {
			setTask({
				...task,
				errorMessage: "Your task is not valid!",
			})
		}
	}

	// RENDER FUNCTIONS
	function renderUndoneTaskList() {
		return taskList
			.filter(task => !task.status)
			.map((task, index) => {
				return (
					<li className="task-list__item" key={index}>
						<p className="task-list__task-name">{task.taskName}</p>
						<div className="task-list__action">
							<span
								className="task-list__btn"
								onClick={() => handleDoneTask(task.taskName)}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check-circle"
									className="svg-inline--fa fa-check-circle fa-w-16"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
									></path>
								</svg>
							</span>
							<span
								className="task-list__btn"
								onClick={() => handleDeleteTask(task.taskName)}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="trash"
									className="svg-inline--fa fa-trash fa-w-14"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
									></path>
								</svg>
							</span>
						</div>
					</li>
				)
			})
	}

	function renderDoneTaskList() {
		return taskList
			.filter(task => task.status)
			.map((task, index) => {
				return (
					<li className="task-list__item" key={index}>
						<p className="task-list__task-name task-list__task-name--success">
							{task.taskName}
						</p>
						<div className="task-list__action">
							<span
								className="task-list__btn"
								onClick={() => {
									handleRejectTask(task.taskName)
								}}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="undo"
									className="svg-inline--fa fa-undo fa-w-16"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
									></path>
								</svg>
							</span>
							<span
								className="task-list__btn"
								onClick={() => handleDeleteTask(task.taskName)}
							>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="trash"
									className="svg-inline--fa fa-trash fa-w-14"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
								>
									<path
										fill="currentColor"
										d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
									></path>
								</svg>
							</span>
						</div>
					</li>
				)
			})
	}

	return (
		<div className="wrapper">
			<div className="todo-list">
				<div className="todo-list__header">
					<div className="todo-list__top-image">
						<img src="./assets/images/background.jpg" alt="background" />
					</div>
				</div>
				<div className="todo-list__body">
					<h1 className="todo-list__top-title">My tasks</h1>
					<h2 className="todo-list__date">July 20 2021</h2>
					<form
						className="todo-list__add-task-form"
						onSubmit={handleTaskSubmit}
					>
						<div className="todo-list__form-row">
							<div className="todo-list__form-group">
								<input
									className="task-name"
									type="text"
									name="taskName"
									value={task.taskName}
									onChange={handleTaskNameChange}
									placeholder="Enter your task"
								/>
								<button className="add-task-btn">+</button>
							</div>
							<p className="todo-list__form-message todo-list__form-message--error">
								{task.errorMessage}
							</p>
						</div>
					</form>
					<div className="todo-list__task-group">
						<h2 className="todo-list__subtitle">Undone task</h2>
						<ul className="task-list">{renderUndoneTaskList()}</ul>
					</div>
					<div className="todo-list__task-group">
						<h2 className="todo-list__subtitle">Done task</h2>
						<ul className="task-list">{renderDoneTaskList()}</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
