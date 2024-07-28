'use client'
import {useState} from 'react';

function useUpload() {
    const [progress, setProgress] = useState<number | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
}

export default useUpload;