import React, { useState } from "react"

export default function ImageScroller() {
	let dogzillaImg = (
		<img src={require("./dogzilla.jpg")} alt="dogzilla img failed" />
	)
	let potatoImg = (
		<img src={require("./bigPotato.jpg")} alt="potato img failed" />
	)
	let cowImg = <img src={require("./angryCow.jpg")} alt="cow img failed" />
	let imageArray = [dogzillaImg, potatoImg, cowImg]
	// let currentImg = 0
	let [currentImg, setImg] = useState([])

	//logic for which img is being rendered
	let imgScroller = (num) => {
		if (currentImg > imageArray.length) {
			currentImg = 0
		} else if (currentImg < 0) {
			currentImg = imageArray.length
		} else {
			currentImg = currentImg + num
		}
	}
	//hacks to see the rerendering occur
	console.log("you have rerendered")
	return (
		<>
			<div>{JSON.stringify(currentImg)}</div>
			<div>
				<div>{imageArray[currentImg]}</div>
				<button
					onClick={(e) => {
						imgScroller(-1)
					}}
				>
					Left
				</button>
				<button
					onClick={(e) => {
						imgScroller(1)
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
