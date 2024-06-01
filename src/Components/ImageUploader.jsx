import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center mt-8 p-4 border rounded-lg shadow-md bg-white max-w-md mx-auto">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {selectedImage && (
        <div className="w-full flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto max-w-xs rounded-lg border mb-4"
          />
          <button
            onClick={handleRemoveImage}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
