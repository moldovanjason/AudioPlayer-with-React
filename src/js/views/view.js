import React from "react";

//create your first component
export class View extends React.Component {
	constructor() {
		super();
		this.state = {
			currentIndex: 0,
			songs: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
				},
				{
					title: "Thunder Cats",
					id: "thundercats",
					author: "Moonra",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Profesor",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
				}
			]
		};
	}

	render() {
		const liList = this.state.songs.map((song, index) => {
			return (
				<li key={index}>
					<span>{index + 1}</span>
					<span>{song.title}</span>
				</li>
			);
		});
		return (
			<>
				<audio controls>
					<source
						src="https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
						type="audio/mp3"
					/>
				</audio>
				<ul>{liList}</ul>
			</>
		);
	}
}
