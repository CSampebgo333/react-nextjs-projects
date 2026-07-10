const MediaDisplay = ({key, type, image, video, autoPlayVideo = true}) => {
    return (
        <div style={
            {
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        }>
            {type === "image" && (<img src={image} alt="Question" style={{aspectRatio: "16/9", objectFit: "cover", maxWidth: "100%", borderRadius: "0.5rem"}} />)}
            {type === "video" && (
                <video controls autoPlay={autoPlayVideo} muted={autoPlayVideo} style={{aspectRatio: "16/9", objectFit: "cover", maxWidth: "100%", borderRadius: "0.5rem"}}>
                    <source src={video} type="video/mp4" />
                </video>
            )}
        </div>
    );
}

export default MediaDisplay;