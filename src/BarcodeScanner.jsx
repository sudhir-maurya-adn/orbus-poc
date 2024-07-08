import React,{useState} from 'react'
import Quagga from 'quagga';

const BarcodeScanner = () => {
  const [cameraStatus,setCameraStatus] = useState(false);
  const [code,setCode] = useState("");

  const initReader = () => {
    // setCameraStatus(true)
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#reader')
      },
      decoder : {
        readers : ["code_128_reader"]
      },
      locate : true,
    }, function(err) {
        if (err) {
          setCameraStatus(false)
          alert(err.message)
          console.log(err.message);
          return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        Quagga.onDetected((data) => {
          onDetected(data)
        })
    });
  }

  const stopReader = () => {
    setCameraStatus(false)
    Quagga.stop()
  }

  const onDetected = (data) => {
    setCode(data.codeResult.code)
    stopReader()
    alert(data.codeResult.code)
    console.log(data.codeResult.code)
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='bg-black h-44 text-center flex justify-center items-center'>
        <p className='text-white text-5xl uppercase'>Orbus</p>
      </div>
      <div className="flex items-center w-full h-full relative bg-black text-center">
        <div className={cameraStatus ? 'flex':'hidden'} id="reader"></div>
        <p className='text-white text-4xl font-semibold'>Click Scan to get started.</p>
        <div className="absolute bottom-0 items-center w-full md:h-28 h-28 py-5 px-8 bg-black rounded-t-lg flex justify-center">
          <button className='text-white bg-red-600 px-4 py-2 rounded-lg' onClick={initReader}>Scan Me</button>
        </div>
      </div>
    </div>
  )
}

export default BarcodeScanner