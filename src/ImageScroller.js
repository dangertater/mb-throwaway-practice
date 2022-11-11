import React, { useState } from "react"

export default function ImageScroller(props) {
	//defaultVal in below line is the value of props.defaultVal
	//----the '=2' inside of the destructuring curlys sets default value
	//----<ImageScroller /> will default to 2, <ImageScroller defaultVal={0} /> will use the props value of 0
	const { defaultVal = 2 } = props
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
	let [currentImg, setImg] = useState(defaultVal)
	// let [currentImg, setImg] = useState(
	// 	//the below line is saying 'if props.defaultVal is not equal to udnefined,
	// 	//----then use props.defaultVal, if it is undefined use 2'
	// 	props.defaultVal !== undefined ? props.defaultVal : 2
	// )
	//hacks to see the rerendering occur
	console.log("you have rerendered", currentImg)
	console.log("prop test", JSON.stringify(props))
	console.log()
	return (
		<>
			<div>
				<div>{imageArray[currentImg]}</div>
				{/* buttons to cycle through imageArray below */}
				<button
					onClick={(e) => {
						let minus1 = currentImg - 1
						setImg(minus1)
					}}
				>
					Left
				</button>
				<button
					onClick={(e) => {
						let plus1 = currentImg + 1
						setImg(plus1)
					}}
				>
					Right
				</button>
			</div>
		</>
	)
}
// const allAppStates = {}
// function customUseState(defaultVal, key) {
// 	// black magic is here to keep track of what compenent call etc...
// 	allAppStates[key] = defaultVal
// 	let setVal = (newVal) => {
// 		allAppStates[key] = newVal
// 	}
// 	return [allAppStates[key], setVal]
// }
