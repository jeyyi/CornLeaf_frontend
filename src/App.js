import React, { useState, useRef } from "react";
import axios from "axios";
import Logo from './Images/Logo.png'

const App = () => {
  const [result, setResult] = useState("")
  const [model, setModel] = useState("Inception");
  const [isHidden, setIsHidden] = useState(true);
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    setIsHidden(false);
    const selectedFile = event.target.files[0];

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:8000/classify", formData)
      .then((response) => {
        // Handle successful upload
        setResult(response.data)
      })
      .catch((error) => {
        // Handle upload error
        console.error(error);
      });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100 py-20 w-full items-center">
        <div className="text-center h-full">
          <div className="max-w-md">
            <div className="flex flex-col p-5 justify-center items-center">
              <img src={Logo} className="w-1/3" alt="Logo"/>
              <h1 className="text-3xl lg:text-5xl font-bold">
                Cornleaf Disease Classifier
              </h1>
              <p className="py-6 text-sm lg:text-base">
                An online platform designed to assist farmers and agricultural
                experts in identifying and diagnosing diseases affecting corn
                plants based on their leaf symptoms. The website utilizes
                advanced machine learning techniques to analyze uploaded images
                of corn leaves and provide accurate disease classifications.
              </p>
            </div>
            {/* Start of classifier */}
            <div className="divider" />
            <p className="mb-5">Select Classifier</p>
            <div className="flex flex-1 justify-center mb-5">
              <div className="btn-group">
                <button
                  onClick={() => {
                    setModel("Inception");
                  }}
                  className={`btn bg-white text-black hover:btn-active border-gray-200 ${
                    model === "Inception" ? "btn-active" : ""
                  }`}
                >
                  Inception
                </button>
                <button
                  onClick={() => {
                    setModel("Xception");
                  }}
                  className={`btn bg-white text-black hover:btn-active border-gray-200 ${
                    model === "Xception" ? "btn-active" : ""
                  }`}
                >
                  Xception
                </button>
                <button
                  onClick={() => {
                    setModel("InceptionResnet");
                  }}
                  className={`btn bg-white text-black hover:btn-active border-gray-200 ${
                    model === "InceptionResnet" ? "btn-active" : ""
                  }`}
                >
                  Inception Resnet
                </button>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <h1
                className={`text-2xl text-red-500 font-semibold mb-5 ${
                  isHidden ? "hidden" : ""
                }`}
              >
                Classification: {result}
              </h1>
              <div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleFileSelect}
                >
                  Upload Photo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
