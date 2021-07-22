import "./App.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TodoList from "./pages/TodoList"
import Loading from "./components/Loading"

function App() {
	return (
		<BrowserRouter>
			<Loading />
			<Switch>
				<Route exact path="/" component={TodoList} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
