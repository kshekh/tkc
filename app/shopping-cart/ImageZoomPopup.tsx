"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
interface ImageZoomPopupProps {
  imageUrl: string;
  alt: string;
}

const ImageZoomPopup: React.FC<ImageZoomPopupProps> = ({ imageUrl, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when the popup is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the popup is closed
    }
  };

  return (
    <div className="relative flex-1">
      <div className="max-h-96 overflow-hidden rounded-md cursor-pointer" onClick={togglePopup}>
        <img src={imageUrl} alt={alt} />
      </div>
      <div className="bg-gradient-2 h-20 absolute rounded-b inset-x-0 bottom-0 flex justify-center items-center">
        <button
          onClick={togglePopup}
          className="h-11 text-base w-40 bg-white hover:bg-primary hover:text-white ease-in-out duration-200 shadow-2 border border-black/20 text-primary uppercase font-montserrat font-bold relative whitespace-nowrap z-10 rounded-md py-2 px-3 flex justify-center items-center"
        >
          Preview
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50">
          <div className="max-w-7xl max-h-full overflow-auto relative z-50 bg-white " >
            <img src={imageUrl} alt={alt} />
          </div>
          <div
            className="fixed inset-0 flex justify-end items-start p-5"
            onClick={togglePopup}
          >
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-white focus:outline-none"
            >
              <Icon
                name="cross"
                size={15}
                className="relative shrink-0 w-5 h-5"
                color="#fff"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoomPopup;
