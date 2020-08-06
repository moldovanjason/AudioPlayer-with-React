import React from "react";

//create your first component
export class View extends React.Component {
	constructor() {
		super();

		this.audio = null;

		this.state = {
			currentIndex: 0,
			songs: []
		};
	}

	componentDidMount() {
		this.pauseButton.style.display = "none";
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(songs => this.setState({ songs }));
	}

	changeTrack(i) {
		this.setState({ currentIndex: i });
		this.audio.current.play();
		this.audio.current.pause();
		this.audio.current.skip();
	}

	play = i => {
		var url = this.state.songs[i].url;
		this.audio.src = "https://assets.breatheco.de/apis/sound/" + url;
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
				<li
					// Make class {dynamic} with condional
					className={
						this.state.currentIndex == index ? "active" : "body"
					}
					key={index}
					onClick={() => this.play(index)}>
					<div className="row">
						<span className="number">{index + 1}</span>
						<span>{song.name}</span>
					</div>
				</li>
			);
		});

		const audioPlayer = (
			<>
				<div className="page">
					<button
						onClick={() => this.play(this.state.currentIndex - 1)}>
						<i className="fa fa-step-backward" />
					</button>
					<button
						ref={element => (this.playButton = element)}
						onClick={() => this.play(this.state.currentIndex)}>
						<i className="fa fa-play" aria-hidden="true" />
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

				<audio ref={element => (this.audio = element)} />
			</>
		);

		return (
			<div className="wholePage">
				{audioPlayer}
				<ul className="allRows">{liList}</ul>
			</div>
		);
	}
}
