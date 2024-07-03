import Webcam from "react-webcam";

function WebcamImage(props) {
    const {webcamRef} = props;
    const videoConstraints = {
        width: 420,
        height: 420,
        facingMode: "user",
    };

    return (
        <div className="Container">
            <Webcam
                audio={false}
                mirrored={true}
                height={400}
                width={400}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            {/* <button onClick={capture}>Capture photo</button> */}
        </div>
    );
}

export default WebcamImage;