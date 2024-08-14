import React, { useState } from 'react'

const Header = () => {
	const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false)

	const toggleContactDropdown = () => {
		setIsContactDropdownOpen(!isContactDropdownOpen)
	}

	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-white text-lg font-bold">Logo</div>
				<div className="flex space-x-4">
					<a
						href="#"
						className="text-white hover:bg-gray-700 px-3 py-2 rounded"
					>
						Home
					</a>
					<a
						href="#"
						className="text-white hover:bg-gray-700 px-3 py-2 rounded"
					>
						About
					</a>
					<div className="relative group">
						<button className="text-white hover:bg-gray-700 px-3 py-2 rounded focus:outline-none">
							Services
						</button>
						<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								Web Development
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								Mobile Development
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
							>
								UI/UX Design
							</a>
						</div>
					</div>
					<div className="relative">
						<button
							onClick={toggleContactDropdown}
							className="text-white hover:bg-gray-700 px-3 py-2 rounded focus:outline-none"
						>
							Contact
						</button>
						{isContactDropdownOpen && (
							<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
								<a
									href="#"
									className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
								>
									Email Us
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
								>
									Call Us
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
								>
									Visit Us
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
