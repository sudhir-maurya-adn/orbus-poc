import Webcam from "react-webcam";

function WebcamImage(props) {
    const {webcamRef,handleMediaError,is_loading} = props;
    const videoConstraints = {
        facingMode: "user",
    };
    return (
        <Webcam
            audio={false}
            mirrored={true}
            style={{
                width : '100%',
                height : '100%',
                opacity : is_loading ? 0.5 : 1,
                transition: "opacity 0.1s ease",
            }}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMediaError = {handleMediaError}
        />
    );
}

export default WebcamImage;