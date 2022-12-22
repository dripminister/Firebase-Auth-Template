import Signup from "./components/Signup"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"

function App() {
	return (
		<div>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							path="/"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/signup"
							element={<Signup />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>
						<Route
							path="/forgot"
							element={<ForgotPassword />}
						/>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
