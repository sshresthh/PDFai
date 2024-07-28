'use client'
import {useState} from 'react';
import {useUser} from '@clerk/nextjs';
import {useRouter} from "next/navigation";

export enum StatusText {
    UPLOADING = "Uploading file...",
    UPLOADED = "File uploaded successfully",
    SAVING = "Saving file to database...",
    GENERATING = "Gnerating the AI vector Embeddings...please wait for few seconds..."
}

export type Status = StatusText[keyof StatusText];

export function useUpload() {
    const [progress, setProgress] = useState<number | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    const {user} = useUser();
    const router = useRouter;
    const handleUpload = async(file:File) => {
        if (!file || !user) return;

    }
}

