import React from 'react';

const VideoListItem = ({ video }) => {
	// const video = props.video;
	// console.log(video);


	return (
		<li className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<image className="media-object" />
				</div>
					<div className="media-body">
						<div className="media-heading">
						</div>
					</div>
			</div>
		</li>
	);
};

export default VideoListItem;