import React from "react";

//create your first component
export class View extends React.Component {
	constructor() {
		super();

		this.audio = null;

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

	changeTrack(i) {
		this.setState({ currentIndex: i });
		this.audio.current.play();
		this.audio.current.pause();
		this.audio.current.skip();
	}

	play = i => {
		var url = this.state.songs[i].url;
		this.audio.src = url;
		this.audio.play();
		this.playButton.style.display = "none";
		this.pauseButton.style.display = "inline-block";
		this.setState({ currentIndex: i });
	};

	pause = () => {
		this.audio.pause();
		this.pauseButton.style.display = "none";
		this.playButton.style.display = "inline-block";
	};

	render() {
		const liList = this.state.songs.map((song, index) => {
			return (
				<li key={index} onClick={() => this.change(index)}>
					<span>{index + 1}</span>
					<span>{song.title}</span>
				</li>
			);
		});

		const audioPlayer = (
			<>
				<div>
					<button
						onClick={() => this.play(this.state.currentIndex - 1)}>
						<i className="fa fa-step-backward" />
					</button>
					<button
						ref={element => (this.playButton = element)}
						onClick={() => this.play(this.state.currentIndex)}>
						<i className="fa fa-play " aria-hidden="true" />
					</button>
					<button
						ref={element => (this.pauseButton = element)}
						onClick={() => this.pause()}>
						<i className="fa fa-pause" />
					</button>
					<button
						onClick={() => this.play(this.state.currentIndex + 1)}>
						<i className="fa fa-step-forward" />
					</button>
				</div>

				<audio contols ref={element => (this.audio = element)} />
			</>
		);

		return (
			<>
				{audioPlayer}
				<ul>{liList}</ul>
			</>
		);
	}
}
