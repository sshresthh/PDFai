"use client";

import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function PlaceHolderDocument() {
  const router = useRouter(); // useRouter allows us to navigate to different pages
  const handleClick = () => {
    router.push("/dashboard/upload"); // Redirects to the upload page
  };
  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400"
    >
      <PlusCircleIcon className="h-16 w-16" />
      <p>Need to add a document</p>
    </Button>
  );
}
export default PlaceHolderDocument;
