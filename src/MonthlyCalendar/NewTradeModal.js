/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
function NewTradeModal() {
	return (
		<div
			className="NewTradeModal fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				{/* <!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        --> */}
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				/>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>

				{/* <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        --> */}
				<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								{/* <div className="flex flex-wrap justify-between"> */}
								<h3
									className="text-lg leading-6 font-medium text-gray-900"
									id="modal-title"
								>
									Daily Trades
								</h3>
								<p className="text-sm text-gray-400">November 2, 2021</p>
								{/* </div> */}
								<div className="mt-2">
									<form className="w-full max-w-lg">
										<div className="flex flex-wrap -mx-3 mb-6">
											<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-first-name"
												>
													First Name
												</label>
												<input
													className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
													id="grid-first-name"
													type="text"
													placeholder="Jane"
												/>
												<p className="text-red-500 text-xs italic">
													Please fill out this field.
												</p>
											</div>
											<div className="w-full md:w-1/2 px-3">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-last-name"
												>
													Last Name
												</label>
												<input
													className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
													id="grid-last-name"
													type="text"
													placeholder="Doe"
												/>
											</div>
										</div>
										<div className="flex flex-wrap -mx-3 mb-6">
											<div className="w-full px-3">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Password
												</label>
												<input
													className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
													id="grid-password"
													type="password"
													placeholder="******************"
												/>
												<p className="text-gray-600 text-xs italic">
													Make it as long and as crazy as you'd like
												</p>
											</div>
										</div>
										<div className="flex flex-wrap -mx-3 mb-2">
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-city"
												>
													City
												</label>
												<input
													className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
													id="grid-city"
													type="text"
													placeholder="Albuquerque"
												/>
											</div>
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-state"
												>
													State
												</label>
												<div className="relative">
													<select
														className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
														id="grid-state"
													>
														<option>New Mexico</option>
														<option>Missouri</option>
														<option>Texas</option>
													</select>
													<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
														<svg
															className="fill-current h-4 w-4"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
														>
															<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
														</svg>
													</div>
												</div>
											</div>
											<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
												<label
													className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
													htmlFor="grid-zip"
												>
													Zip
												</label>
												<input
													className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
													id="grid-zip"
													type="text"
													placeholder="90210"
												/>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
						>
							New Trade?
						</button>
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewTradeModal;
