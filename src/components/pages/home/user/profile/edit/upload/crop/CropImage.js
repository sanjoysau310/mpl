import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./utils/getCroppedImg";

export const CropImage = ({ image }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropChange = useCallback((crop) => {
    setCrop(crop);
  }, []);

  const handleZoomChange = useCallback((zoom) => {
    setZoom(zoom);
  }, []);

  const handleCropImage = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      // Do something with the cropped image, like upload it to a server or display it
      console.log("Cropped image:", croppedImage);
    } catch (e) {
      console.error("Error cropping image:", e);
    }
  };

  return (
    <div>
      {image && (
        <div>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3} // You can adjust the aspect ratio as needed
            onCropChange={handleCropChange}
            onZoomChange={handleZoomChange}
            onCropComplete={onCropComplete}
          />
          <button onClick={handleCropImage}>Crop Image</button>
        </div>
      )}
    </div>
  );
};
