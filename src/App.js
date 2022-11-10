import React from "react"

import React, { useState } from "react"

export default function App() {
	let [objects, setObjects] = useState([
		{ name: "guy", age: 7, tall: true },
		{ name: "girl", age: 12, tall: false },
	])
	let newObj = {
		name: "girl",
		age: 12,
		tall: false,
	}

	return (
		<>
			{objects[0].name}
			<pre>{JSON.stringify(objects, null, 2)}</pre>
			<button
				onClick={(e) => {
					setObjects([...objects, { name: "steve", age: 10, tall: true }])
				}}
			>
				change name
			</button>
			<button
				onClick={(e) => {
					setObjects([...objects, newObj])
				}}
			>
				add obj
			</button>
		</>
	)
}

// function App() {
// 	let [Todo, setTodo] = (0, React.useState)([""])
// 	return React.default.createElement(SingleTodo, {
// 		Todo: Todo,
// 	})
// }
