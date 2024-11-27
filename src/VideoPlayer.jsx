
export default function VideoPlayer() {
    return (
        <>
            <div className="video">
                <video src="./video.mp4" autoPlay loop muted></video>
            </div>
        </>
    )
}