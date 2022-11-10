import React, { useState } from "react"

/**
 * will check for and delete duplicate objects
 * @param {*} obj should be an object with a name key
 * @returns
 */
export let checkForDuplicates = (obj) => {
	let filteredObject = {}
	let filteredArray = obj.filter((f) => {
		if (filteredObject[f.name]) {
			return false
		}
		filteredObject[f.name] = true
		return true
	})
	return filteredArray
}

export default function App() {
	let [objects, setObjects] = useState([])
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
	let newObj3 = {
		name: "heather",
		age: 7,
		tall: true,
	}
	let newObj4 = {
		name: "bob",
		age: 12,
		tall: false,
	}
	let newObjArray = [newObj0, newObj1, newObj2, newObj3, newObj4]
	/**
	 *  random whole number generator up to the lenght of newObjArray
	 * @returns
	 */
	let rng = () => {
		return Math.floor(Math.random() * newObjArray.length)
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
					setObjects([...objects, newObjArray[rng()]])
				}}
			>
				add rando
			</button>
			{/* clears all people from DOM */}
			<button
				onClick={(e) => {
					setObjects([])
				}}
			>
				clear all people
			</button>
			{/* will check for and delete duplicate objects*/}
			<button
				onClick={(e) => {
					setObjects(checkForDuplicates(objects))
				}}
			>
				there can only be one highlander
			</button>
		</>
	)
}
