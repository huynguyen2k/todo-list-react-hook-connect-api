import "./App.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TodoList from "./pages/TodoList"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={TodoList} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
