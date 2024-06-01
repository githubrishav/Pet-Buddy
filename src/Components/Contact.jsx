import React from "react";
import Camera from "./Camera";
import ImageUploader from "./ImageUploader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-8">Responsive Image Uploader</h1>
      <ImageUploader />
    </div>
  );
};

export default Contact;
