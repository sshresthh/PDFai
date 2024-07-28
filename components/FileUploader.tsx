"use client";

import {useUpload} from "@/hooks/useUpload"
import { CircleArrowDownIcon, RocketIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUploader() {

  const {progress, status, fileId, handleUpload} = useUpload();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      await handleUpload(file)
    } else {
      // handleerror
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      }
    });
  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {/*Need to add a loading later*/}
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed 
          m-10 w-[90%] border-blue-600 text-blue-600 
          rounded-lg h-96 flex items-center justify-center 
          text-center 
          ${isFocused || isDragAccept ? "bg-blue-300" : "bg-blue-100"}
          `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDownIcon className="h-20 w-20 animate-bounce" />
              <p>
                Drag &rsquo;n&rsquo; drop some files here, or click to select
                files
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default FileUploader;
