import React, { useEffect } from "react";


const VideoPlayer = (props) => {


	useEffect(() => {
		document.addEventListener("fullscreenchange", onFullScreenChange, false);
		document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
		document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
	}, [])

	const onFullScreenChange = () => {
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
		if (!fullscreenElement) {	
			const elem = document.getElementById('video_id');
			elem.src = 'http://techslides.com/demos/sample-videos/small.mp4';
		}
	}
	
  const onVideoController = (e, isHovering) => {
    if (isHovering) {
      e.target.play()
    } else if (!isHovering) {
      e.target.pause();
    }
  };

	const openFullscreen = (elem) => {
		if (window.innerHeight == window.screen.height) {
			// full screen 
			return;
		}
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen();
		}
		elem.src = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
		elem.play();
	}

  return (
    <div>		
      <video
        controls
        width="300"
        height="200"
        loop
        muted
        preload="auto"
        poster="https://picsum.photos/seed/picsum/200/300"
				id="video_id"
        onMouseEnter={(e) => onVideoController(e, true)}
        onMouseLeave={(e) => onVideoController(e, false)}
				onClick={(e) => openFullscreen(e.target)}
      >
				 <source
				src="https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif"
				type="video/mp4"
			></source>
        
      </video>
    </div>
  );
};

export default VideoPlayer;


// http://techslides.com/demos/sample-videos/small.mp4
// https://picsum.photos/seed/picsum/200/300