"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import { Fragment } from "react";
import Modal from "./ModalPlay";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;

  capl?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      index: string;
    }}>;
}

  const ImageList = ({ images = [], capl = [] }: Props) => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  
  const handleImageClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl); // Guarda la URL del video en el estado
    setShowModal(true); // Muestra el modal
  };

  
 
  return (
    <div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-5 pb-10 ">
        
        {images?.map((image, index) => (
                     
          <Fragment key={image?._key}>
          <button
            className="sombracard bg-amber-600"
            onClick={() => handleImageClick(capl[index])}
          >           
            <Image
              src={urlFor(image).url()}
              alt={`Thumbnail ${image._key}`}
              width={400}
              height={100}
              className="w-full h-auto object-contain "
            /> 
            <h1 className="text-lg font-bold pb-2 items-center">CAP { (index + 1) < 10 ? `0${index + 1}` : index + 1 }</h1>
            <div className="overlay"> <h2 className="fontgr">‣ </h2> </div>
          </button>
          
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}
            videourl={selectedVideoUrl} children={undefined}>
          </Modal></Fragment>
        ))}


      </div>
        
    </div>
  );
};

export default ImageList;