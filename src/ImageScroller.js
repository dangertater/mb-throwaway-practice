import React, { useState } from "react"
const allAppStates = {}
function customUseState(defaultVal, key) {
	// black magic is here to keep track of what compenent call etc...
	allAppStates[key] = defaultVal
	let setVal = (newVal) => {
		allAppStates[key] = newVal
	}
	return [allAppStates[key], setVal]
}

export default function ImageScroller() {
	//multiple images below
	let dogzillaImg = (
		<img src={require("./dogzilla.jpg")} alt="dogzilla img failed" />
	)
	let potatoImg = (
		<img src={require("./bigPotato.jpg")} alt="potato img failed" />
	)
	let cowImg = <img src={require("./angryCow.jpg")} alt="cow img failed" />
	//array of images
	let imageArray = [dogzillaImg, potatoImg, cowImg]
	let [currentImg, setImg] = useState([])

	//hacks to see the rerendering occur
	console.log("you have rerendered")

	return (
		<>
			<div>{JSON.stringify(currentImg)}</div>
			<div>
				<div>{imageArray[currentImg]}</div>
				<button
					onClick={(e) => {
						setImg(-1)
					}}
				>
					Left
				</button>
				<button
					onClick={(e) => {
						setImg(1)
					}}
				>
					Right
				</button>
			</div>
		</>
	)
}
// ;<img src={require("./dogzilla.jpg")} alt="dogzilla img failed"></img>

// for (let i = 0; i < imageArray.length; i++) {
//     if (i === imageArray.length + 1) {
//         i = 0
//     } else {
//         return i
//     }
// }
