'use client';

import React, { useState } from 'react';

import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      <CldUploadWidget
        uploadPreset="eu8bauqc"
        onUpload={(result) => {
          if (result.event !== 'success') return;

          const info = result.info as CloudinaryResult;

          setPublicId(info.public_id);
        }}
        options={{ sources: ['local'], multiple: false }}
      >
        {({ open }) => (
          <button
            className="btn btn-primary"
            onClick={() => {
              open();
            }}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="Uploaded image"
        />
      )}
    </>
  );
};

export default UploadPage;
