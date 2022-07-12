import { log } from "console";
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import "../App.css";

const videoConstraints = {
  width: 720,
  height: 360,
  facingMode: "user",
};

const Camera = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
      setImage(imageSrc);

      if (imageSrc.length > 0) {
        var a = document.createElement("a"); //Create <a>
        a.href = imageSrc; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
          console.log(imageSrc)
      }     
    }
  }, [webcamRef]);
  
  const [image, setImage] = useState('')

  return (
    <>
      {isCaptureEnable || (
        <button className="btn-cam" onClick={() => setCaptureEnable(true)}>
          Open Camera
        </button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>Close</button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={240}
              height={160}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              download={image}
            />
          </div>
          <button onClick={capture}>Chup</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              Again
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
};

export default Camera;
