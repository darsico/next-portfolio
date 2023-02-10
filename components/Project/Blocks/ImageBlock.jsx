import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ImageBlock = ({  block }) => {
  const { url, description } = block;
  const [isFullScreen, setIsFullScreen] = useState(false);

  const modalRef = useRef(null);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target) && window.innerWidth > 577) {
      setIsFullScreen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [modalRef]);

  const imageOnClickFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className="mb-2 md:mb-3">
        <figure style={{ position: 'relative', width: '100%', paddingBottom: '70%' }} onClick={imageOnClickFullScreen} className='w-3/4 cursor-pointer h-3/4' >
          <Image
            src={url}
            layout="fill"
            objectFit="contain" // Scale your image down to fit into the container
          />
        </figure>
        <figcaption className="flex justify-center pt-2 mb-2 text-xs text-gray-600">{description}</figcaption>
      </div>
      {
        isFullScreen && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75" >
            <div className="relative w-3/4 h-3/4 " ref={modalRef}>
              <Image
                src={url}
                layout="fill"
                objectFit="contain" 
              />
              <button className="absolute top-0 right-0 p-2 text-white" onClick={imageOnClickFullScreen}>X</button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ImageBlock;
