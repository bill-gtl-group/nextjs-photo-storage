'use client';

import { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Upload() {
  const [blob, setBlob] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const response = await fetch(`/api/upload?filename=${file.name}`, {
      method: 'POST',
      body: file,
    });

    const newBlob = await response.json();
    setBlob(newBlob);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyles}>
        <input {...getInputProps()} ref={fileInputRef} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </div>
      {blob && (
        <div>
          <h2 className="text-xl font-bold mt-4">Uploaded File</h2>
          <a href={blob.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {blob.url}
          </a>
        </div>
      )}
    </div>
  );
}

const dropzoneStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
