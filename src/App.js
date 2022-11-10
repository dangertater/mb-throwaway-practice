import React, { useState } from "react"

export default function App() {
	let [objects, setObjects] = useState([
		{ name: "heather", age: 7, tall: true },
		{ name: "bob", age: 12, tall: false },
	])

	//below are new variables that I make to implement into different functions/component practice
	let newObj0 = {
		name: "stan",
		age: 12,
		tall: false,
	}
	let newObj1 = {
		name: "otto",
		age: 15,
		tall: false,
	}
	let newObj2 = {
		name: "jud",
		age: 48,
		tall: true,
	}
	let newObjArray = [newObj0, newObj1, newObj2]
	let oneTwoThree = () => {
		return Math.floor(Math.random() * 3)
	}
	return (
		<>
			{/* the below json.stringify with extra arguments is a convenient hack from eric. the pre's are essentially divs and the 3 arguments
    make it appear in a very reader frinedly display on the localhost:3000*/}
			<pre>{JSON.stringify(objects, null, 2)}</pre>
			{/* the below button onClick will set call setObjects assosciated with the useState hook from above 
      current syntax renders all previous objects, and then the new inline object containing 'steve'*/}
			<button
				onClick={(e) => {
					setObjects([...objects, { name: "steve", age: 10, tall: true }])
				}}
			>
				add steve
			</button>
			{/*adds a random person from the newObjArray
			 */}
			<button
				onClick={(e) => {
					setObjects([...objects, newObjArray[oneTwoThree()]])
				}}
			>
				add rando
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
