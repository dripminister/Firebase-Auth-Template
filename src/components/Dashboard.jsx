import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Dashboard() {
	const [error, setError] = useState("")
	const { currentUser, logout } = useAuth()
	const navigate = useNavigate()

	async function handleLogout() {
		setError("")
		try {
			await logout()
			navigate("/login")
		} catch {
			setError("Failed to log out")
		}
	}
	return (
		<>
			<div>
				<div>
					<h2>Profile</h2>
					{error && <p>{error}</p>}
					<strong>Email: </strong> {currentUser.email}
				</div>
			</div>
			<div>
				<button onClick={handleLogout}>Log out</button>
			</div>
		</>
	)
}
