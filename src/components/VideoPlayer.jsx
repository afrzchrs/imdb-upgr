"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width:"300",
        height: "250"
    }

    const Player = () =>{
        return(
            <div className="hover:text-amber-600 fixed button-0 right-0 p-5 bottom-0">
                <button onClick={handleVideoPlayer} className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    <strong>X</strong>
                </button>
                <Youtube
                    videoId={youtubeId} 
                    onReady={(Event) => Event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    return isOpen ? <Player /> : <button onClick={handleVideoPlayer}
    className="hover:text-amber-600 font-semibold fixed button-5 right-9 w-32 bg-color-primary text-color-dark bottom-2"><strong>Watch Trailer</strong></button>
}

export default VideoPlayer