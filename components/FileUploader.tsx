"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({
    onDrop,
  });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {/*Need to add a loading later*/}
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed m-10 w-[90%] border-blue-600 text-blue-600 rounded-lg h-96 flex items-center text-center`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col justify-center items-center">
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>
              Drag &rsquo;n&rsquo; drop some files here, or click to select
              files
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default FileUploader;
