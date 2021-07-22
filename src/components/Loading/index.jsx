import React from "react"
import { useSelector } from "react-redux"
import "./style.scss"

export default function Loading() {
	const isLoading = useSelector(state => state.loadingReducer.isLoading)

	if (isLoading) {
		return (
			<div className="loading">
				{/* <img src="./assets/images/loading.svg" alt="Loading" /> */}
				<div className="loadingio-spinner-dual-ring-31wowsnofwe">
					<div className="ldio-31ro38isged">
						<div></div>
						<div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return ""
	}
}
