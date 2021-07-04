import React from 'react';
import VideoItem from './VideoItem';

//const videoList = (props) => {
//destructing props object
const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return <div className="ui relaxed divded list">{renderedList}</div>;
};

export default VideoList;
